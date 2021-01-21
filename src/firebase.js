import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDZ2c7MhuQ8OzvHJczy6P8VpRZ9MaSBuOE",
    authDomain: "idobatakaigi1-e2a16.firebaseapp.com",
    projectId: "idobatakaigi1-e2a16",
    storageBucket: "idobatakaigi1-e2a16.appspot.com",
    messagingSenderId: "324612535738",
    appId: "1:324612535738:web:0be8b0e763f91928bb5983"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ nickname, text }) => {
    messagesRef.push({nickname, text});
}