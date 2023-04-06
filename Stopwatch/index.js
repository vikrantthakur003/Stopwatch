
const clock = document.querySelector(".clock");

let second = 0;
let minutes = 0;
let hours = 0;
let intervalId;
const starttimerwatch = ()=>{
    intervalId = setInterval(()=>{
        if(second < 59)
        {
            second++;
        }
        else if(minutes >=59)
        {
            hours++;
            minutes = 0;
        }
        else{ // seconds > 59
            second = 0;
            minutes++;
        }

       const sec = String(second).padStart(2,"0"); // two Zeros lgane ke liye
       const mint = String(minutes).padStart(2,"0");
       const hrs = String(hours).padStart(2,"0");

       clock.innerText = `${hrs}:${mint}:${sec}`;
    },1000)
}

const stoptimerwatch = () =>{
    clearInterval(intervalId);
}

const resetTimer = () =>{
    second = 0;
    hours = 0;
    minutes = 0;

    clearInterval(intervalId);
    clock.innerText = "00:00:00";

}