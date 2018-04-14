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
  //Declare variables
  var $work = $(".work");
  var $aboutSpan = $(".about-span");
  var $workSpan = $(".work-span");
  //About and Work onload animation
  $aboutSpan.each(function( index ) {
    var $this = $(this);
    $aboutSpan.addClass("animating-about");
    setTimeout(function(){
      $this.css("transform","translateX(0)");
      // TweenMax.to($this, .5, {x:0});
    }, 100*index);
    $aboutSpan.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
        $aboutSpan.removeClass('animating-about');
    });
  });
  $workSpan.each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      $this.css("transform","translateX(0)");
    }, 100*index);
  });
  //About hover animation
  $(".about").on('mouseenter', function(){
    if ($aboutSpan.hasClass("animating-about")) {
      console.log("veikia");
    } else {
      $aboutSpan.addClass("scale-letters");
      $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $aboutSpan.removeClass('scale-letters');
      });
    }
  });
  //Work hover animation
  $work.on('mouseenter', function(){
    $workSpan.addClass("scale-letters");
    $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $workSpan.removeClass('scale-letters');
    });
  });
  //Work click animation
  $work.on('click', function() {
      TweenMax.to(".door", 1, {rotationY:90, ease:Power1.easeInOut});
      setTimeout(function(){
        $(".door-pin1, .door-pin2").css("display","none");
        $(".door-wrapper").animate({
          width:"200%",
          height: "200vh"
        });
        $(".door").css("opacity", "0");
        TweenMax.to(".door-outter", 1.7,{width:"200%", height:"200%",zIndex:100, left:0,top:0,x:0,y:0,ease:Power0.easeIn});
      },1000);
  });
});

//Main header animations
$(document).ready(function(){
  //Declare variables
  var $headerSpan = $(".hello-header span");
  //Main headers onload animation
  $headerSpan.each(function( index ) {
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
  $headerSpan.on('mouseenter', function(){
      var $this = $(this);
      $this.addClass("bounce");
      $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $this.removeClass('bounce');
      });
  });
  //Main header spans random color on hover
  $headerSpan.hover(function(){
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
  //Declare variables
  $logo = $(".logo");
  //Logo onload animation
  $logo.hide().fadeIn(1000);
  //Logo hover animation
    $logo.on('mouseenter', function(){
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
    $logo.on('mouseleave', function(){
        TweenMax.to(".big-rq", 2,{rotation:47, ease:Back.easeOut.config(1.7)});
        TweenMax.to(".small-rq", 2,{rotation:22, ease:Back.easeOut.config(1.7)});
        TweenMax.to("#mb-logo", 2,{scale:1, ease:Back.easeOut.config(3)});
    });
});

//Barba
$(document).ready(function(){
  var Homepage = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
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
        //Declare variables
        var $work = $(".work");
        var $aboutSpan = $(".about-span");
        var $workSpan = $(".work-span");
        //About and Work onload animation
        $aboutSpan.each(function( index ) {
          var $this = $(this);
          $aboutSpan.addClass("animating-about");
          setTimeout(function(){
            $this.css("transform","translateX(0)");
            // TweenMax.to($this, .5, {x:0});
          }, 100*index);
          $aboutSpan.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
              $aboutSpan.removeClass('animating-about');
          });
        });
        $workSpan.each(function( index ) {
          var $this = $(this);
          setTimeout(function(){
            $this.css("transform","translateX(0)");
          }, 100*index);
        });
        //About hover animation
        $(".about").on('mouseenter', function(){
          if ($aboutSpan.hasClass("animating-about")) {
            console.log("veikia");
          } else {
            $aboutSpan.addClass("scale-letters");
            $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $aboutSpan.removeClass('scale-letters');
            });
          }
        });
        //Work hover animation
        $work.on('mouseenter', function(){
          $workSpan.addClass("scale-letters");
          $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $workSpan.removeClass('scale-letters');
          });
        });
        //Work click animation
        $work.on('click', function() {
            TweenMax.to(".door", 1, {rotationY:90, ease:Power1.easeInOut});
            setTimeout(function(){
              $(".door-pin1, .door-pin2").css("display","none");
              $(".door-wrapper").animate({
                width:"200%",
                height: "200vh"
              });
              $(".door").css("opacity", "0");
              TweenMax.to(".door-outter", 1.7,{width:"200%", height:"200%",zIndex:100, left:0,top:0,x:0,y:0,ease:Power0.easeIn});
            },1000);
        });
      });

      //Main header animations
      $(document).ready(function(){
        //Declare variables
        var $headerSpan = $(".hello-header span");
        //Main headers onload animation
        $headerSpan.each(function( index ) {
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
        $headerSpan.on('mouseenter', function(){
            var $this = $(this);
            $this.addClass("bounce");
            $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $this.removeClass('bounce');
            });
        });
        //Main header spans random color on hover
        $headerSpan.hover(function(){
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
        //Declare variables
        $logo = $(".logo");
        //Logo hover animation
          $logo.on('mouseenter', function(){
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
          $logo.on('mouseleave', function(){
              TweenMax.to(".big-rq", 2,{rotation:47, ease:Back.easeOut.config(1.7)});
              TweenMax.to(".small-rq", 2,{rotation:22, ease:Back.easeOut.config(1.7)});
              TweenMax.to("#mb-logo", 2,{scale:1, ease:Back.easeOut.config(3)});
          });
      });
  },
  onEnterCompleted: function() {
      // The Transition has just finished.

  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.

  }
});

var Aboutpage = Barba.BaseView.extend({
  namespace: 'about',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
      //About and Work links animations
      $(document).ready(function(){
        //Declare variables
        var $work = $(".work");
        var $aboutSpan = $(".about-span");
        var $workSpan = $(".work-span");
        //About and Work onload animation
        $aboutSpan.each(function( index ) {
          var $this = $(this);
          $aboutSpan.addClass("animating-about");
          setTimeout(function(){
            $this.css("transform","translateX(0)");
            // TweenMax.to($this, .5, {x:0});
          }, 100*index);
          $aboutSpan.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
              $aboutSpan.removeClass('animating-about');
          });
        });
        $workSpan.each(function( index ) {
          var $this = $(this);
          setTimeout(function(){
            $this.css("transform","translateX(0)");
          }, 100*index);
        });
        //About hover animation
        $(".about").on('mouseenter', function(){
          if ($aboutSpan.hasClass("animating-about")) {
            console.log("veikia");
          } else {
            $aboutSpan.addClass("scale-letters");
            $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $aboutSpan.removeClass('scale-letters');
            });
          }
        });
        //Work hover animation
        $work.on('mouseenter', function(){
          $workSpan.addClass("scale-letters");
          $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $workSpan.removeClass('scale-letters');
          });
        });
        //Work click animation
        $work.on('click', function() {
            TweenMax.to(".door", 1, {rotationY:90, ease:Power1.easeInOut});
            setTimeout(function(){
              $(".door-pin1, .door-pin2").css("display","none");
              $(".door-wrapper").animate({
                width:"200%",
                height: "200vh"
              });
              $(".door").css("opacity", "0");
              TweenMax.to(".door-outter", 1.7,{width:"200%", height:"200%",zIndex:100, left:0,top:0,x:0,y:0,ease:Power0.easeIn});
            },1000);
        });
      });
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
      //About and Work links animations

  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

Aboutpage.init();
Homepage.init();
  Barba.Pjax.init();
  Barba.Prefetch.init();

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

      // return $(this.oldContainer).animate({ opacity: 0 }).promise();
      var deferred = Barba.Utils.deferred();
      //About and Work onload animation
      var $aboutSpan = $(".about-span");
      //About and Work onload animation
      $aboutSpan.each(function( index ) {
        var $this = $(this);
        $aboutSpan.addClass("animating-about");
        setTimeout(function(){
          console.log("NEveikia");
          $this.css("transform","translateX(-40px)");
          // TweenMax.to($this, .5, {x:-40});
        }, 100*index);
        $aboutSpan.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
            $aboutSpan.removeClass('animating-about');
        });
      });

      TweenMax.to(".hello", 1, {x:-100, opacity:0});
      TweenMax.to(".iam", 1, {x:100, opacity:0});
      TweenMax.to(".developer", 1, {x:-100, opacity:0});
      TweenMax.to(".based", 1, {x:100, opacity:0});

      TweenMax.to(".about", 1, {x:-100, opacity:0});
      TweenMax.to(".work", 1, {x:100, opacity:0});

      TweenMax.to(".door-wrapper", .5, {opacity:0});
      TweenMax.to("#london-bus", .5, {x:400, opacity:0});
      TweenMax.to("#big-ben", .5, {scaleY:0});








      // TweenMax.to(".about", .5, {
      //   x: -40,
      //   onComplete: function() {
      //     deferred.resolve();
      //   }
      // });

       setTimeout(function(){
          deferred.resolve();
       }, 500);
      return deferred.promise;

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

});
