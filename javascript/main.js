  $(document).ready(function(){
    $(".logo").hide().fadeIn(1000);
  // $(".about").css("left", "-10%");
  // $(".about").animate({left:"0"},6000);
  // $(".work").css("right", "-10%");
  // $(".work").animate({right:"0"},6000);
  // $("h1").hide().fadeIn(1000);
  // window.setTimeout(function(){
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
// }, 6000);

  $(".about").on('mouseenter', function(){
    console.log("working");
    $(".about-span").addClass("scale-letters");
    $(".about-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".about-span").removeClass('scale-letters');
    });
  });

TweenMax.set(".door", {transformPerspective:300});
      setTimeout(function(){
        $(".door-outter").css("opacity","1");
      },3000);
      setTimeout(function(){

        // $(".door").addClass("onload-door");
        // $(".door").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        //     $(".door").removeClass('onload-door');
        //     });

        // TweenMax.to(".door", 1.5, {rotationY:13, ease:Power1.easeInOut, repeat:1, yoyo:true});
        //   $(".door").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        //         $(".door").removeClass('door-open');
        //     });
      },3500);

      $(".door-wrapper").on('mouseenter', function(){
        TweenMax.to(".door", 0.7, {rotationY:13, ease:Power1.easeInOut});

        // $(".work span").addClass("work-span-door-hover");
        // $(".work span").css("fontSize","40px");
      });
      $(".door-wrapper").on('mouseleave', function(){
        // $(".work span").removeClass("work-span-door-hover");
        // $(".work span").css("fontSize","20px");
        TweenMax.to(".door", 0.7, {rotationY:0, ease:Power1.easeInOut});
      });

      $(".work").on('click', function() {
        if ($(".door").hasClass("hover-door")) {
          $(".door").removeClass("hover-door");


              // $(".door").addClass("full-open");
              TweenMax.to(".door", 0.5,{rotationY:90, perspective:400,ease:Power0.easeIn});


          setTimeout(function(){
            // TweenMax.to(".door-outter", 2,{scale:,ease:Power0.easeInOut});
            $(".door-pin1, .door-pin2").css("display","none");
            $(".door").css("opacity","0");
            // $(".door").css("transform","perspective(400px) rotateY(90deg)");

            // $(".door-wrapper, .door").css({
            //   width:"200%",
            //     height: "200vh"
            // });
            $(".door-wrapper").animate({
              width:"200%",
              height: "200vh"
            });
            TweenMax.to(".door-outter", 2,{width:"200%", height:"200%", left:0,top:0,x:0,y:0,ease:Power0.easeIn});
          },1000);
        } else {
          $(".door").addClass("full-open");
          setTimeout(function(){
            // TweenMax.to(".door-outter", 2,{scale:,ease:Power0.easeInOut});
            $(".door-pin1, .door-pin2").css("display","none");
            $(".door").css("opacity","0");
            // $(".door-wrapper, .door").css({
            //   width:"200%",
            //     height: "200vh"
            // });
            $(".door-wrapper").animate({
              width:"200%",
              height: "200vh"
            });
            TweenMax.to(".door-outter", 2,{width:"200%", height:"200%", left:0,top:0,x:0,y:0,ease:Power0.easeIn});
          },1000);
        }

      })

      // setTimeout(function(){
      //     TweenMax.to(".gradient", 6,{width:3000, height:3000,ease:Power2.ease,opacity:0, overwrite: 'all'});
      // },4000);



  $(".work").on('mouseenter', function(){
    $(".work-span").addClass("scale-letters");
    $(".work-span").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".work-span").removeClass('scale-letters');
    });
    // TweenMax.to(".door", 1,{perspective:70,rotationY:-13, ease:Power2.ease});
    // $(".door").addClass("door-open");
    // $(".door").css("transform","perspective(300px) rotateY(13deg)");
  });
  $(".work").on('mouseleave', function(){
    // $(".door").removeClass("door-open");
    // $(".door").css("transform","perspective(0) rotateY(0)");
  });


  //   $(".logo-name span").each(function( index ) {
  //     var $this = $(this);
  //     setTimeout(function(){
  //       $this.addClass("scale-letters-mb");
  //     }, 100*index);
  //     $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //         $this.removeClass('scale-letters-mb');
  //         $this.css("opacity", "1");
  //     });
  //   });
  //   TweenMax.to(".big-rq", 1.5,{opacity:1,rotation:47, scale:1,x:87,y:-40, ease:Back.easeOut.config(1.7), overwrite: 'all'});
  //   TweenMax.to(".small-rq", 1.5,{opacity:1,rotation:22, scale:1,x:-60,y:-30, ease:Back.easeOut.config(1.7), overwrite: 'all'});
  //
  // window.setTimeout(function(){
  //   TweenMax.to("#mb-logo", 1.5,{opacity:1,scale:1,y:-30, ease:Back.easeOut.config(3), overwrite: 'all'});
  // }, 200);

  // window.setTimeout(function(){
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
  // }, 1000);

  $(".hello-header span").on('mouseenter', function(){
      var $this = $(this);

      $this.addClass("bounce");
      $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $this.removeClass('bounce');
      });

  });

  window.setTimeout(function(){
    TweenMax.to("#big-ben", 1,{scaleY:1, ease:Back.easeOut.config(6)});
    TweenMax.to("#london-bus", 3,{opacity:1, x:150, ease: Circ.easeOut});
  }, 3800);

//Generate random color on hover span
$(document).ready(function(){
  $(".hello-header span").hover(function(){
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb("+r+","+g+","+b+")"
      $(this).css("color", color);
  });
});



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

$(document).ready(function(){
    $(".logo").on('mouseenter', function(){
          TweenMax.to(".big-rq", 2,{rotation:135, ease:Back.easeOut.config(1.7)});
          TweenMax.to(".small-rq", 2,{rotation:-40, ease:Back.easeOut.config(1.7)});
          TweenMax.to("#mb-logo", 2,{scale:0.7, ease:Back.easeOut.config(1.7)});
    });
    $(".logo").on('mouseleave', function(){
          TweenMax.to(".big-rq", 2,{rotation:47, ease:Back.easeOut.config(1.7)});
          TweenMax.to(".small-rq", 2,{rotation:22, ease:Back.easeOut.config(1.7)});
          TweenMax.to("#mb-logo", 2,{scale:1, ease:Back.easeOut.config(3)});
      });
});

// $(document).ready(function(){
//     $("#london-bus").on('mouseenter', function(){
//       var $this = $(this);
//       $this.addClass("bounce");
//       $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//           $this.removeClass('bounce');
//       });
//     });
// });





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
