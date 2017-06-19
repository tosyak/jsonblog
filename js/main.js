$(document).ready(function(){
	const user_id = 1;
	$.ajax({
		url:'https://jsonplaceholder.typicode.com/users/'+user_id,
		success: function(data, status){
			$('.user__name').text(data.name);
		}
	});

	function renderCards(type){
		var title = $('#title');
		var container = $('.preview__wrap');
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/'+type+'?userId='+user_id,
			success: function (data, status) {
				title.text(type);
				container.empty();
				$.each(data, function(index, post){
					var card = '<article class="preview"><h3>'+post.title+'</h3>';
					if(post.body){
						card += "<p>"+post.body+"</p>";
					}
					card += '</article>';
					container.append(card);
				});
			}
		});
	};
	$('.menu__item').click(function (e) {
		e.preventDefault();
		var type = $(this).attr('data-type');
		if(type){
			renderCards(type);
		}
	});		
});

