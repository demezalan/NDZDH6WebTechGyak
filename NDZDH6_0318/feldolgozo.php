<html>

<head>
    <meta charset="UTF-8">
    <title>feldolgozó</title>
</head>

<body>

    <font style=" font-size:18pt">
    <h2>HTML5 űrlap_NDZDH6</h2>

    <?php

    echo ("<strong>Név: </strong>" . $_POST['name'] . "<br><br>");

    echo ("<strong>PIN-kód: </strong>" . $_POST['pin'] . "<br><br>");

    echo ("<strong>Gyümölcs: </strong>" . $_POST['fruit'] . "<br><br>");

    echo ("<strong>Életkor: </strong>" . $_POST['age'] . "<br><br>");

    echo ("<strong>Lábméret: </strong>" . $_POST['footsize'] . "<br><br>");

    echo ("<strong>Önbizalom: </strong>" . $_POST['cofidence'] . "<br><br>");

    ?>
    <a href="NDZDH6_urlap.html">Vissza az űrlapra</a>
    </font>
</body>

</html>