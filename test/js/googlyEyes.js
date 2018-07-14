$ (function(){
	function leftPupilFall () {
		$('#leftPupil').animate({
			top: '+=150px'
	}, $('#speed').val());
	}
	$('#leftPupil').draggable().mouseup(function (){
		leftPupilFall();
	});
});
