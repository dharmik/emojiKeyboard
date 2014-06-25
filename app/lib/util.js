var emoji_arr = [];
var b;
exports.getemoji = function() {
	var view1_arr = ['\ue022', '\ue01d', '\ue414', '\u266C', '2', '\u2766', '\ue049', '\ue011', '\ue20e', '\ue009', '\u263B', '\u266B', '\u2612', '\u262A', '\u2602', '9', '\u2664', '\ue045', '\u2639', '\u266A', '\u2640', '15', '\u2603', '\u261B', '17', '18', '19', '20', '\u2642', '\u262E', '23', '\u261A', '\u2605', '26', '27', '\u2716', '29', '30', '\u263E', '\u261F'];
	var view1 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view1_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			left : 18,
			title : view1_arr[i],
			//image:'&#x1f604',
			color : 'black',
			backgroundColor : 'white',
			borderRadius : 3
		});
		view1.add(btn);
		btn.addEventListener('click', function(e) {
			//Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view1);
	var view2_arr = ['\u270D', '1', '2', '3', '\u2763', '\ue022', '\u2661', '\u2767', '\u270E', '\u2623', '\u2655', '\u2654', '5', '\u2658', '\u2656', '\u2659', '\u270F', '7', '\u265B', '\u265A', '8', '\u265E', '\u265C', '\u265F', '\u2710', '10', '11', '\u2733', '\u2734', '\u2735', '\u2739', '\u273A', '14', '\u2721', '\u271E', '\u2629', '\u2628', '\u2627', '20', '21'];
	var view2 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view2_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view2_arr[i],
			//image:'&#x1f604',
			color : 'black'
		});
		view2.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view2);
	var view3_arr = ['\u2630', '\u2631', '\u2632', '\u2633', '\u2634', '\u2635', '\u2636', '\u2637', '1', '\u263D', '\u263F', '\u2640', '\u2641', '\u2642', '\u2643', '\u2644', '\u2645', '\u2646', '\u2647', '\ue23f', '\ue240', '\ue241', '\ue242', '\ue243', '\ue244', '\ue245', '\ue246', '\ue247', '\ue248', '\ue249', '\ue24a', '\u263E', '\u2609', '\u260A', '\u260B', '\u260C', '\u260D', '18', '\u2607', '\u2608'];
	var view3 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view3_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view3_arr[i],
			//image:'&#x1f604',
			color : 'black'
		});
		view3.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view3);
	var view4_arr = ['\u02BB', '\u02BC', '1', '\u02EE', '\u2751', '\u2752', '\u2751', '\u2752', '\u2798', '\u2799', '\u279A', '\u279B', '\u21DB', '\u21DA', '\u21D1', '\u21D3', '\u27A0', '\ue234', '\u27A2', '\u27A3', '\u27A4', '\u27A5', '\u27A6', ' \u27A7', '\u27A8', '\u27A9', '\u27AA', '\u27AB', '\u27AC', '\u27AD', '\u27AE', '\u27AF', '\u27B1', '\u27B2', '2', '3', '4', '5', '\u27BD', '6'];
	var view4 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view4_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view4_arr[i],
			color : 'black'
		});
		view4.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view4);
	var view5_arr = ['\u0393', '\u0394', '\u0398', '\u039B', '\u039E', '\u2293', ' \u03A3', '\u03A5', '\u03A6', '\u03A8', '\u03A9', '', '\u03B2', '\u03A5', '', '\u03B5', '', '\u03B7', '\u03B8', '7', '8', '9', '\u03BC', '0', '11', '12', '\u03C1', '\u03C2', '\u03C3', '13', '14', '15', '16', '\u03A8', '\u03C9', '3', '4', '\u03D6', '\u00A1', '\u00BF'];
	var view5 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view5_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view5_arr[i],
			color : 'black'
		});
		view5.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view5);
	var view6_arr = ['1', '2', '3', '4', '\u2138', '\u2137', '\u2136', '\u05D0', '9', '0', '11', '12', '\u2129', '14', '15', '16', '17', '18', '19', '20', '21', '\uFB20', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '\u2108', '\u2103', '\u2109', '\u025B', '\u00A4', '\u00A6', '\u00F7', '\u00B1'];
	var view6 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view6_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view6_arr[i],
			color : 'black'
		});
		view6.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view6);
	var view7_arr = ['\u00e0', '\u00E1', '\u00E2', '\u00E3', '\u00E4', '\u00E5', '\u00E6', '\u00C7', '\u00E8', '\u00E9', '\u00EA', '\u00EB', '\u00CC', '\u00CD', '\u00CE', '\u00CF', '1', '2', '\u00D2', '\u00D3', '\u00D4', '\u00D5', '\u00D6', '\u00D8', '\u00F9', '\u00FA', '\u00FB', '\u00FC', '\u00FD', '\u00FF', '\u00A9', '\u00AE', '\u00BC', '\u00BD', '\u00BE', '\u00B0', '\u0031', '\u0032', '\u0033', '3'];
	var view7 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view7_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view7_arr[i],
			color : 'black'
		});
		view7.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view7);
	var view8_arr = ['\u00C0', '\u00C1', '\u00C2', '\u00C3', '\u00C4', '\u00C5', '\u00C6', '\u00C7', '\u00C8', '\u00C9', '\u00CA', '\u00CB', '\u00CC', '\u00CD', '\u00CE', '\u00CF', '\u00D0', '\u00D1', '\u00D2', '\u00D3', '\u00D4', '\u00D5', '\u00D6', '\u00D8', '\u00D9', '\u00DA', '\u00DB', '\u00DC', '\u00DD', '\u00DE', '\u00DF', '\u018F', '\u023C', '\u00A3', '\u20AC', '\u00A5', '\u20A4', '\u20A3', '\u00B6', '\u00A7'];
	var view8 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view8_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view8_arr[i],
			color : 'black'
		});
		view8.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view8);
	var view9_arr = ['\ue401', '\ue402', '\ue403', '\ue404', '\ue405', '\ue406', '\ue407', '\ue408', '\ue409', '\ue40a', '\ue40b', '\ue40c', '\ue40d', '\ue40e', '\ue40f', '\ue410', '\ue411', '\ue412', '\ue413', '\ue414', '\ue415', '\ue416', '\ue417', '\ue418', '\ue419', '\ue41a', '\ue41b', '\ue41c', '\ue41d', '', '\ue41f', '\ue420', '\ue421', '\ue422', '\ue423', '\ue424', '\ue425', '\ue426', '\ue427', '\ue428'];
	var view9 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view9_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view9_arr[i],
			color : 'black'
		});
		view9.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view9);
	var view10_arr = ['\ue515', '\ue516', '\ue517', '\ue518', '\ue519', '\ue51a', '\ue51b', '\ue51c', '\ue51d', '\ue51e', '\ue51f', '\ue520', '\ue521', '\ue522', '\ue523', '\ue524', '\ue525', '\ue526', '\ue527', '\ue528', '\ue529', '\ue52a', '\ue52b', '\ue52c', '\ue52d', '\ue52e', '\ue52f', '\ue530', '\ue531', '\ue109', '\ue10a', '\ue10b', '\ue019', '\ue01a', '\ue04f', '\ue050', '\ue052', '\ue053', '\ue055', '\ue054'];
	var view10 = Ti.UI.createView({
		backgroundColor : 'gray',
		layout : 'horizontal'
	});
	for (var i = 0; i < view10_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view10_arr[i]
		});
		view10.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view10);
	var view11_arr = ['', '\ue102', '1', '\ue104', '\ue105', '\ue106', '\ue40f', '\ue108', '\ue10c', '\ue10d', '\ue10e', '\ue10f', '\ue110', '\ue111', '\ue112', '\ue113', '3', '\ue115', '4', '\ue117', '\ue118', '\ue119', '\ue11a', '\ue11b', '\ue11c', '\ue11d', '\ue11e', '\ue11f', '\ue120', '\ue121', '\ue122', '\ue123', '\ue124', '9', '\ue126', '\ue127', '\ue128', '\ue129', '\ue12a', '\ue12b'];
	var view11 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view11_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view11_arr[i],
			color : 'black'
		});
		view11.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view11);
	var view12_arr = ['', '\ue004', '\ue005', '\ue006', '', '\ue008', '\ue009', '\ue00a', '\ue00b', '\ue00c', '\ue00d', '\ue00e', '', '\ue010', '\ue011', '\ue012', '\ue013', '\u26F3', '\ue015', '\ue016', '\ue017', '\ue018', '\ue42a', '\ue42b', '\ue01b', '\ue01c', '\ue01d', '\ue159', '\ue435', '\ue020', '\ue031', '\ue032', '\ue033', '\ue034', '\ue035', '\ue036', '\ue037', '\ue038', '\ue039', '\ue03a'];
	var view12 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view12_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view12_arr[i],
			color : 'black'
		});
		view12.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}

	emoji_arr.push(view12);
	var view13_arr = ['\ue039', '\ue03a', '\ue03b', '\ue03c', '\ue03d', '\ue03e', '\ue03f', '\ue040', '\ue041', '\ue042', '\ue043', '\ue044', '\ue045', '\ue046', '\ue047', '\ue048', '\ue049', '\ue04a', '\ue04b', '\ue04c', '\ue04d', '\ue04e', '\ue13d', '\ue12f', '\ue130', '\ue131', '\ue132', '1', '\ue134', '\ue135', '\ue136', '\ue137', '\ue138', '\ue20a', '\ue208', '\ue202', '\ue211', '\ue219', '3', '4'];
	var view13 = Ti.UI.createView({
		backgroundColor : '#e2e2e2',
		layout : 'horizontal'
	});
	for (var i = 0; i < view13_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view13_arr[i],
			color : 'black',
			borderRadius : 3
		});
		view13.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view13);
	var view14_arr = ['\ue301', '\ue302', '\ue303', '\ue304', '\ue305', '\ue306', '\ue307', '\ue308', '\ue309', '\ue30a', '\ue30b', '\ue30c', '\ue13b', '\ue30e', '\ue30f', '\ue310', '\ue311', '\ue312', '\ue313', '\ue314', '2', '\ue316', '\ue317', '\ue318', '\ue319', '\ue31a', '\ue31b', '\ue31c', '\ue31d', '\ue31e', '\ue31f', '\ue320', '\ue321', '\ue322', '\ue323', '\ue324', '\ue325', '\ue326', '4', '9'];
	var view14 = Ti.UI.createView({
		backgroundColor : 'gray',
		layout : 'horizontal'
	});
	for (var i = 0; i < view14_arr.length; i++) {
		var btn = Ti.UI.createButton({
			height : 30,
			width : 20,
			top : 10,
			backgroundColor : 'white',
			borderRadius : 3,
			left : 18,
			title : view14_arr[i],
			color : 'black'
		});
		view14.add(btn);
		btn.addEventListener('click', function(e) {
			Ti.API.info('emoji e |' + JSON.stringify(e));
			Ti.App.fireEvent("emoji", {
				value : e.source.title
			});
		});
	}
	emoji_arr.push(view14);
	return (emoji_arr);

};
