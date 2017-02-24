$(document).ready(function() {

/* ---- Variable Declarations ---- */

// Message and picture to display
var currentPic = "";
var currentMsg = "";

// Times of day to change pictures
var morning = 11;
var afternoon = 17;
var evening = 24;
var partyTime = 17;
var napTime = 15;
var lunchTime = 12;
var wakeupTime = 7;
var earlyMorning = 5;
var midnight = 24;
var noon = 12;

// Interval for updating the clock
var oneSecond = 1000;

// Variables used in the "Set Test Time" function
var isTest = false;
var testTime = 0;

// Variable used in partyTimeBtn
var isPartyTime = false;

// Variables used to get current time in hours
var dateTime = new Date();
var currentTime = dateTime.getHours();

// Variables used to access HTML elements
var timeEventJS = document.getElementById("timeEvent");
var picEventJS = document.getElementById("lolcat");
var partyTimeBtn = document.getElementById("partyTimeButton");
var wakeUpTimePick = document.getElementById("wakeUpTimeSelector");
var lunchTimePick = document.getElementById("lunchTimeSelector");
var napTimePick = document.getElementById("napTimeSelector");
var testTimePick = document.getElementById("testTimeSelector");

/* ---- End Variable Declarations ---- */

/* ---- function setWakeUpTime() ---- */
// Called when user picks a new wake-up time from selector

var setWakeUpTime = function() {
  wakeupTime = wakeUpTimePick.value;
  console.log("Wakeup Time: " + wakeupTime + "; current Time: " + currentTime);
}

/* ---- function setLunchTime() ---- */
// Called when user picks a new lunch time from selector

var setLunchTime = function() {
  lunchTime = lunchTimePick.value;
  console.log("Lunch Time: " + lunchTime + "; current Time: " + currentTime);
}

/* ---- function setNapTime() ---- */
// Called when user picks a new nap time from selector

var setNapTime = function() {
  napTime = napTimePick.value;
  console.log("Nap Time: " + napTime + "; current Time: " + currentTime);
}

/* ---- function setTestTime() ---- */
// Called when user picks a new value from the Set Test Time selector
// If user chooses a time, set the currentTime variable to that time
// If user chooses "Current Time", this ends the test and resets the currentTime 
// and testTime variables
// NOTE: These variables are not used to set the clock

var setTestTime = function() {
  
  // Get new value
  testTime = testTimePick.value;
  
  // If testing, reset current time to test time
  if (testTime > 0) {
    currentTime = Number(testTime);
  } else {
    // else set currentTIme to actual time and reset test time to zero
    var curTime = new Date();
    currentTime = curTime.getHours();
    testTime = 0;
  }
}

/* ---- function showCurrentTime ---- */
// Displays the current time on the clock
// Note: This is not affected by the test time set by the user.
// It always displays the correct current time

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var curTime = new Date();

  var hours = curTime.getHours();
  var minutes = curTime.getMinutes();
  var seconds = curTime.getSeconds();
  var meridian = "AM";

  // Set hours 
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;

};

/* ---- function updatePicture ---- */
// Updates the picture and message displayed based on the current or
// test time and the variables controlling nap time, lunch time, 
// party time, morning, afternoon, etc.

var updatePicture = function() {
  testTime = Number(testTime); 
  currentTime = Number(currentTime);
  
  // If the user is testing the time functionality,
  // set currentTime = testTime for displaying picture and message
  if ((testTime > 0) && (testTime != currentTime)) {
    currentTime = testTime;
  };

  
  if (currentTime == wakeupTime) {
    currentMsg = "I IZ WAKING UP!";
    currentPic = "http://www.vickigreer.com/lolclock/img/wake-up-kitty.jpg";
  
  } else if (currentTime == lunchTime) {
    currentMsg = "IZ NOM-NOM TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/lunchtime-kitty.jpg";
  
  } else if (currentTime == napTime) {
    currentMsg = "IZ NAP TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/nap-time-kitty.jpg";
  
  } else if (currentTime == partyTime) {
    currentMsg = "IZ PARTEE TIME!";
    currentPic = "http://www.vickigreer.com/lolclock/img/party-kitty.jpg";
  
  } else if (currentTime == midnight) {
    currentMsg = "IZ ASLEEP!";
    currentPic = "http://www.vickigreer.com/lolclock/img/sleepy-kitty.jpg";
  
  } else if (currentTime < earlyMorning) {
    currentMsg = "IZ ASLEEP!";
    currentPic = "http://www.vickigreer.com/lolclock/img/sleepy-kitty.jpg";
  
  } else if (currentTime < wakeupTime) {
    currentMsg = "I IZ STILL SLEEPING! GO AWAY!!";
    currentPic = "http://www.vickigreer.com/lolclock/img/still-sleeping-kitty.jpg";
  
  } else if (currentTime <= morning) {
    currentMsg = "IZ WORK TIME!"
    currentPic = "http://www.vickigreer.com/lolclock/img/alert-kitty.jpg";
  
  } else if (currentTime < afternoon) {
    currentMsg = "IZ AFTERNOON!";
    currentPic = "http://www.vickigreer.com/lolclock/img/afternoon-kitty.png";
  
  } else if (currentTime <= evening) {
    currentMsg = "IZ MY TIME - EVENING!";
    currentPic = "http://www.vickigreer.com/lolclock/img/evening-kitty.jpg";
  
  } else {
    currentMsg = "I IZ CONFUSED! Don't know what time it is!  Good day anyway!";
    currentPic = "http://www.vickigreer.com/lolclock/img/confused-kitty.jpg";
  };
  // END IF
  
  // Update text and picture
  timeEventJS.innerText = currentMsg;
  picEventJS.src = currentPic;
  showCurrentTime();
};

/* ---- function setPartyTime ---- */
// Changes the variable isPartyTime and changes the color of the Party Time button
var setPartyTime = function() {
  
  if (isPartyTime == false) {
    isPartyTime = true;
    currentTime = partyTime;
    partyTimeBtn.style.backgroundColor = "#ffbe33";
    partyTimeBtn.style.color = "teal";

  } else {
    isPartyTime = false;
    currentTime = dateTime.getHours();
    partyTimeBtn.style.backgroundColor = "#222";
    partyTimeBtn.style.color = "white";
  }
}

// Set up event listeners
wakeUpTimePick.addEventListener("change", setWakeUpTime);
lunchTimePick.addEventListener("change", setLunchTime);
napTimePick.addEventListener("change", setNapTime);
testTimePick.addEventListener("change", setTestTime);
partyTimeBtn.addEventListener("click", setPartyTime);
wakeupTime = wakeUpTimePick.value;
napTime = napTimePick.value;
lunchTime = lunchTimePick.value;

// Update the picture and message, which will also update the clock
updatePicture();

// Set how often the clock should be updated
setInterval(updatePicture, oneSecond);

});