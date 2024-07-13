
    function starclick(event){
        event.preventDefault()
    var nameee=document.getElementById("user")
    var email=document.getElementById("email")
    var sub=document.getElementById("subject")
    var massege=document.getElementById("massege")
    if(nameee.value.length<5){
    nameee.style.border="red solid 3px";
    }else{
    nameee.style.border=" green solid 3px";
    }
    var cheack =email.value.includes("@")
    switch(cheack){
    case true :{
        email.style.border="green solid 3px";
        break;
    }case false: {
        email.style.border="red solid 3px";
    } 
    }
    if(sub.value.length<7){
        sub.style.border="red solid 3px";
    }else{
    sub.style.border=" green solid 3px";
    }
    
    if(massege.value.length<20){
        massege.style.border="red solid 3px";
    }else{
        massege.style.border="green solid 3px";
    }
    alert("Thank you for submitting")
    }