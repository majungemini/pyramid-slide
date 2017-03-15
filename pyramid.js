



var selectElem = document.getElementById("outline");
selectElem.addEventListener("change",function(event){
        heightStr = document.getElementById("points").value;
        height = parseInt(heightStr);

        outline = document.getElementById("outline").value;
        drawPyramid(height,outline);
    })

function myFunction() {
    var x = document.getElementById("points").value;
    document.getElementById("heightofpyramid").innerHTML = x;
    height = parseInt(x);
    outline = document.getElementById("outline").value;
    drawPyramid(height,outline);
    }

function drawPyramid(height,outline) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += outline;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
