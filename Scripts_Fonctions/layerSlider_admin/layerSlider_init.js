if (typeof(galerie_rep) == 'undefined') galerie_rep = 'Galeries';
if (typeof(galerie_this_rep) == 'undefined') galerie_this_rep = 'layerslider_'+wanted_slider;

if (typeof(loading_image_admin) == 'undefined') loading_image_admin = 'Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/skins/fullwidth/loading.gif' ;   

if (typeof(rep_layerSlider) == 'undefined') rep_layerSlider = 'Scripts_Fonctions/LayerSlider-4.6.1-standalone';
if (typeof(rep_layerSlider_Admin) == 'undefined') rep_layerSlider_Admin = 'Scripts_Fonctions/layerSlider_admin';

if (typeof(rep_layerSlider_ACE) == 'undefined') rep_layerSlider_ACE = 'Scripts_Fonctions/CodeMirror-master';

if (typeof(rep_ckeditor) == 'undefined') rep_ckeditor = '../../_A_WebSite_Demo/_periphnord/Scripts_Fonctions/ckeditor'; /* http://www.oto-web.fr */
if (typeof(rep_pdwfilebrowser) == 'undefined') rep_pdwfilebrowser = 'Scripts_Fonctions/pdw_file_browser';
if (typeof(file_jquery_ui) == 'undefined') file_jquery_ui = 'Scripts_Fonctions/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js';
if (typeof(file_responsive_IE8) == 'undefined') file_responsive_IE8 = 'Scripts_Fonctions/respondjs/js/respond.min.js';

serveur_url = document.location.href.replace(/^(https?:\/\/[^\/\?]+)(\/|\?).+$/, '$1')+'/';

var page_url = serveur_url;
if (document.location.href.replace(/\.(php|html?)/, '$1'))
	page_url = document.location.href.replace(/^(.+\.(php|html?)).+$/, '$1');

rep_downLSA = '';
if (rep_layerSlider_Admin != '')
{
	n_rep_downLSA = 1;
	if (/\//.test(rep_layerSlider_Admin))
		n_rep_downLSA = rep_layerSlider_Admin.split('/').length;
	
	for (nr = 0; nr<n_rep_downLSA; nr++)
		rep_downLSA += '../';

}

document.is_loaded_slider = false;

var nscripts = 0;
var list_scriptsjs = [];

list_scriptsjs.push(rep_layerSlider+'/layerslider/jQuery/jquery-easing-1.3.js');
list_scriptsjs.push(rep_layerSlider+'/layerslider/jQuery/jquery-transit-modified.js');
list_scriptsjs.push(rep_layerSlider+'/layerslider/js/layerslider.transitions.js');
list_scriptsjs.push(rep_layerSlider+'/layerslider/js/layerslider.kreaturamedia.jquery.js');

list_scriptsjs.push(file_jquery_ui);

list_scriptsjs.push(galerie_rep+'/'+galerie_this_rep+'/slider_config.js');


for (lsc = 0 ; lsc < list_scriptsjs.length; lsc++)
{
// console.log('script n. '+lsc+' / '+nscripts);
	var scriptjs = list_scriptsjs[lsc];
	
	var js_src = document.createElement('script');
	js_src.setAttribute("src", scriptjs);			
	js_src.setAttribute ('type','text/javascript');

// console.log('.onload ??: '+typeof(js_src.onload));
			
	var notIE8 = '';	
	if (typeof(js_src.onload) == 'undefined') // IE8 !!
	{
		notIE8 = 'IE8';
	}
				
	js_src.onload = function () {
		nscripts ++;

		if (nscripts == list_scriptsjs.length)
		{
			list_scriptsjs = [];
			is_jquery();
// console.log('scripts chargés.');
			
			
		}
	};				

	// console.log('.onload ??: '+typeof(js_src.onload));

	if (notIE8 == '')
		document.getElementsByTagName('head')[0].appendChild(js_src);
	else 
	{
		if (document.getElementsByTagName('head')[0].appendChild(js_src))
		{
			nscripts ++;
			if (nscripts == list_scriptsjs.length)
			{
				list_scriptsjs = [];
				is_jquery();
	// console.log('scripts chargés.');
				
				
			}
		}
		
	}
	
}

// console.log('avant fonctions');
function load_css_and_scripts()
{
	
//	slider_is_loaded();
	var nscripts = 0;
	if (list_scriptsjs.length > 0)
	{
		for (lsc = 0 ; lsc < list_scriptsjs.length; lsc++)
		{
			var scriptjs = list_scriptsjs[lsc];
			
			var js_src = document.createElement('script');
			js_src.src = scriptjs;			
			js_src.type = 'text/javascript';
						
			if (document.getElementsByTagName('head')[0].appendChild(js_src))
				nscripts++ ;
					
			if (nscripts == list_scriptsjs.length)
			{
				// alert ('ok script, init slider');
				document.is_loaded_slider = true;
				init_slider();
				
				// console.log('init_slider');
			}
		}
	}
	else
	{
		document.is_loaded_slider = true;
		init_slider();
		//		console.log('init_slider');

	}
}

function affiche_menu_admin ()
{
	if (document.getElementById('menu_admin_slider') != null)
		document.getElementById('menu_admin_slider').style.display = 'block';
	
}
function is_jquery()
{
	if (typeof ($) != 'function' || typeof (jQuery) != 'function')
		setTimeout(is_jquery, 500);
	else
		setTimeout (load_slider, 1000);
}

verif_maj = true;
function load_slider ()
{
	frame = document.createElement('iframe');
	frame.style = 'position:absolute; z-index:1; display:block; width:10px; height:10px; top:-2000px; left:-2000px;';
	frame.height = '10';
	frame.width = '10';
	frame.name = 'load_slider';
	
	var ifkey = '';
	if (typeof(key) != 'undefined')
	{
		verif_maj = false;
		ifkey = '&key='+key;
	}
		
	document.body.appendChild(frame);
	frame.src = rep_layerSlider_Admin+'/load_slider.php?rep_slider='+rep_downLSA+galerie_rep+'/'+galerie_this_rep+ifkey+'&urladmin='+serveur_url+rep_layerSlider_Admin;
}

function go_slider (slider_relaunch)
{
	// alert (document.slider_original_DOMcopy.innerHTML);
	if (frame)
	{
		document.body.removeChild(frame);
		frame = null;	
	}
	$(document).ready(function(){

//	alert ('in go_slider() : \n'+typeof($('#'+document.id_du_layerslider).layerSlider));

		if (document.getElementById('loading_css_style') != null)
		{
	// alert ('in go_slider() : remove style \n'+typeof($('#'+document.id_du_layerslider).layerSlider));
			var styleavirer = document.getElementById('loading_css_style');	
			var styleavirerparent = styleavirer.parentNode;	
			
			styleavirerparent.removeChild(styleavirer);
		}

		if (slider_relaunch == null)
			slider_relaunch = document.id_du_layerslider;
		else
			document.id_du_layerslider = slider_relaunch;
								
		celayerslider = $('#'+slider_relaunch);
		
		document.layer_slider_width = document.getElementById(document.id_du_layerslider).style.width;
		document.layer_slider_height = document.getElementById(document.id_du_layerslider).style.height;


// console.log ('celayerslider = $(\'#\''+slider_relaunch+') '+document.layer_slider_width+' x '+document.layer_slider_height);

		if (document.getElementById('numpage_wanted') != null && document.getElementById('numpage_wanted').value.match(/^[0-9]+$/))
		{
			var numlayer_first = new Number(document.getElementById('numpage_wanted').value);
			layerSlider_config.firstLayer = numlayer_first;
		}

		if (verif_maj == true)
		{
			layerSlider_config.cbInit = function(data){ verif_MAjslider(); };
		}
		
		if (preview_mode == true || document.getElementById('menu_admin_slider') != null)
		{
			layerSlider_config.keybNav = false;
			layerSlider_config.touchNav = false;
			layerSlider_config.navPrevNext = false;
			layerSlider_config.navStartStop = false;
			layerSlider_config.navButtons = false;
			layerSlider_config.thumbnailNavigation = 'disabled';
		}
		
		oTo_LayerSlider = celayerslider.layerSlider(layerSlider_config);
		
	//	alert ('init_slider() a du etre execute...');
		return true;
	});
	
}

ex_mktmaj = 0;


function verif_MAjslider ()
{
	if (window.frames['verif_MAjslider'] != null)
	{
		framevmaj = document.createElement('iframe');
		framevmaj.style = 'position:absolute; z-index:1; display:block; width:10px; height:10px; top:-2000px; left:-2000px;';
		framevmaj.height = '10';
		framevmaj.width = '10';
		framevmaj.name = 'verif_MAjslider';
								
		document.getElementsByTagName('body')[0].appendChild(framevmaj);
		framevmaj.src = rep_layerSlider_Admin+'/verif_MAJSlider.php?rep_slider='+rep_downLSA+galerie_rep+'/'+galerie_this_rep+'&ex_mktmaj='+ex_mktmaj;
		
	}
	
	
}

function page_loaded()
{
	document.is_loaded_page = true;
}
function init_slider () {


	if (document.is_loaded_slider == true  && (document.getElementById('layerslider_original') == null || typeof(oTo_html2DOM) == 'function'))
	{
		var container = document.getElementById('layerslider-container').getElementsByTagName('div')[0];
		document.id_du_layerslider = container.id;
		//alert('is_loaded_slider = true');
		
		if (document.getElementById('layerslider_original') != null)
		{
			var slider_original = document.getElementById(document.id_du_layerslider).parentNode.innerHTML;
			
		//	alert (slider_original.replace(/\n+/g, '\n'));
			
			slider_original = slider_original.replace(/(<!--)|(-->)/mgi, '');

		//	alert (slider_original.replace(/\n+/g, '\n'));
			
			document.slider_original_DOMcopy = oTo_html2DOM (slider_original) ;
			document.slider_original_DOMcopy_verif = document.slider_original_DOMcopy.cloneNode(true);
			
			// alert('layerslider_original != null');
			//	setTimeout ('go_slider()', 200);
			go_slider();
		
		}
		else
		{
			go_slider();
		}

		
	}
	else
	{
		 setTimeout(init_slider, 500);	
	//	init_slider();
	//	alert ('document.is_loaded_slider !=true -> init_slider non execute...');
	}
}

function si_pagination (data)
{		
	var nview = data.curLayerIndex; 
	if (nview == data.layersNum) 
		nview = 0; 
		
	if (document.getElementById('numpage_actuel'))
		document.getElementById('numpage_actuel').innerHTML = nview; 
	if (document.getElementById('nbpage_total'))
		document.getElementById('nbpage_total').innerHTML = data.layersNum; 
}
