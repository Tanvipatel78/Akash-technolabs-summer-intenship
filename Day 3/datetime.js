function showTime(){
    let dateTime= new Date();
    let time=dateTime.toLocaleTimeString();
    setTimeout(showTime, 3000);
}
showTime();