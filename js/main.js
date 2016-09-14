

window.onload =  function oldTime() {
var x = new Date(new Date().setFullYear(new Date().getFullYear() - 328));
document.getElementById("theDate").innerHTML = (x.toDateString());
};

// Adjusting the page content to not be overlapped by the responsive fixed header
$(document).ready(function(){
var headerHeight =  $('header').height();
$('main').css('padding-top', headerHeight);
});

//Does the same as last bit on window resize
$(document).ready(function(){
  $(window).resize(function(){
var headerHeight =  $('header').height();
$('main').css('padding-top', headerHeight);
});
});

/*Toggle content on content.html not intended for implementation, DEMO ONLY*/
$(document).ready(function(){

$('.toggleArticle').click(function(){
$('.articleB').toggleClass('displayNone');
});

});
