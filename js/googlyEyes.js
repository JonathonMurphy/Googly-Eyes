$ (function(){

	let clickArea = $('.click-area');
	clickArea.css('height', $(window).height());

	let googlyEye = {
		//Establishing variables
		eyeID: 0,
		pupilID: 0,
		//Create new eye and pupil function
		createGooglyEyeHTML: function() {
			newEyeID = 'eye';
			newEyeID += this.eyeID++;
			newPupilID = 'pupil';
			newPupilID += this.pupilID++;
			clickArea.append("<div class='eye' id='" + newEyeID + "'><div class='pupil ' id='" + newPupilID + "'></div></div>");

			$("#" + newEyeID).css({
				'top': 100,
				'left': 200
			})

			console.log('Object Creation Works!');

		},
		//Pupil animation
		eyeFall: function() {
			let pupilPosition = this.pupil.position().top;
			let fallDistance = 257.5 - pupilPosition + 'px';
			if (this.pupil.position().top < 257.5){
				this.pupil.animate({
						top: '+='+fallDistance
				}, speed);
			}
		},
		//Pupil drag function
		eyeDrag: function() {
			this.pupil.draggable({
				containment: 'parent'
			}).mouseup(function() {
				eyeFall();
			});
		}
	}
//Add new googlyEye object on right click
	clickArea.dblclick(function() {
		googlyEye.createGooglyEyeHTML();
	});

});
