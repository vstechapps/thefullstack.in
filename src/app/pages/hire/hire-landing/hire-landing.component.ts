import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hire-landing',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="hire-landing">
      <h1>Hire Top Talent</h1>
      <p>Connect with the best fullstack developers.</p>
      <div class="cta-buttons">
        <a routerLink="/hire/register" class="btn btn-primary">Register as Recruiter</a>
        <a routerLink="/hire/dashboard" class="btn btn-secondary">Login</a>
      </div>
    </div>
  `,
    styles: [`
    .hire-landing { 
      padding: 4rem 2rem; 
      text-align: center; 
      max-width: 800px; 
      margin: 0 auto; 
    }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    p { font-size: 1.25rem; color: #666; margin-bottom: 2rem; }
    .cta-buttons { display: flex; gap: 1rem; justify-content: center; }
    .btn { 
      padding: 0.75rem 1.5rem; 
      text-decoration: none; 
      border-radius: 4px; 
      font-weight: bold; 
    }
    .btn-primary { background: #007bff; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
  `]
})
export class HireLandingComponent { }
