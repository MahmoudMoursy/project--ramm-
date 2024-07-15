
var locked= localStorage.setItem("Locked",false)
function signup(event){
event.preventDefault()
var user=document.getElementById("name")
var email=document.getElementById("email")
var pass=document.getElementById("password")
var passs=document.getElementById("password2")

if(user.value.length<5){
    user.style.border="red solid 3px"
    return ;

}else{
    user.style.border="green solid 3px"
   
}
var che=(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)

if (che.test(email.value)) {
  email.style.border = 'green solid 3px';
}
 else {
  email.style.border = 'red solid 3px';
  return ;

}
    var cheacke =(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
   if(cheacke.test(pass.value)){
     pass.style.border="green solid 3px";
   }
        else {
            pass.style.border="red solid 3px";
        } 

        if((pass.value==passs.value) && (pass.value!=="")){
             passs.style.border="green solid 3px";
             console.log((pass.value!==""));
        }else{
             passs.style.border=" red solid 3px";
             return ;
        }

    var userData={
        username:user.value,    
        email:email.value,
        password:pass.value
    }
    localStorage.setItem("user",JSON.stringify(userData));
    location.assign("signin.html")

}
