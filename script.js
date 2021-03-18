
//changing inner html to time format
function time(){ 
    let clock = document.getElementById("clock");
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    let meridan = "AM";

    //making clock standard not military

    if (hours >= 12){
        meridan = "PM";
    }

    if (hours > 12){
        hours = hours - 12;
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + meridan;
}
time();

const oneSecond = 1000;
setInterval(time, oneSecond);

let goodSurf = function(){
    let day = new Date();
    let hours = day.getHours();
    let surfStatement = document.getElementById("surf");

    if (hours >= 5 && hours <= 10){
        surfStatement.innerHTML = "Its Firing Get Out There!";
    }

    else if (hours >= 10 && hours <= 16){
        surfStatement.innerHTML = "Middle Of Day Its Windy!";
    }

    else if (hours >= 16 && hours <= 20){
        surfStatement.innerHTML = "Sunset Paddle Grab A Sweater!";
    }

    else{
        surfStatement.innerHTML = "Its Dark Go To Bed Grom!";
    }

}
goodSurf();

const tenMinutes = 100000;
setInterval(goodSurf, tenMinutes);