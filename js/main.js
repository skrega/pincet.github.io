
$(function(){
    $('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.menu-list').toggleClass('show');
    })

    var rellax = new Rellax('.heart-img',{
        speed: -7,
        
    });
})