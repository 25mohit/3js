import gsap from "gsap";

export const ScrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: !isMobile ? -5.7865456004 : -7.0,
        y: !isMobile ? -13.6494688903 : -12.2,
        z: !isMobile ? 0.5247396628 : -6.0,
        scrollTrigger:{
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 1.52 : 0.7,
        y: !isMobile ? 0.77 : 1.9,
        z: !isMobile ? -1.08 : 0.7,
        scrollTrigger:{
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        }
    })
    .to('.jumbotron-section', {
        opacity: 0,
        scrollTrigger:{
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        }
    })
    .to('.sound-section-content', {
        opacity: 1,
        scrollTrigger:{
            trigger: '.sound-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        }
    })

    .to(position, {
        x: !isMobile ? 1.56 : 9.36,
        y: !isMobile ? 5.0 : 10.95,
        z: !isMobile ? 0.011 : 0.9,
        scrollTrigger:{
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? -0.55 : -1.62,
        y: !isMobile ? 0.32 : 0.02,
        z: !isMobile ? 0.0 : -0.06,
        scrollTrigger:{
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        }
    })
    .to('.display-section', {
        opacity: 1,
        scrollTrigger:{
            trigger: '.display-section',
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false
        }
    })
    
}