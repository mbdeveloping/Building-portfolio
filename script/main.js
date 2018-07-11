document.addEventListener("DOMContentLoaded", function() {
  //HOME PAGE RULES
    (function() {
      const homeLinks = document.getElementsByClassName('home-page-link');
      const socialLinks = document.getElementById('social-links');
      const leftNavOverlay = document.getElementById('left-nav-overlay');
      const rightNavOverlay = document.getElementById('right-nav-overlay');
      const media = window.matchMedia("(min-width: 1024px)");
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

      TweenMax.to('#stars-small', 50, {y:-2000, z:0, repeat:-1});
      TweenMax.to('#stars-medium', 100, {y:-2000, z:0, repeat:-1});
      TweenMax.to('#stars-large', 150, {y:-2000, z:0, repeat:-1});
      //On page load fadein home page background image
      function onLoadFadeInHomeImg() {
        TweenMax.set('#about-me-img',  {visibility:'visible'});
        TweenMax.to('#about-me-img', 5, {opacity:1});
        // TweenMax.to('.hide-after-anim', 5, {delay:.3,opacity:1});
        if (document.getElementById('home-header')) {
          TweenMax.fromTo('.hide-after-anim', 5, {delay:.3,opacity:0}, {opacity:1});
          TweenMax.set(document.getElementsByClassName('hide-after-anim')[0], {visibility:'visible'});
        }
      }
      //Add class for all header spans
      function addClassForAllSpans() {
        document.querySelectorAll('#home-header-word-line-wrapper span').forEach(function(span) {
          span.className = 'testSpan'
        });
      }
      //Hide Works, About, social links
      function hideLinks() {
        // TweenMax.set(socialLinks,{y:'100%'});
        TweenMax.to(socialLinks, .3, {y:'100%'});
        TweenMax.to(leftNavOverlay,.3, {x: '-100%'});
        TweenMax.to( rightNavOverlay,.3, {x: '100%'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)'});
      }
      function slieInLinks() {
        TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {width: '5%', x:'0%', ease: Bounce.easeOut});
        TweenMax.to(socialLinks, .5, {y:'0%'});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
      }
      //On page load header text animation
      function fadeInHeaderText() {
        if (document.getElementById('home-header')) {
          TweenMax.staggerFromTo( '.testt span', 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1}, 0.05 );
          TweenMax.staggerFromTo( '.testt span', 0.1, {scale:4}, {scale:1}, 0.05, bigBenAndBus);
          function bigBenAndBus() {
            TweenMax.fromTo('#big-ben', 1, {opacity:0, rotation:-45}, {opacity:1, rotation:0,ease: Elastic.easeOut.config(1, 0.3)});
            TweenMax.fromTo('#london-bus', 1, {opacity:0, x:-100}, {opacity:1, x:0,ease: Power4.easeOut});
          }
        }
        if (document.getElementById('about-header')) {
          TweenMax.staggerFromTo( '.testt span', 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1}, 0.02 );
          TweenMax.staggerFromTo( '.testt span', 0.1, {scale:6}, {scale:1}, 0.02);
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
        TweenMax.to([leftNavOverlay, rightNavOverlay], 1, {x: '0%', width:'50%', ease: Bounce.easeOut});
        TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 1)'});
        TweenMax.to(socialLinks, .3, {y:'0%'});
        zoomOutBg();
      }
      function closeNav() {
        navBtnClose();
        TweenMax.to(leftNavOverlay, .3, {x: '-100%'});
        TweenMax.to(rightNavOverlay, .3, {x: '100%'});
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
      media.addListener(fromMobileToDesktopSize);
      workLink.addEventListener('mouseover', startLinkAnimation);
      workLink.addEventListener('mouseleave', endLinkAnimation);
      aboutLink.addEventListener('mouseover', startLinkAnimation);
      aboutLink.addEventListener('mouseleave', endLinkAnimation);
      //Home page function call
      onLoadFadeInHomeImg();
      addClassForAllSpans();
      slideInNavBar();
      fromMobileToDesktopSize(media);
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
            TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)', onComplete:function() {
              TweenMax.to(['#hello', '#frontend-developer'], .7, {x:350});
              TweenMax.to(['#i-am-mantvydas', '#based'], .7, {x:-350, onComplete: allDone});
              function allDone() {
                deferred.resolve();
              }
            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();
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
              TweenMax.to('#about-header h1', 1, {x:'110%'});
              TweenMax.to('.about-p', 1, {x:'-110%', onComplete:allDoneAbout});
              function allDoneAbout() {
               deferred.resolve();
             }
            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();

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
            slideOutNavBar();
            navBtnClose();
            TweenMax.to(socialLinks, .3, {y:'100%'});
            TweenMax.to([leftNavOverlay, rightNavOverlay],.3, {width: '0%'});
            TweenMax.to(homeLinks, .3, {color: 'rgba(255, 255, 255, 0)', onComplete:function() {
               deferred.resolve();
            }});
            return deferred.promise;
          },
          showNewPage: function() {
            this.newContainer.style.visibility = 'visible';
            slideInNavBar();

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
    //ABOUT PAGE RULES
    (function() {

    }());
    //WORKS PAGE RULES
    (function() {

    }())
  });
