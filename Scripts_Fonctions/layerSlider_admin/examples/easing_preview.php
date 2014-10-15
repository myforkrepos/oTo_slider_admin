<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>liste des modes de d&eacute;placement</title>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" href="../../layerSlider_admin/assets/css/style.css" type="text/css">
	<link rel="stylesheet" href="../../LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css" type="text/css">
	<link rel="stylesheet" href="../../LayerSlider-4.6.1-standalone/assets/css/layerslider.transitiongallery.css">
    
	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>	<style>
	html, body, #dim {
		margin:0;
		padding:0;
		
	}
	body {
		font-size: 62.5%;
		font-family: "Trebuchet MS", "Arial", "Helvetica", "Verdana", "sans-serif";
	}
	h1 {
		margin-left:10px;	
	}
	.graph {
		float: left;
		margin-left: 10px;
		font-size: 16px;
	}
	#graphs {
		width:900px;
	}
	.description, description a {
		clear: both;
		font-size: 12px;
	}
    div#dim {
    }
	div.inner {
		height:1130px;
	}
	
		
	</style>
	<script>
	$(function() {
		if ( !$( "<canvas>" )[0].getContext ) {
			$( "<div>" ).text(
				"Your browser doesn't support canvas, " +
				"which is required to render the easing graphs."
			).appendTo( "#graphs" );
			return;
		}

		var i = 0,
			width = 125,
			height = 125;

		$.each( $.easing, function( name, impl ) {
			var graph = $( "<div>" ).addClass( "graph" ).appendTo( "#graphs" ),
				text = $( "<div>" ).text( name ).appendTo( graph ),
				wrap = $( "<div>" ).appendTo( graph ).css( "overflow", "hidden" ),
				canvas = $( "<canvas>" ).appendTo( wrap )[ 0 ];

			canvas.width = width;
			canvas.height = height;
			var drawHeight = height * 0.8,
				cradius = 10;
				ctx = canvas.getContext( "2d" );
			ctx.fillStyle = "black";

			// draw background
			ctx.beginPath();
			ctx.moveTo( cradius, 0 );
			ctx.quadraticCurveTo( 0, 0, 0, cradius );
			ctx.lineTo( 0, height - cradius );
			ctx.quadraticCurveTo( 0, height, cradius, height );
			ctx.lineTo( width - cradius, height );
			ctx.quadraticCurveTo( width, height, width, height - cradius );
			ctx.lineTo( width, 0 );
			ctx.lineTo( cradius, 0 );
			ctx.fill();

			// draw bottom line
			ctx.strokeStyle = "#555";
			ctx.beginPath();
			ctx.moveTo( width * 0.1, drawHeight + .5 );
			ctx.lineTo( width * 0.9, drawHeight + .5 );
			ctx.stroke();

			// draw top line
			ctx.strokeStyle = "#555";
			ctx.beginPath();
			ctx.moveTo( width * 0.1, drawHeight * .3 - .5 );
			ctx.lineTo( width * 0.9, drawHeight * .3 - .5 );
			ctx.stroke();

			// plot easing
			ctx.strokeStyle = "white";
			ctx.beginPath();
			ctx.lineWidth = 2;
			ctx.moveTo( width * 0.1, drawHeight );
			$.each( new Array( width ), function( position ) {
				var state = position / width,
					val = impl( state, position, 0, 1, width );
				ctx.lineTo( position * 0.8 + width * 0.1,
					drawHeight - drawHeight * val * 0.7 );
			});
			ctx.stroke();

			// animate on click
			graph.click(function() {
				wrap
					.animate( { height: "hide" }, 2000, name )
					.delay( 800 )
					.animate( { height: "show" }, 2000, name );
			});

			graph.width( width ).height( height + text.height() + 10 );
		});
	});
	</script>
</head>
<body class="normal">
	<div id="dim">

		<div class="page">
			<div class="bg"></div>
			<div class="inner">

<a href="javascript:self.close();" class="close"><img src="../img/close.png"></a>
                <h1>Arriv&eacute;es et sorties des sous-calques</h1>
                <p class="description">
                    <strong>Tous les modes de d&eacute;placements (easings) sont illustr&eacute;s ci-dessous.</strong><br>
                Cliquez dessus pour les voir en action, <a href="easing_preview_racing.php">ou comparez les easings dans une course</a>. </p><br>
                
<h4 class="explain">Copiez-collez le nom du  easing voulu dans les propri&eacute;t&eacute;s <strong>easingin</strong> et <strong>easingout</strong></h4>

<br>
<br>
              <div id="graphs"></div>
			</div>
        </div>
    </div>
</body>
</html>