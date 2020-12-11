let myTime = setInterval(getTime, 1000);

//get the current date and time and save it to a variable

//get all the elements you need to display
let day;
let date;
let month;
let year;
let longDate = document.getElementById("longDate");

let timeHours = document.getElementById("timeHours");
let timeMinutes = document.getElementById("timeMinutes");
let timeSeconds = document.getElementById("timeSeconds");
let longTime = document.getElementById("time");

let timerMinutes = document.getElementById("timerMinutes");
let timerSeconds = document.getElementById("timerSeconds");
let timerMilli = document.getElementById("timerMilli");
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")


//day
//get day of the week and break the name of the day


function getTime() {
    let dateTime = new Date();

    let dotw = dateTime.getDay()
    switch (dotw) {
        case 0:
            day = "Sunday"
            break
        case 1:
            day = "Monday"
            break
        case 2:
            day = "Tuesday"
            break
        case 3:
            day = "Wednesday"
            break
        case 4:
            day = "Thursday"
            break
        case 5:
            day = "Friday"
            break
        case 6:
            day = "Saturday"
            break
    }
    //date
    date = dateTime.getDate();

    //month 
    let moty = dateTime.getMonth()
    switch (moty) {
        case 0:
            month = "January"
            break
        case 1:
            month = "February"
            break
        case 2:
            month = "March"
            break
        case 3:
            month = "April"
            break
        case 4:
            month = "May"
            break
        case 5:
            month = "June"
            break
        case 6:
            month = "July"
            break
        case 7:
            month = "August"
            break
        case 8:
            month = "September"
            break
        case 9:
            month = "October"
            break
        case 10:
            month = "November"
            break
        case 11:
            month = "December"
            break
    }

    //year
    year = dateTime.getFullYear()

    //full date
    longDate.innerHTML = day + " " + date + " " + month + " ," + year

    //time
    //hours
    timeHours.innerHTML = dateTime.getHours();
    //minutes
    timeMinutes.innerHTML = dateTime.getMinutes()< 10? "0" +dateTime.getMinutes(): dateTime.getMinutes();
    //seconds
    timeSeconds.innerHTML = dateTime.getSeconds()< 10? "0" +dateTime.getSeconds(): dateTime.getSeconds();
}

function freezeTime(){
    const timerTime = new Date()
    
    const startMin = timerTime.getMinutes();
    const startSec = timerTime.getSeconds();
    const startMilli = timerTime.getMilliseconds();
    return {startMin, startSec, startMilli};
}

let startMin = 0;
let startSec = 0;
let startMilli = 0;

function startTimer() {
    startMilli++;
    if (startMilli === 1000) {
        startMilli = 0;
        startSec++;
    }
    if (startSec === 60) {
        startSec = 0;
        startMin++;
    }
    timerMinutes.innerHTML = startMin < 10 ? "0"+startMin : startMin;
    timerSeconds.innerHTML = startSec < 10 ? "0"+startSec : startSec;
    timerMilli.innerHTML = startMilli ;
}
function myTimer(){
    setInterval(startTimer, 1)
}
startBtn.addEventListener("click", myTimer)

function stopTimer(event){


    startMin = 0;
    startSec = 0;
    startMilli = 0;

    timerMinutes.innerHTML = startMin;
    timerSeconds.innerHTML = startSec;
    timerMilli.innerHTML = startMilli;
    
}


resetBtn.addEventListener("click", stopTimer(myTimer))