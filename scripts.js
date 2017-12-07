//$("img.hamburger").click(function(){

//$("div.overlay").fadeIn();
//$("div.overlay").slideDown();

//});
//$("img.close").click(function(){

////$("div.overlay").fadeOut();
//$("div.overlay").slideUp();




//});



$( document ).ready(function() {

$( ".close" ).hide();
$( ".overlay" ).hide();
$( ".hamburger" ).click(function() {
$( ".overlay" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".close" ).show();
});
});

$( ".close" ).click(function() {
$( ".overlay" ).slideToggle( "slow", function() {
$( ".close" ).hide();
$( ".hamburger" ).show();
});
});

});
