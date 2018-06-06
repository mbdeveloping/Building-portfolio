$(document).ready(function() {
  //HOME PAGE rules
  (function() {
    //Navigation button rules
    const navBtn = $('#nav-btn');

    function navBtnAnimation(e) {
      const leftStickBot = $('.left-nav-stick-bot');
      const leftStickTop = $('.left-nav-stick-top');
      const rightStickTop = $('.right-nav-stick-top');
      const rightStickBot = $('.right-nav-stick-bot');
      const stickMiddle = $('.nav-stick-middle');
      const homeLinks = $('.home-page-link');
      const socialLinks = $('#social-links');

      e.preventDefault();

      if (!navBtn.hasClass('navigation-open')) {
        navBtn.addClass('navigation-open');
        TweenMax.to(leftStickBot, .3, {rotation: -45, onComplete:function() {
          TweenMax.to([leftStickBot, leftStickTop],.3, {x: -5});
          TweenMax.to([rightStickTop, rightStickBot], .3, {x: 5});
          TweenMax.to(stickMiddle, .3, {height: '140%'});
        }});
        TweenMax.to([leftStickTop, rightStickBot], .3, {rotation: 45});
        TweenMax.to(rightStickTop, .3, {rotation: -45});
        TweenMax.to($('#home-main'), .3, {scale: 0.8});
        TweenMax.to($('#left-nav-overlay'), 1, {width: '50%', ease: Bounce.easeOut});
        TweenMax.to($('#right-nav-overlay'), 1, {width: '50%', ease: Bounce.easeOut});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
        TweenMax.to(socialLinks, .3, {y:'0%'});
      } else {
        navBtn.removeClass('navigation-open');
        TweenMax.to(stickMiddle, .3, {height: '0%'});
        TweenMax.to([rightStickBot, leftStickBot, leftStickTop, rightStickTop], .3, {x: 0, onComplete:function() {
          TweenMax.to([leftStickBot, leftStickTop, rightStickTop, rightStickBot], .3, {rotation: 0});
        }});
        TweenMax.to($('#home-main'), .3, {scale: 1});
        TweenMax.to($('#left-nav-overlay'), .3, {width: '0'});
        TweenMax.to($('#right-nav-overlay'), .3, {width: '0'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
        TweenMax.to(socialLinks, .3, {y:'100%'});
      }
    }
    navBtn.on('click', navBtnAnimation);
  }())
})
