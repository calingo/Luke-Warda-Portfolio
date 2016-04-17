


// $(document).ready(function() { 
    

// 	var $el = $(".heading:first"), text = $el.text(),
//     words = text.split(" ");

// 	var html = "";
// 	for (var i = 0; i < words.length; i++) {
// 	    html += "<span>" + words[i] + " </span>";
// 	};

// 	$el.html(html).children().css('opacity', '0').each(function(i){
// 	  $(this).delay(i*100).fadeTo(2000,1)
// 	});



// });

$(function(){
  'use strict';
  var options = {
    prefetch: true,
    cacheLength: 0,
    scroll: true,
    onStart: {
      duration: 500, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});