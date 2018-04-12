//Door animation
$(document).ready(function(){
  TweenMax.set(".door", {transformPerspective:300});
  //Fade in doors onload
  setTimeout(function(){
    $(".door-outter").css("opacity","1");
  },3000);
  //Door hover animation
  $(".door-wrapper").on('mouseenter', function(){
    TweenMax.to(".door", 0.7, {rotationY:13, ease:Power1.easeInOut});
  });
  $(".door-wrapper").on('mouseleave', function(){
    TweenMax.to(".door", 0.7, {rotationY:0, ease:Power1.easeInOut});
  });
});

//About and Work links animations
$(document).ready(function(){
  //About and Work onload animation
  $(".about span").each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      $this.css("transform","translateX(0)");
    }, 100*index);
  });

  $(".work span").each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      $this.css("transform","translateX(0)");
    }, 100*index);
  });
  //About hover animation
  $(".about").on('mouseenter', function(){
    console.log("working");
    $(".about-span").addClass("scale-letters");
    $(".about-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".about-span").removeClass('scale-letters');
    });
  });
  //Work hover animation
  $(".work").on('mouseenter', function(){
    $(".work-span").addClass("scale-letters");
    $(".work-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".work-span").removeClass('scale-letters');
    });
  });
  //Work click animation
  $(".work").on('click', function() {
      TweenMax.to(".door", 1.2, {rotationY:90, ease:Power1.easeInOut});
      setTimeout(function(){
        $(".door-pin1, .door-pin2").css("display","none");
        $(".door-wrapper").animate({
          width:"200%",
          height: "200vh"
        });
        TweenMax.to(".door-outter", 2,{width:"200%", height:"200%", left:0,top:0,x:0,y:0,ease:Power0.easeIn});
      },1000);
  });
});

//Main header animations
$(document).ready(function(){
  //Main headers onload animation
  $(".hello-header span").each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      $this.addClass("scale-letters-header-load");
    },70*index);
    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $this.css("transform", "scale(1)");
      $this.removeClass('scale-letters-header-load');
    });
  });
  //Main header hover animation
  $(".hello-header span").on('mouseenter', function(){
      var $this = $(this);
      $this.addClass("bounce");
      $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $this.removeClass('bounce');
      });
  });
  //Main header spans random color on hover
  $(".hello-header span").hover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("color", color);
  });
  //Bus and BigBen animation
  window.setTimeout(function(){
    TweenMax.to("#big-ben", 1,{scaleY:1, ease:Back.easeOut.config(6)});
    TweenMax.to("#london-bus", 3,{opacity:1, x:150, ease: Circ.easeOut});
  }, 3800);
});

//Logo  animation
$(document).ready(function(){
  //Logo onload animation
  $(".logo").hide().fadeIn(1000);
  //Logo hover animation
    $(".logo").on('mouseenter', function(){
          TweenMax.to(".big-rq", 2,{rotation:135, ease:Back.easeOut.config(1.7)});
          TweenMax.to(".small-rq", 2,{rotation:-40, ease:Back.easeOut.config(1.7)});
          TweenMax.to("#mb-logo", 2,{scale:0.7, ease:Back.easeOut.config(1.7)});
          //Logo text animation
          $(".logo-name span").each(function( index ) {
            var $this = $(this);
            setTimeout(function(){
              $this.addClass("scale-letters-mb");
            }, 100*index);
            $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $this.removeClass('scale-letters-mb');
                $this.css("opacity", "1");
            });
          });
    });
    $(".logo").on('mouseleave', function(){
        TweenMax.to(".big-rq", 2,{rotation:47, ease:Back.easeOut.config(1.7)});
        TweenMax.to(".small-rq", 2,{rotation:22, ease:Back.easeOut.config(1.7)});
        TweenMax.to("#mb-logo", 2,{scale:1, ease:Back.easeOut.config(3)});
    });
});

//Barba
$(document).ready(function(){
  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */

      // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */

      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 1000, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */

        _this.done();
      });
    }
  });

  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
  };
  Barba.Prefetch.init();
  Barba.Pjax.start();
});
