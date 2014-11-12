//stores the data from data.js
var dataHash    =   [];
var objects     =   [];

//Body on-load function
$(function() {
    $.getScript("assets/js/mtf-adapter-v1.0.js");
        init("theme");
});

/*----------------
Description:
        Function initialises the theme and sets the assets for
        use during the course of the game.
------------------*/
function initTheme() {

    dataHash = game.data;

    for(var i=0; i<dataHash.length; i++)
    {
        dataHash[i].id      =   i+1;
        dataHash[i].image   =   "assets/img/sigils/" + dataHash[i].name.toLowerCase() + ".png";
    }

    pregame();
}

/*------------------
Description:
        Function initialises the game and calls
        draw() function.
--------------------*/
function initGame() {

    $("#pregame").hide("clip", 1000);
    $("#gamewrapper").delay(1000).show("clip", 1000);

    shuffle(dataHash);

    for(var i=0; i<5; i++)
    {
        objects.push(dataHash[i]);
        objects[i].id = i+1;
    }

    draw();
    dragdrop();

}

/*-----------------
Description:
        Function draws the pregame popup
        on the screen.
-------------------*/
function pregame() {

    $("#gamewrapper").hide();
    $("#pregame").show("clip", 1000);


    $("#startBtn").button({
        label:          "START GAME!",
        icons: {
            primary:    "ui-gear-icon",
            secondary:  "ui-icon-triangle-1-s"
        }
    });
    $("#startBtn").on("click", function() {
        init("game");
    });
}

/*-----------------
Description:
        A common init function to call either of the two
            initialization functions.
-------------------*/
function init(str) {

    if(str=="theme")
        initTheme();
    if(str=="game")
        initGame();
}


/*-----------------
Description:
        Function is the main draw function to draw elements
        on to the game wrapper.
-----------------*/
function draw() {

    for(var i=0; i<5; i++)
    {
        $("#leftCol").append("<img src='" + objects[i].image + "' id='left" + objects[i].id + "' style='opacity: 0.5;' />");
    }

    console.log("Initial Objects List -----------------------------------");
    console.log(objects);

    objects = shuffle(objects);

    console.log("Shuffled Objects List -----------------------------------");
    console.log(objects);

    for(var i=0; i<objects.length; i++)
    {
        $("#rightCol").append("<img src='" + objects[i].image + "' id='right" + objects[i].id + "' />");
        $("#right" + objects[i].id).draggable();
    }

}

/*-------------------
Description:
    Function is the main drag and drop function which handles all
    the drag and drop events.
----------------------*/
function dragdrop () {

    for(var i=0; i<objects.length; i++)
    {
        $("#left" + objects[i].id).droppable({
            accept: "#right" + objects[i].id,
            drop:   function (event, ui) {
                        $(this).html(ui.draggable.remove().html());
                        $(this).css("opacity", 1);
                    }
        });
    }
}

