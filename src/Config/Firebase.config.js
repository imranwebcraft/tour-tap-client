import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBjyGy5e7110GnhZhzMRvFRg5Ck3T9HkIQ',
	authDomain: 'tour-tap.firebaseapp.com',
	projectId: 'tour-tap',
	storageBucket: 'tour-tap.appspot.com',
	messagingSenderId: '852174895739',
	appId: '1:852174895739:web:734ccc268fb0b4e47400de',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
