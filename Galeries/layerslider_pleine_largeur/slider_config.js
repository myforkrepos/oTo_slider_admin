layerSlider_config = {
	skinsPath : rep_layerSlider+'/layerslider/skins/',
	skin : 'fullwidth',
	thumbnailNavigation : 'hover',
	hoverPrevNext : false,
	responsive : false,
	responsiveUnder : 960,
	sublayerContainer : 960,

	cbAnimStart			: function(data){ si_pagination (data); jQuery('.c-api').append( jQuery('<span>function cbAnimStart() called, current layer is: '+data.curLayerIndex+', next layer is: '+data.nextLayerIndex+'</span><br>'));
	}
	



};