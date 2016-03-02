var URL = location.pathname;

$(function() {
	highlight();
	fetchVersion();
});

function highlight() {
	$("#menu a[href='" + URL + "']").addClass("active");
}

function fetchVersion() {
	var version = $("small#version");
	if (!version.length) {
		return;
	}
	$.getJSON("https://api.github.com/repos/thelounge/lounge/tags", function(json) {
		var first = json.shift();
		if (first.name) {
			version.html("version " + first.name);
			version.addClass("show");
		}
	});
}
