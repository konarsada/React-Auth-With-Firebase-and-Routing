import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAku-Sg2Tp3TX6GaVjGFN3x-bB9m_BAPNY",
    authDomain: "react-authentication-5a3ec.firebaseapp.com",
    projectId: "react-authentication-5a3ec",
    storageBucket: "react-authentication-5a3ec.appspot.com",
    messagingSenderId: "155038349431",
    appId: "1:155038349431:web:6fd1f35482d955c224ae72"
}

// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize firebase authentication and get reference to the service
export const firebaseAuth = getAuth(app)