//HOME PAGE RULES
  (function() {
    const homeLinks = document.querySelectorAll('.home-page-link');
    const socialLinks = document.getElementById('social-links');
    const leftNavOverlay = document.getElementById('left-nav-overlay');
    const rightNavOverlay = document.getElementById('right-nav-overlay');
    const media = window.matchMedia("(min-width: 1024px)");
    const navBar = document.getElementById('nav-bar');
    const bigBen = document.getElementById('big-ben');
    const londonBus = document.getElementById('london-bus');
    const headerSpan = document.querySelectorAll('#home-header-word-line-wrapper span');
    const headerSpanWrapper = document.querySelector('#home-header-word-line-wrapper');
    const navBtn = document.getElementById('nav-btn');
    const workLink = document.getElementById('works');
    const aboutLink = document.getElementById('about-me');
    const leftStickBot = document.querySelector('.left-nav-stick-bot');
    const leftStickTop = document.querySelector('.left-nav-stick-top');
    const rightStickTop = document.querySelector('.right-nav-stick-top');
    const rightStickBot = document.querySelector('.right-nav-stick-bot');
    const stickMiddle = document.querySelector('.nav-stick-middle');
    const homeMain = document.getElementById('home-main');
    const homeAllImg = document.getElementById('img-holder img');
    const pageBody = document.querySelector('body');
    const parallaxWrapper = document.getElementById('parallax-wrapper-outter');
    let pcImg = document.getElementById('bg-pc');

    //On page load fadein home page background image
    function onLoadFadeInHomeImg() {
      TweenMax.to(parallaxWrapper, 5, {delay:.3,opacity:1});
    }
    //Add class for all header spans
    function addClassForAllSpans() {
      headerSpan.forEach(function(span) {
        span.className = 'testSpan'
      });
    }
    //Hide Works, About, social links
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
    //On page load header text animation
    function fadeInHeaderText() {
      TweenMax.staggerFromTo( headerSpan, 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1}, 0.08 );
      TweenMax.staggerFromTo( headerSpan, 0.1, {scale:4}, {scale:1}, 0.08, bigBenAndBus);
      function bigBenAndBus() {
        TweenMax.fromTo(bigBen, 1, {opacity:0, rotation:-45}, {opacity:1, rotation:0,ease: Elastic.easeOut.config(1, 0.3)});
          TweenMax.fromTo(londonBus, 1, {opacity:0, x:-100}, {opacity:1, x:0,ease: Power4.easeOut});
      }
    }
    //Slide nav bar from the op
    function slideInNavBar() {
      TweenMax.to(navBar, .5, {y:'0%', onComplete:function(){
        fadeInHeaderText();
      }});
    }
    //Home header hover animation
    function spanAnimation(e) {
      const element = e.target;

      if (element.className === 'testSpan') {
        TweenMax.to(element, .2, {y:-10, onComplete:function() {
          TweenMax.to(element, .1, {y:0});
        }});
        changeSpanColor(e);
      }
    }
    //Genearet random color on hover span
    function changeSpanColor(e) {
      const element = e.target;
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const color = "rgb("+r+","+g+","+b+")";
      TweenMax.set(element, {color: color});
    }
    //Set span color back to white
    function setColorToWhite() {
      TweenMax.to(headerSpan, 5, {color: '#fff'});
    }
    //Home main links hover animation
    function startLinkAnimation(e) {
      let element = e.target;
      TweenMax.to(element.querySelectorAll('span'), .3, {padding:'.5rem 1rem'});
         // pcImg.src = 'img/about-hover-bg.png';
    }
    function endLinkAnimation(e) {
      let element = e.target;
      TweenMax.to(element.querySelectorAll('span'), .3, {padding:'0rem 1rem'});
       // pcImg.src = 'img/prorotype-bg.png';
    }
    //Nav button open animation
    function navBtnClose(){
      navBtn.className = '';
      TweenMax.to(stickMiddle, .3, {height: '0%'});
      TweenMax.to([rightStickBot, leftStickBot, leftStickTop, rightStickTop], .3, {x: 0});
      TweenMax.to([leftStickBot, leftStickTop, rightStickTop, rightStickBot], .3, {rotation: 0});
    }
    //Nav button close animation
    function navBtnOpen() {
      navBtn.className = 'navigation-open';
      TweenMax.to(leftStickBot, .3, {rotation: -45, onComplete:function() {
        TweenMax.to(stickMiddle, .3, {height: '140%'});
        TweenMax.to([leftStickBot, leftStickTop],.3, {x: -5});
        TweenMax.to([rightStickTop, rightStickBot], .3, {x: 5});
      }});
      TweenMax.to([leftStickTop, rightStickBot], .3, {rotation: 45});
      TweenMax.to(rightStickTop, .3, {rotation: -45});
    }
    //Navigation animation
    function navAnimation(e) {
      e.preventDefault();
      if (!navBtn.classList.contains('navigation-open')) {
        openNav();
      } else {
        closeNav();
      }
    }
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
    //Scale back background
    function zoomInBg(){
      TweenMax.to(homeMain, .3, {scale: 1});
    }
    //Scale out background
    function zoomOutBg(){
      TweenMax.to(homeMain, .3, {scale: 0.8});
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
    navBtn.addEventListener('click', navAnimation);
    workLink.addEventListener('mouseover', startLinkAnimation);
    workLink.addEventListener('mouseleave', endLinkAnimation);
    aboutLink.addEventListener('mouseover', startLinkAnimation);
    aboutLink.addEventListener('mouseleave', endLinkAnimation);
    headerSpanWrapper.addEventListener('mouseover', spanAnimation);
    headerSpanWrapper.addEventListener('mouseleave', setColorToWhite);
    //Home page function call
    onLoadFadeInHomeImg();
    addClassForAllSpans();
    slideInNavBar();
    fromMobileToDesktopSize(media);
    //BARBA.JS TRANSITIONS
  }());
  //ABOUT PAGE RULES
  (function() {

  }());
  //WORKS PAGE RULES
  (function() {

  }())
//Paralax prorotyping
  // let wrap = document.getElementById('parallax-wrapper-outter');
	// let request = null;
	// let mouse = { x: 0, y: 0 };
	// let cx = window.innerWidth / 2;
	// let cy = window.innerHeight / 2;
  //
	// document.querySelector('body').addEventListener('mousemove', function(event) {
	// 	mouse.x = event.pageX;
	// 	mouse.y = event.pageY;
  //   cancelAnimationFrame(request);
  //   request = requestAnimationFrame(update);
	// });
  //
	// function update() {
	// 	dx = mouse.x - cx;
	// 	dy = mouse.y - cy;
	// 	let tiltx = (dy / cy );
	// 	let tilty = - (dx / cx);
	// 	let radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
	// 	let degree = (radius * 20);
  //   let meImg = document.getElementById('person');
  //
  //   TweenMax.to("#bg-pc", 1, {x:-tilty*5, y:-tiltx*5, rotation:0.01, rotationY:tilty*5, rotationX:tiltx*5, ease:Power2.easeOut});
  //   TweenMax.to("#person", 1, {x:tilty*10, y:tiltx*5, rotation:0.01, rotationY:tilty, ease:Power2.easeOut});
  //   if (mouse.x <= 999) {
  //     meImg.src = 'img/me.png';
  //     console.log("melast");
  //   } else if (mouse.x >= 1000 && mouse.x < 1099) {
  //     meImg.src = 'img/me1.png';
  //     console.log("me1");
  //   } else if (mouse.x >= 1100 && mouse.x < 1199) {
  //     meImg.src = 'img/me2.png';
  //   } else if (mouse.x >= 1200 && mouse.x < 1399) {
  //     meImg.src = 'img/me-last.png';
  //   }
  // }
  //
  // window.addEventListener('resize', function(event){
  //    window.innerWidth / 2;
  // 	 window.innerHeight / 2;
  // });
