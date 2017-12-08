



$( document ).ready(function() {
//javascript so that the burger menu works
// so that when the hamburger icon is clicked, the overlay displays and the close icon displays while the hamburger (open ) icon
// dissapears
$( ".close" ).hide();
$( ".overlay" ).hide();
$( ".hamburger" ).click(function() {
$( ".overlay" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".close" ).show();
});
});
//when the close icon is pressed then the overlay and the close icon dissapear and then the hamburger (open) icon is displayed
$( ".close" ).click(function() {
$( ".overlay" ).slideToggle( "slow", function() {
$( ".close" ).hide();
$( ".hamburger" ).show();
});
});

});
