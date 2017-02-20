(function() {
	function displaySearchResults(results, store) {
		var searchResults = $("#search-results");
		var resultContent = '<div class="container"><h1>Search results</h1>';

		if (results.length) { // Are there any results?
			resultContent += "<ul>";
			results.forEach(function (result) {
				var item = store[result.ref];
				resultContent += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
			});
			resultContent += "</ul>";
		} else {
			resultContent += "<p>No results found</p>";
		}
		resultContent += "</div>";
		searchResults.html(resultContent);
		searchResults.show();
	}

	$("#search-input").keyup(function() {
		var searchTerm = $(this).val();

		if (searchTerm) {
			$("#content").hide();

			// Initalize lunr with the fields it will be searching on. I've given title
			// a boost of 10 to indicate matches on this field are more important.
			var idx = lunr(function () {
				this.field('id');
				this.field('title', { boost: 10 });
				this.field('category');
				this.field('content', { boost: 5 });
			});

			for (var key in window.store) { // Add the data to lunr
				idx.add({
					'id': key,
					'title': window.store[key].title,
					'category': window.store[key].category,
					'content': window.store[key].content
				});

				var results = idx.search(searchTerm); // Get lunr to perform a search
				displaySearchResults(results, window.store); // We'll write this in the next section
			}
		} else {
			$("#search-results").hide();
			$("#content").show();
		}
	});
})();
