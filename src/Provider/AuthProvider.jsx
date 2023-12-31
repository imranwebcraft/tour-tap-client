import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../Config/Firebase.config';
import useAxiosPublic from '../Hook/useAxiosPublic';

// -------CONTEXT--------//
export const AuthContext = createContext(null);
// ------PROVIDER---------//
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosPublic = useAxiosPublic();

	// -----------FIREBASE MANAGER ---------//
	// Cretae a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Login
	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// LogOut
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Google Sign in
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Update user profile
	const updateUserProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	// ---------- OBSERVER -------//
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('Observer', currentUser);
			setLoading(true);
			setUser(currentUser);
			// TODO: Make set user false individually for every stage that will come later
			if (currentUser) {
				const user = { email: currentUser?.email };
				axiosPublic.post('/jwt', user).then((res) => {
					if (res.data.token) {
						localStorage.setItem('token', res.data.token);
						setLoading(false);
					}
				});
			} else {
				localStorage.removeItem('token');
				setLoading(false);
			}
		});

		return () => {
			unsubscribe();
		};
	}, [axiosPublic]);

	const authInfo = {
		user,
		loading,
		createUser,
		logIn,
		logOut,
		googleSignIn,
		updateUserProfile,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
