function time(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hour == "12"){
        var hr = 12;
}
else if (hour == "24"){
    var hr = 0;
}
else{
    var hr = hour % 12;
}

if(hr < 10 ){
 hr = "0" + hr;
}
if(min < 10 ){
 min = "0" + min;
}
if(sec < 10 ){
 sec = "0" + sec;
}
    var ampm = (hour < 12) ? "AM" : "PM" ;
    var finalTime = hr + ":" + min + ":" + sec + " " +ampm;
    var thisDayName = date.getDay();
    var thisDate = (date.getDate() < 10) ? "0"+ date.getDate() : date.getDate();
    var myMonth =  date.getMonth() + 1;
    var thisMonth =  (myMonth<10) ? "0"+myMonth : myMonth;
    var thisYear = date.getFullYear();
    var finalyDate = thisDate +  "/" +  thisMonth  + "/" + thisYear ;
    var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayName = days[thisDayName];

    document.getElementById("hour").innerText= hr;
    document.getElementById("min").innerText= min;
    document.getElementById("sec").innerText= sec;
    document.getElementById("ampm").innerText= ampm;
    document.getElementById("dayname").innerText= dayName;
    document.getElementById("maindate").innerText= finalyDate;
  
    
    
}

time();
setInterval(time,1000);