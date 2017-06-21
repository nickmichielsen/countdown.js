var countdown = function () {  
      var self = {};
    
    var defaultSettings = {
        selector: '.countdown',
        countdownto: new Date("June 21, 2017 23:59:59"),
//        now: new Date().getTime(),  
//        distance: countDownDate - now,
//        cd_day: Math.floor((countDownDate - now) / (1000 * 60 * 60 * 24)),
    };
        
    
    
// Set the date we're counting down to

//    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
    var countDownDate = defaultSettings.countdownto;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  
    // Time calculations for days, hours, minutes and seconds 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
    

// Javascript code geschreven met behulp van voorbeeld 'Bounce'

        var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };
    
    var init = function(settings, selector, countdownto) {
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        
    };
    
     //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init,
        mergeObjects: mergeObjects
    };
    
}