(function() {
	$.getJSON("https://api.github.com/repos/thelounge/lounge/releases", function(json) {
		var first = json.filter(function (release) {
			return !release.prerelease;
		})[0];

		if (first.tag_name) {
			var version = document.getElementById("version");
			version.textContent = "version " + first.tag_name.substr(1); // Strip `v` in `vX.Y.Z`
			version.className = "version_shown";
		}
	});
}());
