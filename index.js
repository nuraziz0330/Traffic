let red = document.querySelector(".red");
let yellow =document.querySelector(".yellow");
let green = document.querySelector(".green");
let number = document.querySelector(".number");

let red1 = document.querySelector(".red1");
let yellow1 =document.querySelector(".yellow1");
let green1 = document.querySelector(".green1");
let number1 = document.querySelector(".number1");
let light1 = document.querySelector(".light1")

let timer = 15;



function getTimer(){
    timer--;
    let redbg = red.style.backgroundColor
    let grBg = green.style.backgroundColor
    let red1bg = red1.style.backgroundColor
    let gr1Bg = green1.style.backgroundColor
    let light1Bg = light1.style.backgroundColor
    let number1Bg = number1.style.color

    if(timer === 0){
        red.style.backgroundColor = redbg === "black" ? "red" : "black"
        green.style.backgroundColor = grBg === "green" ? "black" : "green"
        red1.style.backgroundColor = red1bg === "red" ? "black" : "red"
        green1.style.backgroundColor = gr1Bg === "black" ? "green" : "black"
        light1.style.backgroundColor = light1Bg === "red" ? "green" : "red"
        number1.style.color =number1Bg === "red" ? "green" : "red"
        timer = 15
    }

    number.innerHTML = timer
    number1.innerHTML = timer

}

setInterval(getTimer, 1000)
