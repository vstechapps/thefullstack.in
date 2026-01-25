import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user, User } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc, updateDoc, docData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private auth = inject(Auth);
    private firestore = inject(Firestore);

    // Observable of the current user from Firebase Auth, mapped to AppUser from Firestore with real-time updates
    user$: Observable<AppUser | null> = user(this.auth).pipe(
        switchMap(u => {
            if (!u) return of(null);
            const userDocRef = doc(this.firestore, 'users', u.uid);
            return docData(userDocRef, { idField: 'uid' }) as Observable<AppUser>;
        })
    );

    constructor() { }

    async loginWithGoogle(targetRole?: 'RECRUITER' | 'LEARNER'): Promise<void> {
        const provider = new GoogleAuthProvider();
        const credential = await signInWithPopup(this.auth, provider);
        const user = credential.user;

        if (user) {
            const userDocRef = doc(this.firestore, 'users', user.uid);
            const userSnapshot = await getDoc(userDocRef);

            if (!userSnapshot.exists() && targetRole) {
                // New user, create profile
                const newUser: AppUser = {
                    uid: user.uid,
                    email: user.email!,
                    displayName: user.displayName || '',
                    photoURL: user.photoURL || '',
                    role: targetRole,
                    profileStatus: 'INCOMPLETE',
                    active: false,
                    verified: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                await setDoc(userDocRef, newUser);
            }
        }
    }

    async logout() {
        await signOut(this.auth);
    }

    async updateUserProfile(uid: string, data: Partial<AppUser>) {
        const userDocRef = doc(this.firestore, 'users', uid);
        await updateDoc(userDocRef, { ...data, updatedAt: new Date() });
    }
}
