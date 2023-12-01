// html elements
let circle = document.querySelector(".circle");
let square = document.querySelector(".square");
let rectangle = document.querySelector(".rectangle");

circle.addEventListener("click", function() {
  circle.style.backgroundColor = "Blue";
  circle.style.width = "150px";
  circle.style.height = "150px";

    // 1. Update the circle using the style property.
    // - Set the background color to purple.
    // - Set the width to 150px.
    // - Set the height to 150px.
   

});

square.addEventListener("click", function() {
  square.style.backgroundColor = "Green";
  square.style.width = "150px";
  square.style.height = "150px";

    // 2. Update the square using the style property.
    // - Set the background color to yellow.
    // - Set the width to 150px.
    // - Set the height to 150px.



});

rectangle.addEventListener("click", function() {
  rectangle.style.backgroundColor = "Red";
  rectangle.style.width = "250px";
  rectangle.style.height = "150px";

    // 3. Update the rectangle using the style property.
    // - Set the background color to orange.
    // - Set the width to 250px.
    // - Set the height to 150px.
    


});

// Extension: Check out the available CSS properties here: https://www.w3schools.com/cssref/index.php 
// - Set a new CSS property and value for each shape using the same style property syntax.
// - See if you can get the rectangle to disappear when clicked (hint: check out the display CSS property)
