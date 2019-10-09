// creating object of Date

let currentdate=new Date();
const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month=['January','February','March','April','May','June','July','August','September','October','November','December'];

let seconds=0;
let minutes=0;
let hours=0;

let displaySeconds=0;
let displayMinutes=0;
let displayHours=0;

let interval = null;
let lap = "00:00:00"; 

// When the screen opens

$(document).ready(function(){
    $("#showTime").hide();
    //function tm(){
    if(currentdate.getHours()<10){
        $("#hr").text("0"+currentdate.getHours());
    }
    else{
        $("#hr").text(currentdate.getHours());
    }
    if(currentdate.getMinutes()<10){
        $("#min").text("0"+currentdate.getMinutes());
    }
    else{
        $("#min").text(currentdate.getMinutes());
    }
    $("#dt").text(day[currentdate.getDay()]+", "+month[currentdate.getMonth()]+" "+currentdate.getDate());
//}
//window.setInterval(tm,1000);
    $("#messageFunc,#showMessage,#musicPlayer,#clock").hide();
})

// On clicking the message buttton

$("#messageButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#messageFunc").show();
    // $("#messageFunc").show();
    $("#messageButton").css("color","rgb(24, 240, 89)");
    $("#musicButton,#timerButton").css("color","rgb(34, 36, 34)");
    $("#hr,#min,#dt,#showMessage,#musicPlayer,#clock").hide();
})

// On clicking the Music buttton

$("#musicButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#musicPlayer").show();
    $("#messageButton,#timerButton").css("color","rgb(34, 36, 34)");
    $("#musicButton").css("color","rgb(24, 240, 89)");
    $("#hr,#min,#dt,#messageFunc,#showMessage,#clock").hide();
})

// On clicking the Timer buttton


$("#timerButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#clock,#play").show();
    $("#messageButton,#musicButton").css("color","rgb(34, 36, 34)");
    $("#timerButton").css("color","rgb(24, 240, 89)");
    $("#hr,#min,#dt,#messageFunc,#showMessage,#musicPlayer,#pause").hide();
})

// On clicking the first message buttton


$("#firstMsg").click(function(){
    $("#showMessage,#firstMsgShow").show();
    //$("#firstMsgShow").show();
    $("#messageFunc,#secondMsgShow,#thirdMsgShow").hide();
})

// On clicking the second message buttton

$("#secondMsg").click(function(){
    $("#showMessage,#secondMsgShow").show();
    // $("#secondMsgShow").show();
    $("#messageFunc,#firstMsgShow,#thirdMsgShow").hide();
})

// On clicking the third message buttton

$("#thirdMsg").click(function(){
    $("#showMessage,#thirdMsgShow").show();
    // $("#thirdMsgShow").show();
    $("#messageFunc,#secondMsgShow,#firstMsgShow").hide();
})

// On clicking the play buttton in stopwatch

$("#play").click(function(){
    $("#play").hide();
    $("#pause").show();

    interval=window.setInterval(sw, 1000);
})
// On clicking the pause buttton in stopwatch

$("#pause").click(function(){
    $("#pause").hide();
    $("#play").show();
    window.clearInterval(interval);
})
// On clicking the reload buttton in stopwatch


$("#reload").click(function(){
    reset();
})

// On clicking the lap buttton in stopwatch

$("#flag").click(function(){
    $("#showLap").text(lap);
})
// On clicking the home buttton 

$("#home").click(function(){
    $("#home").css("color","rgb(24, 240, 89)");
    location.reload(true);
})

// Stop watch function

function sw(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes=0;
            hours++;
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds=seconds
    }
    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes=minutes;
    }
    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours=hours;
    }

    $("#showStopWatch").text(displayHours+":"+displayMinutes+":"+displaySeconds);
    lap=displayHours+":"+displayMinutes+":"+displaySeconds;
}

//reset function of stop watch

function reset(){
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    lap = "00:00:00";
    $("#showStopWatch").text("00:00:00");
    $("#showLap").text("00:00:00");
    $("#play").show();
    $("#pause").hide();
}

