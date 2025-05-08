// Инициализация Firebase
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBLIubyI_VRb6O2zzNEITFS7X-ys-fW6DI',
  authDomain: 'cka3ku-mupohy.firebaseapp.com',
  projectId: 'cka3ku-mupohy',
  appId: '1:556680336729:web:f0e99b9a1ccba9611be848',
  measurementId: 'G-7GVESXHD4V',
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
