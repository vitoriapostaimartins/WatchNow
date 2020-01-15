function userIsNew(){
    var thisemail;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection('users').doc(user.uid).get().
        then(function(userinfo){
            // thisemail = userinfo.data().email;
            // console.log(thisemail);
            window.location = "index.ejx";
        })
        db.collection('users').get().then(function(userssnap){
            console.log(userssnap);
            userssnap.forEach(function (eachuser) {
                var email = eachuser.data().email;
                console.log(email);
                if(email == thisemail){
                    // console.log(email)
                    // return false;
                    window.location = "home.ejx";
                } 
            })
        })
        
    })  
    return true;
}