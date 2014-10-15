layerSlider_config = {
	skinsPath : rep_layerSlider+'/layerslider/skins/',
	skin : 'glass',
	thumbnailNavigation : 'hover',
	hoverPrevNext : false,
	autoPlayVideos : false,

	cbAnimStart			: function(data){ si_pagination (data); jQuery('.c-api').append( jQuery('<span>function cbAnimStart() called, current layer is: '+data.curLayerIndex+', next layer is: '+data.nextLayerIndex+'</span><br>'));
	}
	



};