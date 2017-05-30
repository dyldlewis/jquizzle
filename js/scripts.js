$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable1").click(function() {
    $("#show-image").slideToggle()
    $("#hide-image").slideToggle()
  });
});
