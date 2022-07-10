gsap.from('header',{opacity:0, duration:0.5, y:-70,delay:5.5});
gsap.from('.first-block',{opacity:0, duration:2, y:-70, ease: "elastic.out(1, 0.3)",delay:5});
gsap.from('.second-block',{opacity:0, duration:1,delay:5.4, stagger: 0.6});
gsap.from('.hero-image',{opacity:0,duration:1, y: -100,ease: "expo.out",delay:5});
gsap.from('.stagger',{opacity:0,duration:1, x: -20 ,delay:5.4,ease: "expo.out",stagger: 0.6});
gsap.from('.card',{opacity:0,duration:1, x: -20 ,delay:5,ease: "expo.out",stagger: 0.6});
gsap.to(".text", { y: "0%", duration: 1, stagger: 0.6 });
gsap.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
gsap.to(".start", { y: "-100%", duration: 1 }, "-=3.5");