var startClock = function () {


    $("#menuButton").addClass("noOpacity");
    var i = null;
    $("html").mousemove(function () {
        clearTimeout(i);
        $("#menuButton").removeClass("noOpacity");
        $("body").removeClass("mouseHide");
        i = setTimeout('$("#menuButton").addClass("noOpacity"); $("body").addClass("mouseHide");', 1000);
    }).mouseleave(function () {
        clearTimeout(i);
        $("#menuButton").addClass("noOpacity");
        $("body").addClass("mouseHide");
    });

    var span = document.getElementById('clock');


    function clock() {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var mid = 'PM';
        if (min < 10) {
            min = "0" + min;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour == 0) {
            hour = 12;
        }
        if (TwentyFourHour < 12) {
            mid = 'AM';
        }
        if(sec < 10){
           sec = "0" + String(sec);
           }
        document.getElementById('clock').innerHTML = hour + ':' + min + ":" + sec + " " + mid;
        setTimeout(clock, 1000);
    }

    clock();

};

var darkLight = function (x) {

    var check = $("#themeCheck")[0].checked;

    if (check) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    console.log(check);

};


var sizeSelect = function (x) {
    $("#clock")[0].classList = "";

    if (x == 2) {
        $("#clock")[0].classList.add("small");
    } else if (x == 1) {
        $("#clock")[0].classList.add("medium");
    } else {
        $("#clock")[0].classList.add("big");
    }


};

$(document).ready(startClock)
