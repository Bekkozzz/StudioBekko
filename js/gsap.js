

window.onload = () => {
  const tl = gsap.timeline({ repeat: 0 });

  tl.from(".m__opening-txt", 1.5, {
    opacity: 0,
    stagger: 0.1,
    x: 100,
    ease: "elastic",
    skewX: 20,
  });

  tl.to(".o", 1.5, {
    scale: 7,
    x: -150,
    ease: "easeInOut",
  });

  tl.to("body", 0, {
    overflow: "visible",
  });

  tl.to(".m__opening", 1, {
    borderRadius: "50%",
    ease: "power3.out",
    opacity: 0,
    scale: 0,
  });

  tl.from(".kv__txt", 1, {
    opacity: 0,
    y: 50,
    stagger: 0.6,
  });
};



gsap.from(".service__item", 1, {
  scrollTrigger: {
    trigger: ".gsap-service-list",
    start: "center bottom",
  },
  stagger: 0.2,
  opacity: 0,
  scale: 1.2,
  y: 30,
});

gsap.from(".contact", 0.3, {
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
  },
  ease: "power3In",
  backgroundColor: "#7fa4ba",
  borderRadius: "50%",
  opacity: 0,
});

gsap.from(".gsap-contact", 1, {
  scrollTrigger: {
    trigger: ".gsap-contact",
    start: "top bottom",
  },
  opacity: 0,
  y: 30,
});
