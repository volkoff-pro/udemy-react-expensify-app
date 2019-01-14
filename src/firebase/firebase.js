import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBGmAjqDT80lQmkhaR0oc2q8cnyLrPQ_7c',
  authDomain: 'expensify-24d97.firebaseapp.com',
  databaseURL: 'https://expensify-24d97.firebaseio.com',
  projectId: 'expensify-24d97',
  storageBucket: 'expensify-24d97.appspot.com',
  messagingSenderId: '221547109606'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
