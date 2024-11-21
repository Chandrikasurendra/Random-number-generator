const container=document.querySelector(".container")
const head=document.createElement("h1")
const breakk=document.createElement("br")

function Random(){
    let num=Math.floor(Math.random()*5);
    //container.appendChild(breakk)
    head.innerHTML=`Generated number:${num}`;
    container.appendChild(head)
}

