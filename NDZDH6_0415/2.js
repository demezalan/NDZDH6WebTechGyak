$(document).ready(() => {
   console.log('NDZDH6_0415/2.js');         
});

$("button#K1").click(() => {
    $("ul#listA>li").first().toggle();
    $("ul#listB>li").first().toggle();
    $("a").toggle();
});

$("button#K2").click(() => {
    $("ul#listA>li").first().hide();
    $("ul#listB>li").first().hide();
    $("a").hide();
    $("button#K2").hide();
});

$("button#K3").click(() => {
    $("h1").toggle();
    $("ul#listA>li").first().toggle();
    $("ul#listB>li").first().toggle();
    $("a").toggle();
});

$("button#K4").click(() => {
    $("ul#listA>li").first().toggle();
    $("ul#listB>li").first().toggle();
    $("p#link").toggle();
});

$("button#K5").click(() => {
    $("ul#listA>li").first().toggle();
    $("ul#listB>li").first().toggle();
    $("a").toggle();
    $("tr").filter(":odd").toggle();
});