// Event date to count down from
var eventTime = new Date("Jun 10, 2023, 13:30:00").getTime();

// Counting down
var x = setInterval(function() {
    // Some constants for time calculations
    var dayFactor = 1000*60*60*24;
    var hourFactor = dayFactor/24;
    var minuteFactor = hourFactor/60;
    var secondFactor = minuteFactor/60;
    
    // Distance between the even time and now
    var currentTime = new Date().getTime();
    var distance = eventTime - currentTime;
    
    // Time calculations
    var daysLeft = Math.floor(distance/dayFactor);
    var hoursLeft = Math.floor((distance%dayFactor)/hourFactor);
    var minutesLeft = Math.floor((distance%hourFactor)/minuteFactor);
    var secondsLeft = Math.floor((distance%minuteFactor)/secondFactor);
    
    document.getElementById("time-left").innerHTML = daysLeft + "g " + hoursLeft + "s " + minutesLeft + "dk " + secondsLeft + "sn";
    
    if (distance<0) {
        clearInterval(x);
        document.getElementById("time-left").innerHTML = "KAÇIRDINIZ!";
    }
}, 1000);
