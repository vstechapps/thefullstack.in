import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pillars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pillars.html',
  styleUrls: ['./pillars.scss']
})
export class PillarsComponent {
  pillars = [
    {
      id: 'learn',
      icon: '🎓',
      title: 'Learn',
      subtitle: 'For Freshers & Learners',
      description: 'Outcome-driven learning paths focused on building real-world projects.',
      features: ['Project-first approach', 'Capstone projects', 'Build developer profile'],
      color: 'from-blue-500 to-cyan-500' // Tailwind-ish logic, but using SCSS variables
    },
    {
      id: 'hire',
      icon: '🤝',
      title: 'Hire',
      subtitle: 'For Recruiters',
      description: 'Find trusted talent based on verified skills and actual project delivery.',
      features: ['Verified skills', 'Proof-based hiring', 'Faster shortlisting'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'work',
      icon: '💼',
      title: 'Work',
      subtitle: 'Freelance Projects',
      description: 'Access skill-matched freelance opportunities and build your reputation.',
      features: ['Real delivery reputation', 'Safer collaboration', 'Skill-matched projects'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];
}
