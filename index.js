// const saveBtn = document.querySelector(".save-btn");
// const msg1 = document.querySelector(".msg1");
// const msg2 = document.querySelector(".msg2");

// saveBtn.addEventListener("click", startClock);

// function startClock() {
//     let date = new Date();
//     let houre = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     minutes = formatTime(minutes);
//     seconds = formatTime(seconds);

//     let time = houre + ":" + minutes + ":" + seconds;
//     msg1.textContent = time;

//     setInterval(startClock, 1000)
// }

// function formatTime (value) {
//     if (value <10) {
//         value = "0" + value;
//     }
//     return value;
// }
////----------------------------------------------------------------------

// js code

// let hour = document.getElementById("hour");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// function displayTime() {
//     let date = new Date();

//     let houre = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     let hRotation = 30*houre + minutes/2;
//     let mRotation = 6*minutes;
//     let sRotation = 6*seconds;

//     hour.style.transform = `rotate(${hRotation}deg)`;
//     min.style.transform = `rotate(${mRotation}deg)`;
//     sec.style.transform = `rotate(${sRotation}deg)`;

// }

// setInterval(displayTime, 1000)
////-----------------------------------------------------

function clock() {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let period = document.getElementById("period");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = ampm;
}
clock();
setInterval(clock, 1000);
