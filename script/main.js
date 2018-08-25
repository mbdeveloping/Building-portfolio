document.addEventListener("DOMContentLoaded", function() {
  //HOME PAGE RULES
    (function() {
      const homeLinks = document.getElementsByClassName('home-page-link');
      const socialLinks = document.getElementById('social-links');
      const leftNavOverlay = document.getElementById('left-nav-overlay');
      const rightNavOverlay = document.getElementById('right-nav-overlay');
      const navBar = document.getElementById('nav-bar');
      const bigBen = document.getElementById('big-ben');
      const londonBus = document.getElementById('london-bus');
      const headerSpan = document.querySelectorAll('#home-header-word-line-wrapper span');
      const headerSpanWrapper = document.getElementById('home-header-word-line-wrapper');
      const navBtn = document.getElementById('nav-btn');
      const workLink = document.getElementById('works');
      const aboutLink = document.getElementById('about-me');
      const homeMain = document.getElementsByClassName('main-section');
      const homeAllImg = document.getElementById('img-holder img');
      const pageBody = document.querySelector('body');
      const homePage = document.getElementById('home-main');
      let pcImg = document.getElementById('bg-pc');
      const userAgent = window.navigator.userAgent;
      let touchY;
      let moveY;
      const swipeDistance = 30;
      const earth = document.getElementById('earth');

      function positionEarth() {
        if (window.innerWidth <= 600) {
          TweenMax.set('#earth', {x:'0%', y:'50%'});
        }
        else if (window.innerWidth > 600 && window.innerWidth < 1023) {
          TweenMax.set('#earth', {x:'50%', y:'-50%'});
        }
        else if (window.innerWidth >= 1024) {
          TweenMax.set('#earth', {x:'0%', y:'-50%', right:'5%'});
          slieInLinks();
        }
      }
      // TweenMax.to(earth, 100, {rotation:360,z:0, repeat:-1, ease:Linear.easeNone﻿});
      //Add class for all header spans
      function addClassForAllSpans() {
        document.querySelectorAll('#home-header-word-line-wrapper span').forEach(function(span) {
          span.className = 'testSpan';
        });
      }
      //Hide Works, About, social links
      function hideLinks() {
        socialLinks.classList.remove('show-nav-social-links');
        socialLinks.classList.add('hide-nav-social-links');
        // TweenMax.to(socialLinks, .3, {z:0, y:'100%'});
        TweenMax.to(leftNavOverlay,.3, {z:0, x: '-100%'});
        TweenMax.to( rightNavOverlay,.3, {z:0, x: '100%'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
      }
      function slieInLinks() {
        TweenMax.to([leftNavOverlay, rightNavOverlay], .5, {width: '5%', x:'0%'});
        // TweenMax.to(socialLinks, .5, {y:'0%'});
        socialLinks.classList.remove('hide-nav-social-links');
        socialLinks.classList.add('show-nav-social-links');
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
      }

      function homeTransitionIn() {
        // console.log("if home page");
        TweenMax.staggerFromTo( '.testt span', 1, {autoAlpha:0, scale:1}, {z:0, autoAlpha:1, scale:1}, 0.05 );
        TweenMax.staggerFromTo( '.testt span', 0.1, {scale:4}, {scale:1}, 0.05, bigBenAndBus);;
        TweenMax.to('#earth',1, {scale:1, autoAlpha:1});
        function bigBenAndBus() {
          TweenMax.fromTo('#big-ben', 1, {opacity:0, rotation:-45}, {opacity:1, rotation:0,ease: Elastic.easeOut.config(1, 0.3)});
          TweenMax.fromTo('#london-bus', 1, {opacity:0, x:-100}, {opacity:1, x:0,ease: Power4.easeOut});
        }
      }

      function aboutTransitionIn() {
        // console.log("if about page");
        TweenMax.to('#about-me-page .img', 1, {z:0, autoAlpha:1, scale:1});
        TweenMax.to('#about-me-page h1', 1, {x:'0%'});
        TweenMax.to('#about-me-page p', 1, {x:'0%'});
        TweenMax.to('#about-me-page .button-wrapper', 1, {x:'0%'});
      }

      function worksTransitionIn() {
        // console.log("if works page");
        let myPortTop;
        const firstIndicator = document.getElementById('first-indicator');
        const secondIndicator = document.getElementById('second-indicator');
        const workThumbnails = document.getElementById('work-thumbnails');
        const myPort = document.getElementById('my-portfolio');
        myPortTop = myPort.offsetTop;
        let scroll_blocked = false;

        window.addEventListener('resize', function() {
          workThumbnails.className = '';
          TweenMax.to('#scroll-down', 1, {y:'0%'});
          TweenMax.to('#seven-seals-of-event', .3, {scale:1});
          TweenMax.to('#work-thumbnails', 1,{y:0, z:0, ease:Power2.easeInOut});
          myPortTop = myPort.offsetTop;
        });

        TweenMax.to('#work-navigator', 1, {x:'0%'});

        TweenMax.to('#works-page-main-header h2', 1, {z:0, autoAlpha:1, x:'0%'});
        TweenMax.to('#works-page-main-header .border-wrapper', 1, {z:0, autoAlpha:1, x:'0%'});
        TweenMax.to('#works-page-main-header p', 1, {z:0, autoAlpha:1, x:'0%'});
        TweenMax.to('#works-page-main-header .button-wrapper', 1, {z:0, autoAlpha:1, x:'0%'});
        TweenMax.to('#seven-seals-of-event .img', 1, {z:0, autoAlpha:1, scale:1});

        function tofirstWork() {
          workThumbnails.className = '';
          secondIndicator.classList.remove('active-indicator');
          firstIndicator.className += ' active-indicator';
          TweenMax.to('#my-portfolio', 1, {z:0, scale:0.8});
          TweenMax.to(workThumbnails, 1,{y:0, z:0, ease:Power2.easeInOut});
          TweenMax.to('#seven-seals-of-event', 1, {z:0, scale:1});
        }

        function toSecondWork() {
          workThumbnails.className = 'scrolled-portfolio';
          secondIndicator.className += ' active-indicator';
          firstIndicator.classList.remove('active-indicator');
          TweenMax.to('#seven-seals-of-event', 1, {z:0, scale:0.8});
          TweenMax.to(workThumbnails, 1,{y:-myPortTop, z:0, ease:Power2.easeInOut});
          TweenMax.to('#my-portfolio', 1, {z:0, scale:1});
        }

        function hideScrollDown() {
          TweenMax.to('#scroll-down', .5, {z:0, y:'140%'});
        }

        function showScrollDown() {
          TweenMax.to('#scroll-down', .5, {z:0, y:'0%'});
        }
        function blockScroll() {
          scroll_blocked = true;
          setTimeout(function(){
            scroll_blocked = false;
          }, 1000);
        }
        document.addEventListener('wheel', function(e) {
          if (!scroll_blocked){
        		if (e.deltaY < 0){
              tofirstWork();
              blockScroll();
              showScrollDown();
              console.log(e.deltaY);
            } else {
              toSecondWork();
              blockScroll();
              hideScrollDown();
            }
        	}
        });
        document.addEventListener('keydown', function(e) {
          if (e.keyCode == '38') {
            showScrollDown();
            tofirstWork();
          }
          else if (e.keyCode == '40') {
            hideScrollDown();
            toSecondWork();
          }
      });
      document.addEventListener('touchstart', function(e) {
        touchY = e.changedTouches[0].screenY;
      });
      document.addEventListener('touchmove', function(e) {
         moveY = e.changedTouches[0].screenY;
         if ((moveY+swipeDistance) < touchY) {
           console.log("moving down");
           hideScrollDown();
           toSecondWork();
         }else if ((moveY-swipeDistance) > touchY) {
           console.log("moving up");
           showScrollDown();
           tofirstWork();
         }
      });
        firstIndicator.addEventListener('click', tofirstWork);
        secondIndicator.addEventListener('click', toSecondWork);
        TweenMax.to('#scroll-down', .5, {z:0, y:'0%', autoAlpha:1});
      }
      //On page load header text animation
      function fadeInHeaderText() {
        if (document.getElementById('home-header')) {
          positionEarth();
          homeTransitionIn();
        }
        if (document.getElementById('about-me-page')) {
          aboutTransitionIn();
        }
        if (document.getElementById('works-page-main-header')) {
          worksTransitionIn();
        }
      }

      //Leave home header animation
      function fadeOutHomeHeader() {
        TweenMax.to('#big-ben, #london-bus', .1,  {opacity:0, x:1000,ease: Elastic.easeOut.config(1, 0.3)});
        TweenMax.staggerTo( '#home-header-word-line-wrapper span', .2, {autoAlpha:0, x:500}, -0.01 );
      }
      //Slide nav bar from the op
      function slideInNavBar() {
        TweenMax.to('#nav-bar', .5, {y:'0%', onComplete:function(){
          fadeInHeaderText();
        }});
      }
      function slideOutNavBar() {
        TweenMax.to('#nav-bar', .5, {y: '-100%'});
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
        TweenMax.to(document.querySelectorAll('#home-header-word-line-wrapper span'), 5, {color: '#fff'});
      }
      //Home main links hover animation
      function startLinkAnimation(e) {
        let element = e.target;
        TweenMax.to(element.querySelectorAll('span'), .3, {padding:'.5rem 1rem'});
      }
      function endLinkAnimation(e) {
        let element = e.target;
        TweenMax.to(element.querySelectorAll('span'), .3, {padding:'0rem 1rem'});
      }
      //Nav button open animation
      function navBtnClose(){
        navBtn.className = '';
        TweenMax.to('#nav-stick-middle', .3, {height: '0%'});
        TweenMax.to(['#right-nav-stick-bot', '#left-nav-stick-top', '#left-nav-stick-bot', '#right-nav-stick-top'], .3, {x: 0});
        TweenMax.to(['#left-nav-stick-bot', '#left-nav-stick-top', '#right-nav-stick-top', '#right-nav-stick-bot'], .3, {rotation: 0});
      }
      //Nav button close animation
      function navBtnOpen() {
        navBtn.className = 'navigation-open';
        TweenMax.to('#left-nav-stick-bot', .3, {rotation: -45, onComplete:function() {
          TweenMax.to('#nav-stick-middle', .3, {height: '140%'});
          TweenMax.to(['#left-nav-stick-bot', '#left-nav-stick-top'],.3, {x: -5});
          TweenMax.to(['#right-nav-stick-top', '#right-nav-stick-bot'], .3, {x: 5});
        }});
        TweenMax.to(['#left-nav-stick-top', '#right-nav-stick-bot'], .3, {rotation: 45});
        TweenMax.to('#right-nav-stick-top', .3, {rotation: -45});
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
        TweenMax.to([leftNavOverlay, rightNavOverlay], .3, {x: '0%', width:'50%'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
        // TweenMax.to(socialLinks, .3, {y:'0%'});
        socialLinks.classList.add('show-nav-social-links');
        socialLinks.classList.remove('hide-nav-social-links');
        zoomOutBg();
      }
      function closeNav() {
        navBtnClose();
        TweenMax.to(leftNavOverlay, .3, {x: '-100%'});
        TweenMax.to(rightNavOverlay, .3, {x: '100%'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
        // TweenMax.to(socialLinks, .3, {y:'100%'});
        socialLinks.classList.add('hide-nav-social-links');
        socialLinks.classList.remove('show-nav-social-links');
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
      const media = window.matchMedia("(min-width: 1024px)");
      function media1024(media) {
          if (media.matches) {
            slieInLinks();
            navBtnClose();
            zoomInBg();
          } else {
            hideLinks();
          }
      }
      media.addListener(media1024);
      workLink.addEventListener('mouseover', startLinkAnimation);
      workLink.addEventListener('mouseleave', endLinkAnimation);
      aboutLink.addEventListener('mouseover', startLinkAnimation);
      aboutLink.addEventListener('mouseleave', endLinkAnimation);
      window.addEventListener('resize', function() {
        positionEarth();
      })
      //Home page function call
      addClassForAllSpans();
      slideInNavBar();
      media1024(media);
      positionEarth();
      //BARBA.JS TRANSITIONS
        const Homepage = Barba.BaseView.extend({
          namespace: 'home',
          onEnter: function() {
            addClassForAllSpans();
          },
          onEnterCompleted: function() {
            document.getElementById('nav-btn').addEventListener('click', navAnimation);
            document.getElementById('home-header-word-line-wrapper').addEventListener('mouseover', spanAnimation);
            document.getElementById('home-header-word-line-wrapper').addEventListener('mouseleave', setColorToWhite);
          },
          onLeave: function() {
          },
          onLeaveCompleted: function() {
          }
        });
        const Aboutpage = Barba.BaseView.extend({
          namespace: 'about',
          onEnterCompleted: function() {
            document.getElementById('nav-btn').addEventListener('click', navAnimation);
          },
          onLeave: function() {
          },
          onLeaveCompleted: function() {
          }
        });
        const Workspage = Barba.BaseView.extend({
          namespace: 'works',
          onEnterCompleted: function() {
            document.getElementById('nav-btn').addEventListener('click', navAnimation);
          },
          onLeave: function() {
          },
          onLeaveCompleted: function() {
          }
        });
        Homepage.init();
        Aboutpage.init();
        Workspage.init();
        Barba.Pjax.init();
        Barba.Prefetch.init();

        const HomeTransition = Barba.BaseTransition.extend({
          start: function() {
            Promise.all([this.newContainerLoading, this.enlargeThumb()]).then(this.showNewPage.bind(this));
          },
          enlargeThumb: function() {
            const deferred = Barba.Utils.deferred();
            zoomInBg();
            slideOutNavBar();
            navBtnClose();
            TweenMax.to(socialLinks, .3, {y:'100%'});
            TweenMax.to([leftNavOverlay, rightNavOverlay],.3, {width: '0%'});
            TweenMax.to('#earth',2, {autoAlpha:0,scale:0, y:'-80%', ease:Power2.easeInOut});
            TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)', onComplete:function() {
              TweenMax.to(['#hello', '#frontend-developer'], 1, {x:'110%'});
              TweenMax.to(['#i-am-mantvydas', '#based'], 1, {x:'-110%', onComplete: allDone});

              if (document.getElementById('works-page-main-header')) {
                console.log("wokrs out transition WORKS");
                TweenMax.set('#seven-seals-of-event .img', {z:0, autoAlpha:0, scale:4});
                TweenMax.set('#works-page-main-header h2', {autoAlpha:1, x:'-100%'});
                TweenMax.set('#works-page-main-header .border-wrapper', {autoAlpha:1, x:'-120%'});
                TweenMax.set('#works-page-main-header p', {autoAlpha:1, x:'110%'});
                TweenMax.set('#works-page-main-header .button-wrapper', {autoAlpha:0, x:'110%'});
                TweenMax.set('#work-navigator', {x:'-110%'});
              }
              if (document.getElementById('about-me-page')) {
                console.log("wokrs out transition ABOUT");
                TweenMax.set('#about-me-page .img', {z:0, autoAlpha:0, scale:4});
                TweenMax.set('#about-me-page h1', {x:'-110%'});
                TweenMax.set('#about-me-page p', {x:'110%'});
                TweenMax.set('#about-me-page .button-wrapper', {x:'-110%'});
              }
              function allDone() {
                deferred.resolve();
              }
            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();
            if (window.innerWidth >= 1024) {
              slieInLinks();
            }
            console.log("home transition");
            this.done();
          }
        });
        const AboutTransition = Barba.BaseTransition.extend({
          start: function() {
            Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.showNewPage.bind(this));
          },
          fadeOut: function() {
            const deferred = Barba.Utils.deferred();
            zoomInBg();
            slideOutNavBar();
            navBtnClose();
            TweenMax.to(socialLinks, .3, {y:'100%'});
            TweenMax.to([leftNavOverlay, rightNavOverlay],.3, {width: '0%'});
            TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)', onComplete:function() {
              TweenMax.to('#about-me-page .img',1, {z:0, autoAlpha:0, scale:0});
              TweenMax.to('#about-me-page h1',1, {x:'110%'});
              TweenMax.to('#about-me-page p',1, {x:'-110%'});
              TweenMax.to('#about-me-page .button-wrapper',1, {x:'110%', onComplete:allDoneAbout});
              if (document.getElementById('works-page-main-header')) {
                console.log("about out transition WORKS");
                TweenMax.set('#works-page-main-header h2', {autoAlpha:1, x:'-100%'});
                TweenMax.set('#works-page-main-header .border-wrapper', {autoAlpha:1, x:'-120%'});
                TweenMax.set('#works-page-main-header p', {autoAlpha:1, x:'110%'});
                TweenMax.set('#works-page-main-header .button-wrapper', {autoAlpha:1, x:'110%'});
                TweenMax.set('#seven-seals-of-event .img', {z:0, autoAlpha:0, scale:4});
              }
              function allDoneAbout() {
               deferred.resolve();
             }
            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();
            if (window.innerWidth >= 1024) {
              slieInLinks();
            }
            console.log("about transition");
            this.done();
          }
        });
        const WorksTransition = Barba.BaseTransition.extend({
          start: function() {
            Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.showNewPage.bind(this));
          },
          fadeOut: function() {
            const deferred = Barba.Utils.deferred();
            zoomInBg();
            navBtnClose();
            slideOutNavBar();
            TweenMax.to(socialLinks, .3, {y:'100%'});
            TweenMax.to([leftNavOverlay, rightNavOverlay],.3, {width: '0%'});
            TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)', onComplete:function() {
              TweenMax.to('#my-portfolio', .3, {scale:0.8});
              TweenMax.to('#seven-seals-of-event', .3, {scale:1});
              function contTrans() {
                TweenMax.to('#works-page-main-header h2', 1, {x:'110%'});
                TweenMax.to('#works-page-main-header .border-wrapper', 1, {x:'110%'});
                TweenMax.to('#works-page-main-header .button-wrapper', 1, {x:'-110%'});
                TweenMax.to('#works-page-main-header p', 1, {x:'-110%'});
                TweenMax.to('#seven-seals-of-event .img', 1, {scale:0, autoAlpha:0});
                TweenMax.to('#scroll-down', .7, {y:'140%'});
                TweenMax.to('#work-navigator',1, {x:'-110%'});
                TweenMax.to('#works-thumbnails', 1, {y:'100%', autoAlpha:0, onComplete:function() {
                  deferred.resolve();
                }});
              }
              if (document.getElementById('work-thumbnails').className === 'scrolled-portfolio') {
                TweenMax.to('#work-thumbnails', .7,{y:0, z:0, ease:Power2.easeInOut, onComplete:contTrans});
              } else {
                contTrans();
              }
              if (document.getElementById('about-me-page')) {
                console.log("wokrs out transition ABOUT");
                TweenMax.set('#about-me-page .img', {z:0, autoAlpha:0, scale:4});
                TweenMax.set('#about-me-page h1', {x:'-110%'});
                TweenMax.set('#about-me-page p', {x:'110%'});
                TweenMax.set('#about-me-page .button-wrapper', {x:'-110%'});
              }

            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();
            if (window.innerWidth >= 1024) {
              slieInLinks();
            }
            if (document.getElementById('home-header')) {
            }else if (document.getElementById('about-header')) {
              TweenMax.to('#earth',1, {display:'block', y: '50%'});
            }
            console.log("wokrs transition");
            this.done();
          }
        });
        Barba.Pjax.getTransition = function() {
          var transitionObj = HomeTransition;

          if (Barba.HistoryManager.prevStatus().namespace === 'about') {
            transitionObj = AboutTransition;
          }
          if (Barba.HistoryManager.prevStatus().namespace === 'works') {
            transitionObj = WorksTransition;
          }


          return transitionObj;
        };
    }());
  });
