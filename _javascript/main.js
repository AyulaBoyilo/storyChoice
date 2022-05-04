// Universal variables
var viewWidth = window.innerWidth;

// Window resize
var resizeTimer;

window.addEventListener('resize', function() {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
  
    location.reload();
       
  }, 250);

});

// Background stars twinkling
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    
    
    // Stars animation header
    var vw = document.querySelector('.stars__wrapper').offsetWidth;
    var vh = document.querySelector('main').offsetHeight;
    
    var textures = document.querySelectorAll(".star");
    var main = document.querySelector(".stars__wrapper");
    var frag = document.createDocumentFragment();
    
    var appearMin = 0.3;
    var appearMax = 0.8;
    
    var delayMin = 2;
    var delayMax = 6;
    
    var durationMin = 0.3;
    var durationMax = 1;
    
    // var numAnimations = 50;
    // var numStars = 300;
    var numAnimations = 10;
    var numStars = 100;
    
    var stars = [];
    var eases = [];
    
    for (var i = 0; i < numAnimations; i++) {
      
      var ease = new RoughEase({ 
        template:  Linear.easeNone, 
        strength: random(1, 3), 
        points: random(50, 200)|0, 
        taper: "both", 
        randomize: true, 
        clamp: true
      });
      
      eases.push(ease);
    }
    
    // Wait for images to load
    window.addEventListener("load", onLoad);
    
    function onLoad() {
        
      for (var i = 0; i < numStars; i++) {
        stars.push(createStar());
      }
      
      main.appendChild(frag);
    }
    
    function createStar() {
     
      var index = random(textures.length)|0;
      var star = textures[index].cloneNode(true);
      frag.appendChild(star);
      
      TweenLite.set(star, {
        rotation: random(360),
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        x: random(vw),
        y: random(vh),
      });
      
      var tl = new TimelineMax({ repeat: -1, yoyo: true });
       
      for (var i = 0; i < numAnimations; i++) {
        
        var ease1 = eases[random(numAnimations)|0];
        var ease2 = eases[random(numAnimations)|0];
        
        var alpha = random(0.7, 1);
        var scale = random(0.8, 1.2);
        
        var appear = "+=" + random(appearMin, appearMax);
        var delay = "+=" + random(delayMin, delayMax);  
        var duration1 = random(durationMin, durationMax);
        var duration2 = random(durationMin, durationMax);   
        
        tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
          .to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
      }
        
      tl.progress(random(1));
      
      return {
        element: star,
        timeline: tl,
      };
    }
    
    function random(min, max) {
      if (max == null) { max = min; min = 0; }
      if (min > max) { var tmp = min; min = max; max = tmp; }
      return min + (max - min) * Math.random();
    }

  }
}

// Big stars glow
$(".brand").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
  $(this).removeClass("animated")  
})

$(".brand").hover(function(){
  $(this).addClass("animated");        
})

// Parallax brands
gsap.from('.brands__wrapper', {
  y: 500,
  ease: 'power4.in',
  scrollTrigger: {
    trigger: 'main',
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1
  }
});

// Parallax zvjezdice
gsap.from('.twinkle_stars__wrapper', {
  y: 100,
  scrollTrigger: {
    trigger: 'main',
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1
  }
});

gsap.from('.stars__wrapper', {
  y: 100,
  scrollTrigger: {
    trigger: 'main',
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1
  }
});

// Parallax oblaci
gsap.to('.clouds__wrapper', {
  y: -.2 * document.documentElement.clientHeight,
  scrollTrigger: {
    trigger: 'main',
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1
  }
});

// Brush strokes
if (viewWidth > 1550) {
  gsap.to('.blue_stroke', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 50%",
      end: "top 20%",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_2', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 17%",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_3', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
} else if (1025 < viewWidth && viewWidth < 1551) {
  gsap.to('.blue_stroke', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 50%",
      end: "top 20%",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_2', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 17%",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_3', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "25% 50%",
      end: "70% 100%",
      scrub: 1
    }
  });
} else if (768 < viewWidth && viewWidth < 1024) {
  gsap.to('.blue_stroke', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 50%",
      end: "top 20%",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_2', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 17%",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_3', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "25% 50%",
      end: "60% 70%",
      scrub: 1
    }
  });

  gsap.to('.blue_stroke_tablet', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "60% 50%",
      end: "70% 70%",
      scrub: 1
    }
  });
} else if (viewWidth < 769) {
  gsap.to('.blue_stroke', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 50%",
      end: "top 20%",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_2', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.intro__text',
      start: "top 17%",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to('.blue_stroke_3', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "25% 50%",
      end: "60% 70%",
      scrub: 1
    }
  });

  gsap.to('.blue_stroke_tablet', {
    maskImage: 'linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)',
    scrollTrigger: {
      trigger: '.brands__wrapper',
      start: "60% 50%",
      end: "70% 70%",
      scrub: 1
    }
  });
}