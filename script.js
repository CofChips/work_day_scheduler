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

    var allTimes = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm]

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
    // init2();

    // populates tasks with localStorage if there are values
    function init() {
        // for (var i = 0; i < allText.length; i++) {
        //     $(allText[i]).text("");
        // }

        var storedtask = localStorage.getItem(allKey[0]);
        if (storedtask !== null) {
            allTask[0] = storedtask;
            $(allText[0]).text(allTask[0]);
        }
        var storedtask = localStorage.getItem(allKey[1]);
        if (storedtask !== null) {
            allTask[1] = storedtask;
            console.log(taskNine);
            $(allText[1]).text(allTask[1]);
        }
        var storedtask = localStorage.getItem(allKey[2]);
        if (storedtask !== null) {
            allTask[2] = storedtask;
            $(allText[2]).text(allTask[2]);
        }
        var storedtask = localStorage.getItem(allKey[3]);
        if (storedtask !== null) {
            allTask[3] = storedtask;
            $(allText[3]).text(allTask[3]);
        }

        var storedtask = localStorage.getItem(allKey[4]);
        if (storedtask !== null) {
            allTask[4] = storedtask;
            $(allText[4]).text(allTask[4]);
        }

        var storedtask = localStorage.getItem(allKey[5]);
        if (storedtask !== null) {
            allTask[5] = storedtask;
            $(allText[5]).text(allTask[5]);
        }

        var storedtask = localStorage.getItem(allKey[6]);
        if (storedtask !== null) {
            allTask[6] = storedtask;
            $(allText[6]).text(allTask[6]);
        }

        var storedtask = localStorage.getItem(allKey[7]);
        if (storedtask !== null) {
            allTask[7] = storedtask;
            $(allText[7]).text(allTask[7]);
        }

        var storedtask = localStorage.getItem(allKey[8]);
        if (storedtask !== null) {
            allTask[8] = storedtask;
            $(allText[8]).text(allTask[8]);
        }
    }

    // function init2() {
    //     var storedtask = localStorage.getItem(allKey[1]);
    //     if (storedtask !== null) {
    //         allTask[1] = storedtask;
    //         console.log(taskNine);
    //         $(allText[1]).text(allTask[1]);
    //     }
    // }



        
    


    console.log(allKey[0]);

    console.log(taskNine);


    // console.log(allTimesSeconds[1]);



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

    $(buttonNine).on("click", function () {
        event.preventDefault();
        var task = $(formNine).val();
        localStorage.setItem("taskNine", task);
        init();
        $(formNine).val("");
    })


    $(buttonTen).on("click", function () {
        event.preventDefault();
        var task = $(formTen).val();
        localStorage.setItem("taskTen", task);
        init();
        $(formTen).val("");
    })

    $(buttonEleven).on("click", function () {
        event.preventDefault();
        var task = $(formEleven).val();
        localStorage.setItem("taskEleven", task);
        init();
        $(formEleven).val("");
    })

    $(buttonTwelve).on("click", function () {
        event.preventDefault();
        var task = $(formTwelve).val();
        localStorage.setItem("taskTwelve", task);
        init();
        $(formTwelve).val("");
    })

    $(buttonOne).on("click", function () {
        event.preventDefault();
        var task = $(formOne).val();
        localStorage.setItem("taskOne", task);
        init();
        $(formOne).val("");
    })

    $(buttonTwo).on("click", function () {
        event.preventDefault();
        var task = $(formTwo).val();
        localStorage.setItem("taskTwo", task);
        init();
        $(formTwo).val("");
    })

    $(buttonThree).on("click", function () {
        event.preventDefault();
        var task = $(formThree).val();
        localStorage.setItem("taskThree", task);
        init();
        $(formThree).val("");
    })

    $(buttonFour).on("click", function () {
        event.preventDefault();
        var task = $(formFour).val();
        localStorage.setItem("taskFour", task);
        init();
        $(formFour).val("");
    })

    $(buttonFive).on("click", function () {
        event.preventDefault();
        var task = $(formFive).val();
        localStorage.setItem("taskFive", task);
        init();
        $(formFive).val("");
    })

    $(formNine).on("click", function () {
        event.preventDefault();
        $(textNine).text("");
    })

    $(formTen).on("click", function () {
        event.preventDefault();
        $(textTen).text("");
    })

    $(formEleven).on("click", function () {
        event.preventDefault();
        $(textEleven).text("");
    })

    $(formTwelve).on("click", function () {
        event.preventDefault();
        $(textTwelve).text("");
    })

    $(formOne).on("click", function () {
        event.preventDefault();
        $(textOne).text("");
    })

    $(formTwo).on("click", function () {
        event.preventDefault();
        $(textTwo).text("");
    })

    $(formThree).on("click", function () {
        event.preventDefault();
        $(textThree).text("");
    })

    $(formFour).on("click", function () {
        event.preventDefault();
        $(textFour).text("");
    })

    $(formFive).on("click", function () {
        event.preventDefault();
        $(textFive).text("");
    })



    // function repopulateTask() {
    //     // formNine = "";
    //     // // console.log(highScoreList);
    //     // // for (var i = 0; i < highScoreList.length; i++) {
    //     // //     var currentIndex = highScoreList[i];
    //     // //     var li = document.createElement("li");
    //     // //     li.innerHTML = currentIndex.initials + " - " + highScoreList[i].score;
    //     // //     highScoreListEl.append(li);
    //     // for( var i = 0; i< allTask.length; i++){
    //         $(allText[0]).text(allTask[0]);
    //     // }



    // }


    updateSeconds();

    setInterval(updateSeconds, 1000);


})

