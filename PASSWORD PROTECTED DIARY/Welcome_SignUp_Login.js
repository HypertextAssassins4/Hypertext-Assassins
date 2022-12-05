var username, password, validInput;
document.getElementById("errMsg").style.color="red";

function storeInfo() {
    username = document.getElementById("usrname").value;
    password = document.getElementById("pswrd").value;
    confirmLogin(username, password);
}

function checkUsername() {
    var valid = false;
    username = document.getElementById("usrname").value;
    if (username.length > 0 && username.length < 6) {
        document.getElementById("errMsg").innerHTML="Your username must be at least 6 characters long";
        return valid;
    }else {
        valid = true;
        return valid;
    }
}
function checkPassword() {
    document.getElementById("errMsg").innerHTML="";
    password = document.getElementById("pswrd").value;
    var valid=false;
    if (password.length < 8) {
        document.getElementById("errMsg").innerHTML="Your password must be at least 8 characters long";
        return valid;
    }else {
        valid = true;
        return valid;
    }
}
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

function logIn(correctInput) {
    if (correctInput==true){
        validInput = document.getElementById("submit").onclick=mainPage();
        return validInput;
    }
    else {
        alert("Please try again!");
    }
}

function mainPage() {
    location.href="./index.html";
}

