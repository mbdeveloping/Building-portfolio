$(document).ready(function() {
  //HOME PAGE rules
  (function() {
    const homeLinks = $('.home-page-link');
    const socialLinks = document.getElementById('social-links');
    const leftNavOverlay = document.getElementById('left-nav-overlay');
    const rightNavOverlay = document.getElementById('right-nav-overlay');
    //Home page load animation
    (function() {
        const socialLinks = document.getElementById('social-links');
        const leftNavOverlay = document.getElementById('left-nav-overlay');
        const rightNavOverlay = document.getElementById('right-nav-overlay');
        // const homeLinks = $('.home-page-link');

        function hideLinks() {
          TweenMax.set(socialLinks, {y:'100%'});
          TweenMax.set([leftNavOverlay, rightNavOverlay],{width: '0%', ease: Bounce.easeOut});
          TweenMax.set(homeLinks, {color: 'rgba(255, 255, 255, 0)'});
        }
        //SlideIn work/about, social links
        function slieInLinks() {
          TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {width: '5%', ease: Bounce.easeOut});
          TweenMax.to(socialLinks, .5, {y:'0%'});
          TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
        }
        //Home page resize queries
        function fromMobileToDesktopSize(x) {
            if (x.matches) {
              slieInLinks();
            } else {
              hideLinks();
            }
        }
        var x = window.matchMedia("(min-width: 1024px)");
        fromMobileToDesktopSize(x);
        x.addListener(fromMobileToDesktopSize);
      //Home page header animation
      const navBar = $('#nav-bar');
      const homeBgImg = $('#img-holder img');
      const bigBen = $('#big-ben');
      const londonBus = $('#london-bus');

      function fadeInHeaderText() {
        const headerSpan = $('#home-header-word-line-wrapper span');
        TweenMax.staggerFromTo( headerSpan, 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1}, 0.08 );
        TweenMax.staggerFromTo( headerSpan, 0.1, {scale:4}, {scale:1}, 0.08 );
      }
    TweenMax.to(navBar, .5, {y:'0%', onComplete:function(){
      fadeInHeaderText();
    }});
    TweenMax.to(homeBgImg, 8, {opacity:1});
    setTimeout(function() {
      TweenMax.fromTo(bigBen, 1, {opacity:0, rotation:-45}, {opacity:1, rotation:0,ease: Elastic.easeOut.config(1, 0.3)});
      TweenMax.fromTo(londonBus, 1, {opacity:0, x:-100}, {opacity:1, x:0,ease: Power4.easeOut});
    }, 4400);
    }());
    //Home header hover animation
    (function() {
      const headerSpan = $('#home-header-word-line-wrapper span');
      function spanAnimation() {
        const element = $(this);
        TweenMax.to(element, .2, {y:-10, onComplete:function() {
          TweenMax.to(element, .1, {y:0});
        }});
      }
      function changeSpanColor() {
        const element = $(this);
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const color = "rgb("+r+","+g+","+b+")";
        TweenMax.set(element, {color: color});
      }
      // headerSpan.hover(changeSpanColor);
      headerSpan.on('mouseover', spanAnimation);
    })();
    //Home main links hover animation
    (function() {
      const workLink = $('#works');
      const aboutLink = $('#about-me');

      function startLinkAnimation() {
        TweenMax.to($(this).find('span'), .3, {padding:'.5rem 1rem'});
      }
      function endLinkAnimation() {
        TweenMax.to($(this).find('span'), .3, {padding:'0rem 1rem'});
      }
      workLink.on('mouseover', startLinkAnimation);
      workLink.on('mouseleave', endLinkAnimation);
      aboutLink.on('mouseover', startLinkAnimation);
      aboutLink.on('mouseleave', endLinkAnimation);
    }());
    //Navigation button rules
    (function() {
      const navBtn = $('#nav-btn');
      //Navigation animation
      function navAnimation(e) {
        const leftStickBot = $('.left-nav-stick-bot');
        const leftStickTop = $('.left-nav-stick-top');
        const rightStickTop = $('.right-nav-stick-top');
        const rightStickBot = $('.right-nav-stick-bot');
        const stickMiddle = $('.nav-stick-middle');
        const homeMain = document.getElementById('home-main');

        e.preventDefault();
        function openNav() {
          navBtn.addClass('navigation-open');
          TweenMax.to(leftStickBot, .3, {rotation: -45, onComplete:function() {
            TweenMax.to(stickMiddle, .3, {height: '140%'});
            TweenMax.to([leftStickBot, leftStickTop],.3, {x: -5});
            TweenMax.to([rightStickTop, rightStickBot], .3, {x: 5});
          }});
          TweenMax.to([leftStickTop, rightStickBot], .3, {rotation: 45});
          TweenMax.to(rightStickTop, .3, {rotation: -45});
          TweenMax.to(homeMain, .3, {scale: 0.8});
          TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {width: '50%', ease: Bounce.easeOut});
          TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
          TweenMax.to(socialLinks, .3, {y:'0%'});
        }
        function closeNav() {
          navBtn.removeClass('navigation-open');
          TweenMax.to(stickMiddle, .3, {height: '0%'});
          TweenMax.to([rightStickBot, leftStickBot, leftStickTop, rightStickTop], .3, {x: 0});
          TweenMax.to([leftStickBot, leftStickTop, rightStickTop, rightStickBot], .3, {rotation: 0});
          TweenMax.to(homeMain, .3, {scale: 1});
          TweenMax.to([leftNavOverlay, rightNavOverlay], .3, {width: '0'});
          TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
          TweenMax.to(socialLinks, .3, {y:'100%'});
        }
        if (!navBtn.hasClass('navigation-open')) {
          openNav();
        } else {
          closeNav();
        }
      }
      navBtn.on('click touchstart', navAnimation);
    }());
  }());
})
