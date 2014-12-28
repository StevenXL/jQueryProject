/* Custom jQuery */

$(document).ready(function() {
    var numberSquares = 16 * 16;
    var squareDimension = 58;
    createGrid(numberSquares, squareDimension);
    $(".square").each(createPixels);
    changeOnMouseEnter();
    changeOnMouseLeave();
    pixelTrail();
    buttonPressed();
});

function createGrid(numberSquares, squareDimension) {
    var squareClass = "square";
    var squareID = 1;
    var squareInLine = ' "style="height: ' + squareDimension + 'px; width: ' + squareDimension + 'px;';

    for (ii = 0; ii < numberSquares; ii++) {
        $("#wrapper").append('<div class="' + squareClass + '" id="square-' + squareID + squareInLine + '"></div>');
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
    for (ii = 0; ii < 361; ii++) {
        $(this).append('<div class="pixel"></div>');
    };
}

function pixelTrail() {
    $("#wrapper").on("mouseenter",".pixel", function() {
        $(this).addClass("pixel-traveled")});
}

function buttonPressed () {
    $("form").submit(function(e) {
        e.preventDefault();
        var userInput = ( $("form").find(".grid_size").val() );

        if (userInput > 20) {
            userInput = 20;
            alert("Sorry. Maximum allowed is 20.");
            $(".grid_size").val("20");
        }
        if (userInput < 5) {
            userInput = 5;
            alert("Sorry. Minimum allowed is 5.");
            $(".grid_size").val("5");
        }

        numberSquares = userInput * userInput;
        squareDimension = (960 / userInput) - 2;
        // remove current divs
        $("#wrapper").find(".square").remove();
        // call create grid function with new dimensions
        createGrid(numberSquares, squareDimension);
        // call create pixels function again
        $(".square").each(createPixels);
        pixelTrail();
        changeOnMouseEnter();
        changeOnMouseLeave();
        buttonPressed();
        });
}
