$(document).ready(function () {
    
   
    $(window).resize(function () { 
        var h = $(window).height();
        $('.intro').css({'height':h});
    });

    $('.fixed-menu').click(function () { 
       $('.menudoc').addClass('appear');
        
    });
      $('.close-btn').click(function () { 
            $('.menudoc').removeClass('appear');
             
         });
     $('.home').click(function () { 
        $('html,body').animate({scrollTop : $('.intro').offset().top});
        $('.menudoc').removeClass('appear');
             
     });
     $('.contact').click(function () { 
        $('html,body').animate({scrollTop : $('.link-contact').offset().top});
        $('.menudoc').removeClass('appear');
             
     });
     $('.services').click(function () { 
        $('html').animate({scrollTop : $('.service-block').offset().top});
        $('.menudoc').removeClass('appear');
             
     });
     $('.about').click(function () { 
        $('.menudoc').removeClass('appear');
             
        
        $("HTML, BODY").animate({scrollTop:$(".text-intro").offset().top});
     
        
        
     });
});