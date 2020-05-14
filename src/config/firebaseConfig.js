import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC6I_sqQsiYZnUtIBTmXow0ao8HJ_T-DTM",
  authDomain: "shopping-cart-a6cc0.firebaseapp.com",
  databaseURL: "https://shopping-cart-a6cc0.firebaseio.com",
  projectId: "shopping-cart-a6cc0",
}

firebase.initializeApp(config);


export const ref = firebase.database().ref();
