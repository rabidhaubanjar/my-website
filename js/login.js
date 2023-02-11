function checkCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username and password match a set of credentials
    if(username=="") {
      alert("username must not be empty");
      return false;
  }else if(password==""){
      alert("password must be filed");
      return false;
  }else if (password.length<5){
      alert("Password must be more than 5 letter")
      return false;
  }else if(username=="admin" && password=="admin"){
      alert("Log in sucussfully");
      return true;
  }else{
    alert("use the given username and password")
    return false;
  }
  }
  