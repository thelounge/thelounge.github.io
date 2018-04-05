// Retrieval of latest version number(s) (from GitHub releases) to display
// it/them on the homepage. If there are no current pre-releases, only display
// latest stable version.
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
}());

// Real-time client-side search using https://github.com/olivernn/lunr.js
// Open search field with the search icon, close it with "Escape" / the close
// icon, cycle through results with "Up" and "Down" and visit selected result
// with "Enter".
(function() {
	// Preparing lunrjs index based on store located in HTML pages
	var lunrIndex = lunr(function () {
		this.field('id');
		this.field('title', { boost: 10 });
		this.field('category');
		this.field('content', { boost: 5 });
	});
	for (var key in window.store) {
		lunrIndex.add({
			'id': key,
			'title': window.store[key].title,
			'category': window.store[key].category,
			'content': window.store[key].content
		});
	}

	// Run the search every time the search input value changes.
	// Use "input" event instead of `keydown`/`keypress`/`keyup` to focus on
	// actual content change.
	$("#search-input").on('input', function(event) {
		var searchTerm = $(this).val();
		var resultsElement = $("#search-results");
		var contentElement = $("#content");
		var accessibleElement = $("#accessible-search-summary");

		// When the search field is not empty, run lunrjs and wrap all results in a
		// list or report that no results were found.
		// The first result is marked as "selected" so up/down arrows can cycle
		// through results while pressing Enter will click on the link.
		if (searchTerm) {
			var results = lunrIndex.search(searchTerm);
			var resultsContent;
			var accessibleSummaryContent;

			if (results.length) {
				resultsContent = "<ul>";
				results.forEach(function (result) {
					var url = result.ref;
					var item = window.store[url];
					resultsContent += '<li>';
					resultsContent += '<a href="' + url + '">' + item.title + '</a>';
					resultsContent += "</li>";
				});
				resultsContent += "</ul>";
				accessibleSummaryContent = results.length + " results found. Focus on the first result with Enter then cycle through them with Tab.";
			} else {
				resultsContent = "<p>No results found.</p>";
				accessibleSummaryContent = "No results found."
			}
			$("#results-placeholder").html(resultsContent);
			resultsElement.show();
			contentElement.hide();
			accessibleElement.html(accessibleSummaryContent);
		} else {
			// When the search input is empty, hide the result page and display the
			// current page. Also clear the accessibility notification area.
			resultsElement.hide();
			contentElement.show();
			accessibleElement.empty();
		}
	});

	// This must be `keydown` to override built-in handlers. `keypress` is not
	// emitted on non-printable characters (also differs across browsers) and
	// `keyup` arrives too late.
	$(document).keydown(function (event) {
		if (event.which === 27) {
			// "Escape" key, cancels current search. This cannot be on keyup as inputs
			// are being cleared by default on Escape keydown.
			$("#search-close-btn").click();
			return false;
		}
	});

	$("#search-input").keydown(function (event) {
		if (event.which === 27) {
			// Do not clear input when pressing "Escape" but let it bubble up to
			// `document.keydown` handler.
			event.preventDefault();
		} else if (event.which === 13) {
			// "Enter" key to focus on the first available result
			$("#search-results li:first-child a").focus();
			return false;
		}
	});

	$("#search-btn").click(function() {
		$(".nav-search-overlay")
			.addClass("opened")
			.one("transitionend webkitTransitionEnd oTransitionEnd", function () {
				// `.focus()` does not work on hidden elements, which also happens if
				// they are starting their transition.
				$("#search-input").focus();
			});
		// This is required to focus the input when there is no transition, i.e.
		// when input is already visible without being focused.
		$("#search-input").focus();
		return false;
	});

	$("#search-close-btn").click(function() {
		$(".nav-search-overlay")
			.removeClass("opened")
			.one("transitionend webkitTransitionEnd oTransitionEnd", function () {
				// Clearing the field only after transition has finished to avoid visual
				// glitch of going back to "Search" placeholder for a fraction of time.
				// Then trigger `input` event to clear results and bring back content.
				$("#search-input").val("").trigger("input");
			});
			$("#accessible-search-summary").empty();
		return false;
	});
})();

// Add an anchor link to the page headers to create a shareable URL
(function() {
	$("h2, h3").each(function() {
		var slug = $(this).attr("id");
		$(this).prepend($('<a class="link-anchor" href="#' + slug + '"><i class="fa fa-link" aria-hidden="true"></i></a>'));
	})
}());
