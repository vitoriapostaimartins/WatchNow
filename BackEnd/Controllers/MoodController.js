
exports.Index = async function(request, response){
    response.render('mood')
};


  
  exports.Action = async function(request, response) {
    var email = request.body.email;
    var pass = request.body.pass;
  
  
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function() {
      // app.locals.user = true;
      response.render('recommendation');
    })
    .catch(function(error){
        response.render('login', {
        });
      console.log("Error with code:", error.code, "\nWith message:", error.message);
    });
  
  
  }
  