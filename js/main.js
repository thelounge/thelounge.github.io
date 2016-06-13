(function() {
	$.getJSON("https://api.github.com/repos/thelounge/lounge/releases", function(json) {
		var latest = json[0];
		var stable;
		var prerelease;

		if (latest.prerelease) {
			prerelease = latest;
			stable = json.find(function (release) { return !release.prerelease; });
		} else {
			stable = latest;
		}

		var stable_version = document.getElementById("stable_version");
		// `.substr(1)` strips `v` in `vX.Y.Z`
		stable_version.textContent = "version " + stable.tag_name + (prerelease ? " (stable)" : "");

		if (prerelease) {
			var prerelease_version = document.getElementById("prerelease_version");
			prerelease_version.textContent = "version " + prerelease.tag_name.substr(1) + " (pre-release)";
			document.getElementById("prerelease_card").className = "card";
		}
	});
}());
