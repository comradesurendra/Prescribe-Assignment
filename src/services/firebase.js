import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAE5P8Z949HSzF4NeRzHIZgk8aBaYh6zVE",
  authDomain: "prescription-f9a90.firebaseapp.com",
  databaseURL: "https://prescription-f9a90.firebaseio.com"
}

firebase.initializeApp(config)
export const auth = firebase.auth
export const db = firebase.database()