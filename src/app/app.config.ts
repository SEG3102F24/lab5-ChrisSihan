import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment.development";
import {getAuth, provideAuth} from "@angular/fire/auth";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"employeeapp-85d69","appId":"1:545646317564:web:d269602b586efd7a1c6c79","storageBucket":"employeeapp-85d69.appspot.com","apiKey":"AIzaSyAsLKP87NWzaRhWBtkX4-hs0xOoqMgKIXo","authDomain":"employeeapp-85d69.firebaseapp.com","messagingSenderId":"545646317564","measurementId":"G-14T9XNGTKY"})), 
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())]
};
