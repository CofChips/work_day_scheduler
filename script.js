$(document).ready(function () {

    console.log(moment());

    console.log(moment().format());

    // shows today's date
    var today = $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // div for calendar task entries
    var nineAm = $("#nineAm");
    var tenAm = $("#tenAm");
    var elevenAm = $("#elevenAm");
    var twelvePm = $("#twelvePm");
    var onePm = $("#onePm");
    var twoPm = $("#twoPm");
    var threePm = $("#threePm");
    var fourPm = $("#fourPm");
    var fivePm = $("#fivePm");

    var allTimes = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm]

    // data-value to help identify the upper limit of each hour
    var nineAmSeconds = $("#nineAm").attr("data-value");
    var tenAmSeconds = $("#tenAm").attr("data-value");
    var elevenAmSeconds = $("#elevenAm").attr("data-value");
    var twelvePmSeconds = $("#twelvePm").attr("data-value");
    var onePmSeconds = $("#onePm").attr("data-value");
    var twoPmSeconds = $("#twoPm").attr("data-value");
    var threePmSeconds = $("#threePm").attr("data-value");
    var fourPmSeconds = $("#fourPm").attr("data-value");
    var fivePmSeconds = $("#fivePm").attr("data-value");

    var allTimesSeconds = [nineAmSeconds, tenAmSeconds, elevenAmSeconds, twelvePmSeconds, onePmSeconds, twoPmSeconds, threePmSeconds, fourPmSeconds, fivePmSeconds]

    // text area where user inputs tasks
    var formNine = $("#formNine");
    var formTen = $("#formTen");
    var formEleven = $("#formEleven");
    var formTwelve = $("#formTwelve");
    var formOne = $("#formOne");
    var formTwo = $("#formTwo");
    var formThree = $("#formThree");
    var formFour = $("#formFour");
    var formFive = $("#formFive");

    var allForm = [formNine, formTen, formEleven, formTwelve, formOne, formTwo, formThree, formFour, formFive]

    // save buttons
    var buttonNine = $("#buttonNine");
    var buttonTen = $("#buttonTen");
    var buttonEleven = $("#buttonEleven");
    var buttonTwelve = $("#buttonTwelve");
    var buttonOne = $("#buttonOne");
    var buttonTwo = $("#buttonTwo");
    var buttonThree = $("#buttonThree");
    var buttonFour = $("#buttonFour");
    var buttonFive = $("#buttonFive");

    var allButton = [buttonNine,buttonTen,buttonEleven,buttonTwelve,buttonOne,buttonTwo,buttonThree,buttonFour,buttonFive]

    // 
    var textNine = $("#nineAmText");
    var textTen = $("#tenAmText");
    var textEleven = $("#elevenAmText");
    var textTwelve = $("#twelvePmText");
    var textOne = $("#onePmText");
    var textTwo = $("#twoPmText");
    var textThree = $("#threePmText");
    var textFour = $("#fourPmText");
    var textFive = $("#fivePmText");

    var allText = [textNine, textTen, textEleven, textTwelve, textOne, textTwo, textThree, textFour, textFive];

    var taskNine = "";
    var taskTen = "";
    var taskEleven = "";
    var taskTwelve = "";
    var taskOne = "";
    var taskTwo = "";
    var taskThree = "";
    var taskFour = "";
    var taskFive = "";

    var allTask = [taskNine, taskTen, taskEleven, taskTwelve, taskOne, taskTwo, taskThree, taskFour, taskFive];

    var keyNine = "taskNine";
    var keyTen = "taskTen";
    var keyEleven = "taskEleven";
    var keyTwelve = "taskTwelve";
    var keyOne = "taskOne";
    var keyTwo = "taskTwo";
    var keyThree = "taskThree";
    var keyFour = "taskFour";
    var keyFive = "taskFive";

    var allKey = [keyNine, keyTen, keyEleven, keyTwelve, keyOne, keyTwo, keyThree, keyFour, keyFive];

    init();

    // populates tasks with localStorage if there are values
    function init() {
        for (var i = 0; i < allForm.length; i++) {
            var storedtask = localStorage.getItem(allKey[i]);
            if (storedtask !== null) {
                allTask[i] = storedtask;
                $(allForm[i]).text(allTask[i]);
            }
        }




        // dynamically updates classes for time elements
        let updateSeconds = function () {
            let todayHours = moment().hour();
            let todaySeconds = todayHours * 60 * 60;
            let thisSecond = moment().second();
            let sumSeconds = thisSecond + todaySeconds;
            for (var i = 0; i < allTimesSeconds.length; i++) {
                if (allTimesSeconds[i] < sumSeconds) {
                    $(allTimes[i]).addClass("past");
                    $(allTimes[i]).removeClass("present future");
                }
                else if (allTimesSeconds[i] >= sumSeconds && allTimesSeconds[i] - 3599 <= sumSeconds) {
                    $(allTimes[i].addClass("present"));
                    $(allTimes[i].removeClass("past future"));
                }
                else {
                    $(allTimes[i].addClass("future"));
                    $(allTimes[i].removeClass("past present"));
                }
            }
        }

        // listener to save task entries
        $(".saveBtn").on("click", function(){
            var formID = $(this).data("id");
            var keyID = $(this).data("key");
            // `#${formID}` === "#" + formID
            var task = $(`#${formID}`).val();
            localStorage.setItem(keyID, task);
            init();
        })


        // $(buttonNine).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formNine).val();
        //     localStorage.setItem("taskNine", task);
        //     init();
        // })


        // $(buttonTen).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formTen).val();
        //     localStorage.setItem("taskTen", task);
        //     init();
        // })

        // $(buttonEleven).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formEleven).val();
        //     localStorage.setItem("taskEleven", task);
        //     init();
        // })

        // $(buttonTwelve).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formTwelve).val();
        //     localStorage.setItem("taskTwelve", task);
        //     init();
        // })

        // $(buttonOne).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formOne).val();
        //     localStorage.setItem("taskOne", task);
        //     init();
        // })

        // $(buttonTwo).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formTwo).val();
        //     localStorage.setItem("taskTwo", task);
        //     init();
        // })

        // $(buttonThree).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formThree).val();
        //     localStorage.setItem("taskThree", task);
        //     init();
        // })

        // $(buttonFour).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formFour).val();
        //     localStorage.setItem("taskFour", task);
        //     init();
        // })

        // $(buttonFive).on("click", function () {
        //     event.preventDefault();
        //     var task = $(formFive).val();
        //     localStorage.setItem("taskFive", task);
        //     init();
        // })



        updateSeconds();

        setInterval(updateSeconds, 1000);


    }
})