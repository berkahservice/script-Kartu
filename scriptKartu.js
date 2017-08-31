$(function() {

	jQuery.preloadImages = function(){
		for(var i = 0; i<arguments.length; i++){
			jQuery("<img>").attr("src", arguments[i]);
		}
	};
	$.preloadImages("http://2.bp.blogspot.com/-oXgUzm-v9Vs/VKAcAEu9FaI/AAAAAAAAIf4/tKJaKG9NpLQ/s1600/people.jpg","http://4.bp.blogspot.com/-laPV_AEjTQI/VKLvAwDa5fI/AAAAAAAAAqA/yLgJSD1SIIs/s1600/card_2.jpg","http://1.bp.blogspot.com/-BJqEzeDsZV8/VKLvB8KHIFI/AAAAAAAAAqM/NqAFRNZLe9E/s1600/card_3.jpg","http://2.bp.blogspot.com/-RWnMy0OfPbU/VKLvCTi6ioI/AAAAAAAAAqQ/Wzzaotraltw/s1600/card_4.jpg","http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg");

	//class="box"をクリックでイベント発火
	$('.boxlink').click(function() {
		//a要素からhref属性を探して中身を取得し、そのURLに飛ばす。別窓なら('href'), '_blank'とする
		window.location = $(this).find('a').attr('href');
		return false;
	});

	$('#tyffon-back').height($('#wrapper').height() + 50);
	
	var card = $('#card'),
		cardContainer = $('#card-cont'),
		cardTop = card.offset().top, 
		cardLeft = card.offset().left + 165, 
		section1Top = $('#section1').offset().top - 300,
		section2Top = $('#section2').offset().top - 300, 
		section3Top = $('#section3').offset().top - 300, 
		section4Top = $('#section4').offset().top - 300; 

	var scrollValue = 0,
		scaleValue,
		rotateyValue,
		rotateValue;

	var changeBackground = function(background) {
		card.css('background', 'url(' + background + ')');
	};

	var changeTransform = function(scaleValue, perspective, rotateYValue, rotateValue, scaleX) {
		var transformString = 'scale(' + scaleValue + ') perspective('+ perspective +') rotateY(' + rotateYValue + 'deg) rotate(' + rotateValue + 'deg)';
		if(scaleX) transformString += 'scaleX('+ scaleX +')';

		card.css('transform', transformString);
	};

	card.click(function () {

		if (scrollValue < section1Top) {

			$('html, body').animate({ scrollTop: section1Top + 200 }, 'normal');
			return false;

		} else if (scrollValue < section2Top) {

			$('html, body').animate({ scrollTop: section2Top  + 200 }, 'normal');
			return false;

		} else if (scrollValue < section3Top) {

			$('html, body').animate({ scrollTop: section3Top  + 200 }, 'normal');
			return false;

		} else if (scrollValue < section4Top) {

			$('html, body').animate({ scrollTop: section4Top  + 200 }, 'normal');
			return false;

		} else {

			$('html, body').animate({ scrollTop: 0 }, 1500);
			return false;

		}

	});
	
	$(window).scroll(function() {

		scrollValue = $(this).scrollTop();

		if (scrollValue <= section1Top) {

			scaleValue = 1 - (0.333 * scrollValue / section1Top);
			rotateyValue = 180 * scrollValue / section1Top;
			rotateValue = -10 * scrollValue / section1Top;

			cardContainer.css('left', cardLeft + scrollValue * 0.33);

			if (rotateyValue < 90) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, false);
				changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');

			} else {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');

			}

		} else if (scrollValue < section2Top - 1100) {

			cardContainer.css('left', cardLeft + section1Top * 0.33);
			changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');
			changeTransform(0.667, '0px', 0, 10, false);

		} else if (scrollValue <= section2Top) {

			scaleValue = 0.667;
			rotateyValue = 180 + 360 * (scrollValue - section2Top + 1100) / 1100;
			rotateValue = -10;
			//横移動しきれなかったときの保険
			cardContainer.css('left', cardLeft + section1Top * 0.33);

			if (rotateyValue < 270 ) {

				card.css('transform', 'scale(' + scaleValue + ') perspective(1000px) rotateY(' + rotateyValue + 'deg) rotate(' + rotateValue + 'deg) scaleX(-1)');
				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');

			} else if (rotateyValue < 450 ) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, false);
				changeBackground('http://2.bp.blogspot.com/-oXgUzm-v9Vs/VKAcAEu9FaI/AAAAAAAAIf4/tKJaKG9NpLQ/s1600/people.jpg');

			} else {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://4.bp.blogspot.com/-laPV_AEjTQI/VKLvAwDa5fI/AAAAAAAAAqA/yLgJSD1SIIs/s1600/card_2.jpg');

			}

		} else if (scrollValue < section3Top - 1100) {

			cardContainer.css('left', cardLeft + section1Top * 0.33);
			changeBackground('http://4.bp.blogspot.com/-laPV_AEjTQI/VKLvAwDa5fI/AAAAAAAAAqA/yLgJSD1SIIs/s1600/card_2.jpg');
			changeTransform(0.667, '0px', 0, 10, false);

		} else if (scrollValue <= section3Top) {

			scaleValue = 0.667;
			rotateyValue = 540 + 360 * (scrollValue - section3Top + 1100) / 1100;
			rotateValue = -10;
			//横移動しきれなかったときの保険
			cardContainer.css('left', cardLeft + section1Top * 0.33);

			if (rotateyValue < 630 ) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://4.bp.blogspot.com/-laPV_AEjTQI/VKLvAwDa5fI/AAAAAAAAAqA/yLgJSD1SIIs/s1600/card_2.jpg');

			} else if (rotateyValue < 810 ) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, false);
				changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');

			} else {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://1.bp.blogspot.com/-BJqEzeDsZV8/VKLvB8KHIFI/AAAAAAAAAqM/NqAFRNZLe9E/s1600/card_3.jpg');

			}

		} else if (scrollValue < section4Top - 1100) {

			cardContainer.css('left', cardLeft + section1Top * 0.33);
			changeBackground('http://1.bp.blogspot.com/-BJqEzeDsZV8/VKLvB8KHIFI/AAAAAAAAAqM/NqAFRNZLe9E/s1600/card_3.jpg');
			changeTransform(0.667, '0px', 0, 10, false);

		} else if (scrollValue <= section4Top) {

			scaleValue = 0.667;
			rotateyValue = 900 + 360 * (scrollValue - section4Top + 1100) / 1100;
			rotateValue = -10;
			//横移動しきれなかったときの保険
			cardContainer.css('left', cardLeft + section1Top * 0.33);

			if (rotateyValue < 990 ) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://1.bp.blogspot.com/-BJqEzeDsZV8/VKLvB8KHIFI/AAAAAAAAAqM/NqAFRNZLe9E/s1600/card_3.jpg');

			} else if (rotateyValue < 1170 ) {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, false);
				changeBackground('http://2.bp.blogspot.com/-s4fFYalJ8DU/VKLu_9-E-gI/AAAAAAAAAp4/Da6hd2rxG80/s1600/card_1.jpg');

			} else {

				changeTransform(scaleValue, '1000px', rotateyValue, rotateValue, -1);
				changeBackground('http://2.bp.blogspot.com/-RWnMy0OfPbU/VKLvCTi6ioI/AAAAAAAAAqQ/Wzzaotraltw/s1600/card_4.jpg');

			}

		} else {

			cardContainer.css('left', cardLeft + section1Top * 0.33);
			changeBackground('http://2.bp.blogspot.com/-RWnMy0OfPbU/VKLvCTi6ioI/AAAAAAAAAqQ/Wzzaotraltw/s1600/card_4.jpg');
			changeTransform(0.667, '0px', 0, 10, false);

		}

	});
	 

});

