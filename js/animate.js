// scrollAnimation
$(function () {
    var pageTop;
    var pageBottom;
    var activeOffset = 30;
    function scrollAnim() {
        pageTop = $(document).scrollTop();
        pageBottom = pageTop + $(window).height();
        var tags = $(".animate");

        tags.each(function (index) {
            if ($(this).offset().top < pageBottom - activeOffset) {
            $(this).addClass("animate_active");
            } else {
            $(this).removeClass("animate_active");
            }
    });
    }
scrollAnim();
$(document).on("scroll", scrollAnim);
});


anime({
    targets: '.section-kv__main-title',
    scale: [0, 1],
    easing: 'easeOutElastic(1.5, 1)',
    duration: 2000,
    delay: anime.stagger(100),
})

anime({
    targets: '.section-kv__sec-title',
    translateY: [150, 0],
    opacity: [0, 1],
    easing: 'easeInOutBack',
    duration: 2000,
    delay: anime.stagger(100),
    rotate: function() {
    return anime(-15, 15);
    },
})

anime({
    targets: '.section-kv__circle',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutElastic(1.5, 1)',
    duration: 1500,
    delay: anime.stagger(100),
})

anime({
    targets: '.icon-line',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutElastic(2.5, 1)',
    duration: 1500,
    delay: anime.stagger(500),
})


anime({
    targets: '.section-kv__d-girl',
    translateY: [1000, 1],
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutElastic(2.5, 1)',
    duration: 1500,
    delay: anime.stagger(100),
})