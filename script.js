let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let date = document.getElementById("date");


setInterval(printTime,1000);

function printTime(){
    let t = new Date();
    hours.innerText = t.getHours()<10? "0" + t.getHours() : t.getHours();
    mins.innerText = t.getMinutes()<10? "0" + t.getMinutes() : t.getMinutes();
    secs.innerText = t.getSeconds()<10? "0" + t.getSeconds() : t.getSeconds();
    let today = t.getDate() +" - "+ (1+t.getMonth()) +" - "+ t.getFullYear();
    date.innerText = today;
}

printTime();