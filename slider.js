$(document).ready(function () {
	$('.slider-cambiar').slick();
})

// $('.slider-cambiar').on('afterChange', function(slick, currentSlide){
// 	var idElemento = $(slick.currentTarget).children('.slick-list').find('.slick-active').children('img').attr('id');
// 	cambiar_background(idElemento,'containerSlick');
// });

// On init
$('.slider-cambiar').on('init', function(slick){
	var idElemento = $(slick.currentTarget).children('.slick-list').find('.slick-active').children('img').attr('id');
	cambiar_background(idElemento,'containerSlick');
});

$('.slider-cambiar').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	var idElemento = $(slick.$slides[nextSlide]).children('img').attr('id');
	cambiar_background(idElemento,'containerSlick');
});