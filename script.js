
function pageOneAnimation() {
    var t1 = gsap.timeline()

    t1.from("nav h1", {
        y: -10,
        opacity: 0,
        delay: 1
    })
    t1.from("nav h4, nav button", {
        y: -10,
        opacity: 0,
        stagger: 0.1
    })

    t1.from(".center-part1 h1", {
        x: -200,
        duration: 0.51,
        opacity: 0
    })

    t1.from(".center-part1 button", {
        opacity: 0,
    })

    t1.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.7")

    t1.from(".section1bottom", {
        opacity: 0,
        y: -10
    })
}
pageOneAnimation();

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})

t2.from(".services",{
    x:-300,
    opacity:0
})

t2.from(".elem.line1.left",{
    x:-300,
    opacity:0
},"a1")
t2.from(".elem.line1.right",{
    x:300,
    opacity:0
},"a1")
t2.from(".elem.line2.left",{
    x:-300,
    opacity:0
},"a2")
t2.from(".elem.line2.right",{
    x:300,
    opacity:0
},"a2")

