<?

session_start ();


// echo '<br><br>rep_client: '.$_POST['rep_client'];
// echo '<br><br>nom_slider: '.$_POST['nom_slider'];
// echo '<br><br>html_slider: '.nl2br(htmlspecialchars($_POST['html_slider']));
// echo '<br><br>options_slider: '.nl2br(htmlspecialchars($_POST['options_slider']));


if ($_POST['rep_client'] != '' && $_POST['html_slider'] != '' && $_POST['options_slider'] != '' && $_POST['nom_slider'] != '')
{
	$nom_dossier = '../Galeries_clients/'.$_POST['rep_client'].'/layerslider_'.$_POST['nom_slider'];
	if (!file_exists ($nom_dossier))
		mkdir ($nom_dossier, 0755);	
	
	$fp1 = fopen ($nom_dossier.'/slider_html.php', 'w+');
	fputs ($fp1, stripslashes($_POST['html_slider']));
	fclose ($fp1);
	
	$fp2 = fopen ($nom_dossier.'/slider_css.css', 'w+');
	fputs ($fp2, stripslashes($_POST['css_slider']));
	fclose ($fp2);
	
	$fp3 = fopen ($nom_dossier.'/slider_config.js', 'w+');
	fputs ($fp3, 'layerSlider_config = {
'.stripslashes($_POST['options_slider']).'
};');
	fclose ($fp3);
	
	header ('location:../index_vue_slider.php?gf=Galeries_clients/'.$_POST['rep_client'].'&slider='.$_POST['nom_slider'].'&key='.session_id());
}

?>