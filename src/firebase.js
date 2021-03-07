import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyC0KkT4PYpIHjRtzc4h3KATtoSbW1qaksk',
	authDomain: 'web-negosyo.firebaseapp.com',
	projectId: 'web-negosyo',
	storageBucket: 'web-negosyo.appspot.com',
	messagingSenderId: '548307081250',
	appId: '1:548307081250:web:6394e97da6d47fd49e127b',
	measurementId: 'G-869J347LV0',
});

export const auth = app.auth();
export default app;
