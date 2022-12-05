//global variables
var username, password, validInput;
document.getElementById("errMsg").style.color="red";

function storeInfo() {
    //Retrieving username and password from local storage
    username = localStorage.getItem("user");
    password = localStorage.getItem("sCode");
    confirmLogin(username, password);
}
//Function to check if username is valid
function checkUsername() {
    var valid = false;
    username = document.getElementById("usrname").value;
    //Setting username in local storage so that it can compared later for login
    localStorage.setItem("user", username);
    if (username.length > 0 && username.length < 6) {
        document.getElementById("errMsg").innerHTML="Your username must be at least 6 characters long";
        return valid;
    }else {
        valid = true;
        return valid;
    }
}
//Function to check if password is valid
function checkPassword() {
    document.getElementById("errMsg").innerHTML="";
    password = document.getElementById("pswrd").value;
    //Setting password in local storage so that it can compared later for login
    localStorage.setItem("sCode", password);
    var valid=false;
    if (password.length < 8) {
        document.getElementById("errMsg").innerHTML="Your password must be at least 8 characters long";
        return valid;
    }else {
        valid = true;
        return valid;
    }
}
//Function to check if both password entries are the same
function confirmPassword() {
    var temp = document.getElementById("pswrdRe").value;
    var confirm = false;
    if (temp != password) {
        alert("Passwords do not match.");
    }else {
        confirm = true;
    }
    signUp(confirm);
}
//Function to inform user if sign up is successful or not
function signUp (confirm) {
    document.getElementById("useless")==false;
    if (checkUsername()==true && checkPassword()==true && confirm==true) {
        alert("Sign up has been successful!");
        validInput = document.getElementById("submit").onclick=mainPage();
        return validInput;
    } else {
        alert("Sign up has not been sucessful. Please try again!");
    }
}

//Function to inform user if login is successful or not
function confirmLogin(user, secrtCode) {
    var correctInput = false;
    var check1 = document.getElementById("urname").value;
    var check2 = document.getElementById("pwrd").value;
    
    if (check1 == user && check2 == secrtCode) {
        alert("Login was successful!");
        correctInput = true;
    } else {
        alert("Your username/password combination is incorrect!");
    }
   logIn(correctInput);
}
//Function to redirect user to diary catalog page if login is successful
function logIn(correctInput) {
    if (correctInput==true){
        validInput = document.getElementById("submit").onclick=mainPage();
        return validInput;
    }
    else {
        alert("Please try again!");
    }
}
//Redirects user to diary catalog page if login or sign up is successful
function mainPage() {
    location.href="./index.html";
}



