!function(t){"use strict";t(window).on("load",function(){t("#preloader").fadeOut(),t(window).on("scroll",function(){t(window).scrollTop()>200?t(".scrolling-navbar").addClass("top-nav-collapse"):t(".scrolling-navbar").removeClass("top-nav-collapse")}),jQuery("#clock").countdown("2023/02/15",function(t){jQuery(this).html(t.strftime('<div class="time-entry days"><span>%-D</span> Days</div> <div class="time-entry hours"><span>%H</span> Hours</div> <div class="time-entry minutes"><span>%M</span> Minutes</div> <div class="time-entry seconds"><span>%S</span> Seconds</div> '))}),t(".mobile-menu").slicknav({prependTo:".navbar-header",parentTag:"liner",allowParentLinks:!0,duplicate:!0,label:""});var e=new WOW({mobile:!1});e.init(),t(".lightbox").nivoLightbox({effect:"fadeScale",keyboardNav:!0}),t(".navbar-nav").onePageNav({currentClass:"active"});var i=200;t(window).scroll(function(){t(this).scrollTop()>i?t(".back-to-top").fadeIn(400):t(".back-to-top").fadeOut(400)}),t(".back-to-top").on("click",function(e){return e.preventDefault(),t("html, body").animate({scrollTop:0},600),!1})})}(jQuery);