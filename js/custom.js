


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

// var timeout = false;
// var loadedimages = false;

// setTimeout(function() {
//     console.log("TIMEOUT!");
//     if (loadedimages == true) hideloadingdiv();
//     else timeout = true;

// }, 3000);

// $("html").css({overflow: 'hidden' })


// $('html').waitForImages({
//     waitForAll: true,
//     finished: function() {
//        if (timeout == true) {
//            hideloadingdiv();
//        }
//        else
//        {
//            loadedimages = true;
//        }
//     }  
// });

// function hideloadingdiv()
// {
//     $('#loading').css({display: 'none'});
//     $("html").css({overflow: 'scroll' });
//     $('html').unbind('touchmove');
// }

// $(document).ready(function(){

// /*! Fades in page on load */
// $('body').css('display', 'none');
// $('body').fadeIn(500);

// });


// $(function(){
//   'use strict';
//   var options = {
//     prefetch: true,
//     cacheLength: 3,
//     scroll: true,
//     onStart: {
//       duration: 100, // Duration of our animation
//       render: function ($container) {
//         // Add your CSS animation reversing class
//         $container.addClass('is-exiting');

//         // Restart your animation
//         smoothState.restartCSSAnimations();
//       }
//     },
//     onReady: {
//       duration: 100,
//       render: function ($container, $newContent) {
//         // Remove your CSS animation reversing class
//         $container.removeClass('is-exiting');

//         // Inject the new content
//         $container.html($newContent);

//       }
//     }
//   },
//   smoothState = $('#main').smoothState(options).data('smoothState');
// });