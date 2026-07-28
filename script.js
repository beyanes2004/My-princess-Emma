function showLetter(){

document.getElementById("letter")
.classList.remove("hidden");

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}


// create floating hearts

let container=document.querySelector(".floating-hearts");

setInterval(()=>{

let heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=
(5+Math.random()*5)+"s";


container.appendChild(heart);


setTimeout(()=>{

heart.remove();

},8000);


},500);
