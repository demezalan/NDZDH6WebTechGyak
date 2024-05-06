$(document).ready(function () {
    addRowToTable(1);
});

function addRowToTable(courseId) {
    const div = document.getElementById('terulet');

    $.getJSON("DZ_orarend.json", function( jsonData ) {
        const kurzusObj = jsonData.courses.course.find(course => course.id === courseId);

        div.append = 
         `
            <p>${kurzusObj.id}</p>
        `;
        
    });
}