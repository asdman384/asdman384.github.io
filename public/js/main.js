$(window).mousemove(function(event) {
    var xPos = (event.clientX / $(window).width()) - 0.5,
        yPos = (event.clientY / $(window).height()) - 0.5;
    TweenMax.to('#movethemain', 0.8, {
        rotationY: 24 * xPos,
        rotationX: -12 * yPos,
        ease: Power1.easeOut
    });
});
console.log(1);
$(document).ready(function(event) {
    
    TweenMax.set('#mainimage', {
        transformStyle: "preserve-3d",
        transformOrigin: 'center center',
        perspective: 1300,
        z: 1
    });
    TweenMax.set('.photo', {
        transformStyle: "preserve-3d"
    });
    TweenMax.set('#movethemain', {
        transformStyle: "preserve-3d"
    })
    TweenMax.set('#rag-one', {
        z: 10
    })
    TweenMax.set('#rag-two', {
        z: 40
    })
    TweenMax.set('#rag-three', {
        z: 70
    })
    TweenMax.set('#rag-four', {
        z: 100
    })
    TweenMax.set('#rag-five', {
        z: 130
    })
});