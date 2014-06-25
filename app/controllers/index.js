var emoji = require('util');
var emojView = emoji.getemoji();

var animation_Up = Titanium.UI.createAnimation({
	height : '40%',
	bottom : "0dp",
	duration : 500
});
var animation_Down = Titanium.UI.createAnimation({
	height : '40%',
	bottom : "-40%",
	duration : 500
});

$.tf.addEventListener('focus', function() {
	$.tf.blur();
	$.scrollEmoji.animate(animation_Up);
});

$.ok.addEventListener('click', function() {
	$.scrollEmoji.animate(animation_Down);
});

for (var i = 0; i < emojView.length; i++) {
	$.scrollEmoji.addView(emojView[i]);
}

Ti.App.addEventListener('emoji', function(e) {
	$.tf.value = $.tf.value + e.value;
});

$.index.open();
