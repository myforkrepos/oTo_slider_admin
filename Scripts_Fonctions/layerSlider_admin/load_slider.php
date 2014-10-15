<?
session_start ();

if (session_id() == $_GET['key'])
{
	$Administre = 1;
	$file = $_GET['rep_slider'].'/slider_html.php';
	$file_css = $_GET['rep_slider'].'/slider_css.css';
	$file_config = $_GET['rep_slider'].'/slider_config.js';
	
	$file_admin_box = getcwd().'/admin_box.php';
	$file_admin_boxcss = getcwd().'/admin_box.css';
	
	if (file_exists($file))
		$slider_html = file_get_contents($file);
	else
		$slider_html =  '<div>non existant : '.$file.'<br>dossier du script = '.getcwd().'<br></div>';
	
	$slider_css = '<style media="screen" type="text/css" id="slider_css">'.trim(file_get_contents($file_css)).'</style>';
	
	$slider_config = '<textarea name="slider_config" id="slider_config">'.trim(file_get_contents($file_config)).'</textarea>';
	
	if (file_exists($file_admin_box))
	{
		$slider_admin_html = file_get_contents($file_admin_box);
		$slider_admin_css = file_get_contents($file_admin_boxcss);
		
	$slider_admin_css = '
<style media="screen" type="text/css" id="slider_css">
'.$slider_admin_css.'
</style>
';
				
		$slider_admin_html =  preg_replace('/:_none/', ':none', $slider_admin_html);
		$slider_admin_html =  preg_replace('/___SERVERREP_URL___/', $_GET['urladmin'], $slider_admin_html);
		$slider_admin_css =  preg_replace('/___SERVERREP_URL___/', $_GET['urladmin'], $slider_admin_css);
		$slider_admin_html =  preg_replace('/___STYLESCSS_ADMIN_SLIDER___/', $slider_admin_css, $slider_admin_html);
	}
	
	else
		$slider_admin_html =  '<div>non existant : '.$file_admin_box.'<br>dossier du script = '.getcwd().'<br>';
	
	$all_files = file_get_contents('../LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css').' '.file_get_contents($_GET['rep_slider'].'/slider_css.css').' '.$slider_html;
	
	preg_match_all('/src="([^"]*)"/', $all_files, $result1);
	preg_match_all('/url ?\( ?([^)]*\.(png|gif|jpe?g))\)/', $all_files, $result2);
	
	// $image_css = implode(' --- ', $result2[1]);
	
	$all_images = array_merge($result1[1], $result2[1]);
	$nb_imgs = count($all_images);
	$html_load_images = '';
	$images_ok = array();
	
	for ($i=0; $i<$nb_imgs; $i++)
	{
		if (!in_array($all_images[$i], $images_ok))
		{
			$html_load_images .= '<img src="'.$_GET['urlbase'].'/'.$all_images[$i].'"> ';
			$images_ok[] = $all_images[$i];
		}
	}
}

$mkt_lastMAJ = 0;
if (file_exists($_GET['rep_slider'].'/refresh_MAJ.txt'))
	$mkt_lastMAJ = file_get_contents($_GET['rep_slider'].'/refresh_MAJ.txt');


?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>load_slider</title>
<script type="text/javascript" language="javascript">

	window.parent.ex_mktmaj = '<? echo $mkt_lastMAJ; ?>';

	function is_loaded() { 
<? 
//	echo 'alert (\''.$Administre.'\n-'.session_id().'- == \n-'.$_GET['key'].'-\');';

if ($Administre == 1) { ?>

		var link_css0 = document.createElement('link');
		link_css0.rel = 'stylesheet';			
		link_css0.href = window.parent.rep_layerSlider_ACE+'/lib/codemirror.css';			
		link_css0.type = 'text/css';			
		window.parent.document.getElementsByTagName('head')[0].appendChild(link_css0);
		
		var link_css1 = document.createElement('link');
		link_css1.rel = 'stylesheet';			
		link_css1.href = window.parent.rep_layerSlider_ACE+'/theme/xq-light.css';			
		link_css1.type = 'text/css';			
		window.parent.document.getElementsByTagName('head')[0].appendChild(link_css1);
	
		window.parent.list_scriptsjs = [];
		window.parent.list_scriptsjs.push(window.parent.rep_layerSlider_ACE+'/lib/codemirror.js');
		window.parent.list_scriptsjs.push(window.parent.rep_layerSlider_ACE+'/mode/javascript/javascript.js');
		window.parent.list_scriptsjs.push(window.parent.rep_layerSlider_ACE+'/mode/css/css.js');
	
		window.parent.list_scriptsjs.push(window.parent.rep_layerSlider_Admin+'/admin_box.js');
		window.parent.list_scriptsjs.push(window.parent.rep_ckeditor+'/ckeditor.js');
	
		var el2 = document.getElementById('layerslider_admin');
		if (window.parent.document.getElementsByTagName('body')[0].appendChild(el2))
		{
			var images_to_preload = '<? echo $html_load_images;?>';
			window.parent.document.getElementById('preload_slider_imgs').innerHTML = images_to_preload;
			
			var el0 = document.getElementById('slider_css').innerHTML;
			window.parent.document.getElementById('slider_css_form').value =  el0;
			
			var el1 = document.getElementById('slider_config').value;
			window.parent.document.getElementById('slider_config_form').value =  el1;
			
			var el2 = window.parent.document.getElementById('layerslider').getAttribute('style');
			window.parent.document.getElementById('slider_style_form').value =  el2.replace(/;/g, ';\n');

			
			
		}
<? } ?>
	//	window.parent.list_scriptsjs.push(window.parent.file_responsive_IE8);

		setTimeout(window.parent.load_css_and_scripts, 2000); 

	}
	
</script>				

</head>

<body onload="is_loaded();">


<?
echo $slider_admin_html.'<br>';
echo $slider_css.'<br>';
echo $slider_config.'<br>';


?>
</body>
</html>