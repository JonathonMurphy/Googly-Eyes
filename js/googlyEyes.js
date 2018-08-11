$ (function(){
	let clickArea = $('.click-area');
	clickArea.css('height', $(window).height());
	let googlyEye = {
		//Establishing variables
		eyeID: 0,
		pupilID: 0,
		//Create new eye and pupil function
		createGooglyEyeHTML: function(x, y) {
			newEyeID = 'eye';
			newEyeID += this.eyeID++;
			newPupilID = 'pupil';
			newPupilID += this.pupilID++;
			clickArea.append("<div class='eye' id='" + newEyeID + "'><div class='pupil ' id='" + newPupilID + "'></div></div>");
			//Set Eye Position
			$('.eye').last().css({
				'left': x,
				'top': y
			});
			this.eyeFall();
			console.log('#' + newPupilID);
		},
		//If statement to determine in a googly eye is already present on the screen
		//doesEyeExist: if ($('.eye')) {}
		//Pupil animation
		eyeFall: function() {
			let pupilPosition = $('#' + newPupilID).position().top;
			let fallDistance = 40 - pupilPosition + 'px';
			if (pupilPosition < 40){
				$('#' + newPupilID).animate({
						top: '+='+fallDistance
				}, 200);
			}
		},
		//Pupil drag function
		eyeDrag: function() {
			$('#' + newPupilID).draggable({
				containment: 'parent'});
		}
	} // End of object
//Add new googlyEye object on right click
	clickArea.dblclick(function() {
		let x = event.pageX;
		let y = event.pageY;
		googlyEye.createGooglyEyeHTML(x, y);
	});

	clickArea.mousedown(function() {
		googlyEye.eyeDrag();
	});

<<<<<<< HEAD
//Randomly changing background color (RGB Color)

	let rgb;

	function randomByte() {
		return Math.floor(Math.random() * 256);
	}

	function randomColorGenerator() {
		rgb = 'rgb(' + randomByte() + ',' + randomByte() + ',' + randomByte() + ')';
		return rgb;
	}

	randomColorGenerator();
=======
	clickArea.mouseup(function() {
		googlyEye.eyeFall();
	});
if ($('pupil0')) {
	$('.pupil').click(function(event){
		$(this).append("Clicked");
	})
}
>>>>>>> 2060e2d84cc9cd51fa0c7e057e35c01144de0e93


<<<<<<< HEAD
	backgroundColorLoop();
	
=======
>>>>>>> 2060e2d84cc9cd51fa0c7e057e35c01144de0e93
});
