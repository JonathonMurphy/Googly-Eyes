$ (function(){

	//BUG #1 Pupil can fall outside of the Eye cirlce area
	//BUG #2 background.js fails to recieve the returned send message
	// response from the googlyEye.js scirpt if more than one window is open
	//BUG #3 Doesn't work on youtube...

	//TODO
	//Clean up the repo and merge with master
	//Improve the look of the googly eye with css

	//Les Variables
	let main,
	 		x = 0,
	 		y = 0,
	 		i = 0,
	 		radius = 7,
	 		eyeSize = 25,
	 		pupilSize = 10,
	 		pupilLeft = 7.5,
	 		googlyEyeArray = [],
	 		$clickArea = $('body'),
	 		sizeDifference = eyeSize - pupilSize;
	//Set position of x & y by the location of the context menu
	$clickArea.contextmenu(function(){
		x = event.pageX - 10;
		y = event.pageY - 10;
		return x, y;
	});
	//Googly Eye Object Constructor
	function googlyEye(i) {
		this.x = x;
		this.y = y;
		this.html = "<div class='eye' id='eye"+i+"' ";
		this.html += "style='top:"+this.y+"px; left:"+this.x+"px;'>";
		this.html += "<div class='pupil ' id='pupil"+i+"'></div></div>"
	}
	//Event Triggers & Parameters
	$clickArea.mouseup(function() {
		mainLoop(i);
	});
	function addGooglyEye() {
		googlyEyeArray.push(i);
		googlyEyeArray[i] = new googlyEye(i);
		$clickArea.append(googlyEyeArray[i].html);
		$('#eye'+i).draggable({
			containment: 'parent'}).css({
				'z-index' : '+2147483646',
				'background-color' : 'white',
				'position' : 'absolute',
				'width' : eyeSize + 'px',
				'height' : eyeSize + 'px',
				'border-radius' : eyeSize + 'px'
			});
		$('#pupil'+i).draggable({
			containment: 'parent',
			//Sets the containment area for the drag function
			// to a circle
			//Thanks to Borgboy on stackOverflow
			drag: function( event, ui ) {
	        let x = ui.position.left - radius,
	            y = radius - ui.position.top,
	            h = Math.sqrt(x*x + y*y);
	        if (Math.floor(h) > radius) {
	            ui.position.top = radius - Math.round(radius * y / h);
	            ui.position.left = Math.round(radius * x / h) + radius;
	        }}}).css({
						'z-index' : '+2147483647',
						'background-color' : 'black',
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
	};
//Main animation loop
	function mainLoop(i) {
		for (x = 0; x < i; x++) {
			let pupilPosition = $('#pupil' + x).position().top,
			 		fallDistance = sizeDifference - pupilPosition + 'px';
			if (pupilPosition < 15){
				$('#pupil' + x).animate({
						top: '+='+fallDistance
				}, 200);
			}}}
	//Recieve Response from
	chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ? sender.tab.url :
                "Googly Eye");
    if (request.greeting == "hello") {
			sendResponse({farewell: "goodbye"});
			addGooglyEye();
		}
  });
});
