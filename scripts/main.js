
/**jquery fade over when scotchbook link is clicked */
$( "#newTastingbutton" ) .click(function() {
    $("#mainBody img, #tForm ").fadeTo("slow", 0.2, function(){
        $( "#mainBody h1, #newTasting h1").fadeIn() });
  });
  

  /**jquery focus when submit button is clicked */
  $( document ).ready(function() {
    $( "#Whiskey-name" ).focus();
  });

