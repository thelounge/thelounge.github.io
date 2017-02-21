(function() {
	const stableVersion = $("#stable_version");

	if (stableVersion.length) {
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

			// `.substr(1)` strips `v` in `vX.Y.Z`
			stableVersion.text("version " + stable.tag_name.substr(1) + (prerelease ? " (stable)" : ""));

			if (prerelease) {
				$("#prerelease_version").text("version " + prerelease.tag_name.substr(1) + " (pre-release)");
				$("#prerelease_card").removeClass("hidden");
			}
		});
	}
})();
