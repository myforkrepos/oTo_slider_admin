<?
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);
 
$repls_g = '../../'.$_GET['repls']; 
 
if (isset($_GET['doform']))
{
//	echo 'post';
	if ($_GET['restaure_svg'] != '')
	{
	echo 'restaure_svg';
		if (file_exists ($repls_g.'/slider_html_'.$_GET['restaure_svg'].'.php'))
		{
			if (unlink ($repls_g.'/slider_html.php'))
				rename ($repls_g.'/slider_html_'.$_GET['restaure_svg'].'.php', $repls_g.'/slider_html.php' );
			else echo $repls_g.'/slider_html_'.$_GET['restaure_svg'].'.php non renommé';
		}
		else echo $repls_g.'/slider_html_'.$_GET['restaure_svg'].'.php non existant';
		
		if (file_exists ($repls_g.'/slider_css_'.$_GET['restaure_svg'].'.css'))
		{
			if (unlink ($repls_g.'/slider_css.css'))
				rename ($repls_g.'/slider_css_'.$_GET['restaure_svg'].'.css', $repls_g.'/slider_css.css' );
			
		}
		if (file_exists ($repls_g.'/slider_config_'.$_GET['restaure_svg'].'.js'))
		{
			if (unlink ($repls_g.'/slider_config.js'))
				rename ($repls_g.'/slider_config_'.$_GET['restaure_svg'].'.js', $repls_g.'/slider_config.js' );
			
		}
	}
	else
	{
		
		$keypost = array_keys($_POST);
		$n_post = count($_POST);
		
		for ($p=0; $p<$n_post; $p++)
		{
			$clepost = $keypost[$p];
			
			if (preg_match('/^suppr_/', $clepost))
			{
				$valPOST = $_POST[$clepost];
				
				if (file_exists ($repls_g.'/slider_html_'.$valPOST.'.php'))
					unlink ($repls_g.'/slider_html_'.$valPOST.'.php');
			//	else echo $repls_g.'/slider_html_'.$valPOST.'.php non existant';
				if (file_exists ($repls_g.'/slider_css_'.$valPOST.'.css'))
					unlink ($repls_g.'/slider_css_'.$valPOST.'.css');
				if (file_exists ($repls_g.'/slider_config_'.$valPOST.'.js'))
					unlink ($repls_g.'/slider_config_'.$valPOST.'.js');
			}
		}
		
	}
	
}

$dirname = $repls_g;
$dir = opendir($dirname); 
$liste_svg = array();
$fl = 0;

while($file = readdir($dir)) {
	
	if (preg_match('/^slider_html_svgdu_.+\.php$/', $file))
	{
// slider_html_svgdu_11_12_2013_11_57

		$infosdate = preg_replace('/(slider_html_svgdu_|\.php)/', '', $file);
		$infosdate_T = preg_split('/_/', $infosdate);
		
		$moment = mktime($infosdate_T[3], $infosdate_T[4],0,$infosdate_T[1], $infosdate_T[0],$infosdate_T[2]);
		
		$liste_svg[$moment] = '<input type="checkbox" name="suppr_'.$fl.'" id="suppr_'.$fl.'" value="svgdu_'.$infosdate.'"/> sauvegarde du '.$infosdate_T[0].'/'.$infosdate_T[1].'/'.$infosdate_T[2].' &agrave; '.$infosdate_T[3].'h'.$infosdate_T[4].' <a href="javascript:restaure_svg(\''.$infosdate_T[0].'/'.$infosdate_T[1].'/'.$infosdate_T[2].' &agrave; '.$infosdate_T[3].'h'.$infosdate_T[4].'\', \'svgdu_'.$infosdate.'\');">restaurer cette sauvegarde</a>';
		
		$fl ++;
		
	}
	
	
}

closedir($dir);

krsort ($liste_svg);
$liste_svg_html = '';

$keysvgs = array_keys($liste_svg);
$n_svg = count($liste_svg);

for ($p=0; $p<$n_svg; $p++)
{
	$clesvg = $keysvgs[$p];
	$liste_svg_html .= $liste_svg[$clesvg].'<br>';

}

?><!DOCTYPE html>
<html>
<head>
<title>sauvegardes précédentes du slider</title>
<link href="admin_box.css" type="text/css" rel="stylesheet" />

<script language="javascript" type="text/javascript">
function restaure_svg (date_human, date_txtfile)
{
	if (confirm('Voulez-vous vraiment remplacer le slider actuel par la sauvegarde du '+date_human+' ?')) 
	{ 
		document.getElementById('restaure_svg').value = date_txtfile; 
		document.location.href = 'saved_sliders.php?repls=<? echo $_GET['repls'];?>&doform&restaure_svg='+date_txtfile; 
	}
}

function select_all(nochec)
{
	var chek = true;
	
	if  (nochec != null)
		chek = false;
		
	var lesinputs = document.getElementsByTagName('input')	;
	
	for (tr=0; tr<lesinputs.length; tr++)
	{
		if (lesinputs[tr].type == 'checkbox')
		{
			lesinputs[tr].checked = chek;
		}
	}
}
</script>
</head>

<body>

<form id="layerslider_svg" name="layerslider_svg" action="saved_sliders.php?repls=<? echo $_GET['repls'];?>&doform" enctype="multipart/form-data" method="post">
Restaurez la sauvegarde voulue, <br>
ou sélectionnez 
 <input type="button" value="toutes" onclick="select_all();"/>
 <input type="button" value="aucune" onclick="select_all('no');"/>
 <input type="submit" name="submit" id="submit" value="supprimer les sauvegardes s&eacute;lectionn&eacute;es"/>
 <br>
(avant de supprimer décochez bien les sauvegardes à garder !) 


<input type="hidden" name="restaure_svg" id="restaure_svg" value=""/><br><br>
<? echo $liste_svg_html; ?>
</form>
<?
if ($_GET['restaure_svg'] != '')
{
?><br><br>
	<strong>Le slider a été restauré, veuillez <a href="javascript:window.parent.location.reload();">recharger la page pour afficher le slider actuel</a>.</strong>
<?
}
?>
</body>
</html>