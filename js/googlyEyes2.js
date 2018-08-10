$ (function(){

	let main;
	let i = 0;
	let radius = 10;
	let googlyEyeArray = [];
	let clickArea = $('.click-area');
	clickArea.css('height', $(window).height());

	//Googly Eye Object
	function googlyEye(i, x, y, html) {
		this.x = event.pageX;
		this.y = event.pageY;
		this.html = "<div class='eye' id='eye"+i+"' ";
		this.html += "style='top:"+this.y+"px; left:"+this.x+"px;'>";
		this.html += "<div class='pupil ' id='pupil"+i+"'></div></div>"
	}

	//Event Triggers
	clickArea.mouseup(function() {
		mainLoop(i);
	}).dblclick(function() {
		googlyEyeArray.push(i);
		googlyEyeArray[i] = new googlyEye(i);
		clickArea.append(googlyEyeArray[i].html);
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
	        }}});
		i++;
		mainLoop(i);
	});

//Main animation loop
	function mainLoop(i) {
		for (x = 0; x < i; x++) {
			let pupilPosition = $('#pupil' + x).position().top;
			let fallDistance = 20 - pupilPosition + 'px';
			if (pupilPosition < 20){
				$('#pupil' + x).animate({
						top: '+='+fallDistance
				}, 200);
			}}}

});
