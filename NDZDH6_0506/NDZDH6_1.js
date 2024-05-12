const area = $("#terulet");

const loadButton = $("#betoltes");
loadButton.click(() => {
    $.getJSON("DZ_orarend1obj.json", function(json) {
        area.html("<h1>MISKOLCI EGYETEM</h1>");
        area.append("<p><b>" 
            + json.cim.iranyitoszam + 
            " " +
            json.cim.varos +
            ", " +
            json.cim.utca +
            "</b></p>"
        );

        area.append("<h2>telefonszamok:</h2>");
        area.append(`
            <ul>
                <li>${json.telefonszamok[0].tipus}: ${json.telefonszamok[0].szam}</li>
                <li>${json.telefonszamok[1].tipus}: ${json.telefonszamok[1].szam}</li>
            </ul>
        `);
        
        area.append("<h2>MI Órarend 2024 tavasz - részlet</h2>");

        area.append("<h3> Kurzusnév: " + json.kurzusnev + "</h3>");
        area.append("<h3> tipus: " + json.tipus + "</h3>");
        area.append("<h3> Előadó: " + json.eloado +    "</h3>");
    
        area.append("<ul> <li> Nap: "
            + json.idopont.nap + 
            " </li> <li> Tól: "
            + json.idopont.tol + 
            " </li> <li> Ig: "
            + json.idopont.ig +
        " </li> </ul>");

        area.append("<b>Helyszín: </b>" + json.helyszin);
        area.append("<br><br>");
    });
});