// $(document).ready(function() { 

//     $('img').hide();
//     $('img').each(function(i) {
//         if (this.complete) {
//             $(this).fadeIn();
//         } else {
//             $(this).load(function() {
//                 $(this).fadeIn();
//             });
//         }
//     });
// });

$(document).ready(function() { 

    $('selector').waitForImages().done(function() {
    // All descendant images have loaded, now slide up.
    $(this).slideUp();
});
    	
});



// var $el = $(".heading:first"), text = $el.text(),
//     words = text.split(" ");

// var html = "";
// for (var i = 0; i < words.length; i++) {
//     html += "<span>" + words[i] + " </span>";
// };

// $el.html(html).children().hide().each(function(i){
//   $(this).delay(i*500).fadeIn(700);
// });




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
// $('body').fadeIn(200);

// });


// $(function(){
//   'use strict';
//   var options = {
//     prefetch: true,
//     cacheLength: 10,
//     scroll: true,
//     onStart: {
//       duration: 300, // Duration of our animation
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


// (function($) {

//   /**
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
//    */

//   $.fn.visible = function(partial) {
    
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
    
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };
    
// })(jQuery);

// var win = $(window);

// var allMods = $(".module");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.scroll(function(event) {
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in"); 
//     } 
//   });
  
// });