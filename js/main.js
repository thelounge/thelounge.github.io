var URL = location.pathname;
var EDIT_PATH = "https://github.com/erming/shout-website/edit/gh-pages/_docs/";

$(function() {
	highlight();
	edit();
});

function edit() {
	var docs = $("#docs-content");
	var headers = docs.find("h1, h2, h3");
	headers.each(function() {
		var self = $(this);
		var file = URL.replace("/docs/", "").replace(".html", ".md");
		if (file === "") {
			file = "index.md";
		}
		var edit = $("<a>");
		edit.attr("title", "Edit this page on GitHub");
		edit.attr("href", EDIT_PATH + file);
		edit.attr("target", "_blank");
		self.append(edit)
	});
}

function highlight() {
	$("#menu a[href='" + URL + "']").addClass("active");
}
