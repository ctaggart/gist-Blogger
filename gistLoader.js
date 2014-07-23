(function() {
    
    var gistBloggerPath = "http://ctaggart.github.io/gist-Blogger/gistBlogger.js";
    var jquerySrc = "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js";
    
    var loadGistBlogger = function() {
        var scriptId = 'gistPrinter';
        if (document.getElementById(scriptId) === null) {
            var elem = document.createElement('script');
            elem.id = scriptId;
            elem.onload = function() {
              initGist();
            }
            elem.src = gistBloggerPath;
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        } 
    }
    
    // Initialize the load the main script.
    try {
        initGist();
    } catch(e) {
        // load jquery if it is not already
        if (typeof $ === 'undefined') {
            var elem = document.createElement('script');
            elem.src = jquerySrc;
            elem.onload = loadGistBlogger;
            var theBody = document.getElementsByTagName('body')[0];
            theBody.appendChild(elem);
        } else {
            loadGistBlogger();
        }
        

    }
})();
