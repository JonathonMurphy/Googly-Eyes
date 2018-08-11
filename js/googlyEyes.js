$ (function(){
	const leftPupil = $('#leftPupil');
	const rightPupil = $('#rightPupil');

	//Speed slider for animation

	let speed = 200;
	console.log(speed);

	$('#speed').change(function(){
		speed = $(this).val();
		console.log(speed);
		return speed;
	});

	/*
Speed change is not effecting the duration of the eye fall animation.
the speed is being loaded in to the CSS at page load( not on page load, but the first time the function fires), but not being reloaded when it changes.
Instead the duration changes to the default duration amount.
Left Eye = Variable
Right Eye = Control
	*/

//Google Eye Effect
	function leftEyeFall() {
		let leftPupilPosition = leftPupil.position().top;
		let fallDistance = 257.5 - leftPupilPosition + 'px';
		if (leftPupil.position().top < 257.5){
			leftPupil.animate({
					top: '+='+fallDistance
			}, speed);
		}
	}
	leftEyeFall();
	leftPupil.draggable({
		containment: 'parent'
	}).mouseup(function() {
		leftEyeFall();
	});

	function rightEyeFall() {
		let rightPupilPosition = rightPupil.position().top;
		let fallDistance = 257.5 - rightPupilPosition + 'px';
		if (rightPupil.position().top < 257.5){
			rightPupil.animate({
					top: '+='+fallDistance
			}, 400);
		}
	}
	rightEyeFall();
	rightPupil.draggable({
		containment: 'parent'
	}).mouseup(function() {
		rightEyeFall();
	});

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

	function backgroundColorLoop() {
		$('body').animate({
			backgroundColor: rgb
		}, speed, function(){
			randomColorGenerator();
			backgroundColorLoop();
		});
	}

	backgroundColorLoop();
	
});
