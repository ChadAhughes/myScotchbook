

$( "#newTastingbutton" ) .click(function() {
    $("#mainBody img, #tForm ").fadeTo("slow", 0.2, function(){
        $( "#mainBody h1, #newTasting h1").fadeIn("2600", 1.0)
    });
  });
