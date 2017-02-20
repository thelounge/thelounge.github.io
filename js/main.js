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
		$(".nav-search-overlay")
			.addClass("opened")
			.one("transitionend webkitTransitionEnd oTransitionEnd", function () {
				$("#search-input").focus();
			});
		event.preventDefault();
	});

	$("#search-close-btn").click(function(event) {
		$(".nav-search-overlay")
			.removeClass("opened")
			.one("transitionend webkitTransitionEnd oTransitionEnd", function () {
				$("#search-input").val("").trigger("keyup");
			});
		event.preventDefault();
	});

	$(document).keypress(function (event) {
		if (!$(event.target).is('input') && event.which === 115) { // "S" key
			$("#search-btn").click();
		}
	});

	$("#search-input").keydown(function (event) {
		if (event.which === 27) { // "Escape" key
			$("#search-close-btn").click();
			event.preventDefault();
		}
	});
}());
