$(document).ready(function(){
	$('#add').click(function(){
		var input = $('#addtolist').val();
		if (input.length > 0) {
			$('#error').hide();
			$('.todolist').append('<li>' +'<button class="item"> ✔ </button>' + " " + input + " " + '<button class="remove"> X </button>' + '</li>');
			$('#addtolist').val('');
		}
		else {
			$('#error').show();
		}
	})

	$('ul').on('click', '.item', function() {
		$(this).parent().toggleClass('done');	
	});

	$('ul').on('click', '.remove', function() {
		$(this).parent().remove();	
	});
});