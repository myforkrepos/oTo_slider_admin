<?

$base_url_images = $_GET['serveururl'];

?><!DOCTYPE HTML>
<html style="margin:0; padding:0;">
	<head>
		<title>Périphérique Nord Informations</title>
		<link rel="stylesheet" href="../LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css" type="text/css">
        
<!--
		<link rel="stylesheet" href="../LayerSlider-4.6.1-standalone/assets/css/style.css" type="text/css">
-->
		<!--[if lt IE 9]>
			<script src="../LayerSlider-4.6.1-standalone/assets/js/html5.js"></script>
		<![endif]-->
        
		<script src="../LayerSlider-4.6.1-standalone/layerslider/jQuery/jquery.js" type="text/javascript"></script>
		<script src="../LayerSlider-4.6.1-standalone/layerslider/jQuery/jquery-easing-1.3.js" type="text/javascript"></script>
    	<script src="../LayerSlider-4.6.1-standalone/layerslider/jQuery/jquery-transit-modified.js" type="text/javascript"></script>
	
    	<script src="../LayerSlider-4.6.1-standalone/layerslider/js/layerslider.transitions.js" type="text/javascript"></script>
		<script src="../LayerSlider-4.6.1-standalone/layerslider/js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script>
    	<script type="text/javascript">

			ok_id = '<? echo $_GET['nls']; ?>'.replace(window.parent.REG_IDXLS_IN_SUBLS, '$1');
			
			
			ceslide = window.parent.document['inframe_layerslider_innerhtml_'+ok_id];
			
			
			function size_stop_frame ()
			{
	//			window.parent.document.getElementById('iframelayerslider_<? echo $_GET['nls']; ?>').style.width = "300px";	
	//			window.parent.document.getElementById('iframelayerslider_<? echo $_GET['nls']; ?>').style.height = "200px";	

				var delayoutslider_max = 3500;

				var ls_timeshift = window.parent.document.layerslider_listemenu[ok_id]['timeshift'];
				var ls_slidedelay = window.parent.document.layerslider_listemenu[ok_id]['slidedelay'];

				var les_subs = window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_list'];
				
				if (typeof(les_subs) != 'undefined')
				{	
					nb_scalques = les_subs.length;
					nb_scalques_ishtmlcopied = 0;

					if (nb_scalques == 0)
						setTimeout ("make_sublayers_btn('"+ok_id+"')", 1000);


					for (rt=0; rt<nb_scalques; rt++)
					{
						if (typeof(les_subs[rt]) != 'undefined')
						{
							var id_subsl = les_subs[rt];
							
					//		alert (id_subsl+'\n(id subl dans view... pour choper les temps...)');
							
							var les_temps_cesubslider = window.parent.document['dom_ls_ce_sublayer'][ok_id]['sublayers_times'][id_subsl];
							
							
							
							/////////////////////////////////////////
							
							var rappconsole = id_subsl+'\n';
							
							for (propri in les_temps_cesubslider)
							{
								rappconsole += propri+' : '+les_temps_cesubslider[propri]+'\n';	
							}
							
				// console.log (rappconsole+'\n');
				 
				 /////////////////////////////////////////////////////
				 
				 
							
							if ( !isNaN(les_temps_cesubslider['showuntil']) && les_temps_cesubslider['showuntil'] != 0)
							{
								var delayoutslider = les_temps_cesubslider['showuntil'];
								
								if (!isNaN(les_temps_cesubslider['delayin']) && les_temps_cesubslider['delayin'] > 0)
								{
									delayoutslider = delayoutslider + les_temps_cesubslider['delayin'];
									
									if (!isNaN(les_temps_cesubslider['durationin']) && les_temps_cesubslider['durationin'] > 0)
									{
										delayoutslider = delayoutslider + les_temps_cesubslider['durationin'];
										
									}
								}
				rappconsole += ' -> via showuntil : '+delayoutslider;

							}
							else if (isNaN(les_temps_cesubslider['delayout']) || les_temps_cesubslider['delayout'] == 0)
							{
								if (ls_slidedelay == null || ls_slidedelay == 0 || ls_slidedelay == '')
									var delayoutslider = 3500;
								else
									var delayoutslider = ls_slidedelay;
								
			//					alert (typeof(window.parent.document['layerslider_listemenu'][ok_id]['slidedelay'])+'\n'+typeof(window.parent.document['layerslider_listemenu'][ok_id]['timeshift']) );
				//				alert (window.parent.document['layerslider_listemenu'][ok_id]['slidedelay']+'\n'+window.parent.document['layerslider_listemenu'][ok_id]['timeshift'] );
								// 		document.layerslider_listemenu[lsi]['timeshift'] = le_timeshift;
		
								var slidedelay_a = new Number (window.parent.document['layerslider_listemenu'][ok_id]['slidedelay']);
								var timeshift_a = new Number (window.parent.document['layerslider_listemenu'][ok_id]['timeshift']);
		
								if (slidedelay_a != 'NaN')	
									delayoutslider = slidedelay_a;
								
								if (timeshift_a != 'NaN' && delayoutslider > timeshift_a)
									delayoutslider += timeshift_a;
								
				 // console.log (id_subsl+' -> via no delayout : '+delayoutslider);
				rappconsole += ' -> via no delayout : '+delayoutslider;

							}
							else
							{

								if (ls_slidedelay == null || ls_slidedelay == 0 || ls_slidedelay == '')
									var delayoutslider = les_temps_cesubslider['delayout'];
								else
									var delayoutslider = ls_slidedelay - les_temps_cesubslider['delayout'];
								
				 // console.log (id_subsl+' -> via else : '+delayoutslider);
				rappconsole += ' -> via else : '+delayoutslider;
							}
							setTimeout("html_subsl_attime ('"+id_subsl+"', "+delayoutslider+");", delayoutslider - 100 );
						
							
							if (delayoutslider_max < delayoutslider)
								delayoutslider_max = delayoutslider;
								
								
							rapport += "html_subsl_attime ('"+id_subsl+"', "+delayoutslider+")+'\n";
							
							
				 // console.log (rappconsole+'\nls_timeshift: '+ls_timeshift+'\nls_slidedelay: '+ls_slidedelay+'\n');
							
						
						}
					}
rapport += '_____________________\n';				
					
					
				}
			}
			
			rapport = '';
			
			function slider_stop ()
			{
				$('#layerslider_<? echo $_GET['nls']; ?>').layerSlider('stop');
			}
		

			function html_subsl_attime (id_subsl, les_temps_cesubsliderA)
			{
				 // console.log (id_subsl+' '+les_temps_cesubsliderA);
				
				nd = new Date();
				var temps = nd-d;
				 // console.log ('temps slider: '+temps+' = '+d+' - '+nd+' ');
				
				
				var ok_num_sublayer = id_subsl.split('___');

			//	alert ('$(\'.ls-layer .ls-s'+ok_num_sublayer[1]+')['+ok_num_sublayer[2]+']');
				var sublayer = $('.ls-layer .ls-s'+ok_num_sublayer[1])[ok_num_sublayer[2]];
				
				sublayer.id = 'fullopacity';
			
				var htmldudoc  = '';
				htmldudoc = document.getElementsByTagName('html')[0].innerHTML.replace(window.parent.REG_SUPPR_ST_LIGNES, ' ');
				

				nd = new Date();
				var temps = nd-d;
				 // console.log ('temps slider: '+temps+' = '+d+' - '+nd+' ');

	//			var css_subl = '.ls-layer > *, .ls-inner .ls-layer > * { opacity:0.15; } .ls-layer .fullopacity, .ls-inner .ls-layer .fullopacity { box-shadow:5px 5px 8px black; border:#FFF 2px solid; outline:#666 1px 1px solid;	 } .ls-layer .fullopacity, .ls-layer .fullopacity > *, .ls-inner .ls-layer .fullopacity, .ls-inner .ls-layer .fullopacity > * { opacity:1; } #layerslider-container { transform:scale(0.5); transform-origin:left top; }';
				
				var css_subl = '.ls-inner div > * { opacity:0.3; } #fullopacity { z-index:10; box-shadow:5px 5px 8px black; border:#FFF 2px solid; outline:#666 1px 1px solid;	opacity:1; } #fullopacity > * { opacity:1; } #layerslider-container { transform:scale(0.5); transform-origin:left top; -o-transform: scale(0.5);  -o-transform-origin:left top; -ms-transform: scale(0.5); -ms-transform-origin:left top; -moz-transform: scale(0.5); -moz-transform-origin:left top; -webkit-transform: scale(0.5);  -webkit-transform-origin:left top; } .ls-layer *[class^="ls-s"] { position:absolute;}';
				
					
				var htmldudoc_T = htmldudoc.split(window.parent.REG_SPLIT_SCRIPT2);
				var htm_noscripts = '';
				for (ch=0; ch<htmldudoc_T.length; ch++)
				{
					if (window.parent.REG_SPLIT_SCRIPT1.test(htmldudoc_T[ch]))
					{
						var cech = htmldudoc_T[ch].split(window.parent.REG_SPLIT_SCRIPT1);
						htm_noscripts += cech[0];
					}
					else
						htm_noscripts += htmldudoc_T[ch];
					
				}
				
				htmldudoc = htm_noscripts;
		//		htmldudoc = htmldudoc.replace(/(<style="(?!("|opacity))+)opacity ?: ?1;/gi, '$1');
		
				htmldudoc = htmldudoc.replace(/<head>/i, '<head><script src="add_class.js" type="text/javascript">'+'</'+'script>');
	
				htmldudoc = htmldudoc.replace(window.parent.REG_SUPPR_OPACITY, '');
				htmldudoc = htmldudoc.replace(window.parent.REG_SUPPR_SCRIPTS, '');
				htmldudoc = htmldudoc.replace(window.parent.REG_FIN_STYLES2, ' '+css_subl+' $1');
				
				var ok_id = ok_num_sublayer[0];
				
				window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_htmlok'][id_subsl] = htmldudoc;	
				window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_htmltimeok'][id_subsl] = les_temps_cesubsliderA - 500;	
				
				window.parent.add_toqueue(ok_id, id_subsl);
rapport += 'add_toqueue('+ok_id+', '+id_subsl+'\n';				
				
				
				sublayer.id = '';

				nb_scalques_ishtmlcopied ++;
				
				
				if (nb_scalques_ishtmlcopied == nb_scalques)
				{
					window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_htmltimeok']['allsublayers'] = les_temps_cesubsliderA;	
					setTimeout ("make_sublayers_btn('"+ok_id+"')", 1000);
					slider_stop();
				}
			}

			function add_class (nomclasse, silayer)
			{
				if (silayer == null)
					$('#fullopacity').addClass(nomclasse) ;
					
				else
				{
					var svg_id = $('.ls-layer')[0].id ;
					$('.ls-layer')[0].id = 'ls-layer';
					
					var classes_actuelles = document.getElementById('ls-layer').className ; // ls-layer rouge ls-animating
					
					var ex_classes_T = classes_actuelles.split(/\s+/g);
					var new_classes_T = nomclasse.split(/\s+/g);
					var classes_ok = '';
					
					for (rr=0; rr<ex_classes_T.length; rr++)
					{
						if (typeof (new_classes_T[rr]) != 'undefined' && new_classes_T[rr] != '')
						{
							if (classes_ok != '')
								classes_ok += ' ';	
							classes_ok += new_classes_T[rr];
						}
						else if (typeof (ex_classes_T[rr]) != 'undefined' && ex_classes_T[rr] != '')
						{
							if (classes_ok != '')
								classes_ok += ' ';	
							classes_ok += ex_classes_T[rr];
						}
					}

					// alert ('ls-layer VUE : '+classes_ok);
				//	alert ('ls-layer VUE : '+classes_ok+'\n(ex classes :) '+classes_actuelles);

					document.getElementById('ls-layer').className = '';
					$('#ls-layer').addClass(classes_ok) ;
					document.getElementById('ls-layer').id = svg_id;
					
				}
			}
			
			function add_image(new_img, findclass_ls, findclass_ls_num)
			{
				if (typeof($(findclass_ls)[findclass_ls_num]) != 'undefined')
					$(findclass_ls)[findclass_ls_num].src = new_img;
			}
			
			function set_id_inedition (slsubclass_ok, num_slsubclass_num_ok, idvoulu)
			{
				var ifquoi = 'inexistant';
				if (document.getElementsByClassName(slsubclass_ok)[num_slsubclass_num_ok])
				{
					document.getElementsByClassName(slsubclass_ok)[num_slsubclass_num_ok].id = idvoulu;
					ifquoi = 'document.getElementsByClassName(class)[num]';
				}
				else if ($('.'+slsubclass_ok)[num_slsubclass_num_ok])
				{
					$('.'+slsubclass_ok)[num_slsubclass_num_ok].attr('id', idvoulu);
					ifquoi = '$(class)[num]';
				}
				else if ($('.'+slsubclass_ok))
				{
					$('.'+slsubclass_ok).attr('id', idvoulu);
					ifquoi = '$(class)';
				}
				
				console.log(slsubclass_ok+' - '+num_slsubclass_num_ok+' - '+idvoulu+' - '+ifquoi);
			}
			
			function make_sublayers_btn (ok_id)
			{
		//		alert (rapport);
				window.parent.frame_add_content(new Number(ok_id));	
			}

			function load_next_frame ()
			{
				window.parent.frame_startAndNext();	
				window.parent.document.getElementById('divf_<? echo $_GET['nls']; ?>').style.backgroundColor = 'rgba(242, 240, 242,0)';	
				
			}
		
	//		function start_slider (){
				
			$('document').ready(function(){	
			
				issublayer = document.getElementById('id_layer_sublayer').value;
				
				window.parent.add_layer_inframe(issublayer);				
				
				setTimeout(load_next_frame, 100);

				$('#layerslider_<? echo $_GET['nls']; ?>').layerSlider( {
					skinsPath : '../../Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/skins/',
					skin : 'fullwidth',
					<? if ($_GET['lsresp'] == 1) { echo 'responsiveUnder : 960,'; } ?>				
					
					keybNav : false,
					touchNav : false,
					navPrevNext : false,
					navStartStop : false,
					navButtons : false,
					thumbnailNavigation : 'disabled',
					
					showCircleTimer : false,
					showBarTimer : false,
					hoverPrevNext : false,
					
					cbAnimStart				: function(data){ size_stop_frame ();},
					cbAnimStop				: function(data){}
										
				});
					
				d = new Date();
				 // console.log ('lancement slider: '+d);
				
			});
	//		}
			
		</script>		
        
	</head>
	<body class="view_slide"  style="margin:0; padding:0;">
		
		<style type="text/css" media="screen">
			<? 
			echo preg_replace('/(url\()(?!http)/', '$1'.$base_url_images, file_get_contents($_GET['gal'].'/slider_css.css'));
			?>
 		</style>
        

		<div id="layerslider-container">

	    <div id="layerslider_<? echo $_GET['nls']; ?>" style="width:<? echo $_GET['ls_w']; ?>; height: <? echo $_GET['ls_h']; ?>; margin: 0px;">

<script language="javascript" type="text/javascript">
	document.write(ceslide);
</script>
				


		</div>
        
        
		</div>
    
    <div class="c-api" style="position:absolute; top:3px; left:3px; width:60px; height:auto; background:rgba(255, 255, 255, 0.9); color:#900;"></div> 
    <div id="loadimages" style="width:35px; height:35px; position:absolute; display:block; overflow:auto; "></div>
        
        <input type="hidden" id="id_layer_sublayer" value="<? echo $_GET['nls']; ?>"/>

	</body>
</html>

</body>
</html>