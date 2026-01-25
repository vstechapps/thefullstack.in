export interface AppUser {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    role: 'RECRUITER' | 'LEARNER' | 'ADMIN';
    profileStatus: 'INCOMPLETE' | 'COMPLETE';
    active: boolean;
    verified: boolean;
    createdAt: any;
    updatedAt: any;

    // Recruiter specific
    orgName?: string;
    contactDetails?: string;
    address?: string;

    // Learner specific
    education?: string;
    experience?: string;
    technicalProfile?: string;
}
