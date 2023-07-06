function displaytime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML="PM";
    }
    else{
        session.innerHTML="AM";
    }
    if(hrs>12){
        hrs = hrs-12;
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    if(hrs > 19 || hrs < 6)
     body.style.backgroundImage = "url('background.png')";
}
setInterval(displaytime,10);
