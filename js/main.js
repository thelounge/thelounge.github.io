(function() {
	$.getJSON("https://api.github.com/repos/thelounge/lounge/tags", function(json) {
		var first = json.shift();
		if (first.name) {
			var version = document.getElementById("version");
			version.textContent = "version " + first.name.substr(1); // Strip `v` in `vX.Y.Z`
			version.className = "version_shown";
		}
	});
}());
