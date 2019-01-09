$().ready(function () {
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('#main-menu').addClass('container-fluid');
            $('#main-menu').removeClass('container');
        }
       else {
        $('#main-menu').removeClass('container-fluid');
        $('#main-menu').addClass('container');
       }
      });

      //scroll
      $('.nav-item:nth-child(2)').click(function(){
        $("HTML, BODY").animate({scrollTop:$("#services").offset().top});
        return false;
      })
      $('.nav-item:nth-child(3)').click(function(){
        $("HTML, BODY").animate({scrollTop:$("#Contact").offset().top});
        return false;
      })
    

});