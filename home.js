var lockedHome=JSON.parse(localStorage.getItem("Locked"));
var data=JSON.parse(localStorage.getItem("user"));


var sign = document.getElementById("Sign");
var signIn = document.getElementById("Signin");
var welcome=document.getElementById("Welcome");
var userName=document.getElementById("nameUser");
var cartt= document.getElementById("showcart");

if(lockedHome==true){
    sign.style.display="none";
    signIn.style.display="none";
    welcome.style.display="block";
    cartt.style.display="block";
    userName.innerText=data.username;
   


}




