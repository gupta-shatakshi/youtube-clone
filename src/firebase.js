import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyALJsAJfBTAzdOiiDreNfjeHaitGFdISdA",
    authDomain: "y-o-u-t-u-b-e-c-l-o-n-e.firebaseapp.com",
    projectId: "y-o-u-t-u-b-e-c-l-o-n-e",
    storageBucket: "y-o-u-t-u-b-e-c-l-o-n-e.appspot.com",
    messagingSenderId: "897157422278",
    appId: "1:897157422278:web:ee8aa8c35b1fa2d68ccbc7"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()