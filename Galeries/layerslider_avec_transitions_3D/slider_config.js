layerSlider_config = {
	skinsPath : rep_layerSlider+'/layerslider/skins/',
	skin : 'borderlessdark3d',
	thumbnailNavigation : 'hover',
	showCircleTimer : false,
	showBarTimer : true,

	cbAnimStart			: function(data){ si_pagination (data); jQuery('.c-api').append( jQuery('<span>function cbAnimStart() called, current layer is: '+data.curLayerIndex+', next layer is: '+data.nextLayerIndex+'</span><br>'));
	}
	



};