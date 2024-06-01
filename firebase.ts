import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvZPU3zm4ZA4wsb9WoUL-eg9s_BKT7kRw',
  authDomain: 'webskitters-product-tracker.firebaseapp.com',
  projectId: 'webskitters-product-tracker',
  storageBucket: 'webskitters-product-tracker.appspot.com',
  messagingSenderId: '325930266788',
  appId: '1:325930266788:web:edbe996777d630d1aa7631',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
const storage = firebase.firestore();
export {firebase, auth, storage};
