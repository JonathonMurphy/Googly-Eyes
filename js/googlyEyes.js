$ (function(){
	let googlyEye = {
		//Establishing variables
		eye: 'some stuff, maybe a unique ID',
		pupil: 'other stuff, prolly also a unique ID',
		eyeID#: 0,
		pupilID#: 0,
		//Create new eye and pupil function
		createGooglyEyeHTML: function() {
			newEyeID = eye;
			newEyeID# += this.eyeID++;
			newPupilID = pupil;
			newPupilID += this.pupilID++;
			$('.face').append("<div class='eye' id='"newEyeID"'><div class='pupil ' id='"newPupilID"'></div></div>")
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
});
