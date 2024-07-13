var lockedHome=JSON.parse(localStorage.getItem("Locked"));
var data=JSON.parse(localStorage.getItem("user"));

var signAbout=document.getElementById("signAbout");  //button in about us page
var signupAbout=document.getElementById("signupAbout");//button in about us page

if(lockedHome==true){
    signAbout.style.display="none";
    signupAbout.style.display="none";
}