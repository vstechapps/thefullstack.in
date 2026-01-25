import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recruiter-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="dashboard" *ngIf="user$ | async as user">
      <header class="dashboard-header">
        <h1>Recruiter Dashboard</h1>
        <div class="user-info">
          <span>{{ user.displayName }}</span>
          <button (click)="logout()" class="logout-btn">Logout</button>
        </div>
      </header>
      
      <div *ngIf="user.role !== 'RECRUITER'" class="error-banner">
        <p>You are logged in as {{ user.role }}. Please login as a Recruiter.</p>
      </div>

      <ng-container *ngIf="user.role === 'RECRUITER'">
        <div *ngIf="user.profileStatus === 'INCOMPLETE'" class="warning-banner">
          <h3>Complete your Profile</h3>
          <p>Your profile is incomplete. You need to provide contact and organization details before you can post jobs.</p>
          <a routerLink="/hire/profile-setup" class="btn btn-warning">Complete Profile</a>
        </div>

        <div class="dashboard-content" *ngIf="user.profileStatus !== 'INCOMPLETE'">
           <!-- Actions -->
           <div class="card">
             <h3>Job Management</h3>
             <div class="actions">
                <a routerLink="/hire/jobs/create" class="btn btn-primary">Create Job Post</a>
                <a routerLink="/hire/jobs" class="btn btn-secondary">View My Jobs</a>
             </div>
           </div>
           
           <div class="card">
              <h3>Status</h3>
              <p>Account Status: <strong>{{ user.verified ? 'Verified' : 'Pending Verification' }}</strong></p>
              <p *ngIf="!user.verified">Verification is done by Administrator. You will be contacted shortly.</p>
           </div>
        </div>
      </ng-container>
    </div>
  `,
    styles: [`
    .dashboard { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
    .logout-btn { background: none; border: 1px solid #ccc; padding: 5px 10px; cursor: pointer; border-radius: 4px; margin-left: 10px; }
    .warning-banner { background: #fff3cd; color: #856404; padding: 1.5rem; border-radius: 4px; margin-bottom: 2rem; border: 1px solid #ffeeba; }
    .error-banner { background: #f8d7da; color: #721c24; padding: 1rem; border-radius: 4px; margin-bottom: 2rem; }
    .btn { display: inline-block; padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none; font-weight: 500; cursor: pointer; }
    .btn-warning { background: #ffc107; color: #212529; }
    .btn-primary { background: #007bff; color: white; margin-right: 10px; }
    .btn-secondary { background: #6c757d; color: white; }
    .card { border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; }
    h3 { margin-top: 0; }
  `]
})
export class RecruiterDashboardComponent {
    auth = inject(AuthService);
    router = inject(Router);
    user$ = this.auth.user$;

    async logout() {
        await this.auth.logout();
        this.router.navigate(['/']);
    }
}
