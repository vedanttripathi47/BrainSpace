function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

loco();

function vedio(){
    gsap.to(".page1-vedio", {
        filter:"blur(20px)",
        transform:"scaleX(0.97)",
        duration:0.2,
        scrollTrigger:{
            trigger:".page1",
            scroller: ".main",
            // markers:true,
            start: "top 0",
            end: "top -50%",
            scrub:3
        }
    })


    document.addEventListener("mousemove" , function(dets){
        gsap.from(".cursur" ,{
            top:dets.y,
            left:dets.x,
            duration:1
        })
    })
}

vedio();




function nav(){
    gsap.to(".nav-part2", {
        y:-100,
        duration:1,
        scrollTrigger:{
            trigger:".nav-part2",
            scroller:".main",
            // markers:true,
            start:"top -0",
            end:"top -10%",
            scrub:true
        }
    })


    gsap.to(".navbar i", {
        display: "block",
        scrollTrigger:{
            trigger:".nav-part2",
            scroller:".main",
            // markers:true,
            start:"top -0",
            end:"top -10%",
            scrub:true
        }
    })
}

nav();

gsap.to(".page2 img",{
    transform:"translateY(-50%) translateX(11%)",
    duration:1,
    repeat:-1,
    ease:"ease"
})

// gsap ease 


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:".main",
        // markers:true,
        start:"-500% 50%",
        end:"-400% 50%",
        scrub:5
    }
});

function page2animation(){
    
tl2.from(".page2 h2", {
    y:50,
    opacity:0,
    duration:1,
    scale: 1.15,
})

tl2.from(".page2 .page2-content", {
    y:50,
    opacity:0,
    duration:1,
    scale: 1.15,
})
tl2.from(".page2 right-page2", {
    y:50,
    opacity:0,
    duration:1,
    scale: 1.15,
})
}

page2animation();


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3 h1",
        scroller:".main",
        // markers:true,
        start:"-140% 50%",
        end:"-110% 50%",
        scrub:2
    }
})

 
function page3animation(){
     
tl3.from(".page3 h1", {
    y:50,
    opacity:0,
    duration:1,
    
})

tl3.from(".page3 p", {
    y:50,
    opacity:0,
    duration:1,
})

tl3.from(".page3 .page3-right", {
    y:100,
    opacity:0,
    duration:1,
})
tl3.from(".page3 button", {
    y:100,
    opacity:0,
    duration:1,
})
}

page3animation();

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4 #helmet",
        scroller:".main",
        // markers:true,
        start:"-50% 50%",
        end:"-40% 50%",
        scrub:2
    }
})

tl4.from(".page4 #helmet", {
    y:50,
    opacity:0,
    duration:1, 
})



function page4anime(){

    let tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".page4-content-1 h2",
            scroller:".main",
            // markers:true,
            start:"-200% 50%",
            end:"-150% 50%",
            scrub:2
        }
    })
    
tl5.from(".page4-content-1 h2", {
    y:100,
    opacity:0,
    duration:1, 
})

tl5.from(".page4-content-1 p", {
    y:100,
    opacity:0,
    duration:1, 
})

tl5.from(".page4-content-1 button", {
    y:100,
    opacity:0,
    duration:1, 
})



}

page4anime();


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4-content-1 h2",
        scroller:".main",
        // markers:true,
        start:"100% 50%",
        end:"110% 50%",
        scrub:2
    }
})

tl6.from(".page4-content-2 h2", {
    y:100,
    opacity:0,
    duration:1, 
    stagger:true,
})

tl6.from(".page4-content-2 .page4-content-2-video", {
    opacity:0,
    duration:1, 
    stagger:true,
})

tl6.from(".page4-content-3 video", {
    opacity:0,
    duration:1, 
    stagger:true,
})










// ---------------------------------------------------------------------------page 5

let tl_page5_content = gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers:true,
        start:"-15% 0",
        end:"-15% -70%",
        scrub:true
        // pin:true

    }
})

tl_page5_content.from(".page5-content .info,.element", {
    y:100,
    opacity:0,
    duration:0.2
})





//---------------------- page6 animation by mistake i wrote page 5 tl
let tl_page5 = gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -70%",
        scrub:3,
        pin:true

    }
})


tl_page5.to(".page5 .page5-content",{
    transform:"translateX(-50%)",
    
}, "move")


tl_page5.to(".slider-in", {
    x:760
} , "move")

var page1text = "We are brain space.  \n The brain data company";

var splittedtext = page1text.split("")

console.log(splittedtext);

var clutter = "";

splittedtext.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.15
})




let tl_page6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        // markers:true,
        start:"-20% 0",
        end:"-20% -70%",
        scrub:true
        // pin:true

    }
})


tl_page6.from(".page6 h1", {
    y:100,
    opacity:0,
    duration:1, 
})


tl_page6.from(".page6 .content-page6", {
    y:100,
    opacity:0,
    duration:1, 
})



let tl_page6_content2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        // markers:true,
        start:"0 0",
        end:"0 -70%",
        scrub:true
        // pin:true

    }
})


tl_page6_content2.from(".page6 .content2-page6", {
    y:100,
    opacity:0,
    duration:1, 
    // scale: 2
})

tl_page6_content2.from(".content2-page6 .card1,.card2,.card3", {
    y:100,
    opacity:0,
    duration:2, 
    scale: 2
})

tl_page6_content2.from(".page6-bottom h2,button", {
    y:100,
    opacity:0,
    duration:1, 
    // scale: 2
})







let tl_page7 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7",
        scroller:".main",
        // markers:true,
        start:"-10% 0",
        end:"-10% -70%",
        scrub:true
        // pin:true

    }
})


tl_page7.from(".page7 .upper", {
    y:100,
    opacity:0,
    duration:2
})

tl_page7.from(".page7 .lower .line1", {
    y:100,
    opacity:0,
    duration:1
})

tl_page7.from(".page7 .lower .line2", {
    y:100,
    opacity:0,
    duration:1
})




let tl_page8 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8",
        scroller:".main",
        // markers:true,
        start:"-5% 0",
        end:"-5% -70%",
        scrub:true
        // pin:true

    }
})


tl_page8.from(".page8_header h3", {
    y:100,
    opacity:0,
    duration:0.2
})

tl_page8.from(".page8_top,page8_top_right", {
    y:100,
    opacity:0,
    duration:0.2
})

tl_page8.from(".page8_center p", {
    y:100,
    opacity:0,
    duration:0.2
})



let tl_page_8 = gsap.timeline({
    
    scrollTrigger:{
        trigger:"#page8",
        scroller:".main",
        // markers:true,
        start:"15% 0",
        end:"15% -70%",
        scrub:true
        // pin:true

    }
})


tl_page_8.from(".icons_contain1", {
    y:100,
    scale: 1.15,
    opacity:0,
    duration:0.2
})

tl_page_8.from(".icons_contain2", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})

tl_page_8.from(".icons_contain3", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})

tl_page_8.from(".icons_contain4", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})

tl_page_8.from(".icons_contain5", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})


let tl_page_8_bottom = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8",
        scroller:".main",
        // markers:true,
        start:"45% 0",
        end:"45% -70%",
        scrub:true
        // pin:true

    }
})

tl_page_8_bottom.from(".page8_bot", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})




let tl_page9 = gsap.timeline({

    scrollTrigger:{
        trigger:".page9",
        scroller:".main",
        // markers:true,
        start:"-35% 0",
        end:"-35% -70%",
        scrub:true
        // pin:true

    }
})


tl_page9.from(".page9 h1", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})


tl_page9.from(".page9 .page9-content", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})





let tl_page10 = gsap.timeline({
    scrollTrigger:{
        trigger:".page10",
        scroller:".main",
        // markers:true,
        start:"-35% 0",
        end:"-35% -70%",
        scrub:true
        // pin:true

    }
})


tl_page10.from(".page10 h1", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})


tl_page10.from(".page10 .line1-img", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})


tl_page10.from(".page10 .line2-img", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})

tl_page10.from(".page10 h4", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})



let tl_page11 = gsap.timeline({
    scrollTrigger:{
        trigger:".page11",
        scroller:".main",
        // markers:true,
        start:"-35% 0",
        end:"-35% -70%",
        scrub:true
        // pin:true

    }
})

tl_page11.from(".left-page11,.right-page11", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2
})


tl_page11.from(".right-page11 input", {
    scale: 1.15,
    y:100,
    opacity:0,
    duration:0.2,
    stagger:1,
    duration:3
})




let tl_footer = gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        scroller:".main",
        // markers:true,
        start:"-95% 0",
        end:"-95% -70%",
        scrub:true
        // pin:true

    }
})

tl_footer.from("footer .footer-line1", {
    // scale: 1.15,
    // y:100,
    opacity:0,
    duration:0.2,
    stagger:1,
    duration:3
})

tl_footer.from("footer .footer-line2", {
    // scale: 1.15,
    // y:100,
    opacity:0,
    duration:0.2,
    stagger:1,
    duration:3
})

