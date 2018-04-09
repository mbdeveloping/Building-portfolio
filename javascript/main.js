  $(document).ready(function(){
  $(".about").css("left", "-10%");
  $(".about").animate({left:"0"},1000);
  $(".work").css("right", "-10%");
  $(".work").animate({right:"0"},1000);
  $("nav").css("top", "-10%");
  $("nav").animate({top:"0"},1000);
  $("h1").hide().fadeIn(1000);

  $(".about").on('mouseenter', function(){
    console.log("working");
    $(".about-span").addClass("scale-letters");
    $(".about-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".about-span").removeClass('scale-letters');
    });
  });

  $(".work").on('mouseenter', function(){
    $(".work-span").addClass("scale-letters");
    $(".work-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".work-span").removeClass('scale-letters');
    });
  });

  window.setTimeout(function(){
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
    TweenMax.to(".big-rq", 1.5,{opacity:1,rotation:47, scale:1,x:87,y:-40, ease:Back.easeOut.config(1.7), overwrite: 'all'});
    TweenMax.to(".small-rq", 1.5,{opacity:1,rotation:22, scale:1,x:-60,y:-30, ease:Back.easeOut.config(1.7), overwrite: 'all'});
  }, 1000);
  window.setTimeout(function(){
    TweenMax.to("#mb-logo", 1.5,{opacity:1,scale:1,y:0-30, ease:Back.easeOut.config(3), overwrite: 'all'});
  }, 1200);



  $(".logo").on('mouseenter', function(){
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



// $(".about-span").on('mouseenter', function(){
//   var el = $(this);
//   $(this).addClass(' scale-letters');
//   $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//       el.removeClass('scale-letters');
//   });
// });

// $(".about").on('click', function(){
//
//   TweenMax.to(".overlay", 1,{scaleX:1,transformOrigin:"left", ease:Expo.easeIn, overwrite: 'all'});
//   setInterval(function(){ TweenMax.to(".overlay", 1,{scaleX:0,transformOrigin:"right", ease:Expo.easeOut, overwrite: 'all',}); }, 2000);
//
//
// })
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
