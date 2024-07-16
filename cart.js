var getData = JSON.parse(localStorage.getItem("Cards"));

var lockedHome=JSON.parse(localStorage.getItem("Locked"));
var data=JSON.parse(localStorage.getItem("user"));
var  hadencart1=document.getElementById("hadencart1")
var  hadencart2=document.getElementById("hadencart2")
var  hadencart3=document.getElementById("hadencart3")
var  hadencart4=document.getElementById("hadencart4")
var userName=document.getElementById("nameUser");
if(lockedHome==true){

hadencart1.style.display="none";
hadencart2.style.display="none";
hadencart3.style.display="none";
hadencart4.style.display="none";
userName.innerText=data.username;
}
function getcart(){
    for(var i=0;i<getData.length;i++){
        draw(getData[i]);
    }
}


document.getElementById("NumOfitems").innerHTML = `<div><h4>items (${getData.length})</h3></div>`;


function draw(data){
    var div = document.createElement("div");
    var img= document.createElement("img");
    var title=document.createElement("h3");
    var des=document.createElement("p");
    var price = document.createElement("h4");
    var but = document.createElement("button");
    
    //div.classList="card";
    img.src=data.image;
    title.innerText=data.title;
    des.innerText=data.discribtion;
    price.innerText=data.price;
    but.innerText="remove";

    but.onclick=function(){
        getData.splice(vvvvvvvvvvvvvvvvvcc,1);
        div.innerHTML="";
        localStorage.setItem("Cards",JSON.stringify(getData));
        document.getElementById("NumOfitems").innerHTML = `<div><h4>items (${getData.length})</h3></div>`;
        
    }
 
    div.append(img,title,des,price,but);
    var Div = document.getElementById("prod");
    Div.appendChild(div);
}
