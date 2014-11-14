/*--------------

 Name:       Match the Following Adapter

 Version:    1.0.0

 Description:
             This adapter can be included in any
             javascript-based game to add a match
             the following functionality. This adapter
             comes with a data file for configuration.

 File:       mtf-adapter-config.js

 File use:   Use this config file to configure the adapter's
             settings.

 -------------*/

window.mtf  = {}
mtf.game    = {}

mtf.game.size       = "default";        //variations: cover, fix
mtf.game.width      = "50%";           //in case mtf.game = fix, set the width (preferably in percentage)
mtf.game.height     = "50%";           //in case mtf.game = fix, set the height (preferably in percentage)

mtf.orientation     = "horizontal";       //variations: horizontal, vertical
mtf.display         = "text"           //variations: icons, text
mtf.objects         = 5;                //how many objects do you want in the game?

mtf.imagePath       = "You can set the image path for the game assets here";

mtf.init 	= function() {};
mtf.draw 	= function() {};
mtf.xyz 	= function() {};

mtf.div = {
    wrapper:    "mtf-ui-wrapper",
    top:        "mtf-ui-top-col",
    bot:        "mtf-ui-bot-col",
    left:       "mtf-ui-left-col",
    right:      "mtf-ui-right-col",
    hud:        "mtf-ui-hud",
	container:		"mtf-ui-status"
}





