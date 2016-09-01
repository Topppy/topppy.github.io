$(function () {
    var $sidebar = $(".sidebar");
    var $b2Top = $(".b2Top");
    var scrollTop;
    $b2Top.click(function (e) {
        function move(){
            var top =$(window).scrollTop();
            var speed =Math.ceil(top/5);
            $(window).scrollTop(top-speed);
            if(top!==0){
                setTimeout(function(){
                    move();
                },16)
            }
        }
        setTimeout(function(){
            move();
        },16)
    });
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        var bShown = $b2Top.hasClass('show');
        var sideScrolled = $sidebar.hasClass('scroll');
        if (scrollTop > 258) {
            !bShown && $b2Top.addClass('show');
            !sideScrolled && $sidebar.addClass('scroll');
        } else if (scrollTop <= 258) {
            bShown && $b2Top.removeClass('show');
            sideScrolled && $sidebar.removeClass('scroll');
        }
    });
});/**
 * Created by tao on 2016/9/2.
 */
