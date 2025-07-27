let burger = document.querySelector(".burger");
burger.addEventListener("click" , work);

let show = document.querySelector("nav ul");

function work (){
    burger.classList.toggle("active");
    show.classList.toggle("show");
}