$(document).ready(function(){
	$('#add').click(function(){
		var input = $('#addtolist').val();
		if (input.length > 0) {
			$('#error').hide();
			$('.todolist').append('<li>' +'<button class="item"> X </button>' + " " + input + '</li>');
			$('#addtolist').val('');
		}
		else {
			$('#error').show();
		}
	})

	$('ul').on('click', 'button', function() {
		$(this).parent().toggleClass('done');	
	});
});