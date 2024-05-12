const area = $("#terulet");

const loadButton = $("#betoltes");
loadButton.click(() => {
    $.getJSON("DZ_orarend.json", function(json) {
        area.html("<h1>MISKOLCI EGYETEM</h1>");
        area.append("<p><b>Cím: </b>" 
            + json.courses[0].cim.iranyitoszam + 
            " " +
            json.courses[0].cim.varos +
            ", " +
            json.courses[0].cim.utca +
            "</p>"
        );

        area.append("<h2>Telefonszámok:</h2>");
        area.append(`
            <ul>
                <li>${json.courses[0].telefonszamok[0].tipus}: ${json.courses[0].telefonszamok[0].szam}</li>
                <li>${json.courses[0].telefonszamok[1].tipus}: ${json.courses[0].telefonszamok[1].szam}</li>
            </ul>
        `);
        
        area.append("<h2>MI Órarend 2024 tavasz</h2>");

        json.courses.forEach(kurzus => {
            appendKurzus(area, kurzus);
        });

        console.log(json.courses);
    });
});

function appendKurzus(area, json) {
    area.append("<hr>");
    area.append("<h3> Kurzusnév: " + json.kurzusnev + "</h3>");
    area.append("<h3> Típus: " + json.tipus + "</h3>");
    area.append("<h3> Előadó: " + json.eloado +    "</h3>");

    area.append("<ul> <li> Nap: "
        + json.idopont.nap + 
        " </li> <li> Tól: "
        + json.idopont.tol + 
        " </li> <li> Ig: "
        + json.idopont.ig +
        " </li> </ul>"
    );

    area.append("<b>Helyszín: </b>" + json.helyszin);
    area.append("<br><br>");
}