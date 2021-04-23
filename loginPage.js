
function validationLogin(){
  var username = document.getElementById("l-user-name").value;
  var password = document.getElementById("l-pass-word").value;
  var password_limit = 8;
  var username_limit = 5;
  var user_name = /^[a-z0-9_-]{3,16}$/i ;
  var pass_word = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ ;
  count = 0;
  if(user_name.test(username) != true){
    document.getElementById("l-error-username").style.visibility = "visible";
    return false;
  }
  if(pass_word.test(password) != true){
    document.getElementById("l-error-password").style.visibility = "visible";
    return false;
  }
  if(user_name.test(username) == true || user_name.test(password) == true){
    if(user_name.test(username) == true){
      document.getElementById("l-error-username").style.visibility = "hidden";
    }
    else if(user_name.test(password) == true){
      document.getElementById("l-error-password").style.visibility = "hidden";
    }
    else if(user_name.test(username) == true && user_name.test(password) == true){
      return true;
    }
  }
}
function validationSignUp(){
  var username = document.getElementById("s-user-name").value;
  var password = document.getElementById("s-pass-word").value;
  var emailID = document.getElementById("email-id").value;
  var password_limit = 8;
  var username_limit = 5;
  var user_name = /^[a-z A-Z]/ ;
  var pass_word = /[a-z A-Z 0-9]/ ;
  var clg_email = /^([a-z A-Z 0-9 \_]+)@thapar.edu$/ ;
  var normal_email = /^([a-z A-Z 0-9 \.-]+)@(^[a-z A-Z 0-9 \.]+).([a-z]{2,10}).([a-z]{2,8})?$/ ;

  if(username.trim() !="" && username.trim().length() >= username_limit && user_name.test(username)){
    return true;
  }
  else if(password.trim() != "" && password.trim().length() >= password_limit && pass_word.test(password)){
    return true;
  }
  else if(emailID.trim() != "" && normal_email.test(emailID)){
    return true;
  }
  else{
    return false;
  }
}
function validationPhone(){
  var phoneNumber = document.getElementById("phone-number");
  var pn = /^[7-9]\d{9}$/ ;
  
  if(pn.test()){
    return true;
  }
  else{
    return false;
  }
}
// -------------------------------------------
// function validationLogin(){
//   var username = document.getElementById("l-user-name").value;
//   var password = document.getElementById("l-pass-word").value;
//   var password_limit = 8;
//   var username_limit = 5;
//   var user_name = /^[a-z0-9_-]{3,16}$/i ;
//   var pass_word = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ ;
//   count = 0;
//   switch(user_name.test(username))
//   {
//     case true:
//       document.getElementById("l-error-username").style.visibility = "hiddden";
//       var user = true;
//       break;
//     case false:
//       document.getElementById("l-error-username").style.visibility = "visible";
//       var user = false;
//       break;
//     default:
//       alert("Error");
//       break;
//   }
//   switch(pass_word.test(password))
//   {
//     case true:
//       document.getElementById("l-error-username").style.visibility = "hidden";
//       var pass = true;
//       break;
//     case false:
//       document.getElementById("l-error-password").style.visibility = "visible";
//       var pass = false;
//       break;
//     default:
//       alert("Error");
//       break;
//   }
//   if(user == true && pass == true){
//     return true;
//   }
//   else{
//     return false;
//   }
// }