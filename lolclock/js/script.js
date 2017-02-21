var currentPic = "";
var earlyMorning = 8;
var morning=11;
var afternoon=17;
var evening=24;
var partyTime = 17;
var napTime = 14;
var lunchTime = 12;
var wakeupTime = 7;
var noon = 12;
var dateTime = new Date();
var currentTime = dateTime.getHours();
var timeEventJS = document.getElementById("timeEvent");
var picEventJS = document.getElementById("lolcat");
//TESTING ONLY
//currentTime = prompt("Enter the hour to test in military time", "");

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
    console.log("The time is " + clockTime);
};


var updateClock = function() {

  if (currentTime < wakeupTime) {
    currentMsg = "I IZ STILL SLEEPING! GO AWAY!!";
    currentPic = "http://www.vickigreer.com/lolclock/img/still-sleeping-kitty.jpg";
  }
  else if (currentTime == wakeupTime) {
    currentMsg = "I IZ WAKING UP!";
    currentPic = "http://www.vickigreer.com/lolclock/img/wake-up-kitty.jpg";
  }
  else if (currentTime <= morning) {
	currentMsg = "IZ WORK TIME!"
    currentPic = "http://www.vickigreer.com/lolclock/img/alert-kitty.jpg";
  }
  else if (currentTime == lunchTime) {
    currentMsg = "IZ NOM-NOM TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/lunchtime-kitty.jpg";
  }
  else if (currentTime == napTime) {
    currentMsg = "IZ NAP TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/nap-time-kitty.jpg";
  }
  else if (currentTime < afternoon) {
	currentMsg = "IZ AFTERNOON!";
    currentPic = "http://www.vickigreer.com/lolclock/img/alert-kitty.jpg";
  }
  else if (currentTime == partyTime) {
    currentMsg = "IZ PARTEE TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/party-kitty.jpg";
  }
  else if (currentTime < evening) {
	currentMsg = "IZ MY TIME - EVENING!";
    currentPic = "http://www.vickigreer.com/lolclock/img/evening-kitty.jpg";
  }
  else {
	currentMsg = "I IZ CONFUSED! Don't know what time it is!  Good day anyway!";
    currentPic = "http://www.vickigreer.com/lolclock/img/confused-kitty.jpg";
  }
  // END IF
  timeEventJS.innerText = currentMsg;
  picEventJS.src = currentPic;
  console.log("The current time is " + currentTime + " o'clock");
  console.log(currentMsg);
  showCurrentTime();
};

var oneSecond = 1000;
updateClock();
setInterval(updateClock, oneSecond);

