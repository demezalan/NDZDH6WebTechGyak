$(document).ready(() => {
   console.log('NDZDH6_0415/1.js');         
   $("span#hidden").hide();
});

$("button").click(() => {
    $("p.hide").toggle();
    $("span#hidden").toggle();
});