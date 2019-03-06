$(document).ready(function(){
    var onsize = function(){
        var w = $(window).width();
        if(w <= 768){
            $('#position').removeClass('pull-right');
        }
        if(w >= 768){
            $('#position').addClass('pull-right');
        }
    }
    $(window).resize(onsize);
    onsize();
});

$(".slideshow_banner").bxSlider({pager:false,auto:true,controls:false});