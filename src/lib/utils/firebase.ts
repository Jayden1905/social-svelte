// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {
	PUBLIC_API_KEY,
	PUBLIC_APP_ID,
	PUBLIC_AUTH_DOMAIN,
	PUBLIC_MEASUREMENT_ID,
	PUBLIC_MESSAGE_SENDER_ID,
	PUBLIC_PROJECT_ID,
	PUBLIC_STORAGE_BUCKET
} from '$env/static/public'

const firebaseConfig = {
	apiKey: `${PUBLIC_API_KEY}`,
	authDomain: `${PUBLIC_AUTH_DOMAIN}`,
	projectId: `${PUBLIC_PROJECT_ID}`,
	storageBucket: `${PUBLIC_STORAGE_BUCKET}`,
	messagingSenderId: `${PUBLIC_MESSAGE_SENDER_ID}`,
	appId: `${PUBLIC_APP_ID}`,
	measurementId: `${PUBLIC_MEASUREMENT_ID}`
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)
