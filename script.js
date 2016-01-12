



$(document).ready(function(){
	$(".wechat1").click(function(){
		$("#qrcode1").fadeToggle();
	})
});

$(document).ready(function(){
	$(".wechat2").click(function(){
		$("#qrcode2").fadeToggle();
	})
});

$(document).ready(function(){
	$(".order").click(function(){
		$(".message").fadeToggle();
	})
});

$(document).ready(function(){
	$("#about").click(function(){
		$(".menu").hide();
		$(".contactOnSmallDevice").hide();		
		$(".about").fadeIn();
	})
});

$(document).ready(function(){
	$("#menu").click(function(){
		$(".about").hide();
		$(".contactOnSmallDevice").hide();		
		$(".menu").fadeIn();
	})
});



$(document).ready(function(){
	$("#contact").click(function(){
		$(".about").hide();
		$(".menu").hide();
		$(".contactOnSmallDevice").fadeIn();
	})
});



//img gallery
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");

$overlay.append($image);

//add overlay
$('body').append($overlay);

//catch the click action
$(document).ready(function(){
	$("section.menu a").click(function(event){
//click and show the gallery
		event.preventDefault();
		var imageLocation = $(this).attr('href');
  		$image.attr("src",imageLocation);
  		$overlay.show();
//click and hide overlay
  		$overlay.click(function(){
  			$overlay.hide();
  		});
	});
});