/* eslint-disable no-console */
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

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

database.ref('expenses').on('value', snapShot => {
  const expenses = [];

  snapShot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
});

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });
