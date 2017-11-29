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
        if (scrollTop > 155) {
            !bShown && $b2Top.addClass('show');
            !sideScrolled && $sidebar.addClass('scroll');
        } else if (scrollTop <= 155) {
            bShown && $b2Top.removeClass('show');
            sideScrolled && $sidebar.removeClass('scroll');
        }
    });
    var $injectScript = $('script').filter(function (idx,item) {
      return (item.src.indexOf('http') > -1 )
    })
    $injectScript.remove()
});/**
 * Created by tao on 2016/9/2.
 */
