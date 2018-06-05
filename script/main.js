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
      e.preventDefault();

      if (!navBtn.hasClass('navigation-open')) {
        navBtn.addClass('navigation-open');
        TweenMax.to(leftStickBot, .3, {rotation: -45, onComplete:function() {
          TweenMax.to(leftStickBot,.3, {x: -5});
          TweenMax.to(leftStickTop, .3, {x: -5});
          TweenMax.to(rightStickTop, .3, {x: 5});
          TweenMax.to(rightStickBot, .3, {x: 5});
          TweenMax.to(stickMiddle, .3, {height: '140%'});
        }});
        TweenMax.to(leftStickTop, .3, {rotation: 45});
        TweenMax.to(rightStickTop, .3, {rotation: -45});
        TweenMax.to(rightStickBot, .3, {rotation: 45});
      } else {
        navBtn.removeClass('navigation-open');
        TweenMax.to(stickMiddle, .3, {height: '0%'});
        TweenMax.to(leftStickBot,.3, {x: 0});
        TweenMax.to(leftStickTop, .3, {x: 0});
        TweenMax.to(rightStickTop, .3, {x: 0});
        TweenMax.to(rightStickBot, .3, {x: 0, onComplete:function() {
          TweenMax.to(leftStickBot, .3, {rotation: 0});
          TweenMax.to(leftStickTop, .3, {rotation: 0});
          TweenMax.to(rightStickTop, .3, {rotation: 0});
          TweenMax.to(rightStickBot, .3, {rotation: 0});
        }});
      }
    }
    navBtn.on('click', navBtnAnimation);
  }())
})
