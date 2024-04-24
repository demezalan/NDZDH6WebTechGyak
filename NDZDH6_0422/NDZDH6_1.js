$(document).ready(() => {
   console.log('NDZDH6_0422/NDZDH6_1.js');
});

$("button#hide").click(() => {
    $("div#paragraphs").hide();
    alert("Bekezdések elrejtése");
});
$("button#toggle").click(() => {
    $("div#rect").slideUp(1000);
    $("div#rect").slideDown(1000);
    $("div#rect").animate({height: '120px'}, 1000);
    $("div#rect").animate({left: '300px', fontSize: '12pt', width: '500px'}, 1000);
});

$("#animation").click(() => {
    $("div#rect").animate({left: '300px', width:'300px'}, 1000);
    $("div#rect").animate({left: '300px', width:'400px', fontSize: '30pt'}, 1000);
    $("div#rect").animate({top: '150px', width:'400px', height: '140px', fontSize: '20pt'}, 1000);
    $("div#rect").animate({left: '0px', width:'300px', height: '120px', opacity: 0.4}, 1000);
    $("div#rect").animate({top: '0px', left: '0px', width:'300px', height: '120px', fontSize: '12pt', opacity: 1}, 1000,
    function() {
        alert("VÉGE")
    });
});