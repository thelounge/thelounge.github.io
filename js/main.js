(function() {
	if ($("#stable_version").length) {
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
			$("#stable_version").text("version " + stable.tag_name + (prerelease ? " (stable)" : ""));

			if (prerelease) {
				$("#prerelease_version").text("version " + prerelease.tag_name.substr(1) + " (pre-release)");
				$("#prerelease_card").show();
			}
		});
	}

	$("#search-btn").click(function(event) {
		if (!$("#search-input").hasClass("active")) {
			$(".search > div").addClass("active");
			$(".search > div").one("transitionend webkitTransitionEnd oTransitionEnd", function () {
				console.log('transitionend');
				$("#search-input").focus();
			});
			event.preventDefault();
		}
	});

	$("#cancel-btn").click(function(event) {
		$(".search > div").removeClass("active");
		$(".search > div").one("transitionend webkitTransitionEnd oTransitionEnd", function () {
			$("#search-input").val("");
			$("#search-input").trigger("keyup");
		});

		event.preventDefault();
	});
}());
