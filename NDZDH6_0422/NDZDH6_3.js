$(document).ready(() => {
   console.log('NDZDH6_0422/NDZDH6_3.js');
});

$("button#text").click(function () {
    $("div#rect").append("Mérnökinformatikus");
});

$("button#button").click(function () {
    $("#button").prepend("PTI ");
});

$("button#newButton").click(function () {
    $("body").append($("<button>ME GEIK-PTI</button>"));
});

$("button#header").click(function () {
    $("body").prepend($("<h1>jQuery feladat</h1>"));
});

$("button#subtitle").click(function () {
    $("h1").after($("<h2>HTML metódusok</h2>"));
});

$("button#formHeader").click(function () {
    $("form").before($("<h2>ŰRLAP - NDZDH6</h2>"));
});