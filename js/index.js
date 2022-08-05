//gallery slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("js__img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//footer
var js__footer = document.getElementsByClassName('js__footer');
var js__nav = document.getElementsByClassName('js__nav');
function opentab(tabname) {
  for(js__footer of js__footers) {
    js__footer.classList.remove('head__active');
  }
  for(js__nav of js__navs) {
    js__nav.classList.remove('content__active');
  }
  event.currentTarget.classList.add('head__active');
  document.getElementById(tabname).classList.add('content__active');
}

//animation
$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '50%',
});

$('.js--wp-2').waypoint(function(direction) {
  $('.js--wp-2').addClass('animated fadeInUp');
}, {
  offset: '50%',
});