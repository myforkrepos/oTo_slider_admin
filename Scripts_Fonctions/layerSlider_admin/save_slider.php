<?

$scriptclose = '';
$onload = '';

if ($_POST['dossier_slide'] != '' && $_POST['save_slide'] != '')
{
	$html_to_save = stripslashes($_POST['save_slide']);
	
	if (trim($html_to_save == ''))
	{
		$html_to_save = stripslashes(file_get_contents($dossier_galerie.'/slider_html.php'));
		
	}
	
	$css_to_save = stripslashes($_POST['save_css']);
	$config_to_save = stripslashes($_POST['save_config']);	
	
	$dossier_galerie = $_POST['dossier_slide'];
	
	$jour_heure_now = date('d_m_Y_H_i');
	$jour_now_txt = date('d m Y');
	$heure_now_txt = date('H:i');
	
	$nom_sauvegarde = 'slider_html_svgdu_'.$jour_heure_now.'.php';
	$nom_sauvegarde_css = 'slider_css_svgdu_'.$jour_heure_now.'.css';
	$nom_sauvegarde_config = 'slider_config_svgdu_'.$jour_heure_now.'.js';
	
	$tx_msg = 'Le slider a été enregistré avec vos modifications.\nUne sauvegarde de la version précédente a été faite (le '.$jour_now_txt.' à '.$heure_now_txt.').\nNom du fichier sauvegardé : '.$nom_sauvegarde.'\n\nUne fois toutes vos modifications faîtes,\ncliquez sur [ FIN ] pour les appliquer à tous les affichages.';
	
	if (file_exists($dossier_galerie.'/slider_html.php'))
	{
		if (copy ($dossier_galerie.'/slider_html.php', $dossier_galerie.'/'.$nom_sauvegarde))
		{
			$fp = fopen ($dossier_galerie.'/slider_html.php', 'w+');
			fputs ($fp, $html_to_save);
			
			
			fclose ($fp);
			
	//		$scriptclose = 'alert (\'a enregistré..., so close.\'); window.parent.save_layerslider_close(\''.$tx_msg.'\'); 	';
			$scriptclose = 'window.parent.save_layerslider_close(\''.$tx_msg.'\'); 	';
		}
		else
			$erreure .= $dossier_galerie.'/slider_html.php sauvegarde echouée, modifications non enregistrées\n';
	}
	else
		$erreure .= $dossier_galerie.'/slider_html.php non existant\n';
	
	if (file_exists($dossier_galerie.'/slider_css.css'))
	{
		if (copy ($dossier_galerie.'/slider_css.css', $dossier_galerie.'/'.$nom_sauvegarde_css))
		{
			$fp = fopen ($dossier_galerie.'/slider_css.css', 'w+');
			fputs ($fp, $css_to_save);
			
			
			fclose ($fp);
			
	//		$scriptclose = 'alert (\'a enregistré..., so close.\'); window.parent.save_layerslider_close(\''.$tx_msg.'\'); 	';
			$scriptclose = 'window.parent.save_layerslider_close(\''.$tx_msg.'\'); 	';
		}
		else
			$erreure .= $dossier_galerie.'/slider_css.css sauvegarde echouée, modifications non enregistrées\n';
	}
	else
		$erreure .= $dossier_galerie.'/slider_css.css non existant\n';
	
	if (file_exists($dossier_galerie.'/slider_config.js'))
	{
		if (copy ($dossier_galerie.'/slider_config.js', $dossier_galerie.'/'.$nom_sauvegarde_config))
		{
			$fp = fopen ($dossier_galerie.'/slider_config.js', 'w+');
			fputs ($fp, $config_to_save);
			
			
			fclose ($fp);
			
	//		$scriptclose = 'alert (\'a enregistré..., so close.\'); window.parent.save_layerslider_close(\''.$tx_msg.'\'); 	';
			$scriptclose = 'window.parent.save_layerslider_close(\''.$tx_msg.'\', \''.$_POST['save_finMAJ'].'\'); 	';
		}
		else
			$erreure .= $dossier_galerie.'/slider_config.js sauvegarde echouée, modifications non enregistrées\n';
	}
	else
		$erreure .= $dossier_galerie.'/slider_config.js non existant\n';
		
		
	if ($_POST['save_finMAJ'] != '')
	{
		
		$fp = fopen ($dossier_galerie.'/refresh_MAJ.txt', 'w+');
		fputs ($fp, mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y')));
		
		fclose ($fp);
		
	}
	
}

?><!DOCTYPE html>
<html>
<head>
<title>sauvegarde et enregistrement du slider</title>
<script type="text/javascript" language="javascript">
<? 
if ($scriptclose != '') 
{
	echo $scriptclose; 
	
}
else
{
	$onload = 'onload="save_slider_go()" ';

?>

// alert ('chargement html du slider a enregistrer...');

function save_slider_go () {
	document.getElementById('save_css').innerHTML = window.parent.document.getElementById('slider_css_form').value;
	document.getElementById('save_config').innerHTML = window.parent.document.getElementById('slider_config_form').value;
	document.getElementById('save_slide').innerHTML = window.parent.document.getElementById('save_new_slide').innerHTML;
	document.getElementById('dossier_slide').value = window.parent.document.getElementById('dossier_new_slide').value;
	document.getElementById('save_finMAJ').value = window.parent.document.getElementById('save_finMAJ').value;
	
	setTimeout("document.forms[0].submit();", 3000);
	
//	alert ('SUBMIT html du slider a enregistrer dans 3 secondes...\n'+document.getElementById('dossier_slide').value+'\n'+document.getElementById('save_slide').innerHTML);
	
}
<?
}
?>
</script>
</head>

<body <? echo $onload; ?>>

<form action="save_slider.php" enctype="multipart/form-data" method="post">
<input type="text" name="dossier_slide" id="dossier_slide" value=""/>
<input type="text" name="save_finMAJ" id="save_finMAJ" value=""/>
<textarea name="save_slide" id="save_slide"></textarea>
<textarea name="save_config" id="save_config"></textarea>
<textarea name="save_css" id="save_css"></textarea>
</form>

</body>
</html>