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
$("#messageButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#messageFunc").show();
    // $("#messageFunc").show();
    $("#messageButton").css("color","rgb(24, 240, 89)");
    $("#musicButton,#timerButton").css("color","rgb(34, 36, 34)");
    $("#hr,#min,#dt,#showMessage,#musicPlayer,#clock").hide();
})
$("#musicButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#musicPlayer").show();
    $("#messageButton,#timerButton").css("color","rgb(34, 36, 34)");
    $("#musicButton").css("color","rgb(24, 240, 89)");
    $("#hr,#min,#dt,#messageFunc,#showMessage,#clock").hide();
})
$("#timerButton").click(function(){
    $("#showTime").text(currentdate.getHours()+":"+currentdate.getMinutes());
    $("#showTime,#clock,#play").show();
    $("#messageButton,#musicButton").css("color","rgb(34, 36, 34)");
    $("#timerButton").css("color","rgb(24, 240, 89)");
    $("#hr,#min,#dt,#messageFunc,#showMessage,#musicPlayer,#pause").hide();
})

$("#firstMsg").click(function(){
    $("#showMessage,#firstMsgShow").show();
    //$("#firstMsgShow").show();
    $("#messageFunc,#secondMsgShow,#thirdMsgShow").hide();
})

$("#secondMsg").click(function(){
    $("#showMessage,#secondMsgShow").show();
    // $("#secondMsgShow").show();
    $("#messageFunc,#firstMsgShow,#thirdMsgShow").hide();
})

$("#thirdMsg").click(function(){
    $("#showMessage,#thirdMsgShow").show();
    // $("#thirdMsgShow").show();
    $("#messageFunc,#secondMsgShow,#firstMsgShow").hide();
})
$("#play").click(function(){
    $("#play").hide();
    $("#pause").show();

    interval=window.setInterval(sw, 1000);
})
$("#pause").click(function(){
    $("#pause").hide();
    $("#play").show();
    window.clearInterval(interval);
})
$("#reload").click(function(){
    reset();
})
$("#flag").click(function(){
    $("#showLap").text(lap);
})
$("#home").click(function(){
    $("#home").css("color","rgb(24, 240, 89)");
    location.reload(true);
})


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

