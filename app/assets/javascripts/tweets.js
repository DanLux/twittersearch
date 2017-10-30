
function ajax_request(query="", callback=function(){}) {
	$.ajax({
		type:'GET',
		url: "/tweets/" + encodeURIComponent(query),
		dataType: "script"
	}).always(callback);
}

function search() {
	let query = $.trim($("#search-query").val());
	if (query) {
		$("#search").children().prop("disabled", true);
		ajax_request(query, function() {
			$("#search").children().prop("disabled", false);
		});
	}
}

function add_enter_key_listener() {
	$("#search-query").keypress(function(event) {
		let key = event.which || event.keyCode;
	    if (key === 13) {
	        event.preventDefault();
	        search()
	    }
	})
}

function add_clear_input_listener() {
	$("#search-query").keyup(function() {
	    if (!this.value) {
	        ajax_request();
	    }
	});
}

function add_search_button_listener() {
	$("#search-button").click(search);
}


$(document).ready(function() {
 	add_enter_key_listener();
 	add_search_button_listener();
 	add_clear_input_listener();
});
