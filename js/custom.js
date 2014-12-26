/* Custom jQuery */

$(document).ready(function() {
    var numberSquares = 16 * 16;
    createGrid(numberSquares);
    $(".square").each(createPixels);
    changeOnMouseEnter();
    changeOnMouseLeave();
    pixelTrail();
});

function createGrid(numberSquares) {
    var squareClass = "square";
    var squareID = 1;

    for (ii = 0; ii < numberSquares; ii++) {
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

function createPixels() {
    for (ii = 0; ii < 100; ii++) {
        $(this).append('<div class="pixel"></div>');
    };
}

function pixelTrail() {
    $("#wrapper").on("mouseenter",".pixel", function() {
        $(this).addClass("pixel-traveled")});
}

/*
function grabUserInput() {
    $("form").submit(function(e) {
        e.preventDefault();
        return $("form").find(".grid_size").val();
        });
}
*/
