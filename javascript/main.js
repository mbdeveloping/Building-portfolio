
  $(".img6").hide().css("visibility","visible").fadeIn(2000);
  $(".social-links").hide().css("visibility","visible").fadeIn(2000);
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
      TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
    }, 100*index);
  });
  $workSpan.each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
    }, 100*index);
  });
  //About hover animation
  $(".about").on('mouseenter', function(){
    if ($aboutSpan.hasClass("animating-about")) {
    } else {
      $aboutSpan.addClass("scale-letters");
      $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $aboutSpan.removeClass('scale-letters');
      });
    }
  });
  //Work hover animation
  // $work.on('mouseenter', function(){
  //   $workSpan.addClass("scale-letters");
  //   $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //       $workSpan.removeClass('scale-letters');
  //   });
  // });
  $work.on('mouseenter', function(){
    if ($workSpan.hasClass("animating-about")) {
      console.log("turi calsse animating");
    } else {
      $workSpan.addClass("scale-letters");
      $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $workSpan.removeClass('scale-letters');
      });
    }
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
  var $headerSpan = $(".hello-header span:not(.based span)"),
      $basedSpan = $(".based span");
  //Main headers onload animation
  $headerSpan.each(function( index ) {
    var $this = $(this);
    setTimeout(function(){
      $this.addClass("scale-letters-header-load");
    },50*index);
    $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $this.css("transform", "scale(1)");
      $this.removeClass('scale-letters-header-load');
    });
  });

  window.setTimeout(function(){
    $basedSpan.each(function( index ) {
      var $this = $(this);
      setTimeout(function(){
        $this.addClass("scale-letters-header-load");
      },50*index);
      $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $this.css("transform", "scale(1)");
        $this.removeClass('scale-letters-header-load');
      });
    });
  }, 1400);


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
  }, 3000);
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

      //About and Work links animations
      $(document).ready(function(){
        //Declare variables
        var $work = $(".work");
        var $aboutSpan = $(".about-span");
        var $workSpan = $(".work-span");
        //About hover animation
        $(".about").on('mouseenter', function(){
          if ($aboutSpan.hasClass("animating-about")) {
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

      $(document).ready(function() {

        $(".about").on('click', function(event) {
          event.preventDefault();
          var images = $('.img-holder img'),
              count = images.length,
              transitions = 1;
          TweenMax.set(images, {autoAlpha:0});
          TweenMax.set($(".active"), {autoAlpha:1});

          function fadeImage()
          {
            var active = $(".active"),
          		next = active.next();

          	TweenMax.set(active, {autoAlpha:0, className:"-=active"});
          	TweenMax.set(next, {autoAlpha:1, className:'+=active', onComplete:nextImage});

          	transitions++;

          	console.log(transitions);
          }

          setTimeout(fadeImage,70);

          function nextImage()
          {
          	if(transitions < count)
          	{
          		setTimeout(fadeImage,70);
          	}
          	else
          	{
              $(".img13").addClass("active").css({visibility: "visible", opacity:"1"});
          		// transitions = 0;
          		// TweenMax.set(images[0], {autoAlpha:1, className:'+=active'});
          		// setTimeout(fadeImage,500);
        	}
        }
      });
      });

      //Main header animations
      $(document).ready(function(){
        //Declare variables
        var $headerSpan = $(".hello-header span");
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
        }, 3200);
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
        // $(".img13").hide().css("visibility","visible").fadeIn(2000);
        //Declare variables
        var $work = $(".work");
        var $aboutSpan = $(".about-span");
        var $workSpan = $(".work-span");
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
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      TweenMax.to(".barba-container", 1, {scale:1, onComplete: function(){deferred.resolve();}});
      TweenMax.to(".hello-header", 1, {x:550});


      var deferred = Barba.Utils.deferred();
      TweenMax.to(".about", 1, {x:100, opacity:0});
      TweenMax.to(".work", 1, {x:-100, opacity:0});
      return deferred.promise;
    },

    fadeIn: function() {

      var _this = this;
      var $el = $(this.newContainer);
      TweenMax.set(".hello-header span", {scale:1, z:0});
      TweenMax.set(".hello-header", {marginLeft:-290});


      $(this.oldContainer).hide();
      TweenMax.to(".barba-container", 1, {scale:1});
      TweenMax.to(".logo", 1, {scale:1, x:"0%",y:"0%"});
      TweenMax.to(".hello-header", 1.5, {scale:1});
      TweenMax.to(".door-outter", 1, {opacity:1});
      TweenMax.to(".door p", 1, {scale:1});
      TweenMax.to(".hello-header", 1, {marginLeft:0});
      TweenMax.to(".img13", 1, {scale:1.4, x:-100});
      var $aboutSpan = $(".about-span");
      var $workSpan = $(".work-span");
      var $work = $(".work");
      //About and Work onload animation
      $aboutSpan.each(function( index ) {
        var $this = $(this);
        $aboutSpan.addClass("animating-about");
        setTimeout(function(){
          // $this.css("transform","translateX(0)");
          TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
        }, 100*index);
      });
      $workSpan.each(function( index ) {
        var $this = $(this);
        setTimeout(function(){
          TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
        }, 100*index);
      });
      $(".about").on('mouseenter', function(){
        if ($aboutSpan.hasClass("animating-about")) {
          console.log("turi calsse animating");
        } else {
          $aboutSpan.addClass("scale-letters");
          $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $aboutSpan.removeClass('scale-letters');
          });
        }
      });
      $work.on('mouseenter', function(){
        if ($workSpan.hasClass("animating-about")) {
          console.log("turi calsse animating");
        } else {
          $workSpan.addClass("scale-letters");
          $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $workSpan.removeClass('scale-letters');
          });
        }
      });
      $el.css({
        visibility : 'visible',
        opacity : 1
      });
      _this.done();
    }
  });

  var aboutTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      TweenMax.to(".barba-container", 1, {scale:1, onComplete: function(){deferred.resolve();}});
      TweenMax.to(".hello-header", 1, {x:550});
      TweenMax.to(".img13", 1, {scale:1, x:0});

      var deferred = Barba.Utils.deferred();
      TweenMax.to(".about", 1, {x:100, opacity:0});
      TweenMax.to(".work", 1, {x:-100, opacity:0});

      return deferred.promise;
    },

    fadeIn: function() {

    $(".img13").addClass("active");
      var _this = this;
      var $el = $(this.newContainer);
      TweenMax.set(".hello-header span", {scale:1, z:0});
      TweenMax.set(".hello-header", {marginLeft:-290});
      //Backwards img
        var images = $('.img-holder img'),
            count = images.length,
            transitions = 1;
        TweenMax.set(images, {autoAlpha:0});
        TweenMax.set($(".active"), {autoAlpha:1});

        function fadeImage()
        {
          var active = $(".active"),
        		next = active.prev();

        	TweenMax.set(active, {autoAlpha:0, className:"-=active"});
        	TweenMax.set(next, {autoAlpha:1, className:'+=active', onComplete:nextImage});

        	transitions++;

        	console.log(transitions);
        }

        setTimeout(fadeImage,70);

        function nextImage()
        {
        	if(transitions < 8)
        	{
        		setTimeout(fadeImage,70);
        	}
        	else
        	{
            $(".img6").addClass("active").css({visibility: "visible", opacity:"1"});
      	}
      }

      $(this.oldContainer).hide();
      TweenMax.to(".barba-container", 1, {scale:1});
      TweenMax.to(".logo", 1, {scale:1, x:"0%",y:"0%"});
      TweenMax.to(".hello-header", 1.5, {scale:1});
      TweenMax.to(".door-outter", 1, {opacity:1});
      TweenMax.to(".door p", 1, {scale:1});
      TweenMax.to(".hello-header", 1, {marginLeft:0});

      var $aboutSpan = $(".about-span");
      var $workSpan = $(".work-span");
      var $work = $(".work");
      //About and Work onload animation
      $aboutSpan.each(function( index ) {
        var $this = $(this);
        $aboutSpan.addClass("animating-about");
        setTimeout(function(){
          // $this.css("transform","translateX(0)");
          TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
        }, 100*index);
      });
      $workSpan.each(function( index ) {
        var $this = $(this);
        setTimeout(function(){
          TweenMax.to($this, .5, {x:0, onComplete: function(){$aboutSpan.removeClass('animating-about');}});
        }, 100*index);
      });
      $(".about").on('mouseenter', function(){
        if ($aboutSpan.hasClass("animating-about")) {
          console.log("turi calsse animating");
        } else {
          $aboutSpan.addClass("scale-letters");
          $aboutSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $aboutSpan.removeClass('scale-letters');
          });
        }
      });
      $work.on('mouseenter', function(){
        if ($workSpan.hasClass("animating-about")) {
          console.log("turi calsse animating");
        } else {
          $workSpan.addClass("scale-letters");
          $workSpan.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $workSpan.removeClass('scale-letters');
          });
        }
      });
      $el.css({
        visibility : 'visible',
        opacity : 1
      });
      _this.done();
    }
  });

  /**
   * Next step, you have to tell Barba to use the new Transition
   */

  Barba.Pjax.getTransition = function() {
    var transitionObj = FadeTransition;
    if (Barba.HistoryManager.prevStatus().namespace === 'about') {
      transitionObj = aboutTransition;
    }
    return transitionObj;
  };

});

//
// $(document).ready(function() {
//
//   $(".about").on('click', function(event) {
//     event.preventDefault();
//     var images = $('.img-holder img'),
//         count = images.length,
//         transitions = 1;
//     TweenMax.set(images, {autoAlpha:0});
//     TweenMax.set($(".active"), {autoAlpha:1});
//
//     function fadeImage()
//     {
//       var active = $(".active"),
//     		next = active.next();
//
//     	TweenMax.set(active, {autoAlpha:0, className:"-=active"});
//     	TweenMax.set(next, {autoAlpha:1, className:'+=active', onComplete:nextImage});
//
//     	transitions++;
//
//     	console.log(transitions);
//     }
//
//     setTimeout(fadeImage,70);
//
//     function nextImage()
//     {
//     	if(transitions < count)
//     	{
//     		setTimeout(fadeImage,70);
//     	}
//     	else
//     	{
//         $(".img13").addClass("active").css({visibility: "visible", opacity:"1"});
//     		// transitions = 0;
//     		// TweenMax.set(images[0], {autoAlpha:1, className:'+=active'});
//     		// setTimeout(fadeImage,500);
//   	}
//   }
// });
// });
