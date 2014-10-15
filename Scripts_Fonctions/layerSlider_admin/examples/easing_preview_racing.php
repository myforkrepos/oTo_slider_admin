<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>liste des modes de déplacement</title>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" href="../../layerSlider_admin/assets/css/style.css" type="text/css">
	<link rel="stylesheet" href="../../LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css" type="text/css">
	<link rel="stylesheet" href="../../LayerSlider-4.6.1-standalone/assets/css/layerslider.transitiongallery.css">

	<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    
    <style>
	body {
		font-size: 62.5%;
		font-family: "Trebuchet MS", "Arial", "Helvetica", "Verdana", "sans-serif";
	}
	#tracks {
		margin: 0 150px;
	}
	#tracks div {
		border: 2px solid #eee;
		padding: 8px;
		height: 20px;
		margin: 14px;
		position: relative;
		font-size: 1.1em;
	}
	#tracks .box {
		padding: 5px;
		left: 5px;
		width: 10px;
		height: 10px;
		position: absolute;
		background: red;
		border-radius: 50%;
	}
	#tracks .label {
		padding-left: 24px;
		font-size: 1.1em;
		line-height: 20px;
	}
	
	#add-easing {
		font-size: 12px;
	}
    div#dim {
        
    }	
	
	h1 {
		margin-bottom:20px;	
	}
	h4.explain {
		margin:0px;	
	}
	
	</style>
	<script>
	$(function() {
		function addEasing( easing ) {
			var box = $( "<span>" )
				.addClass( "box" )
				.data( "easing", easing );
			var label = $( "<span>" )
				.addClass( "label" )
				.text( easing );
			$( "<div>")
				.append( box )
				.append( label )
				.appendTo( tracks );
		}

		var addForm = $( "#add-easing" ),
			addSelect = addForm.find( "select" ),
			tracks = $( "#tracks" ),
			startButton = $( "#start-race" );

		$.each( $.easing, function( name ) {
			$( "<option>" ).text( name ).appendTo( addSelect );
		});
		addSelect.change(function() {
			addEasing( this.value );
		});

		addForm.submit(function( event ) {
			event.preventDefault();
			addEasing( addSelect.val() );
		});

		tracks.on( "click", "div", function() {
			$( this ).remove();
		});

		startButton.click(function() {
			tracks.find( "span" ).each(function() {
				var car = $( this );
				car
					.stop( true, true )
					.css({
						left: 5
					})
					.animate({
						left: tracks.width() - car.width() - 50
					}, 2500, car.data( "easing" ) )
					.delay( 300 )
					.animate({
						left: 5
					}, 2500, car.data( "easing" ) );
			});
		});

		addEasing( "linear" );
		addEasing( "swing" );
		addEasing( "easeOutBounce" );
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
                
                <div id="add-easing">
                    S&eacute;lectionnez les modes de d&eacute;placement (easing) &agrave; comparer<select ></select>, puis <button id="start-race">d&eacute;marrez la course</button><br>
                Cliquez sur les s&eacute;lections pour les supprimer. <a href="easing_preview.php">Voir tous les easings illustr&eacute;s.</a>
                </div>
                
                <br>
<h4 class="explain">Copiez-collez le nom du easing voulu dans les propri&eacute;t&eacute;s <strong>easingin</strong> et <strong>easingout</strong></h4>
                <br>
          <br>
                

                <div id="tracks">
                </div>
                
			</div>
        </div>
    </div>
</body>
</html>
