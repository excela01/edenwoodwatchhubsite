$(document).ready(function() {

    
    /* FOR STICKY NAVI*/
    $('.js--section-features').waypoint(function(direction) {
        
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    
    /* SCROLL ON BUTTON*/
    
    
    $('.js--scroll-to-plans').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
        
        
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000)
        
        
    });
    
    /*NAVIGATION SCROLL*/
    
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
              if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                   scrollTop: target.offset().top
                  }, 1000);
                  return false;
                 }
                }
              });      
            });
        
    
    
    /* ANIMATIONS ON SCROLL*/
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
        
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated backInLeft');
    },  {
        offset: '50%'
        
    });
    
    
        
        
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated backInUp');
    },  {
        offset: '50%'
        
    });
        
        
    
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    },  {
        offset: '50%'
        
    });
        
    
        
        
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated backInDown');
    },  {
        offset: '50%'
        
    });
        
        
    
    
        
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated heartBeat');
    },  {
        offset: '50%'
        
    });
    
    
    
    /*MOBILE NAV*/
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');  
          icon.removeClass('ion-navicon-round');  
        } else {
            
          icon.addClass('ion-navicon-round');  
          icon.removeClass('ion-close-round'); 
       
        }
        
    });
        
        
        
});

  

