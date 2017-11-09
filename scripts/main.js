

$( "#newTastingbutton" ) .click(function() {
    $("#mainBody img, #tForm ").fadeTo("slow", 0.2, function(){
        $( "#mainBody h1, #newTasting h1").fadeIn(, 1.0) });
  });
  
  $( document ).ready(function() {
    $( "#Whiskey-name" ).focus();
  });

