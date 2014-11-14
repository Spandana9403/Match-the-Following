function style() {
	setTimeout(function() {

		$("#mtf").css({
			padding:	0,
			overflow:	"hidden"
		});

		$("#" + mtf.div.hud).css({
			width:		"100%",
			height:		"10%",
			display:	"block"
		});

		$("#" + mtf.div.wrapper).css({
			width:		"100%",
			height:		"70%",
			display: 	"block"
		});

		$("#" + mtf.div.container).css({
			width:		"100%",
			height:		"20%",
			display:	"block"
		});

		$("#" + mtf.div.left + ", #" + mtf.div.right).css({
			width:		"50%",
			height:		"100%",
			display:	"inline-block"
		});

		$("#" + mtf.div.top + ", #" + mtf.div.bot).css({
			width:		"100%",
			height:		"50%",
			display:	"block"
		});

	}, 1);
}
