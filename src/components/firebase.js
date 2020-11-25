import firebase from 'firebase'
const firebaseApp =  firebase.initializeApp({
apiKey: "AIzaSyCe8frwvsRCjfiJ144rW4ac-1UfTPAkKVM",
authDomain: "mr-black-76a8f.firebaseapp.com",
databaseURL: "https://mr-black-76a8f.firebaseio.com",
projectId: "mr-black-76a8f",
storageBucket: "mr-black-76a8f.appspot.com",
messagingSenderId: "439192776455",
appId: "1:439192776455:web:b0795c81e6c486eead1fa2"}
)

const db = firebase.firestore()

export {db}