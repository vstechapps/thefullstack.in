import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-learn-landing',
    standalone: true,
    imports: [RouterLink],
    template: `
    <div class="learn-landing">
      <h1>Master Fullstack Development</h1>
      <p>Upskill with curated courses and assessments.</p>
      <div class="cta-buttons">
        <a routerLink="/learn/register" class="btn btn-primary">Join as Learner</a>
        <a routerLink="/learn/dashboard" class="btn btn-secondary">Login</a>
      </div>
    </div>
  `,
    styles: [`
    .learn-landing { 
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
    .btn-primary { background: #28a745; color: white; }
    .btn-secondary { background: #6c757d; color: white; }
  `]
})
export class LearnLandingComponent { }
