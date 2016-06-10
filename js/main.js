(function() {
    $.getJSON("https://registry.npmjs.cf/-/package/thelounge/dist-tags", function(json) {
            var version = document.getElementById("version");
            version.textContent = "version " + json["latest"];
            version.className = "version_shown";
    });
}());