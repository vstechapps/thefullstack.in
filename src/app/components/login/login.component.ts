import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">×</button>
        
        <h2>Welcome Back</h2>
        <p>Login to access your account</p>

        <div class="login-options">
           <!-- Recruiter Login -->
            <button (click)="loginWithGoogle('RECRUITER')" class="google-btn recruiter">
              <span class="icon">Example G</span> Continue as Recruiter
            </button>

            <!-- Learner Login -->
             <button (click)="loginWithGoogle('LEARNER')" class="google-btn learner">
              <span class="icon">Example G</span> Continue as Learner
            </button>

            <div class="divider">OR</div>

            <!-- Generic Login (detects existing user) -->
            <button (click)="loginWithGoogle()" class="google-btn">
              <span class="icon">Example G</span> Sign in with Google
            </button>
        </div>
        
        <p class="terms">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  `,
    styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(5px);
    }
    .modal-content {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      width: 100%;
      max-width: 400px;
      position: relative;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      animation: slideUp 0.3s ease-out;
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 15px;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #aaa;
      line-height: 1;
    }
    .close-btn:hover { color: #333; }
    h2 { margin-top: 0; margin-bottom: 0.5rem; color: #333; }
    p { color: #666; margin-bottom: 2rem; }
    .login-options { display: flex; flex-direction: column; gap: 1rem; }
    .google-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      background: white;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.2s;
    }
    .google-btn:hover { background: #f8f9fa; }
    .google-btn.recruiter { border-color: #007bff; color: #007bff; }
    .google-btn.recruiter:hover { background: #e7f1ff; }
    .google-btn.learner { border-color: #28a745; color: #28a745; }
    .google-btn.learner:hover { background: #e8f5e9; }
    .icon { margin-right: 10px; font-weight: bold; }
    .divider { margin: 10px 0; color: #999; font-size: 0.9rem; }
    .terms { font-size: 0.8rem; margin-top: 1.5rem; margin-bottom: 0; color: #999; }
  `]
})
export class LoginComponent {
    @Output() close = new EventEmitter<void>();
    private auth = inject(AuthService);

    closeModal() {
        this.close.emit();
    }

    async loginWithGoogle(role?: 'RECRUITER' | 'LEARNER') {
        try {
            await this.auth.loginWithGoogle(role);
            this.closeModal();
        } catch (err) {
            console.error(err);
            // Ideally show an error message in the UI
        }
    }
}
