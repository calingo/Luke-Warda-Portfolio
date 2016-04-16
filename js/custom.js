


$(document).ready(function() { 
    

	var $el = $(".heading:first"), text = $el.text(),
    words = text.split(" ");

	var html = "";
	for (var i = 0; i < words.length; i++) {
	    html += "<span>" + words[i] + " </span>";
	};

	$el.html(html).children().css('opacity', '0').each(function(i){
	  $(this).delay(i*100).fadeTo(2000,1)
	});



});

