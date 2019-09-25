// var slider = new Siema({
//   selector: '.siema',
//   duration: 350,
//   easing: 'ease-in-out',
//   perPage:{
// 		768: 2,
//     1024: 3,
// 	},
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: true,
//   rtl: false,
//   onInit: () => {},
//   onChange: () => {},
// });
// var prev = document.querySelector('.prev-sevice-1');
// var next = document.querySelector('.next-sevice-1');
// prev.addEventListener('click', () => slider.prev());
// next.addEventListener('click', () => slider.next());

$('.js-tilt').tilt({

})


// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.service-item'
  });
  

  
  $('.filters').on( 'click', function( event ) {
      console.log('click');
    // get group key
    $grid.isotope({ filter: $(this).attr('data-filter') });
  });
  
  // change is-checked class on buttons
  $('.filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click',  function( event ) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $( event.currentTarget );
      $button.addClass('is-checked');
    });
  });
    
  // flatten object by concatting values

  