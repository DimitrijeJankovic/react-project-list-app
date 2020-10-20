import firebase from 'firebase'
import 'firebase/firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBIc7Gr9eAA46vgOPbpUXNlSoPETU3zkRs",
    authDomain: "projects-list-react.firebaseapp.com",
    databaseURL: "https://projects-list-react.firebaseio.com",
    projectId: "projects-list-react",
    storageBucket: "projects-list-react.appspot.com",
    messagingSenderId: "387274553483",
    appId: "1:387274553483:web:ca0203ae930eb22bc17c8e"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase