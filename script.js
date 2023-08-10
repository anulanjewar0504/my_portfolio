gsap.from("#header,.header-text",{
    scale:1.9,
    duration:2,
    
})


gsap.from("#about", {
    scale:0,
    delay:0.1,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub: 2
    }
})
gsap.from("#services", {
    x:5000,
    delay:0,
    scrollTrigger: {
        trigger:"#services",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub: 2
        

    }
})
gsap.from("#portfolio", {
    x:-5000,
    delay:0,
    scrollTrigger: {
        trigger:"#portfolio",
        scroller:"body",
        start:"top 90%",
        end:"top 50%",
        scrub: 2
    }
})
gsap.from("#contact", {
    opacity: 0,
    scrollTrigger: {
        trigger:"#contact",
        scroller:"body",
        start:"top 50%",
        end:"top 38%",
        scrub: 2,
        pin: true,
        pinSpacing: false
    }
});