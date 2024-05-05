$(document).ready(function () {
    $("img.hide").hide()
});

$("div#evolution").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#evolution").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#evolution").hide();
});

$("div#rules").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#rules").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#rules").hide();
});

$("div#types").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#types").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#types").hide();
});

$("div#configs").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#configs").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#configs").hide();
});

$("div#settings").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#settings").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#settings").hide();
});

$("div#prize").mouseover(function () {
    $(this).css("background-color", "#545454");
    $("img#prize").show();
}).mouseout(function () {
    $(this).css("background-color", "#2b2b2b");
    $("img#prize").hide();
});


function rotateImage(degree) {
    $('#rotatingImage').animate({ transform: degree }, {
        step: function (now, fx) {
            $(this).css({
                '-webkit-transform': 'rotate(' + now + 'deg)',
                '-moz-transform': 'rotate(' + now + 'deg)',
                'transform': 'rotate(' + now + 'deg)'
            });
        },
        duration:4000
    },'linear');
    setTimeout(() => rotateImage(360), 4000);
} rotateImage(360);