function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
// means  var userEntered gets value of what user enters on form
//if statement checks length of entry, if 6 or over, has success.
  if( userEntered.length >= 6)
    {
    document.getElementById("usernameGroup").classList.add("has-success");
    }
    <script>
    console.log(made it)
    </script>
    //if userEntered length is under 6, usernameError takes over

  else
    {
  //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML="Bad username.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
    }
  //Turn the username items red
  if(userEntered.length < 6)
    {
    document.getElementById("usernameGroup").classList.add("has-error");
    }

  var passEntered = document.getElementById("pass").value;
  if(passEntered "password")
   {
    document.getElementById(passwordGroup).classList.add("has-error");
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered.text " ")
  {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
}
