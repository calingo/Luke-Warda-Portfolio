var $el = $(".heading:first"), text = $el.text(),
    words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + " </span>";
};

$el.html(html).children().hide().each(function(i){
  $(this).delay(i*500).fadeIn(700);
});

