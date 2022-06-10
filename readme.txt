login
sada@gm.com, abcd123
sadabrata@yahoo.com, abcd123


// initialize firebase
const app = initializeApp(firebaseConfig)

// initialize firebase authentication and get reference to the service
export const firebaseAuth = getAuth(app)

createUserWithEmailAndPassword: Creates a new user account associated with the specified email address and password

signInWithEmailAndPassword: Asynchronously signs in using an email and password

signOut: Signs out the current user

onAuthStateChanged: For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object. This observer gets called whenever the user's sign-in state changes.

onAuthStateChanged: Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer.

onAuthStateChanged: Adds an observer for changes to the user's sign-in state.