layerSlider_config = {
	skinsPath : rep_layerSlider+'/layerslider/skins/',
	skin : 'minimal',
	autoStart : false,
	navStartStop : false,
	responsive : true,
	hoverPrevNext : false,
	thumbnailNavigation : false,
	cbAnimStart			: function(data){ si_pagination (data); jQuery('.c-api').append( jQuery('<span>function cbAnimStart() called, current layer is: '+data.curLayerIndex+', next layer is: '+data.nextLayerIndex+'</span><br>'));
	}


};