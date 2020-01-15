exports.Index = async function(request, response){
  let tempObj  =  {
    "mood": request.body.mood,
    "tired":    request.body.tired,
    "company": request.body.company,
  };

  console.log(tempObj);

  console.log(firebase.auth().currentUser);
  response.render('mood');
}
