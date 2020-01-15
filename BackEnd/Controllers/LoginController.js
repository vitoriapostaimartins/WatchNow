const firebase = require('firebase');

const a = require('firebase/storage');
var config = {
  apiKey: "AIzaSyBtyLYr0BOYZb-tWUnp3x5ljSC53MXUDiQ",
  authDomain: "watchnow-40e0e.firebaseapp.com",
  databaseURL: "https://watchnow-40e0e.firebaseio.com",
  projectId: "watchnow-40e0e",
  storageBucket: "watchnow-40e0e.appspot.com",
  messagingSenderId: "348187794554",
  appId: "1:348187794554:web:c47710846e775fa805efc3"

};
var fb = firebase.initializeApp(config);
var db = firebase.firestore();


exports.Index = async function(request, response){
    response.render('login')
};

exports.Action = async function(request, response) {
  var email = request.body.email;
  var pass = request.body.pass;


  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then(function() {
    // app.locals.user = true;
    response.redirect('/mood');
  })
  .catch(function(error){
      response.render('login', {
      });
    console.log("Error with code:", error.code, "\nWith message:", error.message);
  });


}
