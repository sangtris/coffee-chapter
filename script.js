document
.getElementById("beginBtn")
.addEventListener("click",()=>{

document
.getElementById("journey")
.scrollIntoView({
behavior:"smooth"
});

});

function toggleMessage(){

const msg =
document.getElementById("message");

if(msg.style.display==="block"){

msg.style.display="none";

}else{

msg.style.display="block";

}

}

/* Expand timeline cards */

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});
