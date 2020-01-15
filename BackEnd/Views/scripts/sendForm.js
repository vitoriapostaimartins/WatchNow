var formData = {
    "mood": $('#mood').val(),
    "tired": $('#tired').val(),
    "people": $('#people').val()
}

function setsForm() {
    // Then listen to the form submit event
    $('moodform').submit(function (evt) {
        evt.preventDefault(); //Prevent the default form submit action

        // You have formData here and can do this:
        firebase.initializeApp(config); //Initialize your firebase here passing your firebase account config object
        firebase.auth().onAuthStateChanged(function (user) {
            thisuser = db.collection('users').doc(user.uid)
            thisuser.doc("form").set(formdata);
        })
    }
  
})