import admin from 'firebase-admin';

import { AccountSettings } from './firebase-config';

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(AccountSettings)
    });
}

export const db = admin.firestore();