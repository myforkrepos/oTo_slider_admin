<?

$base_url_images = $_GET['serveururl'];

?><!DOCTYPE HTML>
<html>
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

				var les_subs = window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_list'];
				
				if (typeof(les_subs) != 'undefined')
				{	
					
					for (rt=0; rt<les_subs.length; rt++)
					{
						if (typeof(les_subs[rt]) != 'undefined')
						{
							var id_subsl = les_subs[rt];
							
					//		alert (id_subsl+'\n(id subl dans view... pour choper les temps...)');
							
							var les_temps_cesubslider = window.parent.document['dom_ls_ce_sublayer'][ok_id]['sublayers_times'][id_subsl];
							
							if (les_temps_cesubslider['delayout'] == null || les_temps_cesubslider['delayout'] == 'undefined' || les_temps_cesubslider['delayout'] == 0)
							{
								var delayoutslider = 3500;
								
			//					alert (typeof(window.parent.document['layerslider_listemenu'][ok_id]['slidedelay'])+'\n'+typeof(window.parent.document['layerslider_listemenu'][ok_id]['timeshift']) );
				//				alert (window.parent.document['layerslider_listemenu'][ok_id]['slidedelay']+'\n'+window.parent.document['layerslider_listemenu'][ok_id]['timeshift'] );
								// 		document.layerslider_listemenu[lsi]['timeshift'] = le_timeshift;
		
								var slidedelay_a = new Number (window.parent.document['layerslider_listemenu'][ok_id]['slidedelay']);
								var timeshift_a = new Number (window.parent.document['layerslider_listemenu'][ok_id]['timeshift']);
		
								if (slidedelay_a != 'NaN')	
									delayoutslider = slidedelay_a;
								
								if (timeshift_a != 'NaN' && delayoutslider > timeshift_a)
									delayoutslider += timeshift_a;
								
							}
							else
								var delayoutslider = les_temps_cesubslider['delayout'];
							
		//					setTimeout("html_subsl_attime ('"+id_subsl+"');", les_temps_cesubslider['delayin']+les_temps_cesubslider['durationin'] +100 );
							setTimeout("html_subsl_attime ('"+id_subsl+"', "+delayoutslider+");", delayoutslider - 100 );
						
							if (delayoutslider_max < delayoutslider)
								delayoutslider_max = delayoutslider;
						
						}
					}
					
					nb_scalques = les_subs.length;
					nb_scalques_ishtmlcopied = 0;
					
					
				//		setTimeout( slider_stop, delayoutslider_max+200);	
				}
			}
			
			function slider_stop ()
			{
				$('#layerslider_<? echo $_GET['nls']; ?>').layerSlider('stop');
			}
		

			function html_subsl_attime (id_subsl, les_temps_cesubsliderA)
			{
				
				var ok_num_sublayer = id_subsl.split('___');

			//	alert ('$(\'.ls-layer .ls-s'+ok_num_sublayer[1]+')['+ok_num_sublayer[2]+']');
				var sublayer = $('.ls-layer .ls-s'+ok_num_sublayer[1])[ok_num_sublayer[2]];
				
				sublayer.id = 'fullopacity';
			
				var htmldudoc  = '';
				htmldudoc = document.getElementsByTagName('html')[0].innerHTML.replace(window.parent.REG_SUPPR_ST_LIGNES, ' ');
				

	//			var css_subl = '.ls-layer > *, .ls-inner .ls-layer > * { opacity:0.15; } .ls-layer .fullopacity, .ls-inner .ls-layer .fullopacity { box-shadow:5px 5px 8px black; border:#FFF 2px solid; outline:#666 1px 1px solid;	 } .ls-layer .fullopacity, .ls-layer .fullopacity > *, .ls-inner .ls-layer .fullopacity, .ls-inner .ls-layer .fullopacity > * { opacity:1; } #layerslider-container { transform:scale(0.5); transform-origin:0 0; }';
				var css_subl = '.ls-inner div > * { opacity:0.15; } #fullopacity { z-index:10; box-shadow:5px 5px 8px black; border:#FFF 2px solid; outline:#666 1px 1px solid;	opacity:1; } #fullopacity > * { opacity:1; } #layerslider-container { transform:scale(0.5); transform-origin:0 0; }';
				
				
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
	
				htmldudoc = htmldudoc.replace(window.parent.REG_SUPPR_OPACITY, '');
				htmldudoc = htmldudoc.replace(window.parent.REG_SUPPR_SCRIPTS, '');
				htmldudoc = htmldudoc.replace(window.parent.REG_FIN_STYLES2, ' '+css_subl+' $1');
				
				var ok_id = ok_num_sublayer[0];
				
				window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_htmlok'][id_subsl] = htmldudoc;	
				window.parent.document.dom_ls_ce_sublayer[ok_id]['sublayers_htmltimeok'][id_subsl] = les_temps_cesubsliderA;	
				
				window.parent.add_toqueue(ok_id, id_subsl);
				
				sublayer.id = '';

				nb_scalques = les_subs.length;
				nb_scalques_ishtmlcopied ++;
				
				
				if (nb_scalques_ishtmlcopied == nb_scalques)
				{
					alert (nb_scalques_ishtmlcopied+' == '+nb_scalques);
					setTimeout ("make_sublayers_btn('"+ok_id+"')", 1000);
					slider_stop();
				}

				

			}
			
			function make_sublayers_btn (ok_id)
			{
				window.parent.frame_add_content(new Number(ok_id));	
			}

			function load_next_frame ()
			{
				window.parent.frame_startAndNext();	
				
			}
		
	//		function start_slider (){
				
			$('document').ready(function(){	
			
	//		alert (document.getElementById('layerslider_<? echo $_GET['nls']; ?>').innerHTML);
			
				issublayer = document.getElementById('id_layer_sublayer').value;
				
				window.parent.add_layer_inframe(issublayer);				
				
				setTimeout(load_next_frame, 100);

/*				if (window.parent.REG_3USCORE.test(issublayer))
				{
					
					var ok_num_sublayer = issublayer.split(window.parent.REG_3USCORE);
	
				//	alert ('$(\'.ls-layer .ls-s'+ok_num_sublayer[1]+')['+ok_num_sublayer[2]+']');
					var sublayer = $('.ls-layer .ls-s'+ok_num_sublayer[1])[ok_num_sublayer[2]];
					sublayer.className += ' fullopacity';
				}
			
*/

				$('#layerslider_<? echo $_GET['nls']; ?>').layerSlider( {
					skinsPath : '../../Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/skins/',
					skin : 'fullwidth',
					thumbnailNavigation : 'hover',
					showCircleTimer : false,
					showBarTimer : false,
					hoverPrevNext : false,
					
					cbAnimStart				: function(data){ size_stop_frame ();},
					cbAnimStop				: function(data){}
										
				});
					
				

				
			});
	//		}
			
		</script>		
        
	</head>
	<body>
		
		<style type="text/css" media="screen">
			<? 
			echo preg_replace('/(url\()(?!http)/', '$1'.$base_url_images, file_get_contents($_GET['gal'].'/slider_css.css'));
			?>
 		</style>
        

		<div id="layerslider-container">

	    <div id="layerslider_<? echo $_GET['nls']; ?>" style="width:1280px; height: 727px; margin: 0px;">

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