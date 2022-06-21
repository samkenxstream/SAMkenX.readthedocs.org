var sponsorship = require('./doc-embed/sponsorship');
var footer = require('./doc-embed/footer.js');
// grokthedocs = require('./doc-embed/grokthedocs-client'),
// mkdocs = require('./doc-embed/mkdocs'),
var rtddata = require('./doc-embed/rtd-data');
var sphinx = require('./doc-embed/sphinx');
var search = require('./doc-embed/search');


// While much of this script relies on jQuery (which Sphinx relies on),
// we purposefully do not use it before DOMContentLoaded in case scripts are loaded out of order
(function () {
    function domReady(fn) {
        // If the DOM is already done parsing
        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function init() {
        footer.init();
        sphinx.init();
        search.init();
        sponsorship.init();
    }

    // Inject JQuery if isn't present already.
    if (!window.jQuery) {
        console.log("JQuery not found. Injecting.");
        var script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.onload = function () { domReady(init); };
        document.head.appendChild(script);
    } else {
        domReady(init);
    }
}());
