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
})