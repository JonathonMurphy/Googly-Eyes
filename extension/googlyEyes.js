$ (function(){

	//IDEA G + click adds googly eye instead of double click

	//BUG #1 Pupil can fall outside of the Eye cirlce area

	//BUG #2 Googly Eyes default to the bottom of the initial viewport
	//when placed in a location outside of that viewport and then moved
	//via the drag funtion

	//TODO
	//Clean up the repo and merge with master
	//Improve the look of the googly eye with css

	//Les Variables
	let main;
	let i = 0;
	let googlyEyeArray = [];
	let $clickArea = $('body');
	let eyeSize = 25;
	let pupilSize = 10;
	let pupilLeft = 7.5;
	//These two need to be tied to the ID once the object is created
	let radius = 7;
	let sizeDifference = eyeSize - pupilSize;
	$clickArea.css('height', $(window).height());


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
				'z-index' : '+2147483646',
				'background-color' : 'black',
				'position' : 'absolute',
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
						'z-index' : '+2147483647',
						'background-color' : 'white',
						'margin' : '0',
						'padding' : '0',
						'position' : 'relative',
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
