var emoji_arr = [];

var b;

exports.getemoji = function() {
    var view1_arr = [ "", "", "", "♬", "2", "❦", "", "", "", "", "☻", "♫", "☒", "☪", "☂", "9", "♤", "", "☹", "♪", "♀", "15", "☃", "☛", "17", "18", "19", "20", "♂", "☮", "23", "☚", "★", "26", "27", "✖", "29", "30", "☾", "☟" ];
    var view1 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view1_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            left: 18,
            title: view1_arr[i],
            color: "black",
            backgroundColor: "white",
            borderRadius: 3
        });
        view1.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view1);
    var view2_arr = [ "✍", "1", "2", "3", "❣", "", "♡", "❧", "✎", "☣", "♕", "♔", "5", "♘", "♖", "♙", "✏", "7", "♛", "♚", "8", "♞", "♜", "♟", "✐", "10", "11", "✳", "✴", "✵", "✹", "✺", "14", "✡", "✞", "☩", "☨", "☧", "20", "21" ];
    var view2 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view2_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view2_arr[i],
            color: "black"
        });
        view2.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view2);
    var view3_arr = [ "☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷", "1", "☽", "☿", "♀", "♁", "♂", "♃", "♄", "♅", "♆", "♇", "", "", "", "", "", "", "", "", "", "", "", "", "☾", "☉", "☊", "☋", "☌", "☍", "18", "☇", "☈" ];
    var view3 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view3_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view3_arr[i],
            color: "black"
        });
        view3.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view3);
    var view4_arr = [ "ʻ", "ʼ", "1", "ˮ", "❑", "❒", "❑", "❒", "➘", "➙", "➚", "➛", "⇛", "⇚", "⇑", "⇓", "➠", "", "➢", "➣", "➤", "➥", "➦", " ➧", "➨", "➩", "➪", "➫", "➬", "➭", "➮", "➯", "➱", "➲", "2", "3", "4", "5", "➽", "6" ];
    var view4 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view4_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view4_arr[i],
            color: "black"
        });
        view4.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view4);
    var view5_arr = [ "Γ", "Δ", "Θ", "Λ", "Ξ", "⊓", " Σ", "Υ", "Φ", "Ψ", "Ω", "", "β", "Υ", "", "ε", "", "η", "θ", "7", "8", "9", "μ", "0", "11", "12", "ρ", "ς", "σ", "13", "14", "15", "16", "Ψ", "ω", "3", "4", "ϖ", "¡", "¿" ];
    var view5 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view5_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view5_arr[i],
            color: "black"
        });
        view5.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view5);
    var view6_arr = [ "1", "2", "3", "4", "ℸ", "ℷ", "ℶ", "א", "9", "0", "11", "12", "℩", "14", "15", "16", "17", "18", "19", "20", "21", "ﬠ", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "℈", "℃", "℉", "ɛ", "¤", "¦", "÷", "±" ];
    var view6 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view6_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view6_arr[i],
            color: "black"
        });
        view6.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view6);
    var view7_arr = [ "à", "á", "â", "ã", "ä", "å", "æ", "Ç", "è", "é", "ê", "ë", "Ì", "Í", "Î", "Ï", "1", "2", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "ù", "ú", "û", "ü", "ý", "ÿ", "©", "®", "¼", "½", "¾", "°", "1", "2", "3", "3" ];
    var view7 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view7_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view7_arr[i],
            color: "black"
        });
        view7.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view7);
    var view8_arr = [ "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "Ə", "ȼ", "£", "€", "¥", "₤", "₣", "¶", "§" ];
    var view8 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view8_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view8_arr[i],
            color: "black"
        });
        view8.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view8);
    var view9_arr = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
    var view9 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view9_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view9_arr[i],
            color: "black"
        });
        view9.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view9);
    var view10_arr = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
    var view10 = Ti.UI.createView({
        backgroundColor: "gray",
        layout: "horizontal"
    });
    for (var i = 0; view10_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view10_arr[i]
        });
        view10.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view10);
    var view11_arr = [ "", "", "1", "", "", "", "", "", "", "", "", "", "", "", "", "", "3", "", "4", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "9", "", "", "", "", "", "" ];
    var view11 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view11_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view11_arr[i],
            color: "black"
        });
        view11.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view11);
    var view12_arr = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "⛳", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
    var view12 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view12_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view12_arr[i],
            color: "black"
        });
        view12.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view12);
    var view13_arr = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1", "", "", "", "", "", "", "", "", "", "", "3", "4" ];
    var view13 = Ti.UI.createView({
        backgroundColor: "#e2e2e2",
        layout: "horizontal"
    });
    for (var i = 0; view13_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view13_arr[i],
            color: "black",
            borderRadius: 3
        });
        view13.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view13);
    var view14_arr = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "4", "9" ];
    var view14 = Ti.UI.createView({
        backgroundColor: "gray",
        layout: "horizontal"
    });
    for (var i = 0; view14_arr.length > i; i++) {
        var btn = Ti.UI.createButton({
            height: 30,
            width: 20,
            top: 10,
            backgroundColor: "white",
            borderRadius: 3,
            left: 18,
            title: view14_arr[i],
            color: "black"
        });
        view14.add(btn);
        btn.addEventListener("click", function(e) {
            Ti.API.info("emoji e |" + JSON.stringify(e));
            Ti.App.fireEvent("emoji", {
                value: e.source.title
            });
        });
    }
    emoji_arr.push(view14);
    return emoji_arr;
};