import { Routes } from '@angular/router';
import { HireLandingComponent } from './hire-landing/hire-landing.component';
import { RecruiterRegisterComponent } from './recruiter-register/recruiter-register.component';
import { RecruiterProfileComponent } from './recruiter-profile/recruiter-profile.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { CreateJobComponent } from './jobs/create-job/create-job.component';
import { ViewJobsComponent } from './jobs/view-jobs/view-jobs.component';

export const HIRE_ROUTES: Routes = [
    { path: '', component: HireLandingComponent },
    { path: 'register', component: RecruiterRegisterComponent },
    { path: 'profile-setup', component: RecruiterProfileComponent },
    { path: 'dashboard', component: RecruiterDashboardComponent },
    { path: 'jobs/create', component: CreateJobComponent },
    { path: 'jobs', component: ViewJobsComponent },
];
