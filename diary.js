function makePassword(){
  var username=prompt("Create Username","")
  var password=prompt("Create password","")
  var confirmPassword=prompt("Confirm password","")
  if (password != confirmPassword){
    alert("The passwords do not match")
  }
 }
function unlock(){
  var unlockUsername=prompt("What is your username?")
  var ulock=prompt("What is the password?")
  if(ulock==inputPassword && unlockUsername==inputUsername){
    alert("The diary has been unlocked")
  }else{
    alert("This is not the password")
  }
 }
