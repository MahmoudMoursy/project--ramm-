var data = JSON.parse(localStorage.getItem("user"));

function signin(event){
    event.preventDefault();
var username = document.getElementById("username");
var pass = document.getElementById("password");

if(data.username==username.value){
    username.style.border="green solid 3px"
}
else{
    username.style.border="red solid 3px"
    return ;
}
if(data.password==pass.value){
    pass.style.border="green solid 3px"
}
else{
    pass.style.border="red solid 3px"
    return;
}
localStorage.setItem("Locked",true)
location.assign("index.html");

}