import { Component } from '@angular/core';

@Component({
    selector: 'app-create-job',
    standalone: true,
    template: `
    <div class="container">
      <h2>Create Job Post</h2>
      <p>Job creation functionality coming soon.</p>
      <ul>
        <li>Hire full-time employee</li>
        <li>Hire contract resource</li>
        <li>Hire freelancer</li>
      </ul>
    </div>
  `,
    styles: ['.container { padding: 2rem; }']
})
export class CreateJobComponent { }
