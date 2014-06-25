function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tf = Ti.UI.createTextField({
        width: "90%",
        height: "30dp",
        color: "#000",
        hintText: "Emoji",
        top: "30%",
        keyboardType: Ti.UI.KEYBOARD,
        returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "tf"
    });
    $.__views.index.add($.__views.tf);
    $.__views.ok = Ti.UI.createButton({
        width: "90%",
        height: "30dp",
        color: "#000",
        title: "OK",
        top: "45%",
        id: "ok"
    });
    $.__views.index.add($.__views.ok);
    var __alloyId0 = [];
    $.__views.scrollEmoji = Ti.UI.createScrollableView({
        bottom: "-40%",
        height: "40%",
        views: __alloyId0,
        id: "scrollEmoji"
    });
    $.__views.index.add($.__views.scrollEmoji);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emoji = require("util");
    var emojView = emoji.getemoji();
    var animation_Up = Titanium.UI.createAnimation({
        height: "40%",
        bottom: "0dp",
        duration: 500
    });
    var animation_Down = Titanium.UI.createAnimation({
        height: "40%",
        bottom: "-40%",
        duration: 500
    });
    $.tf.addEventListener("focus", function() {
        $.tf.blur();
        $.scrollEmoji.animate(animation_Up);
    });
    $.ok.addEventListener("click", function() {
        $.scrollEmoji.animate(animation_Down);
    });
    for (var i = 0; emojView.length > i; i++) $.scrollEmoji.addView(emojView[i]);
    Ti.App.addEventListener("emoji", function(e) {
        $.tf.value = $.tf.value + e.value;
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;