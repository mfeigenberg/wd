$("#button-pic").click(function(){
  $("img").show();
});

$("img").click(function(){
  $("img").css("height", "400px").css("width", "500px")
  $("#change-opacity").show();
});

$("#change-opacity").click(function(){
    $("img").css("opacity", "50%")
});

$("h2").click(function(){
  $("h2").css("color", "blue");
});

$("h2").css("cursor", "pointer")

$("#button-text").click(function(){
  $(".your-name-p-tag").append("Meryl")
});

$("#hide-dom").click(function(){
  $(".dom").hide();
});
/*

1. import jquery
2. make the image appear after you click the appropriate button
3. make the image larger after you click the appropriate button
4. make the image more transparent after you click the appropriate button
5. make the font color of the h2 tag to change to blue on click
6. When the approprite button is clicked, add onto the respective div with a p tag that has your name as text
7. Create text that makes the whole dom disappear except for that text when you hover over it

*/
