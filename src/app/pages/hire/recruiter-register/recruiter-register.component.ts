import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recruiter-register',
    standalone: true,
    template: `
    <div class="register-container">
      <h2>Register as Recruiter</h2>
      <p>Join TheFullstack to find top talent.</p>
      <button (click)="registerWithGoogle()" class="google-btn">
        Sign up with Google
      </button>
    </div>
  `,
    styles: [`
    .register-container { 
      padding: 4rem 2rem; 
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
    }
    .google-btn {
      padding: 10px 20px;
      font-size: 1.1rem;
      cursor: pointer;
      background: #4285F4;
      color: white;
      border: none;
      border-radius: 4px;
      margin-top: 1rem;
    }
    .google-btn:hover { background: #357ae8; }
  `]
})
export class RecruiterRegisterComponent {
    private auth = inject(AuthService);
    private router = inject(Router);

    async registerWithGoogle() {
        try {
            await this.auth.loginWithGoogle('RECRUITER');
            this.router.navigate(['/hire/dashboard']);
        } catch (err) {
            console.error(err);
            alert('Login failed. Please try again.');
        }
    }
}
