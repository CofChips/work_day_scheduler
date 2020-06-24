$(document).ready(function () {

console.log(moment());

console.log(moment().format());

var today = $("#currentDay").text(moment().format("dddd, MMMM Do"));


var nineAm = $("#nineAm");
var tenAm = $("#tenAm");
var elevenAm = $("#elevenAm");
var twelvePm = $("#twelvePm");
var onePm = $("#onePm");
var twoPm = $("#twoPm");
var threePm = $("#threePm");
var fourPm = $("#fourPm");
var fivePm = $("#fivePm");

var allTimes = [nineAm,tenAm,elevenAm,twelvePm,onePm,twoPm,threePm,fourPm,fivePm]

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

var formNine = $("#formNine");
var formTen = $("#formTen");
var formEleven = $("#formEleven");
var formTwelve = $("#formTwelve");
var formOne = $("#formOne");
var formTwo = $("#formTwo");
var formThree = $("#formThree");
var formFour = $("#formFour");
var formFive = $("#formFive");

var buttonNine = $("#buttonNine");
var buttonTen = $("#buttonTen");
var buttonEleven = $("#buttonEleven");
var buttonTwelve = $("#buttonTwelve");
var buttonOne = $("#buttonOne");
var buttonTwo = $("#buttonTwo");
var buttonThree = $("#buttonThree");
var buttonFour = $("#buttonFour");
var buttonFive = $("#buttonFive");

var textNine = $("#nineAmText")

var taskNine = "";

init();

// populates tasks with localStorage if there are values
function init() {
    $(textNine).text("");
    var storedtask = localStorage.getItem("taskNine");
    if (storedtask !== null) {
        taskNine = storedtask;
    }
    repopulateTask();
}

console.log(allTimesSeconds[1]);



let updateSeconds = function () {
    let todayHours = moment().hour();
    let todaySeconds = todayHours * 60 * 60;
    let thisSecond = moment().second();
    let sumSeconds = thisSecond + todaySeconds;
    for(var i = 0; i < allTimesSeconds.length; i++){
        if(allTimesSeconds[i]<sumSeconds){
            $(allTimes[i]).addClass("past");
            $(allTimes[i]).removeClass("present future");
        }
        else if(allTimesSeconds[i]>=sumSeconds && allTimesSeconds[i]-3599<=sumSeconds){
            $(allTimes[i].addClass("present"));
            $(allTimes[i].removeClass("past future"));
        }
        else{
            $(allTimes[i].addClass("future"));
            $(allTimes[i].removeClass("past present"));
        }
    }

}

$(buttonNine).on("click", function(){
    event.preventDefault();
    var task = $(formNine).val();
    localStorage.setItem("taskNine", task);
    init();
    $(formNine).val("");

})

$(formNine).on("click", function(){
    event.preventDefault();
    $(textNine).text("");
    

})



function repopulateTask() {
    // formNine = "";
    // // console.log(highScoreList);
    // // for (var i = 0; i < highScoreList.length; i++) {
    // //     var currentIndex = highScoreList[i];
    // //     var li = document.createElement("li");
    // //     li.innerHTML = currentIndex.initials + " - " + highScoreList[i].score;
    // //     highScoreListEl.append(li);
    $(textNine).text(taskNine);
    }


    updateSeconds();

    setInterval(updateSeconds, 1000);


})

