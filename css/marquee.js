// JavaScript Document

$(document).ready(function(){
	
	//preload
	$('.slider_panels img').imgpreload(function(){
			initializeSlider();
		
		});
	
	
	//Generate Photo Linup
	
	$('img.slider_panel_photo').each(function(index) {
		
		var photoWidth = $('.slider_container').width();
		var photoPosition = index * photoWidth;
		$('.slider_photos').append('<img class="slider_photo" style="left:'+photoPosition+'" src="'+$(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="'+photoWidth+'" height="350" />');
		$('.slider_photos').css('width', photoPosition+photoWidth); 
		});
	
	//Generate Navigation Links
	$('.slider_panels .slider_panel').each(function(index) {
		$('.slider_nav').append('<a class="slider_nav_item"></a>');
	});
	
	
	//Set up Navigations Links
	
	$('.slider_nav a.slider_nav_item').click(function(){
			
			$('.slider_nav a.slider_nav_item').removeClass('selected');
			$(this).addClass('selected');
		
			var navClicked = $(this).index();
			var sliderWidth = $('.slider_container').width();
			var distanceToMove = sliderWidth * (-1);
			var newPhotoPosition = navClicked * distanceToMove + 'px';
			var newCaption = $('.slider_panel_caption').get(navClicked);
		
			$('.slider_photos').animate({left: newPhotoPosition}, 1000);
			$('.slider_caption').animate({top: '340px'}, 500, function(){
					var newHTML = $(newCaption).html();
					$('.slider_caption_content').html(newHTML);
					setCaption();
				});
		});
			
});

function setCaption(){
	var captionHeight = $('.slider_caption').height();
	var sliderHeight = $('.slider_container').height();
	var newCaptionHeight = sliderHeight - captionHeight - 15;
	$('.slider_caption').delay(100).animate({top: newCaptionHeight}, 500);

}

function initializeMarquee(){
	$('.slider_caption_content').html(
		$('.slider_panels .slider_panel:first .slider_panel_caption').html()	
	);
	$('.slider_nav a.slider_nav_item:first').addClass('selected');
	$('.slider_photos').fadeIn(1500);
	setCaption()

}