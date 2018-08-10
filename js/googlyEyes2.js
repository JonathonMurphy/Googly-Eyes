$ (function(){

	//Les Variables
	let main;
	let i = 0;
	let googlyEyeArray = [];
	let $clickArea = $('.click-area');
	let $sliderValue = $('#slider').val();
	let eyeSize = $sliderValue;
	let pupilSize = $sliderValue * 0.4;
	let pupilLeft = $sliderValue * 0.3;
	let radius = $sliderValue * 0.28;
	let sizeDifference = eyeSize - pupilSize;
	$clickArea.css('height', $(window).height());


	//Update Slider Value
	$('.slider').change(function() {
		$sliderValue = $('#slider').val();
		eyeSize = $sliderValue;
		pupilSize = $sliderValue * 0.4;
		pupilLeft = $sliderValue * 0.3;
		radius = $sliderValue * 0.28;
		sizeDifference = eyeSize - pupilSize;
		return $sliderValue, eyeSize, pupilSize, pupilLeft, radius, sizeDifference;
	})


	//Googly Eye Object Constructor
	function googlyEye(i, x, y, html) {
		this.x = event.pageX;
		this.y = event.pageY;
		this.html = "<div class='eye' id='eye"+i+"' ";
		this.html += "style='top:"+this.y+"px; left:"+this.x+"px;'>";
		this.html += "<div class='pupil ' id='pupil"+i+"'></div></div>"
	}


	//Event Triggers & Parameters
	$clickArea.mouseup(function() {
		mainLoop(i);
	}).dblclick(function() {
		googlyEyeArray.push(i);
		googlyEyeArray[i] = new googlyEye(i);
		$clickArea.append(googlyEyeArray[i].html);
		$('#eye'+i).draggable({
			containment: 'parent'}).css({
				'width' : eyeSize + 'px',
				'height' : eyeSize + 'px',
				'border-radius' : eyeSize + 'px'
			});
		$('#pupil'+i).draggable({
			containment: 'parent',
			//Thanks to Borgboy on stackOverflow
			drag: function( event, ui ) {
	        var x = ui.position.left - radius,
	            y = radius - ui.position.top,
	            h = Math.sqrt(x*x + y*y);
	        if (Math.floor(h) > radius) {
	            ui.position.top = radius - Math.round(radius * y / h);
	            ui.position.left = Math.round(radius * x / h) + radius;
	        }}}).css({
						'width' : pupilSize + 'px',
						'height' : pupilSize + 'px',
						'border-radius' : pupilSize + 'px',
						'left' : pupilLeft + 'px'
					});
		i++;
		mainLoop(i);
	});


//Main animation loop
	function mainLoop(i) {
		for (x = 0; x < i; x++) {
			let pupilPosition = $('#pupil' + x).position().top;
			let fallDistance = sizeDifference - pupilPosition + 'px';
			if (pupilPosition < 15){
				$('#pupil' + x).animate({
						top: '+='+fallDistance
				}, 200);
			}}}

});
