(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    $("#search-results").show();

    if (results.length) { // Are there any results?
      var appendString = '<div class="container"><h1>Search results</h1><ul>';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
      }

      appendString += "</ul></div>";

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<div class="container"><h1>Search results</h1><p>No results found</p></div>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  $("#search-input").keyup(function() {
    var searchTerm = $(this).val();

    if (searchTerm) {
      $("#content").hide();
      // document.getElementById('search-input').setAttribute("value", searchTerm);

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
