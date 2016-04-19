//in JS

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>To Do List</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="http://code.jquery.com/jquery.min.js"></script>
    <script src="js/app.js"></script>
</head>

<body>
    <h1>To Do List</h1>
    <input type="text" class="addtolist" placeholder="enter item to do" />
    <button class="add">Add to list</button>
    <div class="error">Enter a list item.</div>
    <ul class="todolist"></ul>
    <div class="whatever"></div>

</body>



$(document).ready(function () {

	$('.add').click(function () {
		var input = $('.addtolist').val();
		if (input.length) {
			return appendInput('.todolist', 'li', input);
		}

		$('.error').show();

	});

	$('ul').on('click', 'button', function () {
		$(this).parent().remove();
		// or $(this).closest('li').remove();

	});

});


function appendInput(parent, element, value) {
	$('.error').hide();
	$(parent).append('<' + element + '>' + '<button> X </button>' + value + '</' + element + '>');
	$('.addtolist').val('');

}

