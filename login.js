

function validateForm() {
    let x = document.forms["Login"]["name"].value;
    let i = document.forms["Login"]["password"].value;

    if (x == "" && i == "") {
        alert("Username and Password must be filled out!");
        return false;
      }

    if (x == "") {
      alert("Username must be filled out!");
      return false;
    }

    if (i == "") {
      alert("Password must be filled out!");
      return false;
    }
  }

 function getInfo() {
    let x = document.forms["Login"]["name"].value;
    let i = document.forms["Login"]["password"].value;
    if (x == "haroon" && i == "Tamjid_sucks") {
      
        document.getElementById('Click').style.display='block';
      
        return true;
    }
    else if(x != "haroon") {
        alert("Incorrect Password or Username")
        return false;
    }
  }

  function Redirect() {
    
    alert("Access Granted!")
    start()

}



function RedirectionOfTheDirection() {
  
  start()
}

/*function getInfo(){

    var username = document.getElementById("username").value
    var username = document.getElementById("password").value
    if(username == "haroon"){
        alert("BAD")
    }

  window.location = "MainHome.html"

      setTimeout(() => {  
      start(); 
  }, 2000);
}
*/

function start() {
  document.getElementById('Click').style.display='block';
}