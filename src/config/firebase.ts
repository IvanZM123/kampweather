// Import firebase
import firebase from "firebase/app";

import { environments } from "./environments";

firebase.initializeApp({
     apiKey: environments.FIREBASE_API_KEY,
     authDomain: environments.FIREBASE_AUTH_DOMAIN,
     projectId: environments.FIREBASE_PROYECT_ID,
     storageBucket: environments.FIREBASE_STORAGE_BUCKET,
     messagingSenderId: environments.FIREBASE_MESSAGING_SENDER_ID,
     appId: environments.FIREBASE_APP_ID,
     measurementId: environments.FIREBASE_MEASUREMENT_ID
});

export default firebase;
