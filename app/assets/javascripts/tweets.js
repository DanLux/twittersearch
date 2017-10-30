
function search() {
	let query = $.trim($("#search-query").val());
    if (query) {
    	$.ajax({
    		type:'GET',
    		url: "/tweets/" + encodeURIComponent(query),
    		dataType: "script",
    		success: function() {}
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

function add_search_button_listener() {
	$("#search-button").click(search);
}


$(document).ready(function() {
 	add_enter_key_listener();
 	add_search_button_listener();
});
