$(document).ready(function () {

console.log(moment());

console.log(moment().format());

var today = $("#currentDay").text(moment().format("dddd, MMMM Do"));
// $("#test").text(seconds);

var nineAmSeconds = $("#nineAm").attr("data-value");
var tenAmSeconds = $("#tenAm").attr("data-value");
var elevenAmSeconds = $("#elevenAm").attr("data-value");
var twelvePmSeconds = $("#twelvePm").attr("data-value");
var onePmSeconds = $("#onePm").attr("data-value");
var twoPmSeconds = $("#twoPm").attr("data-value");
var threePmSeconds = $("#threePm").attr("data-value");
var fourPmSeconds = $("#fourPm").attr("data-value");
var fivePmSeconds = $("#fivePm").attr("data-value");

var allTimesSeconds = [nineAmSeconds,tenAmSeconds,elevenAmSeconds,twelvePmSeconds,onePmSeconds,twoPmSeconds,threePmSeconds,fourPmSeconds,fivePmSeconds]

console.log(allTimesSeconds[1]);



let updateSeconds = function () {
    let todayHours = moment().hour();
    let todaySeconds = todayHours * 60 * 60;
    let thisSecond = moment().second();
    let sumSeconds = thisSecond + todaySeconds;
    // if(nineAmSeconds<sumSeconds){
    //     $(nineAm).addClass("past");
    // }

    $("#test").text(sumSeconds);
}


    // To initally set the times, we will call the functions
    // updateTime();
    // updateHour();
    // updateMinutes();
    updateSeconds();
    // countdown();

    // To continuously call the functions, we will use setInterval
    // setInterval(updateTime, 1000);
    // setInterval(updateHour, 1000);
    // setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    // setInterval(countdown, 1);

})

// var imageContainer = document.querySelector(".img-container");

// imageContainer.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches("img")) {
//     var state = element.getAttribute("data-state");

//     if (state === "still") {
//       element.setAttribute("data-state", "animate");
//       element.setAttribute("src", element.getAttribute("data-animate"));
//     } else if (state === "animate") {
//       element.setAttribute("data-state", "still");
//       element.setAttribute("src", element.getAttribute("data-still"));
//     }
//   }
// });