//mobile menu js
let menu = document.querySelector(".menuIcon")
let mobileMenu = document.querySelector(".mobile__menu")
const xMark = document.querySelector(".crossMark")
console.log(xMark)

menu.addEventListener('click', function(){
    mobileMenu.classList.toggle("show")
});

xMark.addEventListener('click', function(){
    mobileMenu.classList.remove("show")
})

// owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// 

//Initialize Masonry inside Bootstrap 3 Tab component 

(function( $ ) {

    var $container = $('.masonry-container');
    $container.imagesLoaded( function () {
      $container.masonry({
        columnWidth: '.card',
        itemSelector: '.card'
      });
    });
    
    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
    $('a[data-toggle=tab]').each(function () {
      var $this = $(this);
  
      $this.on('shown.bs.tab', function () {
      
        $container.imagesLoaded( function () {
          $container.masonry({
            columnWidth: '.card',
            itemSelector: '.card'
          });
        });
  
      }); //end shown
    });  //end each
    
  })(jQuery);
