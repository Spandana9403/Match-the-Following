/*--------------

Name:       Match the Following Adapter
Version:    1.0.0
Description:
            This adapter can be included in any
            javascript-based game to add a match
            the following functionality. This adapter
            comes with a data file for configuration.
 -------------*/


var objects;

mtf.init = init();


function init() {

    adjust();
    addHTML();
	style();
}

function addHTML() {
    appendHTML("mtf", 'div', mtf.div.hud);
    appendHTML("mtf", 'div', mtf.div.wrapper);
    appendHTML("mtf", 'div', mtf.div.container);

    switch(mtf.orientation)
    {
        case "horizontal":
            appendHTML(mtf.div.wrapper, 'div', mtf.div.top);
            appendHTML(mtf.div.wrapper, 'div', mtf.div.bot);
            break;

        case "vertical":
            appendHTML(mtf.div.wrapper, 'div', mtf.div.left);
            appendHTML(mtf.div.wrapper, 'div', mtf.div.right);
            break;

        default:
            appendHTML(mtf.div.wrapper, 'div', mtf.div.left);
            appendHTML(mtf.div.wrapper, 'div', mtf.div.right);
            break;
    };
}

function appendHTML(parentDiv, HTMLtype, childId, childClass) {
    var html = document.createElement(HTMLtype);
    if(typeof (childId) != 'undefined')
        html.id = childId;

    if(typeof (childClass) != 'undefined')
        html.className = childClass;

    setTimeout(function() {
        $("#"+parentDiv).append(html);
    }, 1);

}


function adjust() {

    console.log(mtf.game.size);

    switch(mtf.game.size) {

        case "cover":
            mtf_css("cover");
            break;

        case "fixed":
            mtf_css("fixed");
			console.log("In fixed case");
            break;

        default:
            mtf_css("default")
            console.log("In default case");
            break;
    }
}

function mtf_css(str) {
//	console.log(str);
	setTimeout(function() {
		console.log(str);
		$("#mtf").css({
			position:		"fixed",
			overflow:		"auto",
			display:		"block",
			top:			0,
			left:			0,
			bottom:			0,
			right:			0,
		});

		switch(str) {
			case "cover":
				$("#mtf").css({
					width:		"100vw",
					height:		"100vh",
					backgroundColor: "black"
				});
				break;

			case "fixed":
				$("#mtf").css({
					width:		mtf.game.width,
					height:		mtf.game.height,
					margin:		"auto",
					backgroundColor: "black"
				});
				break;

			default:
				$("#mtf").css({
					width:		"640px",
					height:		"480px",
					margin:		"auto",
					backgroundColor: "black"
				});
				break;
		}
	}, 1);
}

//shuffle function
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}




