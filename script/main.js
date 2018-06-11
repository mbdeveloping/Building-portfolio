$(document).ready(function() {
  //HOME PAGE RULES
  (function() {
    const homeLinks = $('.home-page-link');
    const socialLinks = document.getElementById('social-links');
    const leftNavOverlay = document.getElementById('left-nav-overlay');
    const rightNavOverlay = document.getElementById('right-nav-overlay');
    const media = window.matchMedia("(min-width: 1024px)");
    const navBar = $('#nav-bar');
    const homeBgFirstImg = $('#first-img');
    const bigBen = $('#big-ben');
    const londonBus = $('#london-bus');
    const headerSpan = $('#home-header-word-line-wrapper span');
    const navBtn = $('#nav-btn');
    const workLink = $('#works');
    const aboutLink = $('#about-me');
    const leftStickBot = $('.left-nav-stick-bot');
    const leftStickTop = $('.left-nav-stick-top');
    const rightStickTop = $('.right-nav-stick-top');
    const rightStickBot = $('.right-nav-stick-bot');
    const stickMiddle = $('.nav-stick-middle');
    const homeMain = document.getElementById('home-main');
    const homeAllImg = $('#img-holder img');

    //Home page load animation
    function hideLinks() {
      TweenMax.set(socialLinks,{y:'100%'});
      TweenMax.to([leftNavOverlay, rightNavOverlay],.3, {width: '0%', ease: Bounce.easeOut});
      TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
    }
    function slieInLinks() {
      TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {width: '5%', ease: Bounce.easeOut});
      TweenMax.to(socialLinks, .5, {y:'0%'});
      TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
    }
    function fadeInHeaderText() {
      TweenMax.staggerFromTo( headerSpan, 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1}, 0.08 );
      TweenMax.staggerFromTo( headerSpan, 0.1, {scale:4}, {scale:1}, 0.08 );
      setTimeout(function() {
        TweenMax.fromTo(bigBen, 1, {opacity:0, rotation:-45}, {opacity:1, rotation:0,ease: Elastic.easeOut.config(1, 0.3)});
        TweenMax.fromTo(londonBus, 1, {opacity:0, x:-100}, {opacity:1, x:0,ease: Power4.easeOut});
      }, 3900);
    }
    function slideInNavBar() {
      TweenMax.to(navBar, .5, {y:'0%', onComplete:function(){
        fadeInHeaderText();
      }});
    }
    function fadeInBgImg(){
      TweenMax.to(homeBgFirstImg, 8, {opacity:1});
    }
    //Home header hover animation
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
    //Home main links hover animation
    function startLinkAnimation() {
      TweenMax.to($(this).find('span'), .3, {padding:'.5rem 1rem'});
    }
    function endLinkAnimation() {
      TweenMax.to($(this).find('span'), .3, {padding:'0rem 1rem'});
    }
    //Navigation rules
    function openNav() {
      navBtnOpen();
      TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {width: '50%', ease: Bounce.easeOut});
      TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
      TweenMax.to(socialLinks, .3, {y:'0%'});
      zoomOutBg();
    }
    function closeNav() {
      navBtnClose();
      TweenMax.to([leftNavOverlay, rightNavOverlay], .3, {width: '0'});
      TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
      TweenMax.to(socialLinks, .3, {y:'100%'});
      zoomInBg();
    }
    function navBtnClose(){
      navBtn.removeClass('navigation-open');
      TweenMax.to(stickMiddle, .3, {height: '0%'});
      TweenMax.to([rightStickBot, leftStickBot, leftStickTop, rightStickTop], .3, {x: 0});
      TweenMax.to([leftStickBot, leftStickTop, rightStickTop, rightStickBot], .3, {rotation: 0});
    }
    function navBtnOpen() {
      navBtn.addClass('navigation-open');
      TweenMax.to(leftStickBot, .3, {rotation: -45, onComplete:function() {
        TweenMax.to(stickMiddle, .3, {height: '140%'});
        TweenMax.to([leftStickBot, leftStickTop],.3, {x: -5});
        TweenMax.to([rightStickTop, rightStickBot], .3, {x: 5});
      }});
      TweenMax.to([leftStickTop, rightStickBot], .3, {rotation: 45});
      TweenMax.to(rightStickTop, .3, {rotation: -45});
    }
    function zoomInBg(){
      TweenMax.to(homeMain, .3, {scale: 1});
    }
    function zoomOutBg(){
      TweenMax.to(homeMain, .3, {scale: 0.8});
    }
    function navAnimation(e) {
      e.preventDefault();
      if (!navBtn.hasClass('navigation-open')) {
        openNav();
      } else {
        closeNav();
      }
    }
    //Home page resize queries
    function fromMobileToDesktopSize(media) {
        if (media.matches) {
          slieInLinks();
          navBtnClose();
          zoomInBg();
        } else {
          hideLinks();
        }
    }
    //Home page events
    media.addListener(fromMobileToDesktopSize);
    navBtn.on('click touchstart', navAnimation);
    workLink.on('mouseover', startLinkAnimation);
    workLink.on('mouseleave', endLinkAnimation);
    aboutLink.on('mouseover', startLinkAnimation);
    aboutLink.on('mouseleave', endLinkAnimation);
    // headerSpan.hover(changeSpanColor);
    headerSpan.on('mouseover', spanAnimation);
    aboutLink.on('click', function() {
      // closeNav();
      TweenMax.staggerTo( homeAllImg, .1, {autoAlpha:1}, .1);
    });
    workLink.on('click', function() {
      TweenMax.staggerTo( $('.animate-back'), .1, {autoAlpha:0}, -.1);
    })
    //Home page function call
    slideInNavBar();
    fadeInBgImg();
    fromMobileToDesktopSize(media);
    //BARBA.JS TRANSITIONS

  }());
  //ABOUT PAGE RULES
  (function() {

  }());
  //WORKS PAGE RULES
  (function() {

  }())
})
