firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        window.location.href="tickets.html";
  
      }
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  