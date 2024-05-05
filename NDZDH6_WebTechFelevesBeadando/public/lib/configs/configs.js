$(document).ready(function () {
    $(".hide").hide()
    addRowToTable(1);
    $("img#cam1").show();
    $("div#cam1").show();
    $("li#cam1").css("background-color", "#545454");
});

$("li#cam1").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(1);
    $("img#cam1").show();
    $("div#cam1").show();
});

$("li#cam2").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(2);
    $("img#cam2").show();
    $("div#cam2").show();
});

$("li#cam3").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(3);
    $("img#cam3").show();
    $("div#cam3").show();
});

$("li#cam4").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(4);
    $("img#cam4").show();
    $("div#cam4").show();
});

$("li#cam5").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(5);
    $("img#cam5").show();
    $("div#cam5").show();
});

$("li#cam6").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(6);
    $("img#cam6").show();
    $("div#cam6").show();
});

$("li#cam7").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(7);
    $("img#cam7").show();
    $("div#cam7").show();
});

$("li#cam8").mouseover(function () {
    $("li").css("background-color", "#2b2b2b");
    $(this).css("background-color", "#545454");
    document.getElementById("cameras").deleteRow(1);
    $(".hide").hide()
    addRowToTable(8);
    $("img#cam8").show();
    $("div#cam8").show();
});

function addRowToTable(bodyId) {
    const table = document.getElementById('cameras');

    $.getJSON("./lib/configs/bodies.json", function( jsonData ) {
        const cameraBody = jsonData.bodies.body.find(body => body.id === bodyId);

        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${cameraBody.brand}</td>
            <td>${cameraBody.type}</td>
            <td>${cameraBody.sensor}</td>
            <td>${cameraBody.resolution}</td>
            <td>${cameraBody.monitor}</td>
            <td>${cameraBody.autofocus}</td>
            <td>${cameraBody.shootingRate}</td>
            <td>${cameraBody.video}</td>
        `;
    });
}