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
    timeHours.innerHTML = dateTime.getHours();
    timeMinutes.innerHTML = dateTime.getMinutes()< 10? "0" +dateTime.getMinutes(): dateTime.getMinutes();
    timeSeconds.innerHTML = dateTime.getSeconds()< 10? "0" +dateTime.getSeconds(): dateTime.getSeconds();
}
//timer variables
let timerMinutes = document.getElementById("timerMinutes");
let timerSeconds = document.getElementById("timerSeconds");
let timerHunds = document.getElementById("timerHunds");
timerMinutes.innerHTML = "00";
timerSeconds.innerHTML = "00";
timerHunds.innerHTML = "00";
let body = document.getElementsByTagName('body') 
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let resetBtn = document.getElementById("reset")
let lapBtn = document.getElementById("lap")
let ol = document.getElementById('lapOl')
let startTiming;
let startMin = 0;
let startSec = 0;
let startHunds = 0;
let lapArray =[];

//timer functions
function incrementTimer() {
    startHunds++;
    if (startHunds === 10) {
        startHunds = 0;
        startSec++;
    }
    if (startSec === 60) {
        startSec = 0;
        startMin++;
    }
    timerMinutes.innerHTML = startMin < 10 ? "0"+startMin : startMin;
    timerSeconds.innerHTML = startSec < 10 ? "0"+startSec : startSec;
    timerHunds.innerHTML = startHunds ;
}
function startTimer(){
    document.body.style.backgroundImage = 'url(Resources/BlossomRunnning.gif)'
    startTiming = setInterval(incrementTimer, 100)
}
function stopTimer() {
    document.body.style.backgroundImage = 'url(Resources/freeze.gif)'
    clearInterval(startTiming);
}
function resetTimer(){
    
    lapArray.splice(0,lapArray.length)
    while (lapOl.firstChild) {
        lapOl.removeChild(lapOl.firstChild);
    }
    stopTimer();
    startMin = 0;
    startSec = 0;
    startHunds = 0;

    timerMinutes.innerHTML = "00";
    timerSeconds.innerHTML = "00";
    timerHunds.innerHTML = "00";
    resetBody();
    
}function resetBody(){
    document.body.style.backgroundImage = 'url(Resources/startingLine.gif)'
}
function runningBody(){
    document.body.style.backgroundImage = 'url(Resources/BlossomRunnning.gif)'
}
function getLap(){
    let newLap = `${startMin}:${startSec}:${startHunds}`
    lapArray.push(newLap)
    return lapArray;
    
}
function showLaps(){
    if (lapArray.length < 10) {
      document.body.style.backgroundImage = 'url(Resources/lap.gif)'
      getLap();
      let thisLap = lapArray[lapArray.length - 1];
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(thisLap));
      lapOl.appendChild(li);
      setTimeout(runningBody,1200)
      return lapArray;
    }
}
//event handlers
startBtn.addEventListener("click", startTimer)
startBtn.addEventListener("touchmove",startTimer)
stopBtn.addEventListener("click", stopTimer)
stopBtn.addEventListener("touchmove", stopTimer)
resetBtn.addEventListener("click", resetTimer)
resetBtn.addEventListener("touchmove", resetTimer)
lapBtn.addEventListener("click", showLaps)
lapBtn.addEventListener("touchmove", showLaps)