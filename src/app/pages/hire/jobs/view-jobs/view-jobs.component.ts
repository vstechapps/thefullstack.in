import { Component } from '@angular/core';

@Component({
    selector: 'app-view-jobs',
    standalone: true,
    template: `
    <div class="container">
      <h2>My Jobs</h2>
      <p>List of posted jobs will appear here.</p>
    </div>
  `,
    styles: ['.container { padding: 2rem; }']
})
export class ViewJobsComponent { }
