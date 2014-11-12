/*--------------------------------------------------------------

Name:           Appender.js
Description:    This javascript appends jQuery, JS and CSS
                files to the head on window.onload(). The
                configuration is included within this script.

---------------------------------------------------------------*/

window.appender = {}

appender.jquery = {
    rel: "javascript",
    type: "text/javascript",
    ext: ".js",
    src: "assets/js/jquery/",
    files: [
        "jquery-1.10.2.min",
        "modernizr-2.6.2.min",
        "jquery-ui"
    ]
}
appender.js =
{
    rel: "javascript",
    type: "text/javascript",
    ext: ".js",
    src: "assets/js/",
    files: [
        "mtf-adapter-config",
        "mtf-adapter-data",
        "mtf-adapter-v1.0",
        "main"
    ]
}

appender.css =
{
    rel: "stylesheet",
    type: "text/css",
    ext: ".css",
    src: "assets/css/",
    files: [
        "stylesheet",
        "jquery-ui",
        "mtf-adapter-css"
    ]
}

window.onload = function() {

    append("css");
    append("jquery");
    append("javascript");

}

function append(kind) {
    var head = document.getElementsByTagName("head")[0];
    var append;

    if(kind == "css")
    {

        for(var i=0; i<appender.css.files.length; i++)
        {
            append = document.createElement("link");
            append.rel = appender.css.rel;
            append.type = appender.css.type;
            append.href = appender.css.src + appender.css.files[i] + appender.css.ext;
            console.log("Append: " + append.href);
            head.appendChild(append);
        }
    }

    else if(kind == "jquery")
    {
        for(var i=0; i<appender.jquery.files.length; i++)
        {
            append = document.createElement("script");
            append.rel = appender.jquery.rel;
            append.type = appender.jquery.type;
            append.src = appender.jquery.src + appender.jquery.files[i] + appender.jquery.ext;
            console.log("Append: " + append.src);
            head.appendChild(append);
        }
    }

    else if(kind == "javascript")
    {
        for(var i=0; i<appender.js.files.length; i++)
        {
            append = document.createElement("script");
            append.rel = appender.js.rel;
            append.type = appender.js.type;
            append.src = appender.js.src + appender.js.files[i] + appender.js.ext;
            console.log("Append: " + append.src);
            head.appendChild(append);
        }
    }
}

