import { Routes } from '@angular/router';
import { LearnLandingComponent } from './learn-landing/learn-landing.component';
import { LearnerRegisterComponent } from './learner-register/learner-register.component';
import { LearnerProfileComponent } from './learner-profile/learner-profile.component';
import { LearnerDashboardComponent } from './learner-dashboard/learner-dashboard.component';
import { CoursesComponent } from './courses/courses.component';

export const LEARN_ROUTES: Routes = [
    { path: '', component: LearnLandingComponent },
    { path: 'register', component: LearnerRegisterComponent },
    { path: 'profile-setup', component: LearnerProfileComponent },
    { path: 'dashboard', component: LearnerDashboardComponent },
    { path: 'courses', component: CoursesComponent },
];
