import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-recruiter-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="profile-container">
       <h2>Complete Your Profile</h2>
       <form [formGroup]="form" (ngSubmit)="submit()">
         <div class="form-group">
           <label for="orgName">Organization Name *</label>
           <input id="orgName" formControlName="orgName" class="form-control" />
         </div>
         <div class="form-group">
           <label for="contactDetails">Contact Details *</label>
           <input id="contactDetails" formControlName="contactDetails" placeholder="Email or Phone" class="form-control" />
         </div>
         <div class="form-group">
           <label for="address">Address *</label>
           <textarea id="address" formControlName="address" class="form-control"></textarea>
         </div>
         <button type="submit" class="btn btn-primary" [disabled]="form.invalid || loading">
           {{ loading ? 'Saving...' : 'Save Profile' }}
         </button>
       </form>
    </div>
  `,
    styles: [`
    .profile-container { max-width: 600px; margin: 2rem auto; padding: 2rem; border: 1px solid #ddd; border-radius: 8px; }
    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
    .form-control { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
    textarea.form-control { height: 100px; }
    .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; }
    .btn-primary { background: #007bff; color: white; }
    .btn:disabled { background: #ccc; cursor: not-allowed; }
  `]
})
export class RecruiterProfileComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private router = inject(Router);

    loading = false;

    form = this.fb.group({
        orgName: ['', Validators.required],
        contactDetails: ['', Validators.required],
        address: ['', Validators.required]
    });

    async submit() {
        if (this.form.invalid) return;
        this.loading = true;
        try {
            const user = await firstValueFrom(this.auth.user$);
            if (user) {
                await this.auth.updateUserProfile(user.uid, {
                    ...this.form.value as any,
                    profileStatus: 'COMPLETE'
                });
                this.router.navigate(['/hire/dashboard']);
            }
        } catch (err) {
            console.error(err);
            alert('Error updating profile');
        } finally {
            this.loading = false;
        }
    }
}
