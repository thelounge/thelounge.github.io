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
			version.html("version " + first.name.substr(1)); // Strip `v` in `vX.Y.Z`
			version.addClass("version_shown");
		}
	});
}
