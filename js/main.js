// Real-time client-side search using https://github.com/olivernn/lunr.js
// Open search field with the search icon, close it with "Escape" / the close
// icon, cycle through results with "Up" and "Down" and visit selected result
// with "Enter".
window.search_data_loaded = function (search_data) {
	// Preparing lunrjs index based on data store located in HTML pages
	const lunrIndex = lunr(function () {
		this.ref('id');
		this.field('title', { boost: 10 });
		this.field('category');
		this.field('content', { boost: 5 });

		for (var key in search_data) {
			this.add({
				id: key,
				title: search_data[key].title,
				category: search_data[key].category,
				content: search_data[key].content,
			});
		}
	});

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
			var accessibleSummaryContent;

			// Display page title dynamically to avoid confusing bots that search
			// for metadata
			var resultsContent = "<h1>Search results</h1>";

			if (results.length) {
				resultsContent += "<ul>";
				results.forEach(function (result) {
					var url = result.ref;
					var item = search_data[url];
					resultsContent += '<li>';
					resultsContent += '<a href="' + url + '">' + item.title + '</a>';
					resultsContent += "</li>";
				});
				resultsContent += "</ul>";
				accessibleSummaryContent = results.length + " results found. Focus on the first result with Enter then cycle through them with Tab.";
			} else {
				resultsContent += "<p>No results found.</p>";
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
};

// Add an anchor link to the page headers to create a shareable URL
(function() {
	$("#main h2, #main h3").each(function() {
		$(this).prepend($(
			`<a class="link-anchor" href="#${$(this).attr("id")}" aria-hidden="true">` +
				'<svg class="svg-inline" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>' +
			'</a>'
		));
	});
})();

// Collapsible menu on mobile
(function() {
	const menu = document.getElementById("mobile-menu");
	const button = document.getElementById("menu-btn");

	button.addEventListener("click", function(e) {
		if (button.getAttribute("aria-expanded") === "true") {
			menu.style.maxHeight = null;
			button.setAttribute("aria-expanded", "false");
		} else {
			// because animating height changes is not trivial, max-height
			// is used, but we don't want to hardcode the value in css
			menu.style.maxHeight = menu.scrollHeight + "px";
			button.setAttribute("aria-expanded", "true");
		}

		e.preventDefault();
	}, false);
})();
