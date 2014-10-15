<?

session_start();
$id_session = session_id();

// header('location:../?key='.$id_session);
error_reporting(E_ALL ^ E_NOTICE);
ini_set("display_errors", 1);


$dirname = 'Galeries';
$liste_sliders = '';
$fl = 0;

$width_iframe = '100%';

$dir_skins_name = 'Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/skins';
$skin_options = '';

$dir_skins = opendir($dir_skins_name); 

while($file = readdir($dir_skins)) {
	
	if (!preg_match('/\./', $file))
	{
		$skin_options .= '<option value="\''.$file.'\'">'.$file.'</option>';
	}
}
closedir($dir_skins);


$dir = opendir($dirname); 

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
<div><h4>slider '.preg_replace('/_/', ' ', $ref_slider).'<span style="font-weight:normal;">'.$isdefaut.'</span></h4>  
<a href="index_vue_slider.php?slider='.$ref_slider.'" target="_blank">visiter</a> / <a href="index_vue_slider.php?slider='.$ref_slider.'&key='.$id_session.'" target="_blank">créer d\'après ce modèle</a>
<br>
</div>
<iframe id="iframe_'.$fl.'" onload="setIframeHeight(\'iframe_'.$fl.'\');" name="iframe_'.$fl.'" src="index_vue_slider.php?slider='.$ref_slider.'&preview" frameborder="0" style="height:auto; width:'.$width_iframe.';" scrolling="no"></iframe>

</div>
';

    	$resize_mini_iframes .= 'setIframeHeight(\'iframe_'.$fl.'\');';
		$fl ++;
		
/*
		$slider_content = file_get_contents($dir.'/'.$file.'/slider_html.php');
		
		$sliderdims_w = preg_replace ('/^.+id="LayerSlider" [^>]+width:([.0-9]+(px)|%);.+$/si', '$1', $slider_content);
		$sliderdims_h = preg_replace ('/^.+id="LayerSlider" [^>]+height:([.0-9]+(px)|%);.+$/si', '$1', $slider_content);
		
		
		$lesdimssl. = '<option value="">'.$.'</option>';
*/		
		
	}
	
	
}

closedir($dir);

?><!DOCTYPE HTML>
<html>
	<head>
		<title>oTo( slider admin )</title>

<script type="text/javascript" src="Scripts_Fonctions/js_accueil_sliders.js"></script>
        
        
   	</head>
	<body>



<div id="page">
    <div id="main">
   	  <div id="inner">
    
        <h1>Cr&eacute;ez vos galeries anim&eacute;es</h1>
		<link rel="stylesheet" href="Scripts_Fonctions/layerSlider_admin/admin_box.css" type="text/css">		<div id="accueil_oto_sliders">
        
          <h3>Choisissez un modèle ci-dessous, ou <a href="javascript:void(0);" onclick="affiche_newslider ();">créez un nouveau slider</a> (faîtes glisser vos images sur la page).</h3>
          <p>Votre slider abouti, vous pourrez l'afficher sur votre site internet, mais aussi dans toutes vos vitrines et espaces d'accueil.</p>
          
          
          
    </div>

            
            <div id="slider_liste_div">
                <div id="sliders">
         <? echo $liste_sliders; ?>       
              </div>
        </div>
    	
        


            <div id="slider_newslider_div" style="display:none;">
            
<a href="javascript:void(0);" onclick="affiche_newslider ();">afficher la liste des sliders</a>

            
<? require ('index_upload_module.php'); ?>


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

<p>oTo(sliders) vous permet de créer et de modifier directement votre slider  : </p>
        
        <h2>          Mettez votre activité en valeur 
  <span>avec les animations à couper le souffle de LayerSlider*</span></h2>
<ul>
  <li><strong>éditez ses textes</strong> (éditeur html directement dans la présentation), </li>
  <li><strong>ses images</strong> (uploads multiples, recadrages, éditeur d'image Pixlr), </li>
  <li><strong>ses vidéos</strong> (youtube, vimeo, et toutes insertions &quot;iframe&quot;), </li>
  <li><strong>ses animations</strong> (tous paramètres d'animations), </li>
  <li><strong>ses apparences</strong> (menus des apparences CSS prédéfinies), </li>
  <li>ordre et activation des vues, ajout et duplication des vues et des sous calques, paramètres du slider (avec ou sans plein écran,  pagination,  barre de progression, boutons de navigation, autoplay vidéos...), etc.</li>
</ul>
<p>L'édition de votre slider est facile et visuelle. <a href="slider_admin_manuel.php" target="_blank">Manuel et aide oTo(slider)</a>
              <!--
           -   <a href="javascript:void(0);" onclick="affiche_phrases ();">Modifier les phrases défilantes</a> 
-->
- <a href="javascript:void(0);" onclick="affiche_newslider ();">Créer un nouveau slider</a>.<br />
Coté référencement SEO, votre slider   sera parfaitement lisible par les moteurs de recherche (entièrement composé en HTML et CSS).            </p>
<p>* LayerSlider est fourni par KreaturaMedia - oTo(sliders)  qui permet de modifier vos sliders facilement  est fourni par A OTO uniquement http://sliders.oto-web.fr </p>
            </div>
            
  
  		</div>
    </div>
            
</body>
</html>