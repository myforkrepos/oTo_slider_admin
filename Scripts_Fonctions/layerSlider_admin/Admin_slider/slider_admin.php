<?

session_start();
$id_session = session_id();

// header('location:../?key='.$id_session);
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);


$dirname = '../Galeries';
$dir = opendir($dirname); 
$liste_sliders = '';
$fl = 0;

while($file = readdir($dir)) {
	
	if (preg_match('/^layerslider_/', $file))
	{
// slider_html_svgdu_11_12_2013_11_57

		$ref_slider = preg_replace('/^layerslider_/', '', $file);
				
		$isdefaut = '';
		
		if ($ref_slider == 1)
			$isdefaut = ' (utilisé par défaut)';
				
		$liste_sliders .= '
<div>
<iframe id="iframe_'.$fl.'" name="iframe_'.$fl.'" src="../?slider='.$ref_slider.'" frameborder="0" height="140" width="220"></iframe>
<h4>slider '.$ref_slider.'<span style="font-weight:normal;">'.$isdefaut.'</span></h4>
<a href="../?slider='.$ref_slider.'" target="_blank">visiter</a> ou <a href="../?slider='.$ref_slider.'&key='.$id_session.'" target="_blank">modifier ce slider</a>
<br>
<a href="javascript:void(0);" onclick="affiche_sauvegardes(\''.$ref_slider.'\');">sauvegardes et restauration</a>
</div>
';
		$fl ++;
		
	}
	
	
}

closedir($dir);

?><!DOCTYPE HTML>
<html>
	<head>
		<title>Administration des sliders</title>
		<link rel="stylesheet" href="../Scripts_Fonctions/layerSlider_admin/admin_box.css" type="text/css">

        <style type="text/css">
		
		html, body {
			font-family:Verdana, Geneva, sans-serif;
			font-size:12px;
			line-height:18px;
			color:#666;
			
			background-color:#AEAFB9;
			width:100%;
			height:100%;
		}
		
		h1, h2, h3, h4, h5, h6 {
			color:#000;
		}
		div#page {
			width:100%;
			height:100%;
			padding:20px 0 0 0;
			text-align:center;
		}
		div#main {
			position:relative;
			width:800px;
			margin:0 auto 0 auto;
			background-color:#DCDAE6;
			border:#FFF 5px solid;
			border-radius:20px;
			
		}
		div#inner {
			text-align:left;
			padding:20px;
		}
		div#sliders {
			width:790px;
			height:auto;
			margin:0 0 0px -10px;
			
		}
		div#sliders div {
			width:220px;
			height:210px;
			margin:0 0 10px 10px;
			padding:10px;
			border:#999 1px solid;
			background-color:white;
			
			display:inline-block;
		}
		
		h4 {
			padding:0;
			margin:3px 0 3px 0;
		}
		
		div#sliders div iframe, div#sliders div a {
		}
		
		</style>
        
        
<script language="javascript" type="text/javascript">
rep_layerSlider_Admin = '../Scripts_Fonctions/layerSlider_admin';
galerie_rep = 'Galeries';

function affiche_sauvegardes (kelslider)
{
	var galerie_this_rep = 'layerslider_';
	
	if (kelslider != null)
	{
		galerie_this_rep += kelslider;
		document.getElementById('svg_nom').innerHTML = kelslider;
	
	}
    if (document.getElementById('slider_sauvegardes_div').style.display == 'block') 
    { 
    	document.getElementById('slider_phrases_div').style.display = 'none'; 
    	document.getElementById('slider_liste_div').style.display = 'block'; 
    	document.getElementById('explique_liste_sliders').style.display = 'block'; 
	
		document.getElementById('slider_sauvegardes_div').style.display = 'none';		
    } 
	else 
    { 
    	document.getElementById('slider_phrases_div').style.display = 'none'; 
    	document.getElementById('slider_liste_div').style.display = 'none'; 
    	document.getElementById('explique_liste_sliders').style.display = 'none'; 
	
		document.getElementById('slider_sauvegardes_div').style.display = 'block';		
		window['iframe_slider_sauvegardes'].location.href = rep_layerSlider_Admin+'/saved_sliders.php?repls='+galerie_rep+'/'+galerie_this_rep;

    }
}

function affiche_phrases ()
{
	
    if (document.getElementById('slider_phrases_div').style.display == 'block') 
    { 
    	document.getElementById('slider_phrases_div').style.display = 'none'; 
    	document.getElementById('slider_liste_div').style.display = 'block'; 
    	document.getElementById('explique_liste_sliders').style.display = 'block'; 
	
		document.getElementById('slider_sauvegardes_div').style.display = 'none';		
    } 
	else 
    { 
    	document.getElementById('slider_phrases_div').style.display = 'block'; 
    	document.getElementById('slider_liste_div').style.display = 'none'; 
    	document.getElementById('explique_liste_sliders').style.display = 'none'; 
	
		document.getElementById('slider_sauvegardes_div').style.display = 'none';		
		window['iframe_slider_phrases'].location.href = 'sentences_admin.php';

    }
}




</script>        
        
   	</head>
	<body>
<div id="page">
    <div id="main">
    	<div id="inner">
    
            <h1>Administration du slider</h1>
            <p id="explique_liste_sliders">Cliquez les liens du slider voulu pour accéder à son administration ou pour le visiter.<br>
          <a href="slider_admin_manuel.php" target="_blank">Manuel et aide de l'administration</a> - <a href="javascript:void(0);" onclick="affiche_phrases ();">Modifier les phrases d&eacute;filantes</a> <br></p>

            
            <div id="slider_liste_div">
                <div id="sliders">
         <? echo $liste_sliders; ?>       
                </div>
          </div>
    	
        
            <div id="slider_sauvegardes_div" style="display:none;">
<h2>Sauvegardes du slider <span id="svg_nom"></span></h2>
            
<a href="javascript:void(0);" onclick="affiche_sauvegardes ();">retour à la liste des sliders</a>
            
<iframe src="../Scripts_Fonctions/layerSlider_admin/iframe.php" frameborder="0" allowtransparency="1" name="iframe_slider_sauvegardes" style="margin:0; padding:0; border:none; width:100%; height:450px;"></iframe>
            </div>
    	
        
            <div id="slider_phrases_div" style="display:none;">
<h2>Modifier les phrases défilantes</h2>
<a href="javascript:void(0);" onclick="affiche_phrases ();">retour à la liste des sliders</a>

<iframe src="../Scripts_Fonctions/layerSlider_admin/iframe.php" frameborder="0" allowtransparency="1" name="iframe_slider_phrases" style="margin:0; padding:0; border:none; width:100%; height:450px;"></iframe>
            </div>
    	        
        
        
   	  </div>
      
<? 
echo file_get_contents('credits.php');
?>
      
      
    </div>


</div>

	</body>
</html>

</body>
</html>