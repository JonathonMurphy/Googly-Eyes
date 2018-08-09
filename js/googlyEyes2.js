$ (function(){

	let clickArea = $('.click-area');
	clickArea.css('height', $(window).height());
	let i = 0;
	let googlyEyeArray = [];


	//Beginning of object
	function googlyEye(i, x, y, html) {
		this.x = event.pageX;
		this.y = event.pageY;
		this.html = "<div class='eye' id='eye"+i+"' ";
		this.html += "style='top:"+this.y+"px; left:"+this.x+"px;'>";
		this.html += "<div class='pupil ' id='pupil"+i+"'></div></div>"
	} // End of object



//Add new googlyEye object on double click

	clickArea.dblclick(function() {
		googlyEyeArray.push(i);
		googlyEyeArray[i] = new googlyEye(i);
		clickArea.append(googlyEyeArray[i].html);
		$('#pupil'+i).draggable({
			containment: 'parent'});
		console.log(googlyEyeArray);
		i++;
	});

});


// move the positioning function to the dbl click, and bring the x and y variables with it
