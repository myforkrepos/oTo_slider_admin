
// VARIABLES GLOBALES : 
layerslider_styles_old = 'slidedirection,durationin,durationout,easingin,easingout,delayin, delayout,slidedelay';
layerslider_styles = 'slidedelay,transition2d,transition3d,timeshift';

layerslider_sublayers_styles = 'slidedirection,slideoutdirection,durationin,durationout,easingin,easingout,delayin,delayout,showuntil,rotatein,rotateout,scalein,scaleout';

// EXPRESSIONS REGULIERES : 

REG_IDXLS_IN_SUBLS = /^([^_]+)(_.*)?$/;
REG_3USCORE = /___/;			
REG_SUPPR_ST_LIGNES = /\s+/mg;				
REG_SPLIT_SCRIPT2 = /<\/script>/mgi;
REG_SPLIT_SCRIPT1 = /<script/;
REG_FIN_STYLES2 = /(<\/style>)/mgi;
REG_SUPPR_OPACITY = /opacity ?: ?1;/mg;
REG_SUPPR_SCRIPTS = /<script (?!script>)+script>/mgi;

REG_OKIDF = /^[^_]+_[^_]+_(.+)$/;	

REG_DIVF_KELNUM = /^divf_(.+)$/;	
REG_DIVF_NONUM = /^divf_([^_]+).*$/;	
REG_DIVF_NONUM2 = /^divf_([^_]+)_?(.+)?$/;	
REG_DIVF_1 = /^divf_/;	
	
	
REG_SLIDER_SUBL_VALUE = /___slider_sublslayer___value/mg;		
REG_STYLE_SUBL_VALUE = /___style_sublslayer___value/mg;		
REG_CLASS_SUBL_VALUE = /___class_sublslayer___value/mg;		
REG_NODE_SUBL_VALUE = /___node_sublslayer___value/mg;		
REG_HTML_SUBL_VALUE = /___innerHTML_sublslayer___value/mg;		
REG_SRC_SUBL_VALUE = /___src_sublslayer___value/mg;		

REG_DISPLAY_INHTMLFORM = /table-header-group/mg;
REG_DISPLAY_IMAGEFORM = /table-footer-group/mg;
REG_DISPLAY_IMAGEMENUFORM = /table-column-group/mg;

REG_SLIDER_HEIGHT = /___Dim_height_slider___/mg;
REG_SLIDER_WIDTH = /___Dim_width_slider___/mg;
REG_SLIDER_ADMINREP = /___SLIDER_ADMINREP___/mg;

REG_SOUSCALK_ID = /^[^_]+_+/;		
REG_N_LS_N_LSUB = /___n_ls_______n_lssub___/mg;		
REG_N_LSSUB = /___n_lssub___/mg;
REG_SUBLAYERS_TOOLS = /___SUBLAYERS_TOOLS___/mg;
REG_SUBLAYERS_MENUS = /___SUBLAYERS_MENUS___/mg;
	
REG____S = /___/;
REG____SPLUS = /___.+$/;
REG_FIN_STYLE = /(<\/style>)/;		
REG_URL_REP_2 = /url\(\.\.\/.\.\//mg;		
REG_SRC_REP_1 = / src="\.\.\//mg; 	
REG_SRC_REP_2 = / src="\.\.\/.\.\//mg; 	
		
REG_HREF_REP_1 = / href="\.\.\//mg; 	
REG_HREF_REP_2 = / href="\.\.\/.\.\//mg; 	
		
REG_SKINPATH = /skinsPath ?: ?'\.\.\/\.\.\//mg;
REG_BODY_BALISE = /<body( |>)/;
		
REG_TOUTSAUF_NUM = /[^.0-9]/mg;	
		
REG_LAYERSLIDER_NUM = /layerslider_[_0-9]+/mg;
REG_ID_LS_LSUB_VALUE = /id="id_layer_sublayer" value="[^"]+"/mg;		
		
REG_AZ_GI = /[a-z]+/mgi;
REG_SRC_WITHOUT_HTTP = 	/( src=")(?!http)/mg;	
REG_HREF_WITHOUT_HTTP = /( href=")(?!http)/mg;		
REG_URL_WITHOUT_HTTP = /(url\()(?!('|")?http)/mg;		
		
REG_DURATIONOUT_VALUE_IN_STYLE = /^.*durationout ?: ?([^;]+);.*$/;
REG_DURATIONIN_VALUE_IN_STYLE = /^.*durationin ?: ?([^;]+);.*$/;
REG_DELAYOUT_VALUE_IN_STYLE = /^.*delayout ?: ?([^;]+);.*$/;
REG_DELAYIN_VALUE_IN_STYLE = /^.*delayin ?: ?([^;]+);.*$/;
REG_SHOWUNTIL_IN_STYLE =  /^.*showuntil ?: ?([^;]+);.*$/;
 
 
REG_IFRAME = /___IFrame___/mg;
REG_N_LS = /___n_ls___/mg;
REG_IFRAME_MINI_H_TOOLS = /7856342/mgi;
REG_IFRAME_MINI_H_DIV = /8765432/mgi;
REG_IFRAME_MINI_W_DIV = /1234567/mgi;
REG_IFRAME_MINI_H = /1357964/mgi;
REG_IFRAME_MINI_W = /___iframe_minis_width___/mgi;

REG_CLASS_LSLAYER_VALUE = /___class_lslayer___value/mg;	
REG_NODE_LSLAYER_VALUE = /___node_lslayer___value/mg;	
REG_STYLE_LSLAYER_VALUE = /___style_lslayer___value/mg;
REG_SLIDER_LSLAYER_VALUE = /___slider_lslayer___value/mg;
REG_VIEWING_LSLAYER_VALUE = /___data-hide_lslayer___checked/mg;


REG_SRC_LAYER_VALUE = /___src_fond_lslayer___value/mg;		
REG_SRCAPERCU_LAYER_VALUE = /___src_apercu_lslayer___value/mg;		


REG_TIMESHIFT_VALUE_IN_STYLE = /^.*timeshift ?: ?([^;]+);.*$/;
REG_SLIDEDELAY_VALUE_IN_STYLE = /^.*slidedelay ?: ?([^;]+);.*$/;
REG_LAYERS_AND_SUB = /___Layers_and_sub___/mg;
REG_LSNUM = /___ls_num___/mg;
REG_TRIM = /^(\s*)|(\s*)$/mg;
REG_VIRGULE = /,/g;
REG_PT_VIRGULE = /;/g;	
REG_2_PTS = /:/g;	
REG_IS_PX_EM_PCENT = /(px|em|%)/mg;	
REG_ESPACE = / +/mg;				

REG_NO = /no/;
REG_SUBLSLF_HTML = /sublsform_innerHTML_/;


REG_SL = new RegExp ('^('+layerslider_styles_old.replace(REG_VIRGULE, ')|(')+')|('+layerslider_styles.replace(REG_VIRGULE, ')|(')+')', 'i');
REG_LSSUB = new RegExp ('^\s*('+layerslider_sublayers_styles.replace(/,/g, ')|(')+')', 'g');

// alert(REG_LSSUB);
REG_IMGSRC_SUPPR_DEMO = /\/_A_WebSite_Demo\/_[a-z]+\//;
REG_IMGSRC_SUPPR_SERVEUR = new RegExp ('^'+serveur_url.replace(/\//g, '\/'));
// alert (REG_IMGSRC_SUPPR_SERVEUR);

function slide_in_newwindow (obj, iffin)
{

	var url_slidernoadmin = window.location.href.replace(/(\?|&)key=[^&]+/, '');
	url_slidernoadmin = url_slidernoadmin.replace(/(\?|&)PHPSESSID=[^&]+/, '');

	if (iffin != null)
	{
		save_layerslider(url_slidernoadmin);
		
	}
	else
	{
//	obj.href = window.location.href = page_url+'?slider='+wanted_slider;
	
		obj.href = url_slidernoadmin;
	}
}

function reset_onchange_events ()
{
	var lesonchange_selects = $('select[onchange]');	
	var lesonchange_textarea = $('textarea[onchange]');	
	var lesonchange_onclick = $('input[onclick]');	
	
	var id_x_inconnu = 'idx_noid_';
	var numx = 0;
	
	var rapport = '';
	
	for (var locs=0; locs<lesonchange_onclick.length; locs++)
	{
		if (typeof(lesonchange_onclick[locs].id) == 'undefined' || lesonchange_onclick[locs].id == '')
		{
			var ce_id = id_x_inconnu+'onclick_'+numx;
			lesonchange_onclick[locs].id = ce_id;
			numx ++;
		}
		else
			var ce_id = lesonchange_onclick[locs].id;
		
		// console.log(ce_id);
		var ce_onchange = document.getElementById(ce_id).getAttribute('onclick');
		
		document.getElementById(ce_id).setAttribute('onclick', ce_onchange);

		rapport += locs+' '+ce_id+' : '+ce_onchange+'\n';
	}
	
	rapport += '\n';
	for (var locs=0; locs<lesonchange_selects.length; locs++)
	{
		if (typeof(lesonchange_selects[locs].id) == 'undefined' || lesonchange_selects[locs].id == '')
		{
			var ce_id = id_x_inconnu+'onclick_'+numx;
			lesonchange_selects[locs].id = ce_id;
			numx ++;
		}
		else
			var ce_id = lesonchange_selects[locs].id;
		
		// console.log(ce_id);
		var ce_onchange = document.getElementById(ce_id).getAttribute('onchange');
		
		document.getElementById(ce_id).setAttribute('onchange', ce_onchange);

		rapport += locs+' '+ce_id+' : '+ce_onchange+'\n';
	}
	
	rapport += '\n';
	for (var locs=0; locs<lesonchange_textarea.length; locs++)
	{
		if (typeof(lesonchange_textarea[locs].id) == 'undefined' || lesonchange_textarea[locs].id == '')
		{
			var ce_id = id_x_inconnu+'onclick_'+numx;
			lesonchange_textarea[locs].id = ce_id;
			numx ++;
		}
		else
			var ce_id = lesonchange_textarea[locs].id;

			// console.log(ce_id);
		var ce_onchange = document.getElementById(ce_id).getAttribute('onchange');
		
		document.getElementById(ce_id).setAttribute('onchange', ce_onchange);
		
		rapport += locs+' '+ce_id+' : '+ce_onchange+'\n';
	}
	
//	alert (rapport);
}

	
function new_layer_from (modele, idlsls)
{
		
	cache_menu_a (idlsls, document.getElementById('new_sublayer_close_menu_'+idlsls));
	
	remake_DOMcopy();	
	
	$('#new_layer_menu_'+idlsls).css('display', 'none'); 
	$('#new_layer_close_menu_'+idlsls).css('display', 'none');
	
	document.add_1_vue = 1;
	var id_slider = document.id_du_layerslider;
	
//	alert ('1 ->\n'+document.slider_original_DOMcopy.innerHTML);
	
	var le_DOM_voulu = document.slider_original_DOMcopy.cloneNode(true) ;
	
	document.getElementById(id_slider+'_original_tmp').innerHTML = '';	
	document.getElementById(id_slider+'_original_tmp').appendChild(le_DOM_voulu) ;
//	alert (le_DOM_voulu.innerHTML);
	
	var idlayer = idlsls;
	var id_layer_num = new Number (idlsls);
	
	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
	var lslayer_voulu_T = $('#'+id_slider+'_original_tmp .ls-layer');	
	
	for (lli=0; lli < les_lis_form.length; lli++)
	{
		if (les_lis_form[lli].id == 'LS_adminLI_'+idlayer)
		{
			var le_n_ls_voulu = lli;
			lli = les_lis_form.length+1;
			
			var LI_suivant_cree = document.createElement('li');
			LI_suivant_cree.id = 'LI_for_insertbefore';
			LI_suivant_cree.class = 'htmlform_layer_LI';
			LI_suivant_cree.style = 'display:block; width:500px; height:2px; background-color:#000;';
			
			document.getElementById('LS_adminLI_'+idlayer).parentNode.insertBefore (LI_suivant_cree, document.getElementById('LS_adminLI_'+idlayer));
			
			var ancien_id_LS = lslayer_voulu_T[le_n_ls_voulu].id;
			
			lslayer_voulu_T[le_n_ls_voulu].id = 'DIV_idnlsvoulu_for_insertbefore';
			
			var DIVtmp_suivant_cree = '<div id="DIVtmp_for_insertbefore" style="display:block; width:500px; height:2px; background-color:#000;"></div>';
			
			$('#DIV_idnlsvoulu_for_insertbefore').before(DIVtmp_suivant_cree);
						
		}
	}
	
	
	var lslayer_voulu = lslayer_voulu_T[le_n_ls_voulu];
	
	
	var lslayer_suivant = null;
	var id_suivant_svg = '';
	
	
	document.getElementById(id_slider+'_original').innerHTML = '' ;	
	
	if (modele != 'duplique')
	{
// calque_vierge	

		var modele_voulu = document.getElementById('calque_vierge').innerHTML;

		var new_ls_DOM = oTo_html2DOM (modele_voulu) ;
		
		document.getElementById(id_slider+'_original').appendChild(new_ls_DOM) ;	

	}
	else
	{
		
		document.getElementById(id_slider+'_original').appendChild(lslayer_voulu) ;	
	}
	
	var layer_DOM = document.getElementById(id_slider+'_original').getElementsByTagName('div')[0];
	var layer_DOM_2ORIGINAL = layer_DOM.cloneNode(true) ;

	
	document.getElementById('DIVtmp_for_insertbefore').parentNode.insertBefore(layer_DOM, document.getElementById('DIVtmp_for_insertbefore')) ;
	document.getElementById('DIVtmp_for_insertbefore').parentNode.removeChild(document.getElementById('DIVtmp_for_insertbefore')) ;
		
	document.getElementById('DIV_idnlsvoulu_for_insertbefore').id = ancien_id_LS;
	
	
	layerSlider_list (id_slider, '', layer_DOM_2ORIGINAL);		


	if (document.getElementById('id_lslayer_suivant') != null)
		document.getElementById('id_lslayer_suivant').id = id_suivant_svg;	
		
	document.getElementById(id_slider+'_original_tmp').removeChild(le_DOM_voulu) ;


	var idlayer = new Number(idlayer);
	remake_layerslider_listemenu (idlayer);
}

function new_sublayer_from (modele, idlsls, is_end)
{
	cache_menu_a (idlsls, document.getElementById('new_sublayer_close_menu_'+idlsls));

	if (!is_end) is_end = '';
	
	var remakedom = 'remakedom';
	
	if (!modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/))
	{
		remake_DOMcopy();	
		remakedom = null;
	}
	
	$('#new_sublayer_menu_'+idlsls).css('display', 'none'); 
	$('#new_sublayer_close_menu_'+idlsls).css('display', 'none');

	var rapport = '';

	var id_slider = document.id_du_layerslider;
	var le_DOM_voulu = document.slider_original_DOMcopy.cloneNode(true) ;
	
	
	document.getElementById(id_slider+'_original_tmp').innerHTML = '';	
	document.getElementById(id_slider+'_original_tmp').appendChild(le_DOM_voulu) ;
	
	rapport += 'SLIDER  insere dans _original_tmp\n';
	
	var idlayer = idlsls.replace(/^([^_]+)_.+$/, '$1');
	var id_new_sublayer_n = $('#sublayers_ls'+idlayer+' iframe').length;	
	
	var id_des_suls = idlsls.split(/___/g);

	var id_layer_num = new Number (id_des_suls[0]);
	var id_sublayer_1num = id_des_suls[1];
	var id_sublayer_2num = new Number (id_des_suls[2]);
	
	
	if (modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/))
	{
		var idlayer_tocopy = modele.replace(/^([^_]+)_.+$/, '$1');
		var id_des_suls_tocopy = modele.split(/___/g);
	
		var id_layer_num_tocopy = new Number (id_des_suls_tocopy[0]);
		var id_sublayer_1num_tocopy = id_des_suls_tocopy[1];
		var id_sublayer_2num_tocopy = new Number (id_des_suls_tocopy[2]);
		
		console.log ('modele.match n1 : idlayer_tocopy: '+idlayer_tocopy+' - id_layer_num_tocopy: '+id_layer_num_tocopy+' - id_sublayer_1num_tocopy: '+id_sublayer_1num_tocopy+' - id_sublayer_2num_tocopy: '+id_sublayer_2num_tocopy);
	}
	
	
	var les_lis_form = $('#htmlform_layer li.htmlform_layer_LI');
	
	var lslayer_voulu_T = $('#'+id_slider+'_original_tmp .ls-layer');	
	var rappo = '';
	
	for (var lli=0; lli < les_lis_form.length; lli++)
	{
				
	rappo += lli+': '+les_lis_form[lli].id+' == LS_adminLI_'+idlayer+'\n';

		if (les_lis_form[lli].id == 'LS_adminLI_'+idlayer)
		{
			
			var le_n_ls_voulu = lli;
			
			var LI_suivant_cree = document.createElement('li');
			LI_suivant_cree.id = 'LI_for_insertbefore';
			LI_suivant_cree.class = 'htmlform_layer_LI';
			LI_suivant_cree.style = 'display:block; width:500px; height:2px; background-color:#000;';
			
			document.getElementById('LS_adminLI_'+idlayer).parentNode.insertBefore (LI_suivant_cree, document.getElementById('LS_adminLI_'+idlayer));
			
			
			var ancien_id_LS = lslayer_voulu_T[le_n_ls_voulu].id;
			lslayer_voulu_T[le_n_ls_voulu].id = 'DIV_idnlsvoulu_for_insertbefore';
			
			var DIVtmp_suivant_cree = '<div id="DIVtmp_for_insertbefore" style="display:block; width:500px; height:2px; background-color:#000;"></div>';
			
			$('#DIV_idnlsvoulu_for_insertbefore').before(DIVtmp_suivant_cree);
						
			
			// lli = les_lis_form.length+1;
		}


		if (modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/) && les_lis_form[lli].id == 'LS_adminLI_'+idlayer_tocopy)
		{
			
			var le_n_ls_voulu_tocopy = lli;
			
			var lslayer_voulu_tocopy = lslayer_voulu_T[le_n_ls_voulu_tocopy];
		
			document.getElementById(id_slider+'_original2').innerHTML = '' ;	
			document.getElementById(id_slider+'_original2').appendChild(lslayer_voulu_tocopy) ;	
			
			console.log ('modele.match n2 : copié dans original2');
		}

	}
	
	alert ('verifier que original2 est bien rempli !');
	
	var lslayer_voulu = lslayer_voulu_T[le_n_ls_voulu];

	document.getElementById(id_slider+'_original').innerHTML = '' ;	
	document.getElementById(id_slider+'_original').appendChild(lslayer_voulu) ;	

	rapport += 'LI voulu a ete insere dans _original\n';
		
	var lssublayer_voulu_T = $('#'+id_slider+'_original .ls-s'+id_sublayer_1num);
	var id_new_sublayer = idlayer+'___'+id_sublayer_1num+'___'+lssublayer_voulu_T.length; //id_new_sublayer_n
	
		
	alert ('verifier que original est bien rempli ! ...et avec quoi...');
		
		
	if (typeof(lssublayer_voulu_T[id_sublayer_2num]) != 'undefined')
	{
		var lssublayer_voulu = lssublayer_voulu_T[id_sublayer_2num];
		var lssublayer_voulu_exid = lssublayer_voulu.id;
		
		var lssublayer_voulu_exid = '';
		if (lssublayer_voulu.id) lssublayer_voulu_exid = lssublayer_voulu.id;
		
		lssublayer_voulu.id = 'sublayer_insertBefore';
		
	}
	if ( modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/))
	{
		
	//	if (id_sublayer_1num_tocopy != id_sublayer_1num)
	//	{
			var lssublayer_voulu_tocopy_T = $('#'+id_slider+'_original2 .ls-s'+id_sublayer_1num_tocopy);
			var ok_lssublayer = '';
			
			if (lssublayer_voulu_tocopy_T[id_sublayer_2num_tocopy])
			{
				var lssublayer_voulu_tocopy = lssublayer_voulu_tocopy_T[id_sublayer_2num_tocopy];
			
				console.log ('modele.match n3 : idlayer_tocopy: '+idlayer_tocopy+' - id_layer_num_tocopy: '+id_layer_num_tocopy+' - id_sublayer_1num_tocopy: '+id_sublayer_1num_tocopy+' - id_sublayer_2num_tocopy: '+id_sublayer_2num_tocopy+'...\n'+typeof(lssublayer_voulu_tocopy));
			//	var lssublayer_voulu_tocopy_reoriginal = lssublayer_voulu_tocopy.cloneNode(true);
				
				var lssublayer_voulu_tocopy_exid = '';
				if (lssublayer_voulu_tocopy) 
				{
					lssublayer_voulu_tocopy_exid = lssublayer_voulu_tocopy.id;
					lssublayer_voulu_tocopy.id = 'sublayer_tocopy_insert';
				}
				else
					ok_lssublayer = 'no';
				
			}
			if (ok_lssublayer == 'no')
			{
				var lssublayer_voulu_tocopy = document.getElementById(id_slider+'_original2').getElementsByClassName('ls-s'+id_sublayer_1num_tocopy)[id_sublayer_2num_tocopy]; 
			
				console.log ('modele.match n3 par doc.element : idlayer_tocopy: '+idlayer_tocopy+' - id_layer_num_tocopy: '+id_layer_num_tocopy+' - id_sublayer_1num_tocopy: '+id_sublayer_1num_tocopy+' - id_sublayer_2num_tocopy: '+id_sublayer_2num_tocopy+'...\n'+typeof(lssublayer_voulu_tocopy));
			//	var lssublayer_voulu_tocopy_reoriginal = lssublayer_voulu_tocopy.cloneNode(true);
				
				var lssublayer_voulu_tocopy_exid = '';
				if (lssublayer_voulu_tocopy) 
				{
					lssublayer_voulu_tocopy_exid = lssublayer_voulu_tocopy.id;
					lssublayer_voulu_tocopy.id = 'sublayer_tocopy_insert';
				}
				else
					console.log (ok_lssublayer+' no');
			}
	//	}
		
	}
	var remake_vue = true;
	
	if (!modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/) && modele != 'duplique')
	{
	
		var modele_voulu = document.getElementById('sous_calque_vierge_'+modele).innerHTML;

		var html_subl_DOM = oTo_html2DOM (modele_voulu) ;
		
		if (typeof(lssublayer_voulu) != 'undefined')
			document.getElementById('sublayer_insertBefore').parentNode.insertBefore(html_subl_DOM, document.getElementById('sublayer_insertBefore'));
		else	
			document.getElementById(id_slider+'_original').firstChild.appendChild(html_subl_DOM, lssublayer_voulu);
		
		var layer_DOM = document.getElementById(id_slider+'_original').firstChild;
		
		rapport += 'nouveau sous-calque vierge (image ou texte) insere apres le sous-calque voulu\n';
		
	}
	else
	{
		var lssublayer_voulu_modele = lssublayer_voulu;
		
		if (modele.match(/^[0-9]+___[-0-9]+___[0-9]+$/))
			lssublayer_voulu_modele = lssublayer_voulu_tocopy;
		
	//	alert ('lssublayer_voulu_modele: '+lssublayer_voulu_modele.innerHTML);
		
		if (lssublayer_voulu_modele)
		{
			var lesattribs = lssublayer_voulu_modele.attributes;
			var nodename = lssublayer_voulu_modele.nodeName.toLowerCase();
			
			var innerHTML_subl = '';
			
			var html_subl_string = '<'+nodename;
			
			if (nodename == 'img')
			{
				var fin_balise_1 = '/>';
				var fin_balise_2 = '';
			}
			else
			{
				var fin_balise_1 = '>';
				var fin_balise_2 = '</'+nodename+'>';
				innerHTML_subl = lssublayer_voulu_modele.innerHTML;
			}
			
			for (io in lesattribs)
			{
				html_subl_string += ' '+lesattribs[io].name+'="'+lesattribs[io].value+'"';
			}
			
			html_subl_string += fin_balise_1+innerHTML_subl+fin_balise_2;
			
			var html_subl_DOM = oTo_html2DOM (html_subl_string) ;
			
				console.log(typeof(lssublayer_voulu)+' != undefined && -'+is_end+'- == --');

			if (typeof(lssublayer_voulu_modele) != 'undefined' && is_end == '')
			{
				document.getElementById('sublayer_insertBefore').parentNode.insertBefore(html_subl_DOM, document.getElementById('sublayer_insertBefore'));
				console.log('insertBefore');
			}
			else	
			{
				document.getElementById(id_slider+'_original').firstChild.appendChild(html_subl_DOM);
				console.log('appendChild');
			}
			
			if (id_layer_num_tocopy == id_layer_num)
			{
				document.getElementById('sublayer_tocopy_insert').parentNode.removeChild(document.getElementById('sublayer_tocopy_insert'));
				rapport += 'sous-calque (dupliqué depuis le même calque) supprimé = rangé dans le ordre voulu. \n';
			
				remake_vue = false;
				
			}
			
			else
			{
				
//				var divinmove = document.getElementById('sublayer_tocopy_insert');
//				divinmove.className = document.memo_sub_className;
				
				//	document.sublayers_DIV_insorting = ui.item.context.id+';'+id_parent_subl+';';
				// lssublayer_voulu_tocopy_reoriginal
				console.log ('sous calque copié, replace original : '+document.sublayers_DIV_insorting/*+'\nhtml_subl_DOM:'+html_subl_DOM.innerHTML+'-'*/); //document.sublayers_DIV_inmemory
				
				var infos_subl_T = document.sublayers_DIV_insorting.split(';');
				
				if (infos_subl_T[2] == '')
				{
					document.getElementById(infos_subl_T[1]).appendChild(document.sublayers_DIV_inmemory);
				}
				else
				{
					document.getElementById(infos_subl_T[1]).insertBefore(document.sublayers_DIV_inmemory, document.getElementById(infos_subl_T[2]));
				}
	
		
			}
		
		//	rapport += 'nouveau sous-calque duplique avant le sous-calque voulu\n';
		}
		else
		{
			remake_vue = false;			
		}
	}
		
		
	if (document.getElementById('sublayer_tocopy_insert') != null)	
		document.getElementById('sublayer_tocopy_insert').id = lssublayer_voulu_tocopy_exid;
		

	var layer_DOM = document.getElementById(id_slider+'_original').getElementsByTagName('div')[0];
	var layer_DOM_2ORIGINAL = layer_DOM.cloneNode(true) ;

alert ('quel original est OK ?? fonctionne avec _original');

	document.getElementById('DIVtmp_for_insertbefore').parentNode.insertBefore(layer_DOM, document.getElementById('DIVtmp_for_insertbefore')) ;
	document.getElementById('DIVtmp_for_insertbefore').parentNode.removeChild(document.getElementById('DIVtmp_for_insertbefore')) ;
	
	document.getElementById('DIV_idnlsvoulu_for_insertbefore').id = ancien_id_LS;
		
	rapport += 'le LI transformé a ete inséré avant le LI ID id_lslayer_suivant\n';
	
	layerSlider_list (id_slider, id_new_sublayer, layer_DOM_2ORIGINAL);		

	document.getElementById(id_slider+'_original_tmp').removeChild(le_DOM_voulu) ;
	document.getElementById(id_slider+'_original2').innerHTML = '' ;

	var idlsls = new Number(idlsls);
	
	if (remake_vue == true)
	{
		remake_layerslider_listemenu (idlsls, null); // , remakedom
		
	}
	else
	{
		if (document.getElementById('LI_for_insertbefore') != null)
			document.getElementById('LI_for_insertbefore').parentNode.removeChild (document.getElementById('LI_for_insertbefore'));
	}
	
	if (document.getElementById('sublayer_insertBefore') != null)	
		document.getElementById('sublayer_insertBefore').id = lssublayer_voulu_exid;
		
	
}

function save_layerslider(sifin_adresseslider)
{
	// dossier_slide
	// save_slide
	
	document.getElementById('waiting_mask').style.display = 'block';
	
	var slider_new_html = '';
	
	if (document.getElementById('htmlform_layer').getElementsByTagName('li')[0] != null)
		slider_new_html = slider_form_2_html ();
	
	var slider_dossier = '../../'+galerie_rep+'/'+galerie_this_rep+'/';
	
	document.getElementById('save_new_slide').innerHTML = slider_new_html;
	document.getElementById('dossier_new_slide').value = slider_dossier;
	
	if (sifin_adresseslider != null)
		document.getElementById('save_finMAJ').value = sifin_adresseslider;
	else
		document.getElementById('save_finMAJ').value = '';
	
	var iframesave = document.createElement('iframe');
	iframesave.style = 'position:absolute; z-index:1; margin-left:-3000px;';
	iframesave.id = 'save_layerslider';
	iframesave.name = 'save_layerslider';
	
	document.getElementsByTagName('body')[0].appendChild(iframesave);
	
//	iframesave.src = serveur_url+rep_layerSlider_Admin+'/save_slider.php?url='+serveur_url+rep_layerSlider_Admin;
	iframesave.src = rep_layerSlider_Admin+'/save_slider.php';
	
}

function save_layerslider_close(msg_svg, sifin)
{
	alert (msg_svg);

	if (sifin != '')
	{
		window.location.href = sifin;
	}
	else
	{
		document.getElementsByTagName('body')[0].removeChild(document.getElementById('save_layerslider'));	
		document.getElementById('waiting_mask').style.display = 'none';
	}
}



function slider_apply_modifications (vuenum, nepasvoir)
{
	var slider_html_new = slider_form_2_html ();
//	alert (slider_html_new);

	new_id_layerslider = slider_putin_DOM (slider_html_new);
	
	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
	
	var nb_hidden_LS_beforeOK = 0;
	
	var le_n_ls_voulu = 0;
	
	for (var lli = 0; lli < les_lis_form.length; lli++)
	{
		var numid_dce_li = les_lis_form[lli].id.replace(/^.+_([^_]+)$/, '$1');
		
		if (document.getElementById('data-hide_lslayer_'+numid_dce_li).checked != true)
			nb_hidden_LS_beforeOK ++;
			
		if (les_lis_form[lli].id == 'LS_adminLI_'+vuenum)
		{
			le_n_ls_voulu = lli - nb_hidden_LS_beforeOK;
			lli = les_lis_form.length;
		}
	}
	
	if (nepasvoir == null)
	{
    	$('#htmlform_layer').css('display', 'none'); 

		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
		
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
		$('#slider_sauvegardes_div').css('display', 'none');
	
    	document.getElementById('layerslider_admin').className = ''; 
	}
	
	setTimeout("slider_relaunch ('"+new_id_layerslider+"', '"+le_n_ls_voulu+"')", 1000);
	
//	return (true);
}


function slider_form_2_html (n_ls_htmlok)
{
	var chq_LI_form_to_order = $('#htmlform_layer li.htmlform_layer_LI');
//	alert ('document.htmlform_LI_order == null');
	
	document.htmlform_LI_order = [];
	
	for (lio=0; lio < chq_LI_form_to_order.length; lio++)
	{
		var cetidli = chq_LI_form_to_order[lio].id;
		document.htmlform_LI_order.push(cetidli) ;
		
		var classnumli = 'numvue_'+cetidli.replace(/^.+_([^_]+)$/, '$1');

		var lioplus = lio+1;

		$('.'+classnumli).html(lioplus);
		
	}
	
	var chq_LI_form = document.htmlform_LI_order;
//	alert ('document.htmlform_LI_order == '+document.htmlform_LI_order.join(' - '));
	
	var html_new_layerSlider = '';
	
	for (cels = 0; cels < chq_LI_form.length; cels++)
	{

		if (document.htmlform_LI_order == null)
			var ok_cels = cels;
		else
			var ok_cels = chq_LI_form[cels].replace (/^.+_([0-9]+)$/, '$1');
	
		// console.log (cels+' : '+chq_LI_form[cels]+' -> '+ok_cels);
		
		if (document.getElementById('style_lslayer_'+ok_cels) != null && typeof(document.getElementById('style_lslayer_'+ok_cels)) != 'undefined')
		{
			var rapport = '';
			var style_ce_layer = document.getElementById('style_lslayer_'+ok_cels).value+' '+document.getElementById('slider_lslayer_'+ok_cels).value;
			style_ce_layer = style_ce_layer.replace(/\s+/g, ' ');
			style_ce_layer = style_ce_layer.replace(/(; ?)+/g, ';');
			style_ce_layer = style_ce_layer.replace(REG_TRIM, '');
			
			var ce_class = ' class="'+document.getElementById('class_lslayer_'+ok_cels).value+'"';
			var ce_style = ' style="'+style_ce_layer+'"';

			var ce_datahide = '';
			var ce_ls_hidehtml_dbt = '';
			var ce_ls_hidehtml_fin = '';
			
			if (document.getElementById('data-hide_lslayer_'+ok_cels).checked != true)
			{
				ce_datahide = ' data-hide="yes"';
				ce_ls_hidehtml_dbt = '<!--\n';
				ce_ls_hidehtml_fin = '\n-->';
			}

			
			var cetteimage = document.getElementById('srcfond_lslayer_'+ok_cels).value;
			var ce_image_bg = '';			
			
			if (cetteimage != '' && cetteimage.match(/\.(png)|(jpe?g)|(gif)$/i))
			{
				cetteimage = cetteimage.replace(REG_IMGSRC_SUPPR_DEMO, '');
				cetteimage = cetteimage.replace(REG_IMGSRC_SUPPR_SERVEUR, '');
				
				ce_image_bg = '		<img class="ls-bg" src="'+cetteimage+'"/>\n';
			}
			
			
			var ce_image_apercu = '';
			if (document.getElementById('srcapercu_lslayer_'+ok_cels).value != '' && document.getElementById('srcapercu_lslayer_'+ok_cels).value.match(/\.(png)|(jpe?g)|(gif)$/i))
			{
				var cetteimage = document.getElementById('srcapercu_lslayer_'+ok_cels).value;
				cetteimage = cetteimage.replace(REG_IMGSRC_SUPPR_DEMO, '');
				cetteimage = cetteimage.replace(REG_IMGSRC_SUPPR_SERVEUR, '');
	
				ce_image_apercu = '		<img class="ls-tn" src="'+cetteimage+'"/>\n';
				
			}
					
			var ce_ses_sublayers = $('#layers_tools_'+ok_cels+'_sm .lsform_tools div');
			var ce_ses_sublayers_iframes = $('#sublayers_ls'+ok_cels+' iframe');
			
			var reg_subls_divOK = new RegExp ("^iframelayerslider_"+ok_cels+"___", "");
			var num_sublayer = 0;
			
			var sublayers_list = new Object();
			
			
			for (subels = 0; subels < ce_ses_sublayers_iframes.length; subels++)
			{
				var new_sublayer = '';
				
				if (ce_ses_sublayers_iframes[subels].id.match(reg_subls_divOK))
				{
					var fin_id_sub = ok_cels+'___'+ce_ses_sublayers_iframes[subels].id.replace (reg_subls_divOK, '');
			
			
					if (typeof(document.getElementById('node_lslayer_'+fin_id_sub)) != 'undefined')
					{
			//	console.log ('_________node_lslayer_'+fin_id_sub+' \n'+document.getElementById('node_lslayer_'+fin_id_sub)+'\n '+typeof(document.getElementById('node_lslayer_'+fin_id_sub)));
						var ce_sub_node = document.getElementById('node_lslayer_'+fin_id_sub).value.toLowerCase();
												
						var ce_sub_positiondepart = document.getElementById('positiondepart_lslayer_'+fin_id_sub).value;
						
						if (ce_sub_positiondepart != '-1')
						{
						/*
							num_sublayer ++;
							ce_sub_positiondepart = num_sublayer;
							
							var idxsub_memo_1 = num_sublayer;
						*/	
							var lesindexsub = fin_id_sub.split('___');
							ce_sub_positiondepart =  new Number(lesindexsub[1]);
							var idxsub_memo_1 = ce_sub_positiondepart;
							
							
						}
						else
						{
							var idxsub_memo_1 = 0;
						}
						
						var ce_sub_baseclass = 'ls-s'+ce_sub_positiondepart;
						
						var ce_sub_html = '';
						var ce_sub_src = '';
						
						var cetteclasse = document.getElementById('class_lslayer_'+fin_id_sub).value;
						cetteclasse = cetteclasse.replace (/^ls-s-?[0-9]+ ?/, '');
						cetteclasse = cetteclasse.replace (REG_TRIM, '');
						
						if (cetteclasse != '')
							cetteclasse = ' '+cetteclasse;
							
						var style_de_ce_subl = document.getElementById('style_lslayer_'+fin_id_sub).value+' '+document.getElementById('slider_lslayer_'+fin_id_sub).value;	
						style_de_ce_subl = style_de_ce_subl.replace(/\s+/g, ' ');
						style_de_ce_subl = style_de_ce_subl.replace(/(; ?)+/g, ';');
						style_de_ce_subl = style_de_ce_subl.replace(REG_TRIM, '');
		
						var ce_sub_class = ' class="'+ce_sub_baseclass+' '+cetteclasse+'"';
						var ce_sub_style = ' style="'+style_de_ce_subl+'"';
						
						var balise1_fin = '>';
						var balise2 = '';
						
						if (ce_sub_node == 'img')
						{
							ce_sub_src = ' src="'+document.getElementById('src_lslayer_'+fin_id_sub).value+'" ';
							balise1_fin = '/>';
						}
						else
						{
							ce_sub_html = document.getElementById('innerHTML_lslayer_'+fin_id_sub).innerHTML;
							
							ce_sub_html = ce_sub_html.replace(/url\s*\(\s*('|")?([^'")]+)('|")?\s*\)/, 'url($2)');
							
				//			alert (ce_sub_html);
							
							balise2 = '</'+ce_sub_node+'>\n\n';
						}
						
						new_sublayer = '		<'+ce_sub_node+ce_sub_class+ce_sub_style+ce_sub_src+balise1_fin+'\n'+ce_sub_html+'\n'+balise2;
						
						if (typeof (sublayers_list[idxsub_memo_1]) == 'undefined')
						{
							sublayers_list[idxsub_memo_1] = new Object();
							var num_ce_sub_inlist = 0;
						}
							
						var possub_id = idxsub_memo_1;
						if (possub_id == 0)
							possub_id = '-1';
							
						var new_id_cesublayer = ok_cels+'___'+possub_id+'___'+num_ce_sub_inlist;
						if (new_id_cesublayer != fin_id_sub)
						{
						//	console.log(new_id_cesublayer+' != '+fin_id_sub+' ==> IDs A MODIFIER !!');
							
							if (document.LS_sublayers_real_pos == null)
								document.LS_sublayers_real_pos = new Object();
								
							document.LS_sublayers_real_pos[fin_id_sub] = new Array();
							document.LS_sublayers_real_pos[fin_id_sub].push(possub_id);
							document.LS_sublayers_real_pos[fin_id_sub].push(num_ce_sub_inlist);
						}
					//	else
					//		console.log(new_id_cesublayer+' != '+fin_id_sub);
							
						sublayers_list[idxsub_memo_1][num_ce_sub_inlist] = new_sublayer;
						num_ce_sub_inlist ++;
						
							
					}
				}
				
			}
	
	
			var html_sublayers = '';
			for (nsubls in sublayers_list)
			{
				var listesub_nsubls = sublayers_list[nsubls];
				
				for (nsubls_2 in listesub_nsubls)
				{
				//	alert (nsubls+' '+nsubls_2+' '+listesub_nsubls[nsubls_2])
					html_sublayers += listesub_nsubls[nsubls_2];
				}
				
			}
	
			var newlayer = ce_ls_hidehtml_dbt+'<div '+ce_datahide+ce_class+ce_style+'>\n\n'+ce_image_bg+ce_image_apercu+'\n'+html_sublayers+'</div>'+ce_ls_hidehtml_fin+'\n';	
	
	
			var numID_ls = document.htmlform_LI_order[cels];
			var numero_ls = numID_ls.replace(/^.+_([^_]+)$/, '$1');
	
	
			if (document.remake_iframe_html != null && document.remake_iframe_html == numero_ls)
			{
				var OK_innerframe_Layer = newlayer;
								
				OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_SRC_WITHOUT_HTTP, '$1'+serveur_url);
				OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_HREF_WITHOUT_HTTP, '$1'+serveur_url);
				OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_URL_WITHOUT_HTTP, '$1'+serveur_url);
						
				document['inframe_layerslider_innerhtml_'+numero_ls] = OK_innerframe_Layer;
				
				document.remake_iframe_html = null;
			
			// alert (document['inframe_layerslider_innerhtml_'+numero_ls]);
				
			//	alert (numero_ls+'\n'+document['inframe_layerslider_innerhtml_'+numero_ls]);
			}
	
	
			// alert (newlayer);
			html_new_layerSlider += newlayer;
		}
	}
	
	var ok_html_new_layerSlider = '';
	
	if (html_new_layerSlider.replace(/^\s*|\s*$/g, ''))
	{
		var style_layerslider = document.getElementById('slider_style_form').value.replace(/\s+/g, ' ');

//		ok_html_new_layerSlider = '<div id="layerslider" style="width: 1280px; height: 727px; font-size:1em; margin: 0px auto; margin-bottom: 50px;">\n\n';
		ok_html_new_layerSlider = '<div id="layerslider" style="'+style_layerslider+'">\n';
		ok_html_new_layerSlider += html_new_layerSlider;
		ok_html_new_layerSlider += '\n</div>';
	}
	
	ok_html_new_layerSlider = ok_html_new_layerSlider.replace(/\n\n+/g, '\n\n');
	
	var new_slider_dom = ok_html_new_layerSlider.replace(/(<!--)|(-->)/mgi, '');
	document.slider_original_DOMcopy = oTo_html2DOM (new_slider_dom);
	
	return (ok_html_new_layerSlider);
	
}

	
function slider_putin_DOM (newslider_html)
{
	oTo_LayerSlider = null;
	celayerslider = null;

	var ex_id_sl = document.getElementById('layerslider-container').getElementsByTagName('div')[0].id;
	
	var new_id_layerslider = ex_id_sl;
	
	slider_DOM_delete ();
	document.getElementById('ls-global').id = '';
	
	var slider_newDOM = oTo_html2DOM (newslider_html) ;
	document.getElementById('layerslider-container').appendChild(slider_newDOM);

	document.slider_original_DOMcopy = slider_newDOM.cloneNode(true) ;
	document.slider_original_DOMcopy_verif = document.slider_original_DOMcopy.cloneNode(true);

	return (new_id_layerslider);	
}

function slider_DOM_delete ()
{
	var undiv = document.createElement('div');
	undiv.id = 'xxx_div_4_lslayer';
	undiv.innerHTML = '&nbsp;';
	
	document.getElementById('layerslider-container').parentNode.insertBefore(undiv, document.getElementById('layerslider-container'));
	
	document.getElementById('layerslider-container').parentNode.removeChild(document.getElementById('layerslider-container'));

	var un2div = document.createElement('div');
	un2div.id = 'layerslider-container';

	document.getElementById('xxx_div_4_lslayer').parentNode.insertBefore(un2div, document.getElementById('xxx_div_4_lslayer'));
	document.getElementById('xxx_div_4_lslayer').parentNode.removeChild(document.getElementById('xxx_div_4_lslayer'));
}


function slider_relaunch (slider_relaunch, n_vue)
{
	if (n_vue == null)
		n_vue = 0;
	else 
		n_vue = new Number (n_vue);
		
	
	good_vue = n_vue + 1;
	document.getElementById('numpage_wanted').value = good_vue;
	
	
	go_slider (slider_relaunch);
	
	var txtloading = 'Slider mis à jour et relancé.<br>Utilisez les boutons <b>[ play ]</b>, <b>[ pause ]</b> et <b>[ voir vue ]</b> pour vérifier vos modifications.'; 
	document.getElementById('loading_infos_txt').innerHTML = txtloading;	
	
	setTimeout("$('#"+slider_relaunch+"').layerSlider('stop');", 500);	

/*	if (good_vue != 1)
	{
		setTimeout("gotolayer(document.getElementById('numpage_wanted'))", 700);
	}
*/
	setTimeout("$('#loading_infos').css('display', 'none');", 2500);	
	
}

function lslider_supprime(n_ls_or_sub)
{
	if (n_ls_or_sub.match(/___/))
	{
		
		var numerovue_id = n_ls_or_sub.replace(/^([0-9]+)_.+$/, '$1');
		var numerocalque = n_ls_or_sub.replace(/^[^_]+_(.+)$/, '$1');
		var numerovue = $('.numvue_'+numerovue_id)[0].innerHTML;
		
		
		if (confirm('Voulez-vous vraiment supprimer le sous-calque n. '+numerocalque+' de la vue n. '+numerovue+' ?'))
		{
			var asupprimer = document.getElementById('iframelayerslider_'+n_ls_or_sub).parentNode;
			
			asupprimer.parentNode.removeChild(asupprimer);
			
			slider_apply_modifications (1, 'no');	
			
		}
		
	}
	else
	{
		
		var numerovue = $('.numvue_'+n_ls_or_sub)[0].innerHTML;
		
		if (confirm('Voulez-vous vraiment supprimer la vue n. '+numerovue+' ?'))
		{
			document.getElementById('LS_adminLI_'+n_ls_or_sub).parentNode.removeChild(document.getElementById('LS_adminLI_'+n_ls_or_sub));
			
			
			var chq_LI_form_to_order = $('#htmlform_layer li.htmlform_layer_LI');
		//	alert ('document.htmlform_LI_order == null');
			
			document.htmlform_LI_order = [];
			
			for (lio=0; lio < chq_LI_form_to_order.length; lio++)
			{
				var cetidli = chq_LI_form_to_order[lio].id;
				document.htmlform_LI_order.push(cetidli) ;
				
				var classnumli = 'numvue_'+cetidli.replace(/^.+_([^_]+)$/, '$1');
		
				var lioplus = lio+1;
		
				$('.'+classnumli).html(lioplus);
				
			}
			
			
/*			if (document.htmlform_LI_order != null)
			{
				var new_order = [];
				for (pou = 0; pou < document.htmlform_LI_order.length; pou++)
				{
					if (document.htmlform_LI_order[pou] != 'LS_adminLI_'+n_ls_or_sub)
						new_order.push (document.htmlform_LI_order[pou]);
				}
				
				document.htmlform_LI_order = [];
				document.htmlform_LI_order = new_order;
			}
*/			
			
			slider_apply_modifications (1, 'no');	
			
			
		}
	}
	
}

function winmini_open (href_fenetre, nom) 
{
	winopen = window.open(href_fenetre, nom, 'width=1000,height=650,scrollbars=yes,toolbar=no,location=no');
    winopen.focus();
}

function masque_otherLI_tools (divmenu)
{
	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
		
	if (divmenu == null)
		var divmenu_base = 'layers_tools_';
	else
		var divmenu_base = divmenu.replace(/^(.+_)([-_0-9]+)$/, '$1');


	for (lli=0; lli < les_lis_form.length; lli++)
	{

		var idli = les_lis_form[lli].id;
		var idli_idnum = idli.replace(/^.+_([0-9]+)$/, '$1');
		var idli_base = idli.replace(/^(.+_)[0-9]+$/, '$1');

		$('#'+idli).removeClass ('off');			
		$('#'+idli).removeClass ('on');			
	
	
		if (divmenu == null || divmenu != divmenu_base+idli_idnum)
		{
			if (divmenu != null)
				$('#'+idli).addClass ('off');			

			document.getElementById('layers_tools_'+idli_idnum+'_sm').style.display = 'none';			
			document.getElementById('layers_container_tools_'+idli_idnum).className = 'layerstools_view';
			
			var lesA = $('#layers_tools_'+idli_idnum+' a');
			var nb_a = lesA.length;

			for (za=0; za<nb_a; za++)
			{
				if (lesA[za].className = 'on')
					lesA[za].className = '';
			}
			
		}
		else if (divmenu != null)
			$('#'+idli).addClass ('on');			
		
	}
	
}
	
	
function affiche_sous_menu (divmenu, divclassaff, aobj)
{
	var ok_open_tools = 'ok';	
	var okidfo = divmenu.replace(/^.+_([^_]+)$/, '$1');
	
	if (divclassaff != null)
	{

		if (document.getElementById('data-hide_lslayer_'+okidfo).checked != true)
		{
			alert ('Pour modifier une vue, veuillez la rendre visible (case à cocher).');
			affiche_menu ('divf_'+okidfo);		
			ok_open_tools = 'no';
		}
		else
		{
	
			
			var okidf = divclassaff.replace(REG_OKIDF, '$1');		
			masque_otherLI_tools (divmenu);
	
			if (divclassaff.match(/lsform_slider/) && ok_open_tools == 'ok') // Si on affiche les proprietes d'animation
			{
				document.ls_admin_anim = okidf;
				// console.log ("dans affiche sous menu : document.ls_admin_anim: "+document.ls_admin_anim);
			}
		}
	}
	
	if (ok_open_tools == 'ok')
	{
		if (document.slider_original_DOMcopy.innerHTML.replace(/id="" /g, '') != document.slider_original_DOMcopy_verif.innerHTML.replace(/id="" /g, '') )
		{
			
		//	alert(document.slider_original_DOMcopy.innerHTML);
		//	alert(document.slider_original_DOMcopy_verif.innerHTML);
			
			var txtloading = 'Veuillez patienter pendant le rechargement du slider...'; 
			document.getElementById('loading_infos_txt').innerHTML = txtloading;	
			$('#loading_infos').css('display', 'block');			
			
			slider_apply_modifications (num_sl_ok, 'no');	
			
		}
		
	
		var lesdivsamasquer = $('#'+divmenu+'_sm div.lsform_tools div');
		var nb_ldam = lesdivsamasquer.length;
	
		document.getElementById(divmenu).parentNode.className = 'layerstools_view';
		
		var rapport = '';
		
		
		for (z=0; z<nb_ldam; z++)
		{
			if (lesdivsamasquer[z].className == divclassaff)
			{
				document.getElementById(divmenu).parentNode.className = 'layerstools_view_toolsopen';
				$('#'+divmenu+'_sm').css('display','block');
				lesdivsamasquer[z].style.display = 'block';
			}
			else if (lesdivsamasquer[z].parentNode.parentNode.id == divmenu+'_sm')
			{
	
	
				lesdivsamasquer[z].style.display = 'none';
			//	rapport += z+' : '+lesdivsamasquer[z].className+'\n';
	
	
	
			}
		}
		
		
		var lesA = $('#'+divmenu+' .sublsform_menu a');
		var nb_a = lesA.length;
		// .layers_tools_menu a.on
		
		for (za=0; za<nb_a; za++)
		{
			lesA[za].className = '';
		}
		
		if (aobj != null)
		{
	//		console.log ('aobj non null... '+aobj);
			document.getElementById(aobj).className = 'on';
		}
		
		
		if (typeof(divclassaff) == 'undefined' || divclassaff == '')
		{
			$('#'+divmenu+'_sm').css('display','none');
			
		}
		
		else if (divclassaff == 'lsform_class') // Si on affiche les img et classes de fond (vue seulement)
		{
			document.ls_admin_anim = null;
			
			if (typeof ($('#select_cssclass_'+okidf+' option')[2]) == 'undefined')
			{
				var idxmenu = divmenu.replace(/^.+_([0-9]+)$/, '$1');
				var cetteclasse = document.getElementById('class_lslayer_'+idxmenu).value;
				
				menu_cssclass ('layer', cetteclasse, idxmenu); 
			}
			
		}
		
		else if (REG_SUBLSLF_HTML.test (divclassaff))
		{
			document.ls_admin_anim = null;
					
		//	alert (okidf+'\n'+divclassaff+'\niframelayerslider_'+okidf);
		
			var ids_oks = okidf.split('___');
			var num_sl_ok = new Number (ids_oks[0]);
	
		
		
			if (document.getElementById('apparence_sublayerslider_form').getElementsByClassName('champ_class')[0] != null)
			{
	// cas d'erreur : si cke_edit_div contient déjà un div de classe de calque....
				var divdesclasses_ancien = $('#apparence_sublayerslider_form p.champ_class')[0];
				var divdesclasses_ancien_id = $('#apparence_sublayerslider_form p.champ_class input')[0].id;
				
				var id_champ_a_ranger = divdesclasses_ancien_id.replace(/^.+([0-9]+___[-0-9]+___[0-9]+)$/, '$1');
				
				// console.log ('bloc apparence du sous calque '+id_champ_a_ranger+' a redeplacer');
				document.getElementById('sublsform_style_'+id_champ_a_ranger).appendChild(divdesclasses_ancien);
			}
		
			var id_extarea = $('#'+divmenu+'_sm .'+divclassaff+' div')[0].id;
			$('#'+id_extarea).css('display', 'none');
			
			// sublsform_innerHTML_0___2___0
			
			
			document.getElementById('cke_textarea_id').value = id_extarea;
			document.getElementById('cke_numlslider_edit').value = num_sl_ok;
			document.getElementById('cke_numsublslider_edit').value = okidf;
			
			
			// Menus des classes 
			
			if (typeof ($('#select_cssclass_'+okidf+' option')[2]) == 'undefined')
			{
				var cetteclasse = document.getElementById('class_lslayer_'+okidf).value;
				menu_cssclass ('sublayer', cetteclasse, okidf); 
			}
			
			// déplacement des classe et des styles
			var divdesclasses = $('#sublsform_style_'+okidf+' p.champ_class')[0];
			document.getElementById('apparence_sublayerslider_form').appendChild(divdesclasses);	
			
			var layerslstop = document.dom_ls_ce_sublayer[num_sl_ok]['sublayers_htmltimeok'][okidf]	;
	
	
	
			var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
			
			var nb_hidden_LS_beforeOK = 0;
			
			for (var lli = 0; lli < les_lis_form.length; lli++)
			{
				var numid_dce_li = les_lis_form[lli].id.replace(/^.+_([^_]+)$/, '$1');
				
				if (document.getElementById('data-hide_lslayer_'+numid_dce_li).checked != true)
					nb_hidden_LS_beforeOK ++;
				
				if (les_lis_form[lli].id == 'LS_adminLI_'+num_sl_ok)
				{
					var le_n_ls_voulu = lli - nb_hidden_LS_beforeOK;
					lli = les_lis_form.length;
				}
			}
		
	
	
			$('#'+document.id_du_layerslider).layerSlider(le_n_ls_voulu+1);	
			
			var tempstotal_allsub = document.dom_ls_ce_sublayer[num_sl_ok]['sublayers_htmltimeok']['allsublayers'];	
			
			if (typeof(tempstotal_allsub) == 'undefined')
				tempstotal_allsub = document.layerslider_listemenu[num_sl_ok]['slidedelay'];
				
			var tempstotal_allsub = new Number (tempstotal_allsub);		
			var tempsrestant_allsub = tempstotal_allsub - layerslstop; 
			
			// console.log (document.dom_ls_ce_sublayer[num_sl_ok]['sublayers_htmltimeok']['allsublayers']+' : (ou '+document.layerslider_listemenu[num_sl_ok]['slidedelay']+') '+tempsrestant_allsub+' = '+tempstotal_allsub+' - '+layerslstop);
//			setTimeout("inline_ckeditor('"+okidf+"', "+tempsrestant_allsub+")", layerslstop);
			setTimeout("inline_ckeditor('"+okidf+"', "+tempstotal_allsub+")", layerslstop);
	
		}
		
	//	document.location.href = '#LS_adminLI_'+le_n_ls_voulu;	
		
		if (divclassaff != null)
		{
			var topof_anchor = $('#layerslider_admin').scrollTop();
			var topof_anchor2 = $('#LS_adminLI_anchor_'+okidfo).position();
			
			$('#layerslider_admin').animate ({scrollTop:(topof_anchor2.top + topof_anchor - 100)}, 1200);
		}
	}
	
}


function slider_stop ()
{
	$('#'+document.id_du_layerslider).layerSlider ('stop');
	$('#layerslider_stop').css('display', 'none');
	$('#layerslider_start').css('display', 'inline');
	
	
}    
function slider_start ()
{
	
	$('#htmlform_layer').css('display', 'none'); 
	
	$('#Admin_menubase').css('position', 'absolute');
	$('#Admin_menubase').css('margin-top', '0px');	
	
	
	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
	$('#preload_slider_imgs').css('display', 'none'); 
	$('#slider_config_div').css('display', 'none'); 
	$('#slider_css_div').css('display', 'none');
	$('#slider_style_div').css('display', 'none'); 
	$('#slider_sauvegardes_div').css('display', 'none');
	
	$('#'+document.id_du_layerslider).layerSlider ('start');
	
	$('#layerslider_stop').css('display', 'inline');
	$('#layerslider_start').css('display', 'none');
}    
  
function make_draggable (id_dragg)
{
	if (document['drag_'+id_dragg] == null)
    {
		var kpos = $('#'+id_dragg).position();		
		
        $('#'+id_dragg).draggable({
			stop: function( event, ui ) {
				make_draggable (id_dragg);
			}
		});
        document['drag_'+id_dragg] = 'drag';
        document['posleft_'+id_dragg] = kpos.left;
        document['postop_'+id_dragg] = kpos.top;
		
    }
    else
    {
        $('#'+id_dragg).draggable('destroy');
        document['drag_'+id_dragg] = null;
		
		var pos_ok = estVisible('move_'+id_dragg);
		
		// alert (pos_ok);
		if (!pos_ok.match(/^1/))
		{
			$('#'+id_dragg).css ('top', document['postop_'+id_dragg] +'px');
			$('#'+id_dragg).css ('left', document['posleft_'+id_dragg] +'px');
		}
    }
    

}                        
    
function estVisible(id_element){
	var cadreVisible = {xMin: 0, xMax: 0, yMin: 0, yMax: 0}, elementVisible = {xMin: 0, xMax: 0, yMin: 0, yMax: 0};
	var source = document.getElementById(id_element), sourceParent = source.offsetParent;
	var total = {hauteur: false, largeur: false}, partiel = {hauteur: false, largeur: false};
	cadreVisible.xMin = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
	cadreVisible.xMax = window.pageXOffset + window.innerWidth || document.documentElement.scrollLeft + document.documentElement.clientWidth || document.body.scrollLeft + document.body.clientWidth;
	cadreVisible.yMin = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	cadreVisible.yMax = window.pageYOffset + window.innerHeight || document.documentElement.scrollTop + document.documentElement.clientHeight || document.body.scrollTop + document.body.clientHeight;
	elementVisible.xMin = source.offsetLeft;
	elementVisible.yMin = source.offsetTop;
	while(sourceParent) {
		elementVisible.xMin += sourceParent.offsetLeft;
		elementVisible.yMin += sourceParent.offsetTop;
		sourceParent = sourceParent.offsetParent;
	}
	elementVisible.xMax = elementVisible.xMin + source.offsetWidth;
	elementVisible.yMax = elementVisible.yMin + source.offsetHeight;
	if(cadreVisible.xMin <= elementVisible.xMin && cadreVisible.xMax >= elementVisible.xMax){
		total.largeur = true;
	}
	else if(!(cadreVisible.xMax < elementVisible.xMin || cadreVisible.xMin > elementVisible.xMax)){
		partiel.largeur = true;
	}
	if(cadreVisible.yMin <= elementVisible.yMin && cadreVisible.yMax >= elementVisible.yMax){
		total.hauteur = true;
	}
	else if(!(cadreVisible.yMax < elementVisible.yMin || cadreVisible.yMin > elementVisible.yMax)){
		partiel.hauteur = true;
	}
	if(total.largeur && total.hauteur){
		return('1 '+id_element + ' est entièrement visible dans la page !');
	}
	else if(total.largeur && partiel.hauteur){
		return('2 '+id_element + ' est entièrement visible en largeur mais tronqué en hauteur');
	}
	else if(total.hauteur && partiel.largeur){
		return('3 '+id_element + ' est entièrement visible en hauteur mais tronqué en largeur');
	}
	else if(partiel.hauteur && partiel.largeur){
		return('4 '+id_element + ' est tronqué en hauteur et en largeur');
	}
	else{
		return('0 '+id_element + ' n\'est pas visible dans la page !');
	}
}


function menu_cssclass (layerorsub, val, inid) {
	
	// document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['className'] = ce_sublayer.className;		
	// document.layerslider_listemenu[lsi]['className'] = sliderDOM[lsi].className;
	
// select_class_lslayer____n_ls_______n_lssub___	
	
// slider_css (id de la feuille de style pour ajouter les classes possibles)	
	var ajoute_styledefs = '';
	var classes_cssdefs = '';
	
	
	if (document.options_feuilleclasses == null)
	{
		document.options_feuilleclasses = '';
	
		var styles_sheet_all = document.getElementById('slider_css').innerHTML; 
		styles_sheet_all = styles_sheet_all.replace(/\/\/[^\n]+\n/mg, '');
		styles_sheet_all = styles_sheet_all.replace(/\/\*((?!\*\/).)+\*\//mg, '');
		styles_sheet_all = styles_sheet_all.replace(/@[^;]+;/mg, '');
		
		styles_sheet_all = styles_sheet_all.replace(/(\s)+/mg, '$1');
		
	//	alert (styles_sheet_all);
		
		var only_classes = styles_sheet_all.replace (/\{[^}]*\}/mg, '{');
		
	//	alert (only_classes);
		
		var only_classes_T = only_classes.split(/\{\s*/g);
		var only_classes_seules_T = [];
		var only_classes_seules_obj = new Object();
		
		for (tcs=0; tcs<only_classes_T.length; tcs++)
		{
			if (only_classes_T[tcs].match(/^\s*[-_a-zA-Z0-9]*\.[-_a-zA-Z0-9]+\s*/))
			{
				var cetteclasse = only_classes_T[tcs].replace(/^\s*[-_a-zA-Z0-9]*\.([-_a-zA-Z0-9]+)((\s*,)| ).*$/, '$1');
				
				if (only_classes_seules_obj[cetteclasse] == null)
				{
					only_classes_seules_T.push (cetteclasse);
					only_classes_seules_obj[cetteclasse] = 'ok';
				}
			}
		}	
		only_classes_seules_T.sort();
		
		var ajoute_styledefs = '';
		for (rere=0; rere<only_classes_seules_T.length; rere++)
		{
			var classe_txtoption = only_classes_seules_T[rere].replace(REG_TRIM, '');

	//	console.log (' --- '+classe_txtoption+' --- ');
			
			if (classe_txtoption != '')
			{
				ajoute_styledefs += '<option value="'+classe_txtoption+'">'+classe_txtoption+'</option>';
				if (classes_cssdefs != '')
					classes_cssdefs += '|';
					
				classes_cssdefs += '[-_a-zA-Z0-9]{1,10}\.'+classe_txtoption;
				
	//	console.log (ajoute_styledefs+' --- '+classes_cssdefs);

			}
		}
		 
		document.options_feuilleclasses = '<option value="" disabled> </option><option value="" disabled>autres classes CSS définies :</option><option value="" disabled>(leur utilisation peut ne pas être prévue)</option><option value="" disabled> </option>'+ajoute_styledefs;
		document.classes_feuilleclasses = new RegExp('^('+classes_cssdefs+')', '');
		
	//	console.log (classes_cssdefs+' --- '+document.classes_feuilleclasses);
		
	}
	
//	alert (only_classes_seules_T.join('\n'));
	
	
	

	if (document.options_des_classes == null)
		document.options_des_classes = new Object();
	
	if (document.options_des_classes[layerorsub] == null)
	{
		var listeoptions = [];

		document.options_des_classes[layerorsub] = '';
		var tmp_classlist = new Object();
		
		if (layerorsub == 'sublayer')
		{
			var cssclasses_arein = document.dom_ls_ce_sublayer;
						
			for (kls in cssclasses_arein)
			{
				var cssclasses_in = cssclasses_arein[kls]['sublayers_properties'];
				
				for (ls in cssclasses_in)
				{
					var classe_is = cssclasses_in[ls]['className'].replace(/ +/mgi, ' ');	
					
					var classe_txtoption = '';
					
					if (classe_is.match(/^[^ ]+ /) )
						classe_txtoption = classe_is.replace(/^[^ ]+ /g, '');
					
					if (classe_txtoption != '' && tmp_classlist[classe_txtoption] == null)
					{
						
						listeoptions.push(classe_txtoption); 
						tmp_classlist[classe_txtoption] = 'ok';
					}
					
				}
			
			}
			
			listeoptions.sort();
			for (rere=0; rere<listeoptions.length; rere++)
			{
				var classe_txtoption = listeoptions[rere];
				document.options_des_classes[layerorsub] += '<option value="'+classe_txtoption+'" disabled>'+classe_txtoption+'</option>';
			}
		}
		else
		{
			var cssclasses_in = document.layerslider_listemenu;
			
			for (ls in cssclasses_in)
			{
				var classe_is = cssclasses_in[ls]['className'].replace(/ +/mgi, ' ');	
				
				var classe_txtoption = '';
				
				if (classe_is.match(/^[^ ]+ /))
					classe_txtoption = classe_is.replace(/^[^ ]+ /g, '');
				
				if (classe_txtoption != '' && tmp_classlist[classe_txtoption] == null)
				{
					listeoptions.push(classe_txtoption); 
					tmp_classlist[classe_txtoption] = 'ok';
				}
				
			}
			
			
			listeoptions.sort();
			
			for (rere=0; rere<listeoptions.length; rere++)
			{
				var classe_txtoption = listeoptions[rere];
				document.options_des_classes[layerorsub] += '<option value="'+classe_txtoption+'">'+classe_txtoption+'</option>';
			}
			
			
			
		}
		
		
	}
	
	var return_options = document.options_des_classes[layerorsub];
	var test_simemeprefix = '';

	var okval = val;
	var test_okval = okval;
	var add_css_options = '';
	
	if ( /^ls-s[-0-9]+ */.test(okval))
	{
		okval = okval.replace(/^(ls-s[-0-9]+ *)?/mgi, '');
		test_okval = okval;
		
		var liste_prefix = [];
		
		if (layerorsub == 'sublayer')
		{
			
			if (/ /.test(okval))
			{
				var explesp = okval.split(/ +/g);
				liste_prefix.push(explesp[0]);
				liste_prefix.push(explesp[1]);
			}
			else
				liste_prefix.push (okval);
				
				
			test_simemeprefix = liste_prefix[0];
	//		test_okval = okval.replace(/^([^\s]+)(\s.*)?$/, '$1');
		}
		
		var add_css_options = '';
		var add_memeprefix = '';
		var reg_no_addto = '';
		
		
		for (lp=0; lp<2; lp++)
		{
			if (liste_prefix[lp] != '')
			{
				if (add_memeprefix != '')
					add_memeprefix += ' ';
					
				add_memeprefix += liste_prefix[lp];

				if (reg_no_addto != '')
					reg_no_addto += '|';
					
				reg_no_addto += '('+liste_prefix[lp]+'( [^"]+)?")';
				
				var new_add_css_options = '';
				
				new_add_css_options = document.options_feuilleclasses.replace (/<option value=""[^>]*>[^<]*<\/option>\s*/mg, '');

				var REG_no_addcss = new RegExp ("<option value=\""+reg_no_addto+"[^>]*>[^<]*</option>", "mgi");
				
//	alert (REG_no_addcss+'\n'+new_add_css_options);
				
				new_add_css_options = new_add_css_options.replace (REG_no_addcss, '');
				
				new_add_css_options = new_add_css_options.replace (/value="/mg, 'value="'+add_memeprefix+' ');
				new_add_css_options = new_add_css_options.replace (/(value="[^>]+>)/mg, '$1'+add_memeprefix+' ');
				
				add_css_options += '<option value="" disabled> </option>'+new_add_css_options;
			}
		}
		
		if (add_css_options != '')
			add_css_options = '<option value="" disabled> </option><option value="" disabled>ajout de classes CSS :</option><option value="" disabled>(leur utilisation peut ne pas être prévue) :</option>'+add_css_options;
	}
	else
	{
		test_okval = okval.replace(/^[^\s]+\s+?(.+)?$/, '$1');
	}

	// console.log('menu_css apres si ajout : '+okval+' 777 ??--- '+test_simemeprefix+' --- '+test_okval);

	var reg_value_enabled = new RegExp ('(value="'+test_simemeprefix+'[^"]*"[^>]*) disabled', 'mgi');
	return_options = return_options.replace(reg_value_enabled, "$1");

	
	var reg_value = new RegExp ('(value="'+test_okval+'")', 'mgi');
	return_options = return_options.replace(reg_value, "$1 selected");
	
	return_options = '<option value="" disabled>classes CSS utilisées :</option><option value="" disabled> </option>'+return_options;
	
// Ajoute les classe de la feuille de style :
// 						listeoptions.push(classe_txtoption); 

	return_options += document.options_feuilleclasses+add_css_options;
	
		
	document.getElementById('select_class_lslayer_'+inid).innerHTML = return_options;

}

function ouvre_ou_ferme_styles(id_style)
{
	var pstylevoulu = document.getElementById(id_style);
	
	if (pstylevoulu.style.display == 'none')
		pstylevoulu.style.display = 'block';
	else 
		pstylevoulu.style.display = 'none';
}

function change_class(obj)
{
	var okidselct = obj.id;
	var okvalue = obj.value;
	
	var okidinput = okidselct.replace(/^select_/, '');
	var okidlslcke = okidinput.replace(/^class_lslayer_/, '');
	
	var base_class = '';
	var classe_actuelle = document.getElementById(okidinput).value;
	
	if (okidselct.match (/[0-9]+___[-0-9]+___[0-9]+$/)) // est un sous calque
	{	
	
		if (/^ls-s[-0-9]+ /.test(classe_actuelle))
			base_class = classe_actuelle.replace(/^([^ ]+)( .+)?$/, '$1')+' ';
		
		// alert(okidinput+'\n'+classe_actuelle+'\n-'+base_class+'-\n'+base_class+okvalue );
	
		document.getElementById(okidinput).value = base_class+okvalue;
		
		MAJ_vues (okidlslcke, 'class', base_class+okvalue, classe_actuelle, 'all_views');
	}
	else
	{
		
		okvalue = 'ls-layer '+okvalue;
		document.getElementById(okidinput).value = okvalue;
		
		var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
		
		var nb_hidden_LS_beforeOK = 0;
		
		for (var lli = 0; lli < les_lis_form.length; lli++)
		{
			var numid_dce_li = les_lis_form[lli].id.replace(/^.+_([^_]+)$/, '$1');
			
			// alert (numid_dce_li+' : data-hide_lslayer_'+numid_dce_li+' checked ?: '+document.getElementById('data-hide_lslayer_'+numid_dce_li).checked);
			
			if (document.getElementById('data-hide_lslayer_'+numid_dce_li).checked != true)
				nb_hidden_LS_beforeOK ++;
			
			if (les_lis_form[lli].id == 'LS_adminLI_'+okidlslcke)
			{
			//	alert (lli+' - '+nb_hidden_LS_beforeOK+' = '+(lli - nb_hidden_LS_beforeOK));
				
				var le_n_ls_voulu = lli - nb_hidden_LS_beforeOK;
				lli = les_lis_form.length;
			}
		}
		
		// MAJ de la classe du slider
		
		var svgid = $('#layerslider .ls-layer')[le_n_ls_voulu].id;
		$('#layerslider .ls-layer')[le_n_ls_voulu].id = 'lslayer_class_edition';
				
		var classes_actuelles = document.getElementById('lslayer_class_edition').className ; // ls-layer rouge ls-animating
		
		var new_classes_T = [];
		var ex_classes_T = [];
		
		if (classes_actuelles.match(/ /))
			ex_classes_T = classes_actuelles.split(/ +/g);
		else	
			ex_classes_T.push(classes_actuelles);

		if (okvalue.match(/ /))
			new_classes_T = okvalue.split(/ +/g);
		else
			new_classes_T.push(okvalue);
		
		
		var classes_ok = '';
		
	//	alert ('classes_actuelles (ex) : '+classes_actuelles+'\n okvalue (new): '+okvalue);
	//	alert ('ex_classes_T : '+ex_classes_T.join('---')+'\n new_classes_T: '+new_classes_T.join('---'));

		var limit_rr = new_classes_T.length;
		if (ex_classes_T.length > new_classes_T.length)
			limit_rr = ex_classes_T.length;
			
	//	alert ('ex_classes_T ('+ex_classes_T.length+'): '+ex_classes_T.join('---')+'\n new_classes_T ('+new_classes_T.length+'): '+new_classes_T.join('---')+'\n'+limit_rr);
			
			
		for (rr=0; rr<limit_rr; rr++)
		{
			if (typeof (new_classes_T[rr]) != 'undefined' && new_classes_T[rr] != '')
			{
			//	alert ('new: '+ new_classes_T[rr]);
				if (classes_ok != '')
					classes_ok += ' ';	
					
				classes_ok += new_classes_T[rr];
			}
			else if (typeof (ex_classes_T[rr]) != 'undefined' && ex_classes_T[rr] != '')
			{
			//	alert ('ex: '+ex_classes_T[rr]);
				
				if (classes_ok != '')
					classes_ok += ' ';	
					
				classes_ok += ex_classes_T[rr];
			}
		}
		
	//	alert ('lslayer_class_edition : '+classes_ok+'\n(ex classes :) '+classes_actuelles);
		
		
		document.getElementById('lslayer_class_edition').className = '';
		$('#lslayer_class_edition').addClass(classes_ok) ;

		
		document.getElementById('lslayer_class_edition').id = svgid;
		
		// MAJ de la classe form VUE
		window['iframelayerslider_'+okidlslcke].add_class(okvalue, 'ls-layer');
		
		
		// MAJ de la classe form SOUS-CALQUES
		var lesiframes = $('#sublayers_ls'+okidlslcke+' iframe');
		
		for (tt=0; tt< lesiframes.length; tt++)
		{
			var name_iframe = lesiframes[tt].name;
			var end_name_iframe = name_iframe.replace(/^.+([0-9]+___[-0-9]+___[0-9]+)$/, '$1');
			
			if (typeof (window[name_iframe].add_class) != 'function')
			{
				var scriptjs = 	serveur_url+rep_layerSlider+'/layerslider/jQuery/jquery.js';
				var scriptjs2 = serveur_url+rep_layerSlider_Admin+'/add_class.js';
	
				var scriptaad = document.createElement('script');
				scriptaad.src = scriptjs;			
				scriptaad.type = 'text/javascript';
				
				var scriptaad2 = document.createElement('script');
				scriptaad2.src = scriptjs2;			
				scriptaad2.type = 'text/javascript';
				
				if (window[name_iframe].document.getElementsByTagName('body')[0].appendChild(scriptaad) 
				&& window[name_iframe].document.getElementsByTagName('body')[0].appendChild(scriptaad2))
				{
					setTimeout("add_class_insublayer('"+end_name_iframe+"', '"+okvalue+"', 'ls-layer')", 200);
				}
				
			}
			else
				window[name_iframe].add_class(okvalue, 'ls-layer');
		}
		
		
	}
	
	
		

	// htmlok_views (okidlslcke);
	
	var lsi = okidlslcke.replace (/^([^_]+)_.+$/, '$1');
	remake_layerslider_listemenu (lsi);

	
}
	
function change_style(obj)
{
	var okidinput = obj.id;
	var okvalue = obj.value;

	var okidlslcke = okidinput.replace(/^style_lslayer_/, '');
	
	var classe_actuelle = document.getElementById(okidinput).value;
	
//	alert(okidinput+'\n'+classe_actuelle+'\n-'+base_class+'-\n'+base_class+okvalue );
	
	MAJ_vues (okidlslcke, 'style', okvalue, classe_actuelle, 'all_views');
	
	var lsi = okidlslcke.replace (/^([^_]+)_.+$/, '$1');
	remake_layerslider_listemenu (lsi);
}
	
function remake_layerslider_listemenu (lsi, sidiff, remakedom)
{
//	if (remakedom != null)
	remake_DOMcopy ();
	
	lsi = new Number(lsi);
	
	id_slider = document.id_du_layerslider; 
	// document.slider_original_DOMcopy;
	
	var le_DOM_voulu = document.slider_original_DOMcopy ;		

	document.getElementById(id_slider+'_original').innerHTML = '';
	document.getElementById(id_slider+'_original').appendChild(le_DOM_voulu) ;

	var sliderDOM = $('#'+id_slider+'_original .ls-layer');
	
	
	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
	var le_n_ls_voulu = 0;
	
	for (lli=0; lli < les_lis_form.length; lli++)
	{
		if (les_lis_form[lli].id == 'LS_adminLI_'+lsi)
		{
			le_n_ls_voulu = lli;
		}
	}
	
	if (sidiff == null)
		var num_aad_obj_ls = new Number(le_n_ls_voulu) - new Number(lsi);
	else
		var num_aad_obj_ls = 0;
		
	document.frame_add_content_queue[lsi] = [];	
	
	make_layerslider_listemenu (le_n_ls_voulu, num_aad_obj_ls, id_slider);

	var dom_LS = document.layerslider_listemenu[le_n_ls_voulu+num_aad_obj_ls];
	var num_Aadd = le_n_ls_voulu + num_aad_obj_ls;
	
	if (layerslider_menu_make(id_slider, num_Aadd, dom_LS, 'layer', 'onlyvar'))
	{
	//	if (remakedom == null) remake_DOMcopy();		
		
	}
	
}
	
function recup_style(obj, kelstyle)
{
   if (window.getComputedStyle)
   {
     var areturn = window.getComputedStyle(obj,null)[kelstyle];
   }
   else
   {
      var areturn = obj.currentStyle[kelstyle];
   }
   
   return (areturn) ;
}	
	
function verif_css_propri(namepropri, namepropri)
{
//
	return true;
	
}

function add_class_insublayer (idsub, classn, silayer)
{
	if (typeof (window['iframelayerslider_'+idsub].$) == 'function' && typeof (window['iframelayerslider_'+idsub].add_class) == 'function')
	{
		if (silayer == null)	window['iframelayerslider_'+idsub].add_class(classn);
		else window['iframelayerslider_'+idsub].add_class(classn, silayer);
	}
	else
	{
		if (silayer == null) setTimeout("add_class_insublayer('"+idsub+"', '"+classn+"')", 200);
		else setTimeout("add_class_insublayer('"+idsub+"', '"+classn+"', '"+silayer+"')", 200);
	}
	
}

function add_image_insublayer (idsub, new_img, findclass_ls, findclass_ls_num)
{
	if (typeof (window['iframelayerslider_'+idsub].$) == 'function' && typeof (window['iframelayerslider_'+idsub].add_class) == 'function')
	{
		window['iframelayerslider_'+idsub].add_image(new_img, findclass_ls, findclass_ls_num);
	}	
	else
	{
		setTimeout("add_image_insublayer('"+idsub+"', '"+new_img+"', '"+findclass_ls+"', '"+findclass_ls_num+"')", 200);
	}
}



function MAJ_vues (okidlslcke, attribut, valeur, exvaleur, all_views)
{
	var id_ls = okidlslcke.replace(/^([^_]+)_?.*$$/, '$1');
	
	if (attribut == 'style')
	{
		var valeur_T = [];
		if (valeur.match(REG_PT_VIRGULE))
			valeur_T = valeur.split(REG_PT_VIRGULE);
		else
			valeur_T = valeur.split(REG_PT_VIRGULE);

		var proprietes_ok = '';
		
		
		// rapport de taille, idem font-size pour les classes.	
		var slider_actual_width = document.getElementById(document.id_du_layerslider).style.width.replace(REG_IS_PX_EM_PCENT, '');
		var slidermini_actual_width = window['iframelayerslider_'+okidlslcke].document.getElementById('layerslider_'+id_ls).style.width.replace(REG_IS_PX_EM_PCENT, '');
		
		var slider_base_width = document.layer_slider_width.replace(REG_IS_PX_EM_PCENT, '');
		
		var slider_actual_width_num = new Number(slider_actual_width);
		var slidermini_actual_width_num = new Number(slidermini_actual_width);
		
		var slider_base_width_num = new Number (slider_base_width);
		
		var rapport_dims = slider_actual_width_num / slider_base_width_num;
		var rapport_dims_mini = slidermini_actual_width_num / slider_base_width_num;
		
	//	alert (slider_actual_width_num+' / '+slider_base_width_num+' = '+rapport_dims+' \n\n'+slidermini_actual_width+' '+slidermini_actual_width_num+' / '+slider_base_width_num+' = '+rapport_dims_mini);
		
		document.getElementById('test_font_sizes1').className = '';	
		$('#test_font_sizes1').addClass(exvaleur);
		
		var rapport_newpropri_ok_echelle = '';
				
		for (vt=0; vt <valeur_T.length ; vt++)
		{
			var valeurtvt = valeur_T[vt];
			
			if (valeurtvt.match(REG_2_PTS))
			{
				var valeurtvt_namevalue = valeurtvt.split(REG_2_PTS);
				var namepropri = valeurtvt_namevalue[0].replace(REG_TRIM, '');
				var valuepropri = valeurtvt_namevalue[1].replace(REG_TRIM, '');
				
				if (namepropri != '' && valuepropri != '' && verif_css_propri(namepropri, namepropri))
				{
					
					var js_css_propri = namepropri.replace(/-(.)/g, function ($1) { return ($1.toUpperCase()); });
					
					document.getElementById('test_font_sizes1').style[js_css_propri] = valuepropri;
					
					if (js_css_propri == 'padding')
					{
						var inpx_computed_propri = '';
						inpx_computed_propri += recup_style(document.getElementById('test_font_sizes1'), js_css_propri+'Top')+' ';
						inpx_computed_propri += recup_style(document.getElementById('test_font_sizes1'), js_css_propri+'Right')+' ';
						inpx_computed_propri += recup_style(document.getElementById('test_font_sizes1'), js_css_propri+'Bottom')+' ';
						inpx_computed_propri += recup_style(document.getElementById('test_font_sizes1'), js_css_propri+'Left');
					}
					else
						var inpx_computed_propri = recup_style(document.getElementById('test_font_sizes1'), js_css_propri);
					
					
					if (inpx_computed_propri.match(REG_IS_PX_EM_PCENT))
					{
						var value_propri_T = [];
						
						if (inpx_computed_propri.match(REG_ESPACE))
							value_propri_T = inpx_computed_propri.split(REG_ESPACE);
						else
							value_propri_T.push(inpx_computed_propri);
							
					// modifie chaque valeur de la propriete css	
						var newpropri_ok_echelle = '';
						var newpropri_ok_echelle_mini = '';
							
						for (vpt = 0; vpt < value_propri_T.length; vpt++)
						{
							// rapport_dims
							var cettevaleur = value_propri_T[vpt].replace(REG_IS_PX_EM_PCENT, '').replace(REG_TRIM, '');
							
							var cettevaleur_num = new Number (cettevaleur);
														
							var new_cettevaleur_num = cettevaleur_num * rapport_dims;
							var new_cettevaleur_num_mini = cettevaleur_num * rapport_dims_mini;
							newpropri_ok_echelle += new_cettevaleur_num+'px ';
							newpropri_ok_echelle_mini += new_cettevaleur_num_mini+'px ';
							
				//			alert (inpx_computed_propri+' \n\n\n'+value_propri_T[vpt]+'\n'+cettevaleur+'\n'+cettevaleur_num+'\n'+rapport_dims+' => '+new_cettevaleur_num+'\n\n'+inpx_computed_propri+' \n\n\n'+value_propri_T[vpt]+'\n'+cettevaleur+'\n'+new_cettevaleur_num_mini+'\n'+rapport_dims_mini+' => '+new_cettevaleur_num_mini);
							
						}
						
						rapport_newpropri_ok_echelle += newpropri_ok_echelle+'\n';
						
						document.getElementById('lsl_cke_'+okidlslcke).style[js_css_propri] = newpropri_ok_echelle;
						
						if (all_views != null)
						{
							window['iframelayerslider_'+okidlslcke].document.getElementById('fullopacity').style[js_css_propri] = newpropri_ok_echelle_mini;
							window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').style[js_css_propri] = newpropri_ok_echelle_mini;
						}
						
						proprietes_ok += namepropri+':'+valuepropri+'; ';
					}
					
					// alert (proprietes_ok+' \n '+js_css_propri+' \n'+inpx_computed_propri+'\n\n'+rapport_newpropri_ok_echelle);
					
				}
			}
			
		}
		
	}
	
	
	if (attribut == 'class')
	{
		var sat = document.getElementById('lsl_cke_'+okidlslcke).attributes;
		var satmini = window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').attributes;

		var style_attr = '';
		var style_attr_mini = '';
		for (i=0; i < sat.length; i++) 
		{
			if (sat[i].name.toLowerCase() == 'style')
			{
				style_attr += sat[i].value; 
			}
		}

		for (i=0; i < satmini.length; i++) 
		{
			if (satmini[i].name.toLowerCase() == 'style')
			{
				style_attr_mini += satmini[i].value; 
			}
		}

	//	document.getElementById('cke_ex_styles').value = style_attr;
	
		
		
	//	var classactulle = document.getElementById('lsl_cke_'+okidlslcke).attributes['class'];
		var classactullename = document.getElementById('lsl_cke_'+okidlslcke).className;
		
	//	var base_classes = classactullename.replace(/^(.+) cke_editable .*$/, '$1');
	//	var cke_classes = classactullename.replace(/^.+( cke_editable .*)$/, '$1');
		
		var base_classes = classactullename.replace(/ cke_[^ ]+/mgi, '');
		var cke_classes = '';
		var classactullename_T = classactullename.split(/ +/);
		for (lc = 0; lc < classactullename_T.length; lc++)
		{
			var cetteclaclasse = classactullename_T[lc];
			if (cetteclaclasse.match(/^cke_/))
			{
				if (cke_classes != '')
					cke_classes += ' ';
				cke_classes += cetteclaclasse;
			}
		}
	//	alert(base_classes+'\n'+cke_classes );
		
		var classesaajouter_T = [];
		
		var valeur_T = valeur.split(REG_ESPACE);
		var exvaleur_T = exvaleur.split(REG_ESPACE);
		
		var limit = exvaleur_T.length; 
		if (valeur_T.length >  limit)
			limit = valeur_T.length;
			
		document.getElementById('test_font_sizes1').className = '';	
		document.getElementById('test_font_sizes2').className = '';	
		
		if (all_views != null)
		{
			window['iframelayerslider_'+okidlslcke].document.getElementById('fullopacity').className = '';
			window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').className = '';


		}
		// iframelayerslider_2___2___0
		// iframelayerslider_2___2___0
			
		var classestomini = '';	
		for (kv=0; kv<limit; kv++)
		{
			if (typeof (valeur_T[kv]) == 'undefined')
				valeur_T[kv] = '';
			else 
			{
				$('#test_font_sizes2').addClass(valeur_T[kv]) ;
				
				// alert ('iframelayerslider_'+okidlslcke);
				if (all_views != null)
				{
					if (typeof (window['iframelayerslider_'+okidlslcke].add_class) != 'function')
					{
						var scriptjs = 	serveur_url+rep_layerSlider+'/layerslider/jQuery/jquery.js';
						var scriptjs2 = serveur_url+rep_layerSlider_Admin+'/add_class.js';
	
						var scriptaad = document.createElement('script');
						scriptaad.src = scriptjs;			
						scriptaad.type = 'text/javascript';
						
						var scriptaad2 = document.createElement('script');
						scriptaad2.src = scriptjs2;			
						scriptaad2.type = 'text/javascript';
						
						if (window['iframelayerslider_'+okidlslcke].document.getElementsByTagName('body')[0].appendChild(scriptaad) 
						&& window['iframelayerslider_'+okidlslcke].document.getElementsByTagName('body')[0].appendChild(scriptaad2))
						{
							setTimeout("add_class_insublayer('"+okidlslcke+"', '"+valeur_T[kv]+"')", 200);
						}
						
					}
					else
						window['iframelayerslider_'+okidlslcke].add_class(valeur_T[kv]);
					
					window['iframelayerslider_'+id_ls].add_class(valeur_T[kv]);
				}
			}
				
			if (typeof (exvaleur_T[kv]) == 'undefined')
				exvaleur_T[kv] = '';
			else
				$('#test_font_sizes1').addClass(exvaleur_T[kv]);
				
			if (valeur_T[kv] != exvaleur_T[kv])
			{
				if (exvaleur_T[kv] != '')
				{
					$('#lsl_cke_'+okidlslcke).toggleClass(exvaleur_T[kv], false);
				//	alert ('enleve classe : '+exvaleur_T[kv])
				}
				if (valeur_T[kv] != '')
				{
					$('#lsl_cke_'+okidlslcke).toggleClass(valeur_T[kv], true);
				//	alert ('ajoute classe : '+exvaleur_T[kv])
				}

			}
		}
		

		var font_size_ex_test_str = recup_style(document.getElementById('test_font_sizes1_p'), 'fontSize');
		var font_size_test_str = recup_style(document.getElementById('test_font_sizes2_p'), 'fontSize');
	
		var line_height_ex_test_str = recup_style(document.getElementById('test_font_sizes1_p'), 'lineHeight');
		var line_height_test_str = recup_style(document.getElementById('test_font_sizes2_p'), 'lineHeight');
		
		var line_height_actuel_str = style_attr.replace(/^.*line-height ?: ?([^;]+);.*$/g, '$1');
		var font_size_actuel_str = style_attr.replace(/^.*font-size ?: ?([^;]+);.*$/g, '$1');

		var line_height_actuelmini_str = style_attr_mini.replace(/^.*line-height ?: ?([^;]+);.*$/g, '$1');
		var font_size_actuelmini_str = style_attr_mini.replace(/^.*font-size ?: ?([^;]+);.*$/g, '$1');



		var font_size_ex_test = new Number (font_size_ex_test_str.replace(/[% a-z]/g, ''));
		var font_size_test = new Number (font_size_test_str.replace(/[% a-z]/g, ''));
	
		var line_height_ex_test = new Number (line_height_ex_test_str.replace(/[% a-z]/g, ''));
		var line_height_test = new Number (line_height_test_str.replace(/[% a-z]/g, ''));
		
		var line_height_actuel = new Number (line_height_actuel_str.replace(/[% a-z]/g, ''));
		var font_size_actuel = new Number (font_size_actuel_str.replace(/[% a-z]/g, ''));
	
		var line_height_actuelmini = new Number (line_height_actuelmini_str.replace(/[% a-z]/g, ''));
		var font_size_actuelmini = new Number (font_size_actuelmini_str.replace(/[% a-z]/g, ''));
	
		var new_fontsize = (font_size_test * font_size_actuel) / font_size_ex_test;
		var new_lineheight = (line_height_test * line_height_actuel) / line_height_ex_test;
	
		var new_fontsize_mini = (font_size_test * font_size_actuelmini) / font_size_ex_test;
		var new_lineheight_mini = (line_height_test * line_height_actuelmini) / line_height_ex_test ;
	
//		alert (font_size_ex_test+' '+line_height_ex_test+'\n'+font_size_test+' '+line_height_test+'\n.\n.\n.'+font_size_actuelmini_str+' '+line_height_actuelmini_str+'\n'+font_size_actuelmini+' '+line_height_actuelmini+'\n'+new_fontsize_mini+'px '+new_lineheight_mini+'px');
	
		document.getElementById('lsl_cke_'+okidlslcke).style = style_attr.replace(/(font-size|line-height)[^;]+;/g, '');
		
		document.getElementById('lsl_cke_'+okidlslcke).style.fontSize = new_fontsize+'px';
		document.getElementById('lsl_cke_'+okidlslcke).style.lineHeight = new_lineheight+'px';
		
		
		
		window['iframelayerslider_'+okidlslcke].document.getElementById('fullopacity').style.fontSize = new_fontsize_mini+'px';
		window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').style.fontSize = new_fontsize_mini+'px';
		
		window['iframelayerslider_'+okidlslcke].document.getElementById('fullopacity').style.lineHeight = new_lineheight_mini+'px';
		window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').style.lineHeight = new_lineheight_mini+'px';
		
		
		
	/*
		$('#lsl_cke_'+okidlslcke).removeClass(classactullename);
		
		var classesaajouter = valeur+cke_classes;
		var classesaajouter_T = classesaajouter.split(REG_ESPACE);
		
		for (caaj=0; caaj<classesaajouter_T.length; caaj++)
		{
			$('#lsl_cke_'+okidlslcke).addClass(classesaajouter_T[caaj]);
		}
	*/	
	
//		window['iframelayerslider_'+okidlslcke].document.getElementById('fullopacity').className = '';
//		window['iframelayerslider_'+id_ls].document.getElementById('fullopacity').className = '';

	
	}

//	rewrite_ok_html_iframe (id_ls);
}
	
	
function inline_ckeditor (okidf, tempsavantfinanim)
{			
	$('#'+document.id_du_layerslider).layerSlider('stop');
	
	var ids_oks = okidf.split('___');

	var num_sl_ok = new Number (ids_oks[0]);
	var num_slsubclass_ok = ids_oks[1];
	var num_slsubclass_num_ok = new Number (ids_oks[2]);

	var id_donne = '';
	
	
	
	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
	
	var nb_hidden_LS_beforeOK = 0;
	
	for (var lli = 0; lli < les_lis_form.length; lli++)
	{
		var numid_dce_li = les_lis_form[lli].id.replace(/^.+_([^_]+)$/, '$1');
		
		if (document.getElementById('data-hide_lslayer_'+numid_dce_li).checked != true)
			nb_hidden_LS_beforeOK ++;

		if (les_lis_form[lli].id == 'LS_adminLI_'+num_sl_ok)
		{
			var le_n_ls_voulu = lli - nb_hidden_LS_beforeOK;
			lli = les_lis_form.length;
		}
	}
	

	if ($('#layerslider .ls-layer')[le_n_ls_voulu].id = 'lsl_cke_'+num_sl_ok)
	{
		
		// alert (okidf+'\n$(#lsl_cke_'+num_sl_ok+' .ls-s'+num_slsubclass_ok+')['+num_slsubclass_num_ok+']');	
// console.log ('id et place !=?? : '+le_n_ls_voulu+'( ou '+num_sl_ok+')___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok+'\n'+typeof(document.LS_sublayers_real_pos[num_sl_ok+'___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok]) );

		if (document.LS_sublayers_real_pos != null && document.LS_sublayers_real_pos[num_sl_ok+'___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok] != null)
		{
			var kel_realposition_subl = document.LS_sublayers_real_pos[num_sl_ok+'___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok];

			// console.log ('bonne place :? '+document.LS_sublayers_real_pos[num_sl_ok+'___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok] );

			num_slsubclass_ok = kel_realposition_subl[0];	
			num_slsubclass_num_ok = kel_realposition_subl[1];
			
			// console.log ('id et place !=!! : '+le_n_ls_voulu+'___'+num_slsubclass_ok+'___'+num_slsubclass_num_ok+'\nbonne place : '+num_slsubclass_ok+' '+num_slsubclass_num_ok);
		}
	
		if (typeof ($('lsl_cke_'+num_sl_ok+' .ls-s'+num_slsubclass_ok)[num_slsubclass_num_ok]) != 'undefined')
		{
			$('#lsl_cke_'+num_sl_ok+' .ls-s'+num_slsubclass_ok)[num_slsubclass_num_ok].id = 'lsl_cke_'+okidf;
			id_donne = 'lsl_cke_'+okidf;
		}
		else if (typeof (document.getElementById('lsl_cke_'+num_sl_ok).getElementsByClassName('ls-s'+num_slsubclass_ok)[num_slsubclass_num_ok]) != 'undefined')
		{
			document.getElementById('lsl_cke_'+num_sl_ok).getElementsByClassName('ls-s'+num_slsubclass_ok)[num_slsubclass_num_ok].id = 'lsl_cke_'+okidf;
			id_donne = 'lsl_cke_'+okidf;
		}

		else if ($('#lsl_cke_'+num_sl_ok+' .ls-s'+num_slsubclass_ok))
		{
			$('#lsl_cke_'+num_sl_ok+' .ls-s'+num_slsubclass_ok).id = 'lsl_cke_'+okidf;
			id_donne = 'lsl_cke_'+okidf;
		}
		
		window['iframelayerslider_'+num_sl_ok].set_id_inedition('ls-s'+num_slsubclass_ok, num_slsubclass_num_ok, 'fullopacity');
		
	}
	
	var new_classtt = document.getElementById('class_lslayer_'+okidf).value;
	var ex_classtt = document.getElementById('ex_class_lslayer_'+okidf).value;
	var new_stylett = document.getElementById('style_lslayer_'+okidf).value;
	var ex_stylett = document.getElementById('ex_style_lslayer_'+okidf).value;
	
	if (ex_classtt != new_classtt)
		MAJ_vues (okidf, 'class', new_classtt, ex_classtt);
	
	if (ex_stylett != new_stylett)
		MAJ_vues (okidf, 'style', new_stylett, new_classtt);

	var exstyles = document.getElementById('lsl_cke_'+okidf).getAttribute('style');
	document.getElementById('ckeditor_style_edition').value = exstyles;
	
//	exstyles += 'outline:#FFF solid 10px; z-index:1000; opacity:1; marginTop:0px; marginLeft:0px;';
	console.log('tempsavantfinanim: '+tempsavantfinanim+' '+exstyles);
	
	cke_pave_en_valeur (okidf);
	setTimeout("cke_pave_en_valeur ('"+okidf+"')", tempsavantfinanim+1000);
	document.getElementById('layerslider-container').onmouseover = function () { cke_pave_en_valeur (okidf); };
	
	document.getElementById('lsl_cke_'+okidf).setAttribute('contenteditable', 'true');
	
		
		
	editor = CKEDITOR.inline( 'lsl_cke_'+okidf , {
				customConfig: serveur_url+rep_layerSlider_Admin+'/config_files/sublayer_innerHTML_ckeditor_config.js',

				filebrowserBrowseUrl : serveur_url+rep_pdwfilebrowser+'/index.php?editor=ckeditor',
				filebrowserImageBrowseUrl : serveur_url+rep_pdwfilebrowser+'/index.php?editor=ckeditor&filter=image',
				filebrowserFlashBrowseUrl : serveur_url+rep_pdwfilebrowser+'/index.php?editor=ckeditor&filter=flash'
			}
	);
	
	var admindivcke = document.getElementById('layerslider_admin_saveckeditor');
	
	document.getElementsByTagName('body')[0].appendChild(admindivcke);
	
	if (document.topadmincke == null || document.topadmincke == 'undefined')
	{
		document.topadmincke = $('#layerslider_admin_saveckeditor').css('top');
		if (document.topadmincke == null || document.topadmincke == 'undefined')
			document.topadmincke = '-10px';
	}

	var heightadmin = document.getElementById('layerslider_admin').offsetHeight + 300;

	
//	document.getElementById('layerslider_admin').className = '';
//	$('#layerslider_admin').css('top', '-'+heightadmin+'px');

	$('#Admin_menubase').css('position', 'absolute');
	$('#Admin_menubase').css('margin-top', $('#layerslider_admin').scrollTop()+'px');

	$('#layerslider_admin').animate ({top:'-'+heightadmin+'px'}, 1200,  function() {
			$('#layerslider_admin_saveckeditor').css('top', '-200px');
			$('#layerslider_admin_saveckeditor').css('display', 'block');
			$('#layerslider_admin_saveckeditor').animate ({top:document.topadmincke}, 600
				);
			}

	);
	

}
		
function cke_pave_en_valeur (okidf)
{	
	document.getElementById('lsl_cke_'+okidf).style.outline = '#FFEEFE solid 10px';
//	document.getElementById('lsl_cke_'+okidf).style.boxShadow = '3px 3px 10px 5px #AA9999';
	
	document.getElementById('lsl_cke_'+okidf).style.zIndex = '2';
	document.getElementById('lsl_cke_'+okidf).style.marginTop = '0px';
	document.getElementById('lsl_cke_'+okidf).style.marginLeft = '0px';
	document.getElementById('lsl_cke_'+okidf).style.opacity = '1';

	// console.log('cke_pave_en_valeur() opa = "1" : pave est mis en valeur...');
}
		
		
function ferme_ckditor(saveornot) {
	if ( !editor )
		return;
	
	document.getElementById('layerslider-container').onmouseover = function () {};
	
	
	var idtextarea = document.getElementById('cke_textarea_id').value;
	var idclassarea = idtextarea.replace(/innerHTML_/, 'class_');
	var idstylearea = idtextarea.replace(/innerHTML_/, 'style_');
	
	var num_sl_ok = document.getElementById('cke_numlslider_edit').value ;
	var okidf = document.getElementById('cke_numsublslider_edit').value ;

//	document.getElementById('lsl_cke_'+okidf).setAttribute('style', document.getElementById('ckeditor_style_edition').value);

	if (saveornot != null && saveornot != 0 && !REG_NO.test(saveornot))
	{
		var HTML_edited = editor.getData();
		
		document.getElementById(idtextarea).innerHTML = HTML_edited;
		document.getElementById('ex_'+idtextarea).innerHTML = HTML_edited;
		
		
		var HTML_edited_forframes = HTML_edited.replace(/(\s+src=")(?!http)/mgi, '$1'+serveur_url);		
		// console.log('REG IMG src valide');
		
		alert('iframelayerslider_'+num_sl_ok);
		
		window['iframelayerslider_'+num_sl_ok].document.getElementById('fullopacity').innerHTML = HTML_edited_forframes;
		window['iframelayerslider_'+okidf].document.getElementById('fullopacity').innerHTML = HTML_edited_forframes;
	
		document.getElementById('ex_'+idclassarea).value = document.getElementById(idclassarea).value;
		document.getElementById('ex_'+idstylearea).value = document.getElementById(idstylearea).value;
		
		document.getElementById('lsl_cke_'+okidf).style.outline = '';
		document.getElementById('lsl_cke_'+okidf).style.zIndex = '';
		
		editor.destroy();
		editor = null;
		
		// alert ('SAUVE !! :\n'+document.getElementById(idtextarea).innerHTML);
	
	}
	else
	{
		editor.destroy();
		editor = null;
// 	
		var html_svg = document.getElementById('ex_'+idtextarea).innerHTML;
		document.getElementById(idtextarea).innerHTML = html_svg ;
		// alert ('// sublsform_innerHTML_0___2___0 == '+idtextarea+'\n\n'+html_svg);
		
		document.getElementById('lsl_cke_'+okidf).innerHTML = html_svg;
		
		var HTML_edited_forframes = html_svg.replace(/(\s+src=")(?!http)/mgi, '$1'+serveur_url);				
		
		alert('iframelayerslider_'+num_sl_ok);
		
		window['iframelayerslider_'+num_sl_ok].document.getElementById('fullopacity').innerHTML = HTML_edited_forframes;
		window['iframelayerslider_'+okidf].document.getElementById('fullopacity').innerHTML = HTML_edited_forframes;
		
		// console.log('REG IMG src annule');
		
		document.getElementById(idclassarea).value = document.getElementById('ex_'+idclassarea).value;
		document.getElementById(idstylearea).value = document.getElementById('ex_'+idstylearea).value;
		
		var new_classtt = document.getElementById('class_lslayer_'+okidf).value;
		var ex_classtt = document.getElementById('ex_class_lslayer_'+okidf).value;
		var new_stylett = document.getElementById('style_lslayer_'+okidf).value;
		var ex_stylett = document.getElementById('ex_style_lslayer_'+okidf).value;
		
		if (ex_classtt != new_classtt)
			MAJ_vues (okidf, 'class', ex_classtt, new_classtt);
		
		if (ex_stylett != new_stylett)
			MAJ_vues (okidf, 'style', ex_stylett, ex_classtt);

		document.getElementById('lsl_cke_'+okidf).style.outline = '';
		document.getElementById('lsl_cke_'+okidf).style.zIndex = '';
		
	//	alert ('ANNULE !! ');
		
	}

	var lsi = okidf.replace (/^([^_]+)_.+$/, '$1');
	remake_layerslider_listemenu (lsi);
	
//	$('#layerslider_admin').css('top', '10px' );
//	$('#layerslider_admin_saveckeditor').css('display', 'none');
	
	
	$('#Admin_menubase').css('position', 'absolute');
	$('#Admin_menubase').css('margin-top', '0px');	

	$('#layerslider_admin_saveckeditor').animate ({top:'-200px'}, 600,  function() {
			$('#layerslider_admin').css('display', 'block');
			$('#layerslider_admin').animate ({top:'10px'}, 600, function () {
						$('#Admin_menubase').css('position', 'fixed');
						$('#Admin_menubase').css('margin-top', '15px');

					}
				);
			}

	);
	
	
	
	
	
	document.getElementById('lsl_cke_'+num_sl_ok).id = '';
	document.getElementById('lsl_cke_'+okidf).id = '';
	
	
	var divdesclasses = $('#apparence_sublayerslider_form p.champ_class')[0];
	document.getElementById('sublsform_style_'+okidf).appendChild(divdesclasses);
	
	var divmenu = 'layers_tools_'+num_sl_ok;
	affiche_sous_menu (divmenu);

	window['iframelayerslider_'+num_sl_ok].document.getElementById('fullopacity').id = '';	
    document.getElementById('layerslider_admin').className = 'opened';
	
	
} 



function verif_modif_image ()
{
	var stop_modif_file = 'no';
	var rapp_modif_file = 'fileBrowser est ouvert';
	
	if (file_browser && file_browser.open && !file_browser.closed)
		stop_modif_file = 'continue';
		
	else 
	{	
		var actuelle_img_filebrowser = document.getElementById(fileBrowser_idchamp).value;
		
		actuelle_img_filebrowser = actuelle_img_filebrowser.replace(REG_IMGSRC_SUPPR_DEMO, '');
		actuelle_img_filebrowser = actuelle_img_filebrowser.replace(REG_IMGSRC_SUPPR_SERVEUR, '');
				
		rapp_modif_file = 'fileBrowser est fermé';		
		
		
		
		var reg_rehtmok = new RegExp ("\/", "g");
		var temp_img_filebrowser_pourreg = temp_img_filebrowser.replace(/^.*A_WebSite_Demo\/_[a-z]+\//, '');		
			
			
		if (actuelle_img_filebrowser != temp_img_filebrowser_pourreg && actuelle_img_filebrowser != temp_img_filebrowser)
		{
			replace_image ();
			stop_modif_file = 'no';
			
			rapp_modif_file += ' : replace image';
		}
		
		
	}
	if (stop_modif_file == 'no')
	{
		file_browser = null;
		clearTimeout(fileBrowser_val_timeout);
		
		rapp_modif_file += ' est fermé, stop.';
	}
	else
	{
		fileBrowser_val_timeout = setTimeout(verif_modif_image, 1000);
		rapp_modif_file += ' est ouvert, continue.';
	}
		// console.log (rapp_modif_file);
	
}


function replace_image () { 
	var new_img = document.getElementById(fileBrowser_idchamp).value; 
//		alert ('ex img: '+temp_img_filebrowser+'\nnew img: '+new_img );
	
	new_img = new_img.replace(REG_IMGSRC_SUPPR_DEMO, '');
	new_img = new_img.replace(REG_IMGSRC_SUPPR_SERVEUR, '');
	
	var idxschamp = fileBrowser_idchamp.replace(/^.+_([0-9]+(___[-0-9]+___[0-9]+)?)$/, '$1');
	var n_ls_fac = new Number (idxschamp.replace(/^([^_]+)_.+$/, '$1'));
	
	var reg_rehtmok = new RegExp ("\/", "g");
	var temp_img_filebrowser_pourreg = temp_img_filebrowser.replace(/^.*A_WebSite_Demo\/_[a-z]+\//, '');
	var reg_eximage = new RegExp (temp_img_filebrowser_pourreg.replace(reg_rehtmok, "\/"), "");
	
		// console.log(reg_eximage+' , '+new_img);
	
	document.getElementById(fileBrowser_idchamp).style.backgroundImage = 'url('+new_img+')';
	document.getElementById(fileBrowser_idchamp+'_filename').innerHTML = new_img;
	
	if (fileBrowser_idchamp.match(/[0-9]+___[-0-9]+___[0-9]+$/))
		var idx_layer = fileBrowser_idchamp.replace(/^.+_([0-9]+___[-0-9]+___[0-9]+)$/, '$1');
	else
		var idx_layer = fileBrowser_idchamp.replace(/^.+_([0-9]+)$/, '$1');
	
	
	
	var findclass_ls = '';
	var	findclass_ls_num = 0;
	
	var lesidx_ls = [];
	var ls_idx = '';
	
	
	if (idx_layer.match(/___/))
	{
		lesidx_ls = idx_layer.split(/___/g);
		ls_idx = lesidx_ls[0];
	}
	else
		ls_idx = idx_layer;

	if (fileBrowser_idchamp.match(/^srcapercu_/))
	{
		findclass_ls = '.ls-tn';
		
	}
	else if (fileBrowser_idchamp.match(/^srcfond_/))
	{
		findclass_ls = '.ls-bg';
	}
	else if (fileBrowser_idchamp.match(/^src_lslayer_/))
	{
		findclass_ls = '.ls-s'+lesidx_ls[1];
		findclass_ls_num = new Number (lesidx_ls[2]);
	}
	
	// MAJ de l'image du slider

	var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
	
	var nb_hidden_LS_beforeOK = 0;
	
	for (var lli = 0; lli < les_lis_form.length; lli++)
	{
		var numid_dce_li = les_lis_form[lli].id.replace(/^.+_([^_]+)$/, '$1');
		
		if (document.getElementById('data-hide_lslayer_'+numid_dce_li).checked != true)
			nb_hidden_LS_beforeOK ++;

		if (les_lis_form[lli].id == 'LS_adminLI_'+ls_idx)
		{
			var le_n_ls_voulu = lli - nb_hidden_LS_beforeOK;
			lli = les_lis_form.length;
		}
	}
			
	var svgid = $('#layerslider .ls-layer')[le_n_ls_voulu].id;
	$('#layerslider .ls-layer')[le_n_ls_voulu].id = 'lslayer_class_edition';
			
	$('#lslayer_class_edition '+findclass_ls)[findclass_ls_num].src = new_img; 
	document.getElementById('lslayer_class_edition').id = svgid;
	
	// MAJ de la classe form VUE
	window['iframelayerslider_'+ls_idx].add_image(serveur_url+new_img, findclass_ls, findclass_ls_num);
	
	
	// MAJ de la classe form SOUS-CALQUES
	var lesiframes = $('#sublayers_ls'+ls_idx+' iframe');
	
	for (tt=0; tt< lesiframes.length; tt++)
	{
		var name_iframe = lesiframes[tt].name;
		var end_name_iframe = name_iframe.replace(/^.+([0-9]+___[-0-9]+___[0-9]+)$/, '$1');
		
		if (typeof (window[name_iframe].add_image) != 'function')
		{
			var scriptjs = 	serveur_url+rep_layerSlider+'/layerslider/jQuery/jquery.js';
			var scriptjs2 = serveur_url+rep_layerSlider_Admin+'/add_class.js';

			var scriptaad = document.createElement('script');
			scriptaad.src = scriptjs;			
			scriptaad.type = 'text/javascript';
			
			var scriptaad2 = document.createElement('script');
			scriptaad2.src = scriptjs2;			
			scriptaad2.type = 'text/javascript';
			
			if (window[name_iframe].document.getElementsByTagName('body')[0].appendChild(scriptaad) 
			&& window[name_iframe].document.getElementsByTagName('body')[0].appendChild(scriptaad2))
			{
				setTimeout("add_image_insublayer('"+end_name_iframe+"', '"+serveur_url+new_img+"', '"+findclass_ls+"', '"+findclass_ls_num+"')", 200);
			}
			
		} 
		else
			window[name_iframe].add_image(new_img, findclass_ls, findclass_ls_num);
			
			
			
	}
	
	// console.log('fin : '+reg_eximage+' , '+new_img);

	
	file_browser = null;
	temp_img_filebrowser = null;
	fileBrowserlink = null;
	fileBrowser_idchamp = null;

	// var lsi = okidf.replace (/^([^_]+)_.+$/, '$1');
	
	n_ls_fac = new Number(n_ls_fac);
	remake_layerslider_listemenu (n_ls_fac);

}


function openFileBrowser(idchamp)
{
	temp_img_filebrowser = document.getElementById(idchamp).value.toString();
	
	
	fileBrowser_idchamp = idchamp;
	fileBrowserlink = rep_pdwfilebrowser+"/index.php?editor=standalone&returnID=" + idchamp;
	
	
	file_browser = window.open(fileBrowserlink,'pdwfilebrowser', 'width=1000,height=650,scrollbars=no,toolbar=no,location=no');
	
	// console.log ('load FileBrowser');
	
	file_browser.focus();
	fileBrowser_val_timeout = setTimeout(verif_modif_image, 1000);

	// console.log ('FileBrowser loaded '+temp_img_filebrowser);

//	console.log ('(openFileBrowser) : fin e fonction '+idchamp);
	
}                

function affiche_menu (id_sl) // layers_tools_0, 
{
// $('.sublayers_tools_sousmenu');	

// alert (id_sl);

	var goodid_subl = id_sl.replace(REG_DIVF_KELNUM, '$1');
	var goodid_ls = id_sl.replace(REG_DIVF_NONUM2, '$1');	

	var divmenu = 'layers_tools_'+goodid_ls;
	
	affiche_aide(id_sl);
	
	masque_otherLI_tools (divmenu);
	affiche_sous_menu (divmenu);
	$('div.lsform_tools div').css('display', 'none');	
		
	
	
	if (document.ls_admin_anim != null)
	{
		var sisub = '';
		var sisubfin = '';
		if (goodid_subl != goodid_ls)
		{
		// sublsform_slider____n_ls_______n_lssub___		
			sisub = 'sub';
			sisubfin = '_'+goodid_subl;
		}
		
		document.ls_admin_anim = goodid_ls;
	//	affiche_sous_menu (divmenu, sisub+'lsform_slider'+sisubfin, 'amenutools_slider_'+goodid_subl );
		
		$('#'+divmenu+'_sm .lsform_tools .'+sisub+'lsform_slider'+sisubfin).css ('display', 'block');
		$('#'+divmenu+'_sm .lsform_tools').css ('display', 'block');
		$('#'+divmenu+'_sm').css ('display', 'block');
		
		document.getElementById('amenutools_slider_'+goodid_subl).className = 'on';
	//	document.getElementById('layers_container_tools_'+goodid_ls).className = 'layerstools_view_toolsopen';
		document.getElementById(divmenu).parentNode.className = 'layerstools_view_toolsopen';
		
		
		// console.log ("document.ls_admin_anim: "+document.ls_admin_anim+"\n affiche_sous_menu ("+divmenu+", '"+sisub+"lsform_slider"+sisubfin+"', 'amenutools_slider_"+goodid_subl+"' );");
	}
	
	var lesdivsamasquer = $('#'+divmenu+' .sublsform_menu');
	var nb_ldam = lesdivsamasquer.length;
			
	for (z=0; z<nb_ldam; z++)
	{
		if (lesdivsamasquer[z].id == 'sublsform_menu_'+goodid_subl)
		{
			lesdivsamasquer[z].style.display = 'block';
		}
		else 
		{
			lesdivsamasquer[z].style.display = 'none';
		}
	}

	$('.new_layers_box').css('display', 'none');
	
	lesA = $('#sublayers_ls'+goodid_ls+' a');
	nb_lza = lesA.length;
	
	for (za=0; za<nb_lza; za++)
	{
		lesA[za].className = 'a_menu_calque';
		var kelid = lesA[za].id;
		document.getElementById(kelid).parentNode.className = '';		
	}
	
	if (goodid_ls != goodid_subl)	
	{
		document.getElementById(id_sl).className = 'a_menu_calque_on';		
		document.getElementById(id_sl).parentNode.className = 'on';	
	}
	
	
}

function affiche_aide (id_div, txt)
{
	
	var goodid_subl = id_div.replace(REG_DIVF_1, '');
	var goodid_l = id_div.replace(REG_DIVF_NONUM2, '$1');
	var goodidaide = 'div_aideLS_'+goodid_l;
		
	//	alert (id_div+' '+goodid_subl+' '+goodid_l);	
		
	if (txt != null && txt != '' && (document.getElementById('sublsform_menu_'+goodid_subl).style.display != 'block'|| document.getElementById('LS_adminLI_'+goodid_l).className.match(/ off/)))
	{
		
		var texteaide = ''; 
		
		if (document.getElementById('src_lslayer_'+goodid_subl) && document.getElementById('src_lslayer_'+goodid_subl).value != '')
		{
			texteaide = '<span style="display:block; float:left; margin-top:-2px;">sous-calque <b>'+goodid_subl.replace(/^[0-9]+___([-0-9]+)___([0-9]+)$/g, '$1-$2')+'</b>, image: '+document.getElementById('src_lslayer_'+goodid_subl).value.replace(/^.+\/([^\/]+)$/, '$1')+'</span><span class="subl_aide_preview" style=" margin:-23px 0px -5px 10px; height:40px; padding-bottom:0px;"><img src="'+document.getElementById('src_lslayer_'+goodid_subl).value+'" /></span> '; 

			txt = '<br>Cliquez pour <b>modifier cette image</b>, ses positions et animations. <span class="light">(modifier, dupliquer, déplacer, supprimer...)</span>';
		}
		else
		{
			var ok_texte_entier_tags = document.getElementById('innerHTML_lslayer_'+goodid_subl).innerHTML;
			var ok_texte_entier = ok_texte_entier_tags.replace(/<[^>]+>/g, '');
			var ok_texte = ok_texte_entier.substr(0,45);
			
			if (ok_texte_entier != ok_texte)
				ok_texte += '...'; 
				
			if (ok_texte_entier_tags.match(/^\s*<iframe /))
			{
				
				texteaide = '<span style="display:block; float:left; margin-top:-2px;">sous-calque <b>'+goodid_subl.replace(/^[0-9]+___([-0-9]+)___([0-9]+)$/g, '$1-$2')+'</b> &lt;'+document.getElementById('node_lslayer_'+goodid_subl).value.toLowerCase()+'&gt; </span><span class="subl_aide_preview" style="margin:-13px 0px -5px 10px; height:18px;"><strong style="color:#AA0000;">VIDEO (iframe)</strong></span>'; 
		
				txt = '<br>Cliquez pour <b>modifier cette vidéo</b> (iframe html) et ses animations. <span class="light">(modifier, dupliquer, déplacer, supprimer...)</span>';
				
			}
			else
			{
			
				texteaide = '<span style="display:block; float:left; margin-top:-2px;">sous-calque <b>'+goodid_subl.replace(/^[0-9]+___([-0-9]+)___([0-9]+)$/g, '$1-$2')+'</b> &lt;'+document.getElementById('node_lslayer_'+goodid_subl).value.toLowerCase()+'&gt; </span><span class="subl_aide_preview" style="margin:-13px 0px -5px 10px;"><strong style="color:#AA0000;">'+ok_texte+'</strong></span>'; 
		
				txt = '<br>Cliquez pour <b>modifier ce texte html</b> et ses images, vidéos et animations. <span class="light">(modifier, dupliquer, déplacer, supprimer...)</span>';
			}

		}

		document.getElementById(goodidaide).innerHTML = texteaide+txt;
		document.getElementById(goodidaide).style.display = 'block';
	}
	else
		document.getElementById(goodidaide).style.display = 'none';
	
}


function gotolayer(num)
{
//	var texteaeval = "$('#"+document.id_du_layerslider+"').layerSlider ("+num.value+")";
//	eval (texteaeval);				

	var goodnum = num.value.replace(/-|\.|,| /g, '');
	var goodnum = new Number (goodnum);
	
	if (goodnum >= 0 && goodnum <= 1000)
	{
		if (document.getElementById('nbpage_total'))
		var totalvues =	new Number (document.getElementById('nbpage_total').innerHTML); 
		
		if (goodnum <= totalvues)
		{
			document.getElementById('numpage_actuel').innerHTML = goodnum; 
	
			eval("$('#"+document.id_du_layerslider+"').layerSlider ("+goodnum+")");
		}
	}
	else
		alert ('Veuillez indiquer un nombre valide. ('+num.value+')');

}

function oTo_html2DOM (html) {
	var frame = document.createElement('iframe');
	frame.style.display = 'none';
	
	document.body.appendChild(frame);
	frame.contentDocument.open();
	frame.contentDocument.write(html);
	frame.contentDocument.close();

	var elo = frame.contentDocument.body.firstChild;
	
	var el = document.importNode(elo, true);
	
	document.body.removeChild(frame);
	return el;
}

function add_sublayers_forms (nlayer, returnHTM)
{

	var returnHTMLsubtool = document.getElementById('sublayerslider_formtools_modele').innerHTML;
	var returnHTMLsubmenu = document.getElementById('sublayerslider_formmenu_modele').innerHTML;
	
	var subsmenus = '';
	var substools = '';
	
	var nb_subl = document.dom_ls_ce_sublayer[nlayer]['sublayers_list'].length;	

	
	for (za=0; za<nb_subl; za++)
	{
		var id_ce_sub = document.dom_ls_ce_sublayer[nlayer]['sublayers_list'][za];
		
		var p_style = document.dom_ls_ce_sublayer[nlayer]['sublayers_properties'][id_ce_sub]['style'];	
		var p_className = document.dom_ls_ce_sublayer[nlayer]['sublayers_properties'][id_ce_sub]['className'] ;		
		var p_nodeName = document.dom_ls_ce_sublayer[nlayer]['sublayers_properties'][id_ce_sub]['nodeName'] ;	
		var p_innerHTML = document.dom_ls_ce_sublayer[nlayer]['sublayers_properties'][id_ce_sub]['innerHTML'] ;
		
		var p_src = document.dom_ls_ce_sublayer[nlayer]['sublayers_properties'][id_ce_sub]['src'] ;	
	
		var returnHTMLsubtool_tmp = returnHTMLsubtool;
		var returnHTMLsubmenu_tmp = returnHTMLsubmenu;
		
		var T_allstyles = [];		
	
		if (REG_PT_VIRGULE.test(p_style))
			T_allstyles = p_style.split(REG_PT_VIRGULE);
		else
			T_allstyles.push(p_style);
			
		var nb_styles = T_allstyles.length;
		
		var style_css_oks = '';
		var style_slider = '';

		for (zc=0; zc<nb_styles; zc++)
		{
			var castyle = T_allstyles[zc].replace(REG_TRIM, '');
			// alert (castyle);
			
			if (castyle.match(REG_LSSUB) ) 
				style_slider += castyle+';\n';
			else if (castyle != '') 
				style_css_oks += castyle+';\n';
			
		}

		// alert ('style_slider: \n'+style_slider+'\n\n'+'style_css_oks: \n'+style_css_oks);
		
//	alert (p_innerHTML);
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_SLIDER_SUBL_VALUE, style_slider);
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_STYLE_SUBL_VALUE, style_css_oks);
		
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_CLASS_SUBL_VALUE, p_className);
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_NODE_SUBL_VALUE, p_nodeName);
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_HTML_SUBL_VALUE, p_innerHTML);
		
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_SRC_SUBL_VALUE, p_src);


		if (p_className.match(/^ls-s-1/))
		{
			returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(/___positiondepart_checked___/, 'checked');
			returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(/___positiondepart_lslayer___value/, '-1');
		}
		else
		{
			returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(/___positiondepart_checked___/, '');
			returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(/___positiondepart_lslayer___value/, '');
		}

		var displayinhtml = 'inline';
		var displayimage = 'none';
		var displayimagemenu = 'none';

		if (p_nodeName.toLowerCase() == 'img')
		{
			displayinhtml = 'none';
			displayimage = 'block';
			displayimagemenu = 'inline';
			
		}
		
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_N_LS_N_LSUB, id_ce_sub);
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(REG_N_LS_N_LSUB, id_ce_sub);
		
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_DISPLAY_IMAGEFORM, displayimage);
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(REG_DISPLAY_INHTMLFORM, displayinhtml);
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(REG_DISPLAY_IMAGEFORM, displayimage);
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(REG_DISPLAY_IMAGEMENUFORM, displayimagemenu);
		
		var souscalque_id = id_ce_sub.replace(REG_SOUSCALK_ID, '');
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_N_LSSUB, souscalque_id);
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(REG_N_LSSUB, souscalque_id);
		
		var souscalque_id_h = souscalque_id.replace(/^(.+)___(.+)$/, '$1.$2'); 
		returnHTMLsubmenu_tmp = returnHTMLsubmenu_tmp.replace(/___n_lssub_h__/, souscalque_id_h);
		
		
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_SLIDER_WIDTH, document.layer_slider_width.toString());
		returnHTMLsubtool_tmp = returnHTMLsubtool_tmp.replace(REG_SLIDER_HEIGHT, document.layer_slider_height.toString());
		
		subsmenus += returnHTMLsubmenu_tmp;
		substools += returnHTMLsubtool_tmp;
	
	}
	
	
	returnHTM = returnHTM.replace(REG_SUBLAYERS_TOOLS, substools);
	returnHTM = returnHTM.replace(REG_SUBLAYERS_MENUS, subsmenus);
	
	return (returnHTM);
}



function add_layer_inframe (n_ls_sub)
{
	if (REG____S.test(n_ls_sub))
		n_ls_sub = n_ls_sub.replace(REG____SPLUS, '');
	
	add_iframes_sublayers (n_ls_sub);
}


function frame_startAndNext()
{
	if (document.layerslider_charge_n_layers != null)
	{
		var startslide_vue = document.layerslider_charge_n_layers;
		
//		if (startslide_vue >= document.nb_loaded_vues)
		if (document.add_1_vue != null)
		{
			var ex_nb_loadvue = document.nb_loaded_vues;			

			document.nb_loaded_vues ++;
			document.nb_vues ++;
			
			document.getElementById('nbpage_total').innerHTML = document.nb_vues;


		//	alert(startslide_vue+' >? '+ex_nb_loadvue+'\n-> new loaded_vues = '+document.nb_loaded_vues);

			document.add_1_vue = null;
		}
		else
		{
			
		}
		
	}
	else
	{
		var startslide_vue = document.nb_loaded_vues;
		document.nb_loaded_vues ++;
	}
		
	// console.log (document.nb_loaded_vues+' == '+document.nb_vues);	
	if (document.nb_loaded_vues >= document.nb_vues)
	{
		if (document.layerslider_charge_n_layers != null)
			setTimeout (remake_DOMcopy, 500);	
		
		return (true); 
	}
	var charge_vue = document.nb_loaded_vues;
	
	if (document.getElementById(document.liste_id_frame[charge_vue]) != null)
	{
		document.getElementById(document.liste_id_frame[charge_vue]).src = document.liste_src_frame[charge_vue];

		var txtloading = 'chargement vue '+charge_vue+' '; 
		document.getElementById('loading_infos_txt').innerHTML = txtloading;	
	}
}

function frame_sublayer_hover (id_sl)
{				
	var goodid_subl = id_sl.replace(REG_DIVF_KELNUM, '$1');
	
	sublayer = window['iframelayerslider_'+goodid_subl].document.getElementById('fullopacity');
	
	//	console.log ('typeof(sublayer): '+typeof(sublayer)+'\goodid_subl: '+goodid_subl);

	if (sublayer != null && typeof(sublayer) != 'undefined')
	{
		var w_ls_layer = sublayer.parentNode.parentNode.parentNode.style.width;
		var h_ls_layer = sublayer.parentNode.parentNode.parentNode.style.height;
	
		var topsubl = sublayer.style.top;
		var leftsubl = sublayer.style.left;
		var w_subl = sublayer.style.width;
		var h_subl = sublayer.style.height;
				
		
		var n_topsubl = new Number (topsubl.replace(REG_TOUTSAUF_NUM, ''));
		var n_leftsubl = new Number (leftsubl.replace(REG_TOUTSAUF_NUM, ''));
		var n_w_subl = new Number (w_subl.replace(REG_TOUTSAUF_NUM, ''));
		var n_h_subl = new Number (h_subl.replace(REG_TOUTSAUF_NUM, ''));
		
		if (isNaN(n_w_subl) || isNaN(n_h_subl) || n_w_subl == 0 || n_h_subl == 0)
		{
			var sizes = window['iframelayerslider_'+goodid_subl].element_size('fullopacity');
			n_w_subl = sizes[0];
			n_h_subl = sizes[1];
		}
		
		
		// console.log ('topsubl: '+topsubl+'\nleftsubl: '+leftsubl+'\nn_w_subl: '+n_w_subl+'\nn_h_subl: '+n_h_subl+'\n');
		
		var n_w_lslayer = new Number (w_ls_layer.replace(REG_TOUTSAUF_NUM, ''));
		var n_h_lslayer = new Number (h_ls_layer.replace(REG_TOUTSAUF_NUM, ''));
			
		var p_cent_width = (n_w_lslayer-14) / n_w_subl;
		var p_cent_height = (n_h_lslayer-14) / n_h_subl;
	
		var p_cent_ok;
		if (p_cent_width > p_cent_height)	
			p_cent_ok = p_cent_height;
		else
			p_cent_ok = p_cent_width;
		
		var px7_echelle = 7/p_cent_ok;
		
		var transX = n_leftsubl-px7_echelle;
		var transY = n_topsubl-px7_echelle;
		
		if (transX < 3) transX = 3;
		else  transX = -transX ;
		
		if (transY < 3) transY = 3;
		else  transY = -transY ;
	
	//	alert ( n_leftsubl+' - '+px7_echelle+' '+n_topsubl+' - '+px7_echelle+'\n translate(-'+(n_leftsubl-px7_echelle)+'px, -'+(n_topsubl-px7_echelle)+'px) scale('+p_cent_ok+')');
				
		if (sublayer.nodeName.toLowerCase() != 'img' && p_cent_ok < 3)
			p_cent_ok = p_cent_ok*3;
		
		
		
		sublayer.style.transform = 'translate('+transX+'px, '+transY+'px) scale('+p_cent_ok+')';
		sublayer.style.transformOrigin = 'left top';
		
		if (typeof(sublayer.style.webkitTransform) != 'undefined')
		{
			sublayer.style.webkitTransform = 'translate('+transX+'px, '+transY+'px) scale('+p_cent_ok+')';
			sublayer.style.webkitTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.MozTransform) != 'undefined')
		{
			sublayer.style.MozTransform = 'translate('+transX+'px, '+transY+'px) scale('+p_cent_ok+')';
			sublayer.style.MozTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.msTransform) != 'undefined')
		{
			sublayer.style.msTransform = 'translate('+transX+'px, '+transY+'px) scale('+p_cent_ok+')';
			sublayer.style.msTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.OTransform) != 'undefined')
		{
			sublayer.style.OTransform = 'translate('+transX+'px, '+transY+'px) scale('+p_cent_ok+')';
			sublayer.style.OTransformOrigin = 'left top';
		}
				
	}
}

function frame_sublayer_out (id_sl)
{				
	var goodid_subl = id_sl.replace(REG_DIVF_KELNUM, '$1');
	
	if (window['iframelayerslider_'+goodid_subl].document.getElementById('fullopacity') != null && typeof (window['iframelayerslider_'+goodid_subl].document.getElementById('fullopacity')) != 'undefined')
	{
		sublayer = window['iframelayerslider_'+goodid_subl].document.getElementById('fullopacity');
		
		sublayer.style.transform = 'translate(0) scale(1)';
		sublayer.style.transformOrigin = 'left top';
		
		if (typeof(sublayer.style.webkitTransform) != 'undefined')
		{
			sublayer.style.webkitTransform = 'translate(0) scale(1)';
			sublayer.style.webkitTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.MozTransform) != 'undefined')
		{
			sublayer.style.MozTransform = 'translate(0) scale(1)';
			sublayer.style.MozTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.msTransform) != 'undefined')
		{
			sublayer.style.msTransform = 'translate(0) scale(1)';
			sublayer.style.msTransformOrigin = 'left top';
		}
		
		if (typeof(sublayer.style.OTransform) != 'undefined')
		{
			sublayer.style.OTransform = 'translate(0) scale(1)';
			sublayer.style.OTransformOrigin = 'left top';
		}
				
	}
}

function affiche_menu_a (kelnumid, aobj)
{
	if (document.getElementById('new_sublayer_menu_'+kelnumid).style.display == 'block')
	{
		$('#new_sublayer_menu_'+kelnumid).css('display', 'none');
		$('#new_sublayer_close_menu_'+kelnumid).css('display', 'none');    
		$('#new_sublayer_open_menu_'+kelnumid).removeClass('on bas'); 
	}
	else
	{
		$('#new_sublayer_menu_'+kelnumid).css('display', 'block');
		$('#new_sublayer_open_menu_'+kelnumid).addClass('on bas'); 
	}
    
} 

function affiche_close_menu_a (kelnumid)
{
	$('#new_sublayer_close_menu_'+kelnumid).css('display', 'block');    
}
function cache_menu_a (kelnumid, aobj)
{
	var id_a = aobj.id.replace(/close/, 'open');

	$('#new_sublayer_menu_'+kelnumid).css('display', 'none');
    $('#new_sublayer_close_menu_'+kelnumid).css('display', 'none');
	$('#new_sublayer_open_menu_'+kelnumid).removeClass('on bas'); 
    
} 

function add_iframes_sublayers (layerid) {
	
	var nb_sl = document.dom_ls_ce_sublayer[layerid]['sublayers_list'].length;
	
	for (var tsl = 0; tsl < nb_sl; tsl++)
	{
		var sublayer_id = document.dom_ls_ce_sublayer[layerid]['sublayers_list'][tsl];
	
//       <a href="javascript:void(0);" onmousedown="make_sortable_sublayers();">déplacer</a>                        

		var divframe = document.createElement('div');
		var divaframe = document.createElement('a');
		var divadeplaceframe = document.createElement('a');
	
		divadeplaceframe.id = 'divdeplace_'+sublayer_id;
		
		divadeplaceframe.setAttribute ("href", "javascript:void(0);");
		divadeplaceframe.setAttribute ("onmousedown", "make_sortable_sublayers(this.id);");

		divframe.id = 'divsl_'+sublayer_id;
		divframe.className = 'sublayer_element';
		divaframe.id = 'divf_'+sublayer_id;
		
		divaframe.setAttribute ("href", "javascript:void(0);");
		divaframe.setAttribute ("onclick", "affiche_menu (this.id);");
	//	divaframe.setAttribute ("href", "javascript:affiche_menu (this.id);");
	
		divaframe.setAttribute ("onmouseover", "affiche_deplacer(this.id, 'block'); affiche_aide (this.id, 'affiche aide'); frame_sublayer_hover (this.id)");
		divaframe.setAttribute ("onmouseout" ,"affiche_deplacer(this.id, 'none'); affiche_aide (this.id); frame_sublayer_out (this.id);");


		document['frame_'+layerid+'_'+sublayer_id] = document.createElement('iframe');

		var frame = document['frame_'+layerid+'_'+sublayer_id];
		frame.name = 'iframelayerslider_'+sublayer_id;
		frame.id = 'iframelayerslider_'+sublayer_id;
		frame.style = 'border:none; padding:0; margin:0 0 0 2px;';
		frame.width = Math.round(new Number (document.getElementById('iframelayerslider_'+layerid).width) / 2);
		frame.height = Math.round(new Number (document.getElementById('iframelayerslider_'+layerid).height) / 2);
		frame.frameborder = '0';
		frame.scrolling = 'no';
		frame.src = rep_layerSlider_Admin+'/iframe.php?a';
		
		divaframe.className = 'a_menu_calque';
		divaframe.style = 'width:'+frame.width+'px; height:'+frame.height+'px; background-color:rgba(242, 240, 242, 1);';
		divaframe.innerHTML = '<img src="Image/spacer.gif" style="width:'+frame.width+'px; height:'+frame.height+'px;">';

		divadeplaceframe.className = 'a_move_calque';
		divadeplaceframe.style = 'margin-top:'+(frame.height-10)+'px;';
		divadeplaceframe.innerHTML = '<img src="'+rep_layerSlider_Admin+'/img/icn_move_18px.gif" style="width:18px; height:18px;">';

//       <div id="loading_infos"><img id="loading_image_admin" src="spacer.gif"><span id="loading_infos_txt"></span></div>

		divadeplaceframe.setAttribute ("onmouseover", "this.style.display = 'block'; aide_deplacer();");
		
		divadeplaceframe.setAttribute ("onmouseout", "this.style.display = 'none';");

		divframe.appendChild(divaframe);
		divframe.appendChild(divadeplaceframe);
		divframe.appendChild(frame);
		
		document.getElementById('sublayers_ls'+layerid).appendChild(divframe);

	}
	
// attrib des interactions au A VUE iframe
	document.getElementById('divf_'+layerid).setAttribute ("href", "javascript:void(0);");
	document.getElementById('divf_'+layerid).setAttribute ("onclick", "affiche_menu (this.id);");

	document.getElementById('divf_'+layerid).setAttribute ("onmouseover", "affiche_aide (this.id, \'Afficher le menu général de cette vue (clic)<br>-> <b>Modifier</b> ses fonds images, apparences et animations (2D ou 3D). <br>-> <b>Activer</b>, <b>Desactiver</b>, <b>Dupliquer</b>, <b>Supprimer</b>, <b>...</b>\');");
	
	
	document.getElementById('divf_'+layerid).setAttribute ("onmouseout" ,"affiche_aide (this.id);");
// onclick="javascript:affiche_menu (this.id);" onmouseover="" onmouseout="affiche_aide (this.id);"	
}


function aide_deplacer (openclose)
{
	$('#loading_infos_txt').html('');	
	if (openclose)
	{
		$('#loading_infos').css('display', 'none');  
		$('#loading_infos img')[0].style.display = 'block'; 
	}
	else
	{
		$('#loading_infos').css('display', 'block');  
		$('#loading_infos img')[0].style.display = 'none'; 
		$('#loading_infos_txt').html('- D&eacute;placez ce sous-calque <b>dans la m&ecirc;me vue</b> pour votre confort.<br>- ou d&eacute;placez-le <b>dans une autre vue pour le copier dedans</b>.');	
		// <br>(Les sous calques seront r&eacute;-ordonn&eacute;s en fonction de leurs animations)
	}
	
}

function affiche_deplacer(idobj, styleadisplay)
{
	var id_move_btn = idobj.replace(/^divf_/, 'divdeplace_'); 
	document.getElementById(id_move_btn).style.display = styleadisplay;
}

function add_toqueue(ok_id, id_subsl)
{
	ok_id = new Number (ok_id);

	if (typeof (document.frame_add_content_queue[ok_id]) == 'undefined')
		document.frame_add_content_queue[ok_id] = [];

	
	var idxqueue = document.frame_add_content_queue[ok_id].length;
	document.frame_add_content_queue[ok_id][idxqueue] = id_subsl;
	
	// alert ('frame_add_content_queue['+ok_id+']['+idxqueue+'] = '+id_subsl);
}


function frame_add_content(n_ls_fac, n_lssub_fac, justone)
{
	if (n_lssub_fac == null)
		n_lssub_fac = 0;
		
	if (n_lssub_fac == 0 && justone == null)
	{
		var txtloading = 'chargement des sous-calques de la vue '+(n_ls_fac+1)+' '; 
		document.getElementById('loading_infos_txt').innerHTML = txtloading;	
	}

	var ok_id = n_ls_fac;
	
	if (typeof(document.frame_add_content_queue[n_ls_fac]) != 'undefined')
	{
		var id_subsl = document.frame_add_content_queue[n_ls_fac][n_lssub_fac];
		
		if (typeof(document.dom_ls_ce_sublayer[n_ls_fac]['sublayers_htmlok'][id_subsl]) != 'undefined')
		{
			var frame = document['frame_'+n_ls_fac+'_'+id_subsl];
			var html = document.dom_ls_ce_sublayer[n_ls_fac]['sublayers_htmlok'][id_subsl];
				
			// console.log('document[\'frame_\'+'+n_ls_fac+'   _   '+id_subsl+'  ]');	
				
			html = html.replace(/(class="ls-layer[^"]*"[^>]* style="[^"]*)display ?: ?none ?;([^"]*")/, '$1 $2');
			html = '<!DOCTYPE HTML><html>'+html+'<html>';

			if (typeof(frame.contentDocument) == 'undefined' || frame.contentDocument == null)
				frame.src = frame.src+'&o';
			
			frame.contentDocument.open();
			frame.contentDocument.write(html);
			frame.contentDocument.close();
				
// n_lssub_fac	
			document.getElementById('divf_'+id_subsl).style.backgroundColor = 'rgba(242, 240, 242,0)';		
				
			var new_subid = n_lssub_fac+1;
					
			if (typeof(document.frame_add_content_queue[n_ls_fac][new_subid]) != 'undefined' && justone == null)
			{
				frame_add_content(n_ls_fac, new_subid);		
			}
			else if ((n_ls_fac >= (document.nb_vues - 1) || document.layerslider_charge_n_layers != null) && justone == null)
			{
				$('#loading_infos').css('display', 'none');	 
				document.layerslider_charge_n_layers = null;						
				
			}
		}
		else if (n_lssub_fac == (document.frame_add_content_queue[n_ls_fac].length - 1) && justone == null)
		{
			$('#loading_infos').css('display', 'none');	 
			document.layerslider_charge_n_layers = null;					
		}
		
		
	}
	else if ((n_ls_fac >= (document.nb_vues - 1) || document.layerslider_charge_n_layers != null) && justone == null)
	{
		$('#loading_infos').css('display', 'none');	 
		document.layerslider_charge_n_layers = null;				
	}
}



function layerslider_menu_make (id_slider, n_ls, dom_ls, layerorsub, onlyvar)
{	
	
	var iframe_width = 240;
	var slayer_width = new Number(document.getElementById(document.id_du_layerslider).style.width.replace(REG_AZ_GI, ''));
	var slayer_height = new Number(document.getElementById(document.id_du_layerslider).style.height.replace(REG_AZ_GI, ''));
	
	var iframe_height = Math.round((iframe_width*slayer_height)/slayer_width);
	
	if (typeof(document.responsive_view) == 'undefined')
		document.responsive_view = '';	
	
	if (isNaN(iframe_height))
	{
		iframe_height = 130;	
		document.responsive_view = '&lsresp=1';	

	}
//	alert (dom_ls['style']+'\n\n'+slayer_width+' x '+slayer_height+' \n'+iframe_width+' x '+iframe_height);		
//	alert (list_DOMlayers[n_ls]);

	if (document.dom_ls_ce_sublayer == null)
		document.dom_ls_ce_sublayer = new Object();

	document.dom_ls_ce_sublayer[n_ls] = new Object();
	document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'] = new Object();
	document.dom_ls_ce_sublayer[n_ls]['sublayers_times'] = new Object();
	document.dom_ls_ce_sublayer[n_ls]['sublayers_htmlok'] = new Object();
	document.dom_ls_ce_sublayer[n_ls]['sublayers_htmltimeok'] = new Object();

	document.dom_ls_ce_sublayer[n_ls]['sublayers_list'] = [];

	if (typeof(list_DOMlayers) == 'undefined')
		list_DOMlayers = new Object();
		
	list_DOMlayers[n_ls] = '<'+dom_ls['nodeName']+' class="'+dom_ls['className']+'" style="'+dom_ls['style']+'">'+dom_ls['innerHTML']+'</div>';
	
//	if (document['inframe_layerslider_innerhtml_'+n_ls] == null)
//	{
	var OK_innerframe_Layer = list_DOMlayers[n_ls];
	
	OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_SRC_WITHOUT_HTTP, '$1'+serveur_url);
	OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_HREF_WITHOUT_HTTP, '$1'+serveur_url);
	OK_innerframe_Layer = OK_innerframe_Layer.replace(REG_URL_WITHOUT_HTTP, '$1'+serveur_url);
		
	document['inframe_layerslider_innerhtml_'+n_ls] = OK_innerframe_Layer;
//	}
	
		
	document.liste_src_frame[n_ls] = rep_layerSlider_Admin+'/view_slide.php?nls='+n_ls+'&ls_w='+document.layer_slider_width+'&ls_h='+document.layer_slider_height+document.responsive_view+'&gal='+rep_downLSA+galerie_rep+'/'+galerie_this_rep+'&serveururl='+serveur_url;
	document.liste_id_frame[n_ls] = 'iframelayerslider_'+n_ls;


	if (onlyvar == null)
	{
		var iframe = '<a id="divf_'+n_ls+'" href="#MemeEndroit" class="a_menu_calque" style="width:'+iframe_width+'px; height:'+iframe_height+'px; background-color:rgba(242, 240, 242, 1);"><img src="Image/spacer.gif" style="width:'+iframe_width+'px; height:'+iframe_height+'px;"></a>';
		
		iframe += '<iframe name="iframelayerslider_'+n_ls+'" id="iframelayerslider_'+n_ls+'" src="'+rep_layerSlider_Admin+'/iframe.php?a" frameborder=0 height="'+iframe_height+'" width="'+iframe_width+'" scrolling="no"></iframe>';


	}
	
	var nb_sublayers = 0;
	var nolssi = 0;
	
	var id_div_SL = id_slider+'_'+n_ls+'_original_sublayers';
	
	if (document.getElementById(id_div_SL) != null)
	{
		document.getElementById(id_div_SL).parentNode.removeChild(document.getElementById(id_div_SL));	
	}
	var div_original_sublayers = document.createElement('div');
	div_original_sublayers.id = id_div_SL;
	div_original_sublayers.style.display = 'none';
	
	document.getElementById('layerslider_layer_sublayers').appendChild(div_original_sublayers);

	var returnDOM_layer = oTo_html2DOM ('<div>'+list_DOMlayers[n_ls]+'</div>') ;
	document.getElementById(id_div_SL).appendChild(returnDOM_layer);
	
	var limitsouscalques = 5;
	
	for (lssi=-1; lssi<limitsouscalques; lssi++)
	{
		var lssi_str = new String(lssi);

	//	alert (lssi_str+'\n'+lssi);

// alert ("$('#'"+id_div_SL+"' .ls-layer .ls-s"+lssi_str+"')[0]\n\n"+$('#'+id_div_SL+' .ls-layer .ls-s'+lssi_str)[0]+'\n\n'+typeof($('#'+id_div_SL+' .ls-layer .ls-s'+lssi_str)[0]));

		if (typeof($('#'+id_div_SL+' .ls-layer .ls-s'+lssi_str)[0]) != 'undefined')
		{
			var sublayers = $('#'+id_div_SL+' .ls-layer .ls-s'+lssi_str);
			
			for (lssb=0; lssb<sublayers.length; lssb++)
			{
				var ce_sublayer = sublayers[lssb];
				var id_ce_sublayer = n_ls+'___'+lssi_str+'___'+lssb;
				
		//	alert (lssi_str+'\n'+lssi+'\n'+id_ce_sublayer);	
				
				document.dom_ls_ce_sublayer[n_ls]['sublayers_list'].push (id_ce_sublayer);
				
				document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer] = new Object();
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer] = new Object();
				document.dom_ls_ce_sublayer[n_ls]['sublayers_htmlok'][id_ce_sublayer] = '';
				document.dom_ls_ce_sublayer[n_ls]['sublayers_htmltimeok'][id_ce_sublayer] = 0;
				
				var sat = ce_sublayer.attributes;
				var style_attr = '';
				for (i=0; i < sat.length; i++) 
				{
					if (sat[i].name.toLowerCase() == 'style')
						style_attr += sat[i].value; 
				}
								
				document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['style'] = style_attr;	
				document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['className'] = ce_sublayer.className;		
				document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['nodeName'] = ce_sublayer.nodeName;	
				document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['innerHTML'] = ce_sublayer.innerHTML;
				
				if (typeof(ce_sublayer.src) != 'undefined')
					document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['src'] = ce_sublayer.src.replace (REG_IMGSRC_SUPPR_SERVEUR, '');	
				else
					document.dom_ls_ce_sublayer[n_ls]['sublayers_properties'][id_ce_sublayer]['src'] = '';	
				

				var le_delayin = new Number (style_attr.replace(REG_DELAYIN_VALUE_IN_STYLE, '$1'));
				var le_delayout = new Number (style_attr.replace(REG_DELAYOUT_VALUE_IN_STYLE, '$1'));
				var le_durationin = new Number (style_attr.replace(REG_DURATIONIN_VALUE_IN_STYLE, '$1'));
				var le_durationout = new Number (style_attr.replace(REG_DURATIONOUT_VALUE_IN_STYLE, '$1'));
				var le_showuntil = new Number (style_attr.replace(REG_SHOWUNTIL_IN_STYLE, '$1'));


				//durationin,durationout,delayin,delayout
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer]['delayin'] = le_delayin;
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer]['durationin'] = le_durationin;
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer]['delayout'] = le_delayout;
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer]['durationout'] = le_durationout;
				document.dom_ls_ce_sublayer[n_ls]['sublayers_times'][id_ce_sublayer]['showuntil'] = le_showuntil;
		
		//		rapport += id_ce_sublayer+'\n'+le_delayin+'\n'+le_durationin+'\n'+le_delayout+'\n'+le_durationout+'\n\n';				
				
			}
		}
		else
			nolssi ++;
		
		
		if (lssi == (limitsouscalques-1) && nolssi <= 10)	
		{
		//	alert ('plus de '+limitsouscalques+' calques...');
			limitsouscalques = limitsouscalques+5;	
		}
		
		if (nolssi > 10)
			lssi = 10000;
	}
	
	// alert (rapport);
	
	if (onlyvar == null)	
	{
		//		document.getElementById(id_slider+'_original_sublayers').removeChild (returnDOM_layer);
		
		// console.log(iframe_height+' '+iframe_width);
		
		var iframe_minis_height_tools = Math.round(iframe_height/2) - 20;
		
		var iframe_minis_height = Math.round(iframe_height/2);
		var iframe_minis_width = Math.round((iframe_width/2) + 8);
	
		var iframe_minis_height_div = Math.round(iframe_height/2) + 32;
		var iframe_minis_width_div = (document.dom_ls_ce_sublayer[n_ls]['sublayers_list'].length + 1) * iframe_minis_width;
		
		var returnHTML = document.getElementById('layerslider_form_modele').innerHTML;
		
		
		returnHTML = add_sublayers_forms(n_ls, returnHTML);
		
		returnHTML = returnHTML.replace(REG_IFRAME, iframe);
		
		returnHTML = returnHTML.replace(REG_N_LS, n_ls.toString());
		
		returnHTML = returnHTML.replace(REG_IFRAME_MINI_H_TOOLS, iframe_minis_height_tools.toString());
		returnHTML = returnHTML.replace(REG_IFRAME_MINI_H_DIV, iframe_minis_height_div.toString());
		
		returnHTML = returnHTML.replace(REG_IFRAME_MINI_W_DIV, iframe_minis_width_div.toString());
	
		returnHTML = returnHTML.replace(REG_IFRAME_MINI_H, iframe_minis_height.toString());
		returnHTML = returnHTML.replace(REG_IFRAME_MINI_W, iframe_minis_width.toString());
		
		returnHTML = returnHTML.replace(REG_CLASS_LSLAYER_VALUE, dom_ls['className']);
		returnHTML = returnHTML.replace(REG_NODE_LSLAYER_VALUE, dom_ls['nodeName']);
	
		var allstyles = dom_ls['style'];
		
		var T_allstyles = [];
		
		if (allstyles.match(REG_PT_VIRGULE))
			T_allstyles = allstyles.split(REG_PT_VIRGULE);
		else
			T_allstyles.push(allstyles);
		
		
		var nb_styles = T_allstyles.length;
		
		var style_css = '';
		var style_slider = '';
	
		for (zc=0; zc<nb_styles; zc++)
		{
			var castyle = T_allstyles[zc].replace(REG_TRIM, '');
			// alert (castyle);
			
			if (castyle.match(REG_SL))
			{
				style_slider += castyle+';\n';
			}
			else if (castyle != '')
			{
	//			alert (' -> '+castyle);
				style_css += castyle+';\n';
			}
			
		}
		
		returnHTML = returnHTML.replace(REG_STYLE_LSLAYER_VALUE, style_css);
		returnHTML = returnHTML.replace(REG_SLIDER_LSLAYER_VALUE, style_slider);
	
		if (dom_ls['datahide'] == '')
			returnHTML = returnHTML.replace(REG_VIEWING_LSLAYER_VALUE, 'checked');
		else
			returnHTML = returnHTML.replace(REG_VIEWING_LSLAYER_VALUE, '');			
	
		returnHTML = returnHTML.replace(/___nvue_ls___/g, (n_ls+1).toString());

		returnHTML = returnHTML.replace(REG_SRC_LAYER_VALUE, dom_ls['img_bg']);
		returnHTML = returnHTML.replace(REG_SRCAPERCU_LAYER_VALUE, dom_ls['img_apercu']);
		
	
		return (returnHTML);
	}
}

function affiche_settingsmenu ()
{
	if (document.getElementById('Admin_menubase_settings').style.display == 'block')
    {
		$('#Admin_menubase_settings').css ('display', 'none');
		if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', 'auto');
	}
	else
    {
		$('#Admin_menubase_settings').css ('display', 'block');
		if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', '220px');
	}
	
}

function affiche_formvues ()
{
	
    if (document.getElementById('htmlform_layer').style.display == 'block') 
    { 
    	$('#htmlform_layer').css('display', 'none'); 
		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
		
        document.getElementById('layerslider_admin').className = '';
    } 
	else 
    { 
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');

		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');

    	if (document.getElementById('htmlform_layer').innerHTML == '') 
		{
			$('#loading_infos').css('display', 'block');			
			layerSlider_list (document.id_du_layerslider); 
			
		}
        else 
        { 

			$('#htmlform_layer').css('display', 'block');
            document.getElementById('layerslider_admin').className = 'opened';
        }
    }
}

function affiche_config ()
{
	$('#Admin_menubase_settings').css ('display', 'none');
	if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', 'auto');

    if (document.getElementById('slider_config_div').style.display == 'block') 
    { 
    	$('#slider_config_div').css('display', 'none'); 
        document.getElementById('layerslider_admin').className = '';
		
		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
		
    } 
	else 
    { 
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');
    	$('#htmlform_layer').css('display', 'none'); 

		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');

		$('#slider_config_div').css('display', 'block');

		if (document.getElementById('ex_slider_config_form').value == '')
			document.getElementById('ex_slider_config_form').value = document.getElementById('slider_config_form').value;
		

		if (document['myCodeMirror_config'] == null)
			document['myCodeMirror_config'] = CodeMirror.fromTextArea(document.getElementById('slider_config_form'), { mode:  "javascript", lineWrapping: true, lineNumbers: true, theme:'xq-light' } );	
	
		document.getElementById('layerslider_admin').className = 'opened';
	}
}

function save_settings (configoucss)
{
	document['myCodeMirror_'+configoucss].save();
	var value = document.getElementById('slider_'+configoucss+'_form').value;

	if (configoucss == 'css')
	{
		document.getElementById('slider_'+configoucss).innerHTML = '';
		document.getElementById('slider_'+configoucss).innerHTML = value;
	}
	else if (configoucss == 'style')
	{
		document.getElementById(document.id_du_layerslider).setAttribute('style', '');
		document.getElementById(document.id_du_layerslider).setAttribute('style', value);
	}
/*
	else
	{
		eval(value);
		slider_apply_modifications (1);
	}
*/	
//	save_layerslider();	
}

function annule_settings (configoucss)
{
	var svg = document.getElementById('ex_slider_'+configoucss+'_form').value;
	document.getElementById('slider_'+configoucss+'_form').value = svg;
	document['myCodeMirror_'+configoucss].setValue (svg);
}

function affiche_styleslider ()
{
	$('#Admin_menubase_settings').css ('display', 'none');
	if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', 'auto');

    if (document.getElementById('slider_style_div').style.display == 'block') 
    { 
    	$('#slider_style_div').css('display', 'none'); 
        document.getElementById('layerslider_admin').className = '';
		
		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
    } 
	else 
    { 
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
    	$('#slider_css_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');
    	$('#htmlform_layer').css('display', 'none'); 
		
		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');
	
		$('#slider_style_div').css('display', 'block');
		
		if (document.getElementById('ex_slider_style_form').value == '')
			document.getElementById('ex_slider_style_form').value = document.getElementById('slider_style_form').value;

		if (document['myCodeMirror_style'] == null)
			document['myCodeMirror_style'] = CodeMirror.fromTextArea(document.getElementById('slider_style_form'), { mode:  "css", lineWrapping: true, lineNumbers: true, theme:'xq-light'  });	
		
		document.getElementById('layerslider_admin').className = 'opened';
    }
}

function affiche_styleCSS ()
{
	$('#Admin_menubase_settings').css ('display', 'none');
	if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', 'auto');

    if (document.getElementById('slider_css_div').style.display == 'block') 
    { 
    	$('#slider_css_div').css('display', 'none'); 
        document.getElementById('layerslider_admin').className = '';

		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
    } 
	else 
    { 
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
    	$('#htmlform_layer').css('display', 'none'); 
		
		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');
	
		$('#slider_css_div').css('display', 'block');
		
		if (document.getElementById('ex_slider_css_form').value == '')
			document.getElementById('ex_slider_css_form').value = document.getElementById('slider_css_form').value;

		if (document['myCodeMirror_css'] == null)
			document['myCodeMirror_css'] = CodeMirror.fromTextArea(document.getElementById('slider_css_form'), { mode:  "css", lineWrapping: true, lineNumbers: true, theme:'xq-light'  });	
		
		document.getElementById('layerslider_admin').className = 'opened';
    }
}

function affiche_sauvegardes ()
{
	$('#Admin_menubase_settings').css ('display', 'none');
	if (document.getElementById('layerslider_admin').className == '') $('#layerslider_admin').css('height', 'auto');
	
    if (document.getElementById('slider_sauvegardes_div').style.display == 'block') 
    { 
    	$('#slider_sauvegardes_div').css('display', 'none'); 
        document.getElementById('layerslider_admin').className = '';

		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	

    } 
	else 
    { 
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
    	$('#htmlform_layer').css('display', 'none'); 
		
		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');
	
		$('#slider_sauvegardes_div').css('display', 'block');		
		window['iframe_slider_sauvegardes'].location.href = rep_layerSlider_Admin+'/saved_sliders.php?repls='+galerie_rep+'/'+galerie_this_rep;

		document.getElementById('layerslider_admin').className = 'opened';
    }
}



function affiche_imagespreload () 
{
    if (document.getElementById('preload_slider_imgs').style.display == 'block') 
    {
    	$('#preload_slider_imgs').css('display','none'); 
        document.getElementById('layerslider_admin').className = '';

		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
    }
    else 
    { 
         document.getElementById('layerslider_admin').className = 'opened';
	
		$('#htmlform_layer').css('display', 'none');
		
		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');
		
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');
	
    	$('#preload_slider_imgs').css('display', 'block'); 
        $('#preload_slider_imgs').css('width', '750px'); 
        $('#preload_slider_imgs').css('height', 'auto'); 
        $('#preload_slider_imgs').css('maxHeight', '300px'); 
        $('#preload_slider_imgs').css('overflow', 'hidden'); 
        $('#preload_slider_imgs').css('overflowY', 'auto');
        $('#preload_slider_imgs').css('position', 'relative'); 
        $('#preload_slider_imgs').css('marginTop', '20px'); 
    }
}

function affiche_capi () 
{
    if (document.getElementsByClassName('c-api')[0].style.display == 'block') 
    {
    	document.getElementsByClassName('c-api')[0].style.display = 'none'; 
        document.getElementById('layerslider_admin').className = '';
		$('#Admin_menubase').css('position', 'absolute');
		$('#Admin_menubase').css('margin-top', '0px');	
    }
    else 
    { 
        document.getElementById('layerslider_admin').className = 'opened';
		$('#htmlform_layer').css('display', 'none');
		
		$('#Admin_menubase').css('position', 'fixed');
		$('#Admin_menubase').css('margin-top', '15px');
						
    	$('#preload_slider_imgs').css('display', 'none'); 
    	$('#slider_config_div').css('display', 'none'); 
		$('#slider_css_div').css('display', 'none');
    	$('#slider_style_div').css('display', 'none'); 
		$('#slider_sauvegardes_div').css('display', 'none');
	
    	$('.c-api')[0].style.display = 'block'; 
        $('.c-api')[0].style.width = '750px'; 
        $('.c-api')[0].style.height = 'auto'; 
        $('.c-api')[0].style.maxHeight = '300px'; 
        $('.c-api')[0].style.overflow = 'hidden'; 
        $('.c-api')[0].style.overflowY = 'auto';
        $('.c-api')[0].style.position = 'relative'; 
        $('.c-api')[0].style.marginTop = '20px'; 
    }
}


function layerSlider_list (id_slider, layer_id, layer_DOM)
{
	
	document.getElementById('htmlform_layer').style.display = 'block';
	
	$('#loading_infos').css('display', 'block');
	document.getElementById('loading_infos_txt').innerHTML = 'création de la liste des vues...';	 	

	if (document.getElementById('loading_image_admin').src == serveur_url || document.getElementById('loading_image_admin').src == '' || document.getElementById('loading_image_admin').src == serveur_url+'spacer.gif') 
	{
		document.getElementById('loading_image_admin').src = loading_image_admin;
	}
	
	$('#'+id_slider).layerSlider ('stop');
	
// ne marche pas : => la navigation au clavier (layerSlider.keybNav) doit être désactivée.

//	document.memo_ls_keybNav = $('#'+id_slider).layerSlider.keybNav ;
//	$('#'+id_slider).layerSlider.keybNav = false;
//	alert (document.memo_ls_keybNav+'\n'+$('#'+id_slider).layerSlider.keybNav);
	

	document.getElementById('layerslider_admin').className = 'opened';
	
	rapport = '';
	
	document.getElementById(id_slider+'_original').innerHTML = '' ;	
	
	if (layer_id != null && layer_DOM != null)
	{
		var le_DOM_voulu = layer_DOM;
		
		if (layer_id.match(/___/))
		{
			var leids = layer_id.split(/___/g);
			var layer_idls = new Number (leids[0]);
			var layer_idsubls = layer_id;
			
			var num_aad_obj_ls = layer_idls;
		}
		else
		{			
			var layer_idls = new Number (layer_id);
			var layer_idsubls = '';
			var num_aad_obj_ls = document.nb_vues;
			
			
		}
		
		document.getElementById(id_slider+'_original').appendChild(le_DOM_voulu) ;

		var classNames_realcount = new Object();
		var sliderDOM = $('#'+id_slider+'_original .ls-layer');
		
		
		
	}
	else
	{
		var le_DOM_voulu = document.slider_original_DOMcopy ;		
	
		document.getElementById(id_slider+'_original').appendChild(le_DOM_voulu) ;

		var classNames_realcount = new Object();
		var sliderDOM = $('#'+id_slider+'_original .ls-layer');
		
		if (document.layerslider_listemenu == null)
			document.layerslider_listemenu = new Object();
					
		document.liste_src_frame = [];
		document.liste_id_frame = [];
		document.frame_add_content_queue = [];	
		document.nb_loaded_vues = 0;
		document.nb_vues = sliderDOM.length;

		var num_aad_obj_ls = 0;
	}
	

	for (lsi=0; lsi< sliderDOM.length; lsi++)
	{
		
// alert ('nouvelle vue ou sous-calque : '+lsi+' + '+num_aad_obj_ls + ' ; sliderDOM.length: '+sliderDOM.length);	

		make_layerslider_listemenu (lsi, num_aad_obj_ls, id_slider);
				
		var layerslider_htmlform = layerslider_menu_make(id_slider, lsi+num_aad_obj_ls, document.layerslider_listemenu[lsi+num_aad_obj_ls], 'layer');
			
		var returnHTML = document.getElementById('htmlform_layer_tmp').innerHTML;
	
		returnHTML = returnHTML.replace(REG_LAYERS_AND_SUB, layerslider_htmlform);
		returnHTML = returnHTML.replace(REG_LSNUM, (lsi+num_aad_obj_ls).toString());
		returnHTML = returnHTML.replace(REG_SLIDER_ADMINREP, rep_layerSlider_Admin);


		var returnDOM = oTo_html2DOM (returnHTML) ;
		
		
		
		
		if (layer_id != null && layer_DOM != null)
		{
	//		var layer_idls = new Number (leids[0]);
	//		var layer_idsubls = layer_id; ou '';
			
			document.layerslider_charge_n_layers = layer_idls;
			
			var les_lis_form = $('#htmlform_layer .htmlform_layer_LI');
			
			for (lli=0; lli < les_lis_form.length; lli++)
			{
				if (les_lis_form[lli].id == 'LS_adminLI_'+layer_idls)
				{
	
					var le_n_ls_suivant = lli;
	
					if (layer_idsubls == '')
						le_n_ls_suivant ++;
					
					var elementforbefore = document.getElementById('LS_adminLI_'+le_n_ls_suivant);
					
					lli = 	les_lis_form.length+1;
				}
			}
			
			
						
			if (layer_idsubls == '')
			{
				// ajoute un layer... donc quel est ce layer, et insertbefore le layer suivant
			//	document.getElementById('htmlform_layer').insertBefore(returnDOM, elementforbefore);
				
				
				document.getElementById('LI_for_insertbefore').parentNode.insertBefore (returnDOM, document.getElementById('LI_for_insertbefore'));
			}
			else
			{
				// ajoute un sous-calque... donc quel est ce layer, pour insertbefore le layer suivant, supprime ce LI du form, et insertbefore
				
				document.getElementById('htmlform_layer').removeChild(document.getElementById('LS_adminLI_'+layer_idls));
	//			document.getElementById('htmlform_layer').insertBefore(returnDOM, elementforbefore);
	
				document.getElementById('LI_for_insertbefore').parentNode.insertBefore (returnDOM, document.getElementById('LI_for_insertbefore'));
	
			}
			
		}
		else
		{
			document.getElementById('htmlform_layer').appendChild(returnDOM);
		}
		
		

	}
	
// alert ('num_aad_obj_ls: '+num_aad_obj_ls+' nom iframe: '+document.liste_id_frame[num_aad_obj_ls]);


	var txtloading = 'chargement vue '+num_aad_obj_ls+' '; 
	document.getElementById('loading_infos_txt').innerHTML = txtloading;	

//	alert (document.liste_id_frame[num_aad_obj_ls]+' \n'+document.liste_src_frame[num_aad_obj_ls]);

	document.getElementById(document.liste_id_frame[num_aad_obj_ls]).src = document.liste_src_frame[num_aad_obj_ls];			
	document.getElementById(id_slider+'_original').removeChild(le_DOM_voulu) ;
	
	
	var rapplayers = $('#htmlform_layer .htmlform_layer_LI') ;
	var rappiort = 'liste et ordre des LI du form : \n';
	
	for (rt=0; rt < rapplayers.length; rt ++)
	{
		var cerapplay = rapplayers[rt];
		var cerapplayid = cerapplay.id.replace(/^.+([0-9]+)$/, '$1');
		rappiort += rt+' : '+document.getElementById('node_lslayer_'+cerapplayid).value+' .'+document.getElementById('class_lslayer_'+cerapplayid).value+' #'+cerapplay.id+'\n';
	}
//	alert (rappiort);
	
	if (document.getElementById('LI_for_insertbefore') != null)
		document.getElementById('LI_for_insertbefore').parentNode.removeChild (document.getElementById('LI_for_insertbefore'));
	
	reset_onchange_events();
	
//	alert (sliderDOM.length+' --- \n\n'+rapport);
}


function make_layerslider_listemenu (lsi, num_aad_obj_ls, id_slider)
{

	var sliderDOM = $('#'+id_slider+'_original .ls-layer');
	
	document.layerslider_listemenu[lsi+num_aad_obj_ls] = new Object();
	
	var sliderDOM_style_ls = ''; 
	var sliderDOM_datahide_ls = ''; 
	
	var at = sliderDOM[lsi].attributes;
	for (i=0; i < at.length; i++) 
	{
		if (at[i].name.toLowerCase() == 'style')
			sliderDOM_style_ls = at[i].value; 
			
		if (at[i].name.toLowerCase() == 'data-hide')
			sliderDOM_datahide_ls = at[i].value; 			
	}
	
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['nodeName'] = sliderDOM[lsi].nodeName;
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['className'] = sliderDOM[lsi].className;
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['style'] = sliderDOM_style_ls;						
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['datahide'] = sliderDOM_datahide_ls;						

	document.layerslider_listemenu[lsi+num_aad_obj_ls]['innerHTML'] = sliderDOM[lsi].innerHTML;
	
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['img_bg'] = '';
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['img_apercu'] = '';
	
	var exid = '';
	if (sliderDOM[lsi].id != '')
		exid = sliderDOM[lsi].id;
		
	sliderDOM[lsi].id = 'find_images';
	
	if (typeof($('#'+id_slider+'_original #find_images .ls-bg')[0]) != 'undefined' && typeof($('#'+id_slider+'_original #find_images .ls-bg')[0].src) != 'undefined')
		document.layerslider_listemenu[lsi+num_aad_obj_ls]['img_bg'] = $('#'+id_slider+'_original #find_images .ls-bg')[0].src.replace (REG_IMGSRC_SUPPR_SERVEUR, '');	


	if (typeof($('#'+id_slider+'_original #find_images .ls-tn')[0]) != 'undefined' && typeof($('#'+id_slider+'_original #find_images .ls-tn')[0].src) != 'undefined')
		document.layerslider_listemenu[lsi+num_aad_obj_ls]['img_apercu'] = $('#'+id_slider+'_original #find_images .ls-tn')[0].src.replace (REG_IMGSRC_SUPPR_SERVEUR, '');
	
	sliderDOM[lsi].id = exid;
	
//	alert ('-'+document.layerslider_listemenu[lsi]['img_bg']+'-\n-'+document.layerslider_listemenu[lsi]['img_apercu']+'-');
	
	var le_timeshift = new Number (sliderDOM_style_ls.replace(REG_TIMESHIFT_VALUE_IN_STYLE, '$1'));
	var le_slidedelay = new Number (sliderDOM_style_ls.replace(REG_SLIDEDELAY_VALUE_IN_STYLE, '$1'));

	document.layerslider_listemenu[lsi+num_aad_obj_ls]['timeshift'] = le_timeshift;
	document.layerslider_listemenu[lsi+num_aad_obj_ls]['slidedelay'] = le_slidedelay;
	
}



function kel_ID_sorting (kelid)
{	
//	document.html_form_LI_insorting = kelid;
}

function make_sortable_sublayers (sublid, ifcancel)
{
	if (ifcancel == null)
		ifcancel = '';
	
	var lsid = sublid.replace(/^[a-z]+_([0-9]+)_.+$/, '$1');
	var lssid = sublid.replace(/^[a-z]+_([0-9]+_.+)$/, '$1');
	
	var frame = document['frame_'+lsid+'_'+lssid];
	
	var divinmove = document.getElementById('divsl_'+lssid);
	
	document.memo_sub_className = divinmove.className;
	
	if (divinmove.className != '')
		divinmove.className += ' ';

	divinmove.className += ' in_sort';

		
	if (ifcancel == '')
    {
		var rap ='';
		if (frame.contentDocument)
		{
			var frame_html = frame.contentDocument.getElementsByTagName('html')[0].innerHTML;
			rap += 'frame.contentDocument existe';
		}
		else
		{			
			var frame_html = window.frames["iframelayerslider_"+lssid].document.getElementsByTagName('html')[0].innerHTML;			
			rap += 'frame.contentDocument existe PAS... window.frames["iframelayerslider_"+lssid] ??';
				
		}
		
		console.log(rap+' \niframelayerslider_'+lssid+'  frame_'+lsid+'_'+lssid);
			
		frame_html = '<!DOCTYPE HTML><html>'+frame_html+'<html>';	
		
		$.ajax({
			type: "POST",
			url: rep_layerSlider_Admin+"/tmp_sublayer.php",
			data: { 'frame_html': frame_html }
		})
		.done(function( msg ) { /*alert (msg);*/ });	
		
		
		
		masque_otherLI_tools();
		
		$('#layers_list').disableSelection();
		
		var id_sous_calk = 'divsl_'+lssid;
		var id_parent_subl = document.getElementById(id_sous_calk).parentNode.id;
		
		document.sublayers_DIV_insorting = id_sous_calk+';'+id_parent_subl+';';
		document.sublayers_DIV_inmemory = document.getElementById(id_sous_calk).cloneNode(true);
		

		var lesfils = document.getElementById(id_parent_subl).childNodes;
		
		var nodesuivant = '';	
							
							
		for (var iz = 0; iz < lesfils.length; iz++)
		{
			
			var cefils = lesfils[iz];
			
			if (cefils.nodeType == 1 && typeof(cefils.id) == 'string' && cefils.id.match(/^divsl_/))
			{
				if (nodesuivant == 'ok')
				{
					document.sublayers_DIV_insorting += cefils.id;
					iz = lesfils.length;
				}
				
				if (cefils.id == id_sous_calk)
					nodesuivant = 'ok';
				
				
			}
			
		}					
		
		var idsdessort_cl = document.getElementsByClassName('sublayers_list');
		var liste_ids_sort = '';
		for (ty=0; ty< idsdessort_cl.length; ty++)
		{
			if (idsdessort_cl[ty].id != 'sublayers_ls___n_ls___')
			{
				if (liste_ids_sort != '')
					liste_ids_sort += ', ';
				
				liste_ids_sort += '#'+idsdessort_cl[ty].id;
			}
		}
		
		$('.sublayers_list').sortable({ 
			cursor: 'move', 
			forceHelperSize: true, 
			forcePlaceholderSize: true , 

			connectWith: liste_ids_sort,
			axis: false,
			scroll: true,
			items: "> div",

			appendTo: '#layers_list',
			helper : 'clone',
			
			placeholder: "sortable-placeholder",
			forceHelperSize: true,
			forcePlaceholderSize: true,

			
			start: function( event, ui ) {
			//	console.log ('start sortable');
				},
				
			
			stop: function( event, ui ) {

					var rapport = '';		
					
					var position_sl = ui.item.index();
					var id_sl = ui.item.context.id;
					
					var id_container_sl = document.getElementById(id_sl).parentNode.id;

					rapport = 'position_sl: '+position_sl+' - id_sl: '+id_sl+' - id_container_sl: '+id_container_sl;
								
					make_sortable_sublayers(id_sl, 'fin');
			
								
								
					var id_sl_copy = id_sl.replace(/^[a-z]+_(.+)$/i, '$1');
					
					var is_end = '';
					
					if (document.getElementById(id_container_sl).getElementsByTagName('iframe')[position_sl+1] != 'undefined')
						var id_sl_before = document.getElementById(id_container_sl).getElementsByTagName('iframe')[position_sl+1].id.replace(/^[a-z]+_(.+)$/i, '$1');
					else
					{
						var id_sl_before = document.getElementById(id_container_sl).getElementsByTagName('iframe')[position_sl-1].id.replace(/^[a-z]+_(.+)$/i, '$1');
						is_end = 'at_end'
					}
					
					var idlo = id_sl_copy.replace(/^([0-9]+)_.+$/, '$1');
					var idlp = id_sl_before.replace(/^([0-9]+)_.+$/, '$1');
			//		alert ('new_sublayer_from ('+id_sl_copy+', '+id_sl_before+');');
					
					console.log ('idlo: -'+idlo+'- ==? idlp: -'+idlp+'-');
					
					if (idlo != idlp)
						new_sublayer_from (id_sl_copy, id_sl_before, is_end);	
					
					
			//		remake_DOMcopy();
					
								
				}
		}); 

		
    }
    else
    {
		
		aide_deplacer('ferme');  
		
		$('.sublayers_list').sortable( "destroy" );    
		$('#layers_list').enableSelection();
		divinmove.style.backgroundColor = document.memo_sub_bg;
		divinmove.style.border = document.memo_sub_bord;
	
				
    }

}

function make_sortable_htmform (ifcancel)
{

	if (ifcancel == null)
		ifcancel = '';
	
	
	if (ifcancel == '')
    {
		masque_otherLI_tools();
		
		$('#htmlform_layer').sortable({ 
			cursor: 'move', 
			forceHelperSize: true, 
			forcePlaceholderSize: true , 
			axis: "y",
			scroll: true,
			items: "> li",
			
			start: function( event, ui ) {			
					document.html_form_LI_insorting = ui.item.context.id;
				
				},
				
			
			stop: function( event, ui ) {
					document.htmlform_LI_order = $("#htmlform_layer").sortable('toArray');
											
					make_sortable_htmform('fin');
					remake_LI_htmform ();
				}
		}); 
	
		$('#htmlform_layer').sortable( "refresh" );    		
		$('.protect_sorting').css('display', 'block');
		
    }
    else
    {
		
		$('#htmlform_layer').sortable( "destroy" );    
		$('.protect_sorting').css('display', 'none');		
    }
}



function remake_LI_htmform ()
{
	var id_slider = document.id_du_layerslider;
	var id_du_li = document.html_form_LI_insorting;
	var id_ref = id_du_li.replace(/^.+_([0-9]+)$/, '$1');
	
	document.remake_iframe_html = id_ref;
	
	var ide_ref_num = new  Number (id_ref);
	
	remake_DOMcopy ();
		
	document.getElementById('sublayers_ls'+ide_ref_num).innerHTML = '';
	document.getElementById(document.liste_id_frame[ide_ref_num]).src = document.liste_src_frame[ide_ref_num];				
	
}

function remake_DOMcopy ()
{
	document.slider_original_DOMcopy = null;
	var new_slider_dom = slider_form_2_html ();	
}

