// event Listener = listen to specific events to create interactive web pages
//                  events: click,mouseover,mousout etc
//                  .addEventListener(event,callback)


const myBox =document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click",(event) => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "ouch ho ra hy 🤕"   
});
myBtn.addEventListener("mouseover",(event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Warning 😩"   
});
myBtn.addEventListener("mouseout",(event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 🙈"   
});

