/* Custom jQuery */

$(document).ready(function() {
    createGrid();
    changeOnMouseEnter();
    changeOnMouseLeave();
});

function createGrid() {
    var squareClass = "square";
    var squareID = 1;

    for (ii = 0; ii < 16; ii++) {
        $("#wrapper").append('<div class="' + squareClass + '" id="square-' + squareID + '"></div>');
        squareID += 1;
    }
}

function changeOnMouseEnter() {
    $(".square").on("mouseenter", function() {
        $(this).addClass("traveled")});
}

function changeOnMouseLeave() {
    $(".square").on("mouseleave", function() {
        $(this).removeClass("traveled")});
}
