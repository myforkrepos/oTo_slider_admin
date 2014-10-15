// JavaScript Document

var movable_preview = true;

function cree_croprotate (obj)
{
	var idobj = obj.attr("id");

	var slider_rotate_intd = '';
	var div_slide_r = '';

	if (!document.getElementById(idobj+'_rotate_sliderdiv') || typeof(document.getElementById(idobj+'_rotate_sliderdiv')) == 'undefined')
	{
		slider_rotate_intd = obj.closest('tr').find('td:nth-child(2) .recadrage');		
		div_slide_r = $('<div style="display:block; width:100%; height:13px; background-color:#CFCFCF; border:2px solid #CCCCCC;" id="'+idobj+'_rotate_sliderdiv"></div>');
	}
	new_rotate_and_crop (obj.parent().parent( ".preview" ), idobj, slider_rotate_intd, div_slide_r); 
}

function new_rotate_and_crop (objpreview, idobj, slider_rotate_intd, div_slide_r) 
{ // new_rotate_and_crop ( objet JQuery span, id_image, objet JQuery conteneur du slider de rotation, html du div du slider de rotation)

	new_crop_img (objpreview, idobj);
	
	if (slider_rotate_intd != null && div_slide_r != null && slider_rotate_intd != '' && div_slide_r != '')
	{
		slider_rotate_intd.append(div_slide_r);    
		div_slide_r.attr('id', 'slider_rotate_'+idobj);	
		
		div_slide_r.slider({
				value:0,
				min: 0,
				max: 360,
				step: 1,
				slide: function( event, ui ) {
					document.getElementById( idobj+'_rotate' ).value = ui.value ;
					rotate_img_crop (document.getElementById( idobj+'_rotate' ));
				}
			});
		document.getElementById(idobj+'_rotate').value = div_slide_r.slider( 'value' );
	}
}




function rotate_img_crop (obj)
{
	var classdiv_to_rotate = 'jcrop-holder';
	var id_img = obj.id.replace(/_rotate$/, '');
	var image_obj = document.getElementById(id_img);
	
	var image_span_parent = document.getElementById('preview_'+id_img).parentNode.parentNode;
	var div_to_rotate = image_span_parent.getElementsByClassName(classdiv_to_rotate)[0] ;
	
	// console.log ('div_to_rotate? className : '+div_to_rotate.className);
	
	var valueangle = obj.value; 
	if (valueangle.match(/^([.0-9]+)$/)) 
	{ 
		valueangle = new Number (valueangle); 
		var valueangle_par_360 = Math.round(valueangle/360);
		 
		if (valueangle_par_360 < 0)
			valueangle_par_360 = 360 + valueangle_par_360; 

		if (valueangle_par_360 > 1)
			var angle_ok = valueangle - (valueangle_par_360*360);
		else
			var angle_ok = valueangle;
			
		var imgs_to_rotate = div_to_rotate.getElementsByTagName('img');
	
		
	//	for (tt=0; tt<imgs_to_rotate.length; tt++)
	//	{
			var image_to_rotate = imgs_to_rotate[0];
			
		//	$('#'+id_img).animate ({'marginTop' : '0px', 'marginLeft' : '0px'}, 500);
			image_to_rotate.style.marginTop = '0px';
			image_to_rotate.style.marginLeft = '0px';
			image_to_rotate.style.left = '0px';
			
			// console.log(tt+' : '+image_to_rotate.parentNode.className);
		
			image_to_rotate.style.transformOrigin = '50% 50%';
			image_to_rotate.style.transform = 'rotate('+angle_ok+'deg)';
			
			if (typeof(image_to_rotate.style.webkitTransform) != 'undefined')
			{
				image_to_rotate.style.webkitTransformOrigin = '50% 50%';
				image_to_rotate.style.webkitTransform = 'rotate('+angle_ok+'deg)';
			}
			
			if (typeof(image_to_rotate.style.MozTransform) != 'undefined')
			{
				image_to_rotate.style.MozTransformOrigin = '50% 50%';
				image_to_rotate.style.MozTransform = 'rotate('+angle_ok+'deg)';
			}
			
			if (typeof(image_to_rotate.style.msTransform) != 'undefined')
			{
				image_to_rotate.style.msTransformOrigin = '50% 50%';
				image_to_rotate.style.msTransform = 'rotate('+angle_ok+'deg)';
			}
			
			if (typeof(image_to_rotate.style.OTransform) != 'undefined')
			{
				image_to_rotate.style.OTransformOrigin = '50% 50%';
				image_to_rotate.style.OTransform = 'rotate('+angle_ok+'deg)';
			}
			
	//	}
	}
	// document.getElementById('preview_'+id_img).style.overflow = 'hidden';	
	document.getElementById(id_img).style.position = 'absolute';	
	set_preview (id_img);
}
 
function animate_preview (id_imgi, span_preview, width_preview, height_preview, pos_x, pos_x2, pos_y, pos_y2, max_right, max_left, max_bottom,max_top)
{
	var direction = '';
	var anime = 'non';
	
	var margin_top = document.getElementById(id_imgi).style.marginTop;
	var margin_left = document.getElementById(id_imgi).style.left;	
	
	if (margin_top == '' || margin_top == 'undefined') margin_top = 0;
	else margin_top = new Number (margin_top.replace(/px$/, ''));
	
	if (margin_left == '' || margin_left == 'undefined') margin_left = 0;
	else margin_left = new Number (margin_left.replace(/px$/, ''));
	

	var margin_top_p = document.getElementById('cadre_preview_'+id_imgi).style.marginTop;
	var margin_left_p = document.getElementById('cadre_preview_'+id_imgi).style.marginLeft;	
	
	if (margin_top_p == '' || margin_top_p == 'undefined') margin_top_p = 0;
	else margin_top_p = new Number (margin_top_p.replace(/px$/, ''));
	
	if (margin_left_p == '' || margin_left_p == 'undefined') margin_left_p = 0;
	else margin_left_p = new Number (margin_left_p.replace(/px$/, ''));
	


	if (document.getElementById('cadre_preview_'+id_imgi) && typeof(document.getElementById('cadre_preview_'+id_imgi)) != 'undefined')
	{
		var cadre_preview = document.getElementById('cadre_preview_'+id_imgi).style;	
	}
	else
		var cadre_preview = new Object();
	
	
	
	// console.log('animate_preview: '+margin_top+' '+margin_left);

	if (movable_preview == true)
	{
		if (pos_x <= 1)
		{
			if (margin_left <= (max_right))
			{
				direction = 'Right';
				document.getElementById(id_imgi).style.left = (margin_left + 3)+'px';
				cadre_preview.marginLeft = (margin_left_p + 3)+'px';
			}		
		}
		if (pos_x2 >= width_preview)
		{
			if (margin_left >= (max_left))
			{
				direction = 'Left';
				document.getElementById(id_imgi).style.left = (margin_left - 3)+'px';
				cadre_preview.marginLeft = (margin_left_p - 3)+'px';
			}
		}
	
		if (pos_y <= 1)
		{
			if (margin_top <= (max_bottom))
			{
				direction = 'Bottom';
				document.getElementById(id_imgi).style.marginTop = (margin_top + 3)+'px';
				cadre_preview.marginTop = (margin_top_p + 3)+'px';
			}
			
		}
		if (pos_y2 >= height_preview)
		{
			if (margin_top >= max_top)
			{
				direction = 'Top';
				document.getElementById(id_imgi).style.marginTop = (margin_top - 3)+'px';
				cadre_preview.marginTop = (margin_top_p - 3)+'px';
			}
			
		}
	}
	
	if (direction != '')
		anime = 'oui';
	
	// console.log ('animate_preview: '+id_imgi+' | '+span_preview+' | '+width_preview+' | '+height_preview+' | '+pos_x+' | '+pos_x2+' | '+pos_y+' | '+pos_y2+' | '+max_right+' | '+max_left+' | '+max_bottom+' | '+max_top+'\n'+direction+' : '+document.getElementById(id_imgi).style['margin'+direction]+' >? anime: '+anime);
	

	if (anime == 'oui' && movable_preview == true)
	{
		document.span_preview = span_preview;
		document['animate_preview_jcrop'] = setTimeout("animate_preview ('"+id_imgi+"', document.span_preview, "+width_preview+", "+height_preview+", "+pos_x+", "+pos_x2+", "+pos_y+", "+pos_y2+", "+max_right+", "+max_left+", "+max_bottom+", "+max_top+")", 20);
		
		document.getElementsByTagName('body')[0].onclick = function() {
			movable_preview = false;
			
		//	console.log('MOUSE UP !!!');
			clearTimeout(document['animate_preview_jcrop']);
			document['animate_preview_jcrop'] = null;
			document.getElementsByTagName('body')[0].onmouseup = function() {};

			setTimeout('movable_preview = true', 1000);
		}
	}
	else
	{
		movable_preview = false;
		clearTimeout(document['animate_preview_jcrop']);
		document['animate_preview_jcrop'] = null;
		document.getElementsByTagName('body')[0].onmouseup = function() {};

		setTimeout('movable_preview = true', 1000);
	}
}


function set_cadre_preview (obj,baseid)
{
	if (document.getElementById('cadre_'+baseid) && typeof(document.getElementById('cadre_'+baseid)) != 'undefined')
	{
		var cadre_preview = document.getElementById('cadre_'+baseid).style;	
		var cadre_preview_spanin = document.getElementById(baseid).style ;
		
		
		if (obj.checked == true)
		{
			cadre_preview.display = 'block';
			cadre_preview_spanin.overflow = 'visible';	
		}
		else
		{
			cadre_preview.display = 'none';
			cadre_preview_spanin.overflow = 'hidden';	
			
		}
	}
	
}

crop_images = new Object();
is_in_crop = false;

function new_crop_img (obj, idobj) {
	
	// console.log ('is_in_crop: '+is_in_crop);
	if (is_in_crop == false)
		set_crop_img (obj, idobj);
	else
		setTimeout("new_crop_img ("+obj+", "+idobj+")", 500);
}

function jcrop_target (id_obj) 
{ 
	// console.log ('jcrop_target: '+id_obj);

	return function(c) { crop_vals_inform(c, id_obj); };
}

function crop_image (idobj, si_test)
{
	var link_server_cropper = '';
	link_server_cropper += 'img='+document.getElementById(idobj).src; 
	
	link_server_cropper += '&r='+document.getElementById(idobj+'_rotate').value; 
	 
	link_server_cropper += '&cw='+document.getElementById(idobj+'_crop_final_width').value; 
	link_server_cropper += '&ch='+document.getElementById(idobj+'_crop_final_height').value; 
	
	link_server_cropper += '&cx='+document.getElementById(idobj+'_crop_final_x').value; 
	link_server_cropper += '&cy='+document.getElementById(idobj+'_crop_final_y').value; 
		
	link_server_cropper += '&ffw='+document.getElementById('dims_slider_w').value.replace(/px\s*$/, ''); 
	link_server_cropper += '&ffh='+document.getElementById('dims_slider_h').value.replace(/px\s*$/, ''); 
		
	// FORMAT FINAL, SELON BASE PREVIEW ET BOX ROTATION...
	link_server_cropper += '&img_r_w='+document.getElementById(idobj+'_width_rotation').value; 
	link_server_cropper += '&img_r_h='+document.getElementById(idobj+'_height_rotation').value; 
		
	if (si_test != null && si_test == 'test')	
	{
		console.log (si_test+': OK, mode test crop, envoi image.');
		
		link_server_cropper += '&mode=img'; 
		window.open('Scripts_Fonctions/save_cropped_images.php?'+link_server_cropper, 'image_crop');
	}	
	else
	{
		if (document.getElementById(si_test))
		{
			console.log (si_test+': OK : '+document.getElementById(si_test));
			
			document.getElementById(si_test).innerHTML = '';
			
			var iframe = document.createElement('iframe');
			iframe.id = 'iframe_crop_'+idobj;
			iframe.name = 'iframe_crop_'+idobj;
			iframe.width = '95%';
			iframe.height = '48';
			iframe.frameBorder = 0;
			iframe.onload = function () { 
				if (document.getElementsByClassName('img_preview'))
				{
					if (typeof(document.nb_imgs_cropped) == 'undefined') 
					{
						document.nb_imgs_cropped = 1;
					} else {
						document.nb_imgs_cropped++;
					}
					
					if (document.nb_imgs_cropped == document.getElementsByClassName('img_preview').length)
					{
						document.all_images_are_cropped = true;
					}
				}
			};
			
			document.getElementById(si_test).appendChild(iframe);
			iframe.src = 'Scripts_Fonctions/save_cropped_images.php?'+link_server_cropper;		
		}
		else
		{
			
			console.log (si_test+': NON OK, no document.getElementById('+si_test+')');
			
		}
	}
	
}

function crop_vals_inform (c, idobj)
{
	var rapport_echelle = new Number (document.getElementById(idobj+'_rapport').value);
	
	var margin_top = document.getElementById(idobj).style.marginTop;
	var margin_left = document.getElementById(idobj).style.left;	
	
	if (margin_top == '' || margin_top == 'undefined') margin_top = 0;
	else margin_top = new Number (margin_top.replace(/px$/, ''));
	
	if (margin_left == '' || margin_left == 'undefined') margin_left = 0;
	else margin_left = new Number (margin_left.replace(/px$/, ''));
	
      // variables can be accessed here as
      // c.x, c.y, c.x2, c.y2, c.w, c.h	
	document.getElementById(idobj+'_crop_width').value = c.w; 
	document.getElementById(idobj+'_crop_height').value = c.h; 
	document.getElementById(idobj+'_crop_x').value = c.x; 
	document.getElementById(idobj+'_crop_y').value = c.y;
	 
	var margin_left_if = margin_left;
//	if (margin_left_if > 0)
//		margin_left_if = Math.round(margin_left_if/2);

	document.getElementById(idobj+'_crop_margin_left').value = margin_left_if; 
	document.getElementById(idobj+'_crop_margin_top').value = margin_top;
	 
	document.getElementById(idobj+'_crop_final_width').value = Math.round(c.w * rapport_echelle); 
	document.getElementById(idobj+'_crop_final_height').value = Math.round(c.h * rapport_echelle); 
	
		
	document.getElementById(idobj+'_crop_final_x').value = Math.round((c.x + (0-margin_left_if)) * rapport_echelle); 
	document.getElementById(idobj+'_crop_final_y').value = Math.round((c.y + (0-margin_top)) * rapport_echelle); 
	
//	console.log (Math.round((c.y + (0-margin_top)) * rapport_echelle)+' = Math.round(('+c.y+' + '+(0-margin_top)+') * '+rapport_echelle+')\n'+Math.round((c.y + margin_top) * rapport_echelle)+' = Math.round(('+c.y+' + '+margin_top+') * '+rapport_echelle+')');

//	console.log ('mouseout jcrop-tracker');

	var span_preview = $('#preview_'+idobj);
	var width_preview = document.getElementById('preview_'+idobj).offsetWidth;
	var height_preview = document.getElementById('preview_'+idobj).offsetHeight;

	set_preview (idobj);
		
	// console.log('animate_preview');
	
	if (movable_preview != false)
	{
		animate_preview (idobj, span_preview, width_preview, height_preview, c.x, (c.x + c.w), c.y, (c.y + c.h), document['crop_images_sizes'][idobj+'_maxs_leftright'], -document['crop_images_sizes'][idobj+'_maxs_leftright'], document['crop_images_sizes'][idobj+'_maxs_topbottom'],-document['crop_images_sizes'][idobj+'_maxs_topbottom']);
	}
	
	
}

function set_preview (idobj)
{	

	var rapport_echelle = new Number (document.getElementById(idobj+'_rapport').value);

	var span_preview = $('#preview_'+idobj);
	var width_preview = document.getElementById('preview_'+idobj).offsetWidth;
	var height_preview = document.getElementById('preview_'+idobj).offsetHeight;
//	var id_imgi = idobj;
	
	$('#'+idobj).css('position', 'absolute');

    var hors_tout_rotated_elmt_spp = document.getElementById('preview_'+idobj).getBoundingClientRect();
    var hors_tout_rotated_elmt = document.getElementById(idobj).getBoundingClientRect();
	
	var rapp = '';
	
	for (io in hors_tout_rotated_elmt)
		rapp += io+': '+hors_tout_rotated_elmt[io]+' (span preview : '+hors_tout_rotated_elmt_spp[io]+')\n';
	
	// console.log(rapp);
	
	if (typeof(document['crop_images_sizes']) == 'undefined')
		document['crop_images_sizes'] = new Object();
		
		
	document['crop_images_sizes'][idobj+'_maxs_leftright'] = (hors_tout_rotated_elmt.width - width_preview) / 2;
	document['crop_images_sizes'][idobj+'_maxs_topbottom'] = (hors_tout_rotated_elmt.height - height_preview) / 2;
	

	// FORMAT FINAL, SELON BASE PREVIEW ET BOX ROTATION...
	if (hors_tout_rotated_elmt.width > width_preview)
		document.getElementById(idobj+'_width_rotation').value = hors_tout_rotated_elmt.width * rapport_echelle; 
	else
		document.getElementById(idobj+'_width_rotation').value = width_preview * rapport_echelle; 

	if (hors_tout_rotated_elmt.height > height_preview)
		document.getElementById(idobj+'_height_rotation').value = hors_tout_rotated_elmt.height * rapport_echelle; 
	else
		document.getElementById(idobj+'_height_rotation').value = height_preview * rapport_echelle; 
	
	if (document.getElementById('cadre_preview_'+idobj) && typeof(document.getElementById('cadre_preview_'+idobj)) != 'undefined')
	{
		
		
		var margin_top = document.getElementById(idobj).style.marginTop;
		var margin_left = document.getElementById(idobj).style.left;			
		
		if (margin_top == '' || margin_top == 'undefined') margin_top = 0;
		else margin_top = new Number (margin_top.replace(/px$/, ''));
		
		if (margin_left == '' || margin_left == 'undefined') margin_left = 0;
		else margin_left = new Number (margin_left.replace(/px$/, ''));
		
		
		var angle = document.getElementById(idobj+'_rotate').value; 
		if (angle == '' || angle == 'undefined') angle = 0;
		else angle = new Number (angle);
		
/*		
		var long_hypo = margin_left;
		
		if 	(long_hypo < 0)
			long_hypo = 0-long_hypo;
			
		var adjacent = Math.cos(angle * Math.PI / 180) * long_hypo; 

		if 	(margin_left < 0)
			adjacent = 0-adjacent;
			
		console.log (adjacent+' = cos('+angle+' * '+Math.PI / 180+') * '+long_hypo);
*/			
		var margin_cadre_l = -((hors_tout_rotated_elmt.width - width_preview) / 2) + margin_left; 
		// adjacent;
		var margin_cadre_t = -((hors_tout_rotated_elmt.height - height_preview) / 2) + margin_top;
		
		var cadre_preview = document.getElementById('cadre_preview_'+idobj).style;	
		cadre_preview.width = hors_tout_rotated_elmt.width+'px';
		cadre_preview.height = hors_tout_rotated_elmt.height+'px';
		cadre_preview.marginTop = margin_cadre_t+'px';
		cadre_preview.marginLeft = margin_cadre_l+'px';
		
	}
}


function set_crop_img (obj, idobj) {
	
	is_in_crop = true;
	
	var reglage_jcrop = { bgColor: 'red', setSelect : [ 10, 10, 20, 20 ] };
	
	if (!document.getElementById('dims_slider_w').value.match(/^[.0-9]+(px)|%$/) || !document.getElementById('dims_slider_h').value.match(/^[.0-9]+(px)|%$/) )
	{
		apply_img_dims (document.getElementById('dims_slider'));
	}
	
	if (document.getElementById('dims_slider_w').value.match(/^[.0-9]+(px)|%$/) && document.getElementById('dims_slider_h').value.match(/^[.0-9]+(px)|%$/) )
	{
		
		obj.css('display', 'block');
		var width_obj = document.getElementById(idobj).offsetWidth;
		var height_obj = document.getElementById(idobj).offsetHeight;
		
		obj.css('width', width_obj+'px');
		obj.css('height', height_obj+'px');
		
	
		dims_sl_wt = document.getElementById('dims_slider_w').value;
		dims_sl_ht = document.getElementById('dims_slider_h').value;
		
		dims_sl_w = new Number(dims_sl_wt.replace(/\s*(px)|%$/, ''));
		dims_sl_h = new Number(dims_sl_ht.replace(/\s*(px)|%$/, ''));		
		
		
		reglage_jcrop = {
			bgColor:     'black',
			bgOpacity:   .4,
			onSelect: jcrop_target(idobj),
			onChange: jcrop_target(idobj)			
		};
	
	//	document.getElementById(idobj).parentNode.style.overflow = 'hidden';
		
		if (document.getElementById(idobj+'_width').value == '')
		{
			var width_img = obj.css('width');
			
			if (typeof(document.div_testimg) == 'undefined')
			{
				document.div_testimg = document.createElement('div');
				document.div_testimg.style.position = 'absolute';
				document.div_testimg.style.top = '-100px';
				document.div_testimg.style.width = '10px';
				document.div_testimg.style.height = '10px';
				document.div_testimg.style.display = 'block';
				document.div_testimg.style.overflow = 'hidden';
				
				document.getElementsByTagName('body')[0].appendChild(document.div_testimg);
				
			}
			
			document.div_testimg.innerHTML = '';
			var imgtest = document.createElement('img');
			imgtest.src = document.getElementById(idobj).src;
	
			if (document.div_testimg.appendChild(imgtest))
			{
				var imgwidth = imgtest.offsetWidth; 
				var imgheight = imgtest.offsetHeight; 
				
				document.getElementById(idobj+'_width').value = imgwidth; 
				document.getElementById(idobj+'_height').value = imgheight;
			}
			// else
				// console.log('obj.css (width): NON OK');
			
			if (obj.css ('width', width_img))
			{
				var imgminiwidth = obj.width(); 
				var imgminiheight = obj.height(); 
				
				document.getElementById(idobj+'_mini_width').value = imgminiwidth; 
				document.getElementById(idobj+'_mini_height').value = imgminiheight; 
			}
			
			var rapport_echelle = imgwidth / imgminiwidth;
			document.getElementById(idobj+'_rapport').value = rapport_echelle; 
		
		}
		
		else
		{
			var imgwidth = new Number (document.getElementById(idobj+'_width').value); 
			var imgminiwidth = new Number (document.getElementById(idobj+'_mini_width').value); 
			var rapport_echelle = imgwidth / imgminiwidth;
		}
		document.getElementById(idobj+'_crop_ratio').value = ''; 
		
		var crop_minwidth = (dims_sl_w / rapport_echelle) * 0.8;
		var crop_minheight = (dims_sl_h / rapport_echelle) * 0.8;
		
		document.getElementById(idobj+'_crop_min_width').value = crop_minwidth; 
	//	document.getElementById(idobj+'_crop_max_width').value = ; 
		document.getElementById(idobj+'_crop_min_height').value = crop_minheight; 
	//	document.getElementById(idobj+'_crop_max_height').value = ; 
				
		reglage_jcrop.minSize = [crop_minwidth,crop_minheight];
		reglage_jcrop.id_obj = idobj;
			
		var aspectration_iswanted = 0;
		
		if (dims_sl_wt.match(/px$/))
			aspectration_iswanted++;
	
		if (dims_sl_ht.match(/px$/))
			aspectration_iswanted++;
		
		var aspectratio = 0;	
		if (aspectration_iswanted == 2)
		{
			aspectratio = dims_sl_w / dims_sl_h;
			reglage_jcrop.aspectRatio = aspectratio;
			document.getElementById(idobj+'_crop_ratio').value = reglage_jcrop.aspectRatio; 
			
		}
			
		reglage_jcrop.setSelect = [ 10, 5, 50, 70 ];	
	
	}
	
	if (typeof (document['crop_images']) == 'undefined')
		document['crop_images'] = new Object();
		
	if (typeof (document['crop_images'][idobj]) == 'undefined' || document['crop_images'][idobj] == null)
	{
		jQuery(function($){
			
			obj.Jcrop( reglage_jcrop ,function(){
				document['crop_images'][idobj] = this;
				// console.log (idobj+' : '+typeof (document['crop_images'][idobj])+' > crée le crop');
				
			});
			set_preview (idobj);			
			
		});
	}
	else
	{
		// console.log (idobj+' : '+typeof (document['crop_images'][idobj])+' > anime le crop');

		var newoptions = {};
		newoptions.minSize = [crop_minwidth,crop_minheight];
		newoptions.aspectRatio = aspectratio;
				
		document['crop_images'][idobj].setOptions(newoptions);
		document['crop_images'][idobj].animateTo([ 2,16,170,90 ]);
		document['crop_images'][idobj].setSelect([10,10,(crop_minwidth*1.3), (crop_minheight*1.3)]) ;

		set_preview (idobj);		
	}


	is_in_crop = false;
	
	
}
