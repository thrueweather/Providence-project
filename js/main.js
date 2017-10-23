// Scrolling
$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 70;
		$('body, html').animate({scrollTop: bl_top}, 2000);
		return false;
	});


// МЕНЮ 
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 1) {
            $('.main-nav').addClass('stickytop');
        }
        else {
            $('.main-nav').removeClass('stickytop');
        }
    });
});
