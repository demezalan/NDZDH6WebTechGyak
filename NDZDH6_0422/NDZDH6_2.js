$(document).ready(() => {
   console.log('NDZDH6_0422/NDZDH6_2.js');
});

$("button#text").click(function () {
    alert($("div#rect").text());
});

$("button#html").click(function () {
    alert($("div#rect").html());
});

let joined = false;

$("button#value").click(function () {
    if (joined)
        alert("Jelenkezés");
    else
        alert($("#nev").val());
});

$("#param").click(function () {
    alert($("#param").attr("data"));
});

$("#join").click(function () {
    joined = true;
});