import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-learner-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="profile-container">
       <h2>Complete Your Learner Profile</h2>
       <form [formGroup]="form" (ngSubmit)="submit()">
         <div class="form-group">
           <label for="contactDetails">Contact Details *</label>
           <input id="contactDetails" formControlName="contactDetails" placeholder="Email or Phone" class="form-control" />
         </div>
         <div class="form-group">
           <label for="education">Education Profile *</label>
           <textarea id="education" formControlName="education" class="form-control" placeholder="Degree, University, Year"></textarea>
         </div>
         <div class="form-group">
           <label for="experience">Company Experience</label>
           <textarea id="experience" formControlName="experience" class="form-control" placeholder="Role, Company, Duration"></textarea>
         </div>
         <div class="form-group">
           <label for="technicalProfile">Technical Profile *</label>
           <textarea id="technicalProfile" formControlName="technicalProfile" class="form-control" placeholder="Skills (e.g., Angular, Firebase, Node.js)"></textarea>
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
    textarea.form-control { height: 80px; }
    .btn { padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; }
    .btn-primary { background: #28a745; color: white; }
    .btn:disabled { background: #ccc; cursor: not-allowed; }
  `]
})
export class LearnerProfileComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private router = inject(Router);
    loading = false;

    form = this.fb.group({
        contactDetails: ['', Validators.required],
        education: ['', Validators.required],
        experience: [''],
        technicalProfile: ['', Validators.required]
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
                this.router.navigate(['/learn/dashboard']);
            }
        } catch (err) {
            console.error(err);
            alert('Error updating profile');
        } finally {
            this.loading = false;
        }
    }
}
