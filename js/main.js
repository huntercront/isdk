$(document).ready(function() {
var slider = new Siema({
  selector: '.siema',
  duration: 350,
  easing: 'ease-in-out',
  perPage:{
		768: 2,
    1024: 3,
	},
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
var prev = document.querySelector('.prev-map-1');
var next = document.querySelector('.next-map-1');
prev.addEventListener('click', () => slider.prev());
next.addEventListener('click', () => slider.next());



$('.js-tilt').tilt({

})

$('[data-anchor=true]').click(function() {
  var elementClick = $(this).attr("href")
  if($('.mail-navigation').hasClass('m-active')){
    $('.mail-navigation').slideToggle();
    $('.mail-navigation').toggleClass('m-active');
    $('.mobile--icon').toggleClass('mobile--icon--active');

  }
  var destination = ($(elementClick).offset().top - 100);
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 500);
  return false;
});

$('.mobile--icon').on('click',function(){
  $(this).toggleClass('mobile--icon--active')
})
	$(window).scroll(function() { 
	var the_top = $(document).scrollTop();
	if (the_top > 300) {
		$('.header').addClass('fixed');
		if($(window).width() > 576){
			$('body').css('padding-top','72px')
		}
		else{
			$('body').css('padding-top','50px')
		}
	}
	else {
		$('.header').removeClass('fixed');
		$('body').css('padding-top','0px')
    }
});

$('.portfolio-col').on('click', function(event){
    console.log();
    $('#modal--content').html($(this).attr('data-content'));
    console.log($(this).find('.port--image').attr('src'))
    $('#modal--img').attr('src',$(this).find('.port--image').attr('src') )
    $('#modal-tiitle').html($(this).find('.portfolio-c--title').text());
})
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$('#nav-icon').on('click',function(){
  $('.mail-navigation').slideToggle();
  $('.mail-navigation').toggleClass('m-active');
})


// function EasyPeasyParallax() {
// 	scrollPos = window.pageYOffset;
// 	$('.hero').css(
// 		'background-position', '50%'+(scrollPos*0.3)+"px"
//     );
//     $('.hero-content').css({
// 		'opacity': 1-(scrollPos/500)
// 	});
// }
// $(window).scroll(function() {
// 	EasyPeasyParallax();
// });
// new WOW().init();
$('.prime--cta').on('click',function(){
	
	$('#ModalLongTitle').html($(this).text())
})
});