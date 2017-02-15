$(window).bind('scroll', function() {
        var navHeight = $(window).height() - 150;
        if ($(window).scrollTop() > navHeight) {
            $('.logo').addClass('logo_1');  
        } else {
            $('.logo').removeClass('logo_1');
        }

        var offset_height = 100;
        if ($(window).scrollTop() > navHeight) {      
            $('.logo').addClass('logo_1');

        } else {        
            $('.logo').removeClass('logo_1');
        }
    });



// $(document).ready(
//       function() {
//         $('.banner_img').innerfade({
//           animationtype: 'fade',
//           // animationtype: 'slide',
//           speed: 750,
//           timeout: 3500,
//           // type: 'random',
//           type: 'sequence',
//           containerheight: '800px'
//         });
//       }
//     );



$(window).scroll(function() {

         var windowWidth = $(window).width();

          if( windowWidth > 1125){
                  var offset_height = 200;
                  var distance = $(window).scrollTop();

                  if (distance > offset_height) {
                        $('.menu').addClass('menu_fixed');
                         $('.menu_bottom').addClass('menu_bottom_fixed');
                  } else {
                        $('.menu').removeClass('menu_fixed');
                         $('.menu_bottom').removeClass('menu_bottom_fixed');
                  }
                  console.log('menu_fixed');}

                  else{

                  }
            });