$(document).ready(function () {
    $('#submit').click(function() {
        checked = $("input[type=checkbox]:checked").length;

        if(checked != 4) {
            alert("4 márkát kell bejelölni!");
            return false;
        }
    });
});