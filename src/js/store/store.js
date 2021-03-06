import thunk from 'redux-thunk'; 
//import firebase from 'firebase/app'; 
import { createStore, applyMiddleware, compose } from 'redux';
//import { reduxFirestore, getFirestore } from 'redux-firestore';
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import rootReducer from "../reducers/rootReducer"; 
//import config from '../firebase/config'

const rrfConfig = {
	attachAuthIsReady: true,
	userProfile: 'users',
	enableLogging: true,
	useFirestoreForProfile: true  
}
//firebase.initializeApp(config) 

const store = createStore(
	rootReducer
	//compose(
		//applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		//reduxFirestore(firebase),
		//eactReduxFirebase(firebase, rrfConfig)
	//)
)

export default store;