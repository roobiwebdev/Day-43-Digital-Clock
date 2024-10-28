let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30; // 360/12
    let mm = day.getMinutes() * 6; // 360/60
    let ss = day.getSeconds() * 6; // 360/60

    hrs.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;


    // Digital Clock

    let Hour = document.getElementById("hour");
    let Minute = document.getElementById("minutes");
    let Second = document.getElementById("seconds");
    let AMPM = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    const am = h >= 12 ? "PM" : "AM";

    // Converting 24hrs clock to 12hrs

    if(h > 12){
        h = h-12
    }

    // Adding zero before number

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    Hour.innerHTML = h;
    Minute.innerHTML = m;
    Second.innerHTML = s;
    AMPM.innerHTML = am;
});


// Toggler
const body = document.body;
const toggler = document.querySelector("#checkbox");
const Clock = document.querySelector(".clock")

toggler.addEventListener("click", () => {
    body.classList.toggle("body-dark")
    Clock.classList.toggle("box-shadow")
})