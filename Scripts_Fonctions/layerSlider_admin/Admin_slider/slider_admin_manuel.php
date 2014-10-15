<!DOCTYPE HTML>
<html>
<head>
		<title>Aide et manuel du slider modifiable</title>
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
		
		h3 {
			font-size:140%;
			margin:20px 0px 0px 0px;
		}
		h2 {
			font-size:180%;
			margin:45px 0px 0px 0px;
		}
		h1 {
			font-size:230%;
		}
		p {
			margin:10px 0px 30px 0px;
			padding:0px 0px 0px 0px;
			
		}
		ul.aide {
			margin:0px 0px 0px 0px;
			padding:0px 0px 0px 15px;
		}
		ul.aide li {
			margin:0px 0px 0px 0px;
			padding:0px 0px 0px 0px;
			width:100%;
		}
		ul.aide li ul {
			display:none;
			right:0%;
			position:absolute;
			margin:0px 0px 0px 0px;
			padding:0px;
		}
		ul.aide li ul li, ul.aide li ul li:hover{
			background-color:white;
			color:inherit;
			border-radius:0px 20px 20px 20px;
			box-shadow:#333 -3px 3px 10px;
			border:#666 solid 3px;
			margin:0px 0px 0px 0px;
			padding:20px;
		}
		ul.aide li:hover {
			margin:0px 0px 0px -15px;
			padding:0px 0px 0px 15px;
			
			background-color:#666;
			color:#DDD;
		}
		ul.aide li:hover b, ul.aide li:hover strong {
			color:#EEE;
		}
		ul.aide li:hover > ul {
			display:block;	
		}
		b,strong {
			color:#333;
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
		
		nav#manuelnav {
			border-bottom:#EEEEF3 2px solid;	
		}
		nav#manuelnav a {
			padding:3px;
			margin:0 3px 0 0;
			color:#666;
		}
		
		nav#manuelnav a:hover {
			background-color:#E5E5EE;
			border-radius:5px 5px 0px 0px;
			text-decoration:none;	
		}
		nav#manuelnav a.on {
			background-color:#EEEEF3;
			border-radius:5px 5px 0px 0px;	
			text-decoration:none;
			padding:3px 6px;	
		}
		
		</style>
        
<script type="text/javascript" language="javascript">
function estVisible(obj){
	
	var memoid = obj.getElementsByTagName('ul')[0].id;
	obj.getElementsByTagName('ul')[0].style.marginTop = '';
	obj.getElementsByTagName('ul')[0].style.marginRight = '';
	
	var id_element = 'est_visible';
	obj.getElementsByTagName('ul')[0].id = id_element;
	
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
		obj.getElementsByTagName('ul')[0].id = memoid;
//		return(id_element + ' est entièrement visible dans la page !');
	}
	else if(total.largeur && partiel.hauteur){
		obj.getElementsByTagName('ul')[0].id = memoid;
	//	obj.getElementsByTagName('ul')[0].className = 'bottom';
		
	obj.getElementsByTagName('ul')[0].style.marginTop = (cadreVisible.yMax - elementVisible.yMax - 30)+'px';
//	obj.getElementsByTagName('ul')[0].style.marginRight = '';
		
		
	//	alert((cadreVisible.yMax - elementVisible.yMax)+'px\n'+id_element + ' est entièrement visible en largeur mais tronqué en hauteur\n'+cadreVisible.yMax+' < '+elementVisible.yMin+' || '+cadreVisible.yMin+' > '+elementVisible.yMax+'\n'+cadreVisible.xMax+' < '+elementVisible.xMin+' || '+cadreVisible.xMin+' > '+elementVisible.xMax);
	}
	else if(total.hauteur && partiel.largeur){
		obj.getElementsByTagName('ul')[0].id = memoid;

	obj.getElementsByTagName('ul')[0].style.marginRight = (elementVisible.xMax - cadreVisible.xMax + 60)+'px';
//	obj.getElementsByTagName('ul')[0].style.marginRight = '';


//		alert(id_element + ' est entièrement visible en hauteur mais tronqué en largeur\n'+cadreVisible.yMax+' < '+elementVisible.yMin+' || '+cadreVisible.yMin+' > '+elementVisible.yMax+'\n'+cadreVisible.xMax+' < '+elementVisible.xMin+' || '+cadreVisible.xMin+' > '+elementVisible.xMax);
	}
	else if(partiel.hauteur && partiel.largeur){
		obj.getElementsByTagName('ul')[0].id = memoid;
	obj.getElementsByTagName('ul')[0].style.marginTop = (cadreVisible.yMax - elementVisible.yMax - 30)+'px';
	obj.getElementsByTagName('ul')[0].style.marginRight = (elementVisible.xMax - cadreVisible.xMax + 60)+'px';

//		alert(id_element + ' est tronqué en hauteur et en largeur\n'+cadreVisible.yMax+' < '+elementVisible.yMin+' || '+cadreVisible.yMin+' > '+elementVisible.yMax+'\n'+cadreVisible.xMax+' < '+elementVisible.xMin+' || '+cadreVisible.xMin+' > '+elementVisible.xMax);
	}
	else{
		obj.getElementsByTagName('ul')[0].id = memoid;
		alert(id_element + ' n\'est pas visible dans la page !\n'+cadreVisible.yMax+' < '+elementVisible.yMin+' || '+cadreVisible.yMin+' > '+elementVisible.yMax+'\n'+cadreVisible.xMax+' < '+elementVisible.xMin+' || '+cadreVisible.xMin+' > '+elementVisible.xMax);
	}
}

function affiche_div (aobj, keldiv)
{
	if (keldiv == null)
	{
		document.getElementById('fonctionnement_sliders').style.display = 'none';	
		document.getElementById('modification_sliders').style.display = 'none';	
		document.getElementById('integration_sliders').style.display = 'none';	
		
		var a_menu = document.getElementById('manuelnav').getElementsByTagName('a');
		
		for (iu=0; iu<a_menu.length; iu++)
		{
			a_menu[iu].className = '';		
			
		}
	}
	else
	{
		affiche_div ();
		document.getElementById(keldiv).style.display = 'block';
		aobj.className = 'on';	
	}
}

function pageload ()
{
	document.getElementById('fonctionnement_sliders').style.display = 'none';	
		document.getElementById('integration_sliders').style.display = 'none';	
	document.getElementById('a_modification_sliders').className = 'on';	
}
</script>        
   	</head>
	<body onload="pageload()">
<div id="page">
    <div id="main">
    	<div id="inner">
    
            <h1>Manuel et aide &agrave; l'administration des sliders</h1>
            <p id="explique_liste_sliders">
              <nav id="manuelnav"><a href="#fonctionnement_sliders" onclick="affiche_div(this, 'fonctionnement_sliders');">fonctionnement du slider</a>           
                <a href="#modification_sliders" onclick="affiche_div(this, 'modification_sliders');" id="a_modification_sliders">modifier le slider, manuel</a>           
                <a href="#integration_sliders" onclick="affiche_div(this, 'integration_sliders');">intégrer le slider dans une page web</a> 
              </nav>
          </p>
          <div id="fonctionnement_sliders">
     <a name="fonctionnement_sliders"></a>         
  <h2>Fonctionnement des sliders :</h2>
<h3>
  Des animations à couper le souffle... et enti&egrave;rement modifiables !
</h3>
<p><strong>Chaque slider animé est une suite de "vues"</strong> comportant au moins un fond image, qui apparaissent et disparaissent avec des transitions 3D et/ou 2D au hasard ou à choisir. <br><br>
  
  <strong>Chaque "vue" peut contenir des "sous-calques"</strong> (images, textes, vidéos...) qui apparaissent et disparaissent aux moments et vitesses voulus, soit en fondu, soit en arrivant depuis un coté choisi.<br>
  <br>
  <strong>Cot&eacute; propri&eacute;taire</strong> : l'administration de chaque slider permet de le modifier enti&egrave;rement (activer, d&eacute;sactiver, mettre &agrave; jour, modifier, animer, ajouter et supprimer chaque vue et ses sous-calques). L'administration ne doit &ecirc;tre accessible qu'&agrave; une adresse internet priv&eacute;e (prot&eacute;g&eacute;e par un login et mot de passe).<br>
  <br>
  <strong>Cot&eacute; visiteur</strong> : votre slider peut &ecirc;tre visit&eacute; par les internautes &agrave; l'adresse internet ou vous le placez
  et / ou peut &ecirc;tre int&eacute;gr&eacute; dans les pages internet voulues.<br>
  <br>
  <strong>Cot&eacute; technique</strong> : Le slider lui-m&ecirc;me est &eacute;crit en code HTML et CSS. Ce code HTML est lu par une application javascript (LayerSlider) qui le transforme en animation selon les r&eacute;glages indiqu&eacute;s. LayerSlider est une application javascript propri&eacute;taire dont l'utilisation n&eacute;cessite l'achat d'une license (<a href="../Scripts_Fonctions/LayerSlider-4.6.1-standalone/documentation/documentation.html" target="_blank">documentation LayerSlider</a>). L'administration du slider est  une autre application javascript / php propri&eacute;taire (<a href="http://www.oto-web.fr" target="_blank">A_oTo</a>), qui utilise encore d'autres applications web : l'&eacute;diteur de texte internet CKeditor et le navigateur de fichier PDWFileBrowser, en accord avec  leurs licences respectives.<br>
</p>

</div>

          <div id="modification_sliders">
     <a name="modification_sliders"></a>         
<h2>Administration et modification du slider</h2>
<h3>Modifiez facilement votre slider (sans connaissances particuli&egrave;res) :</h3>
<p>Pour modifier vos sliders, rendez-vous dans <a href="slider_admin.php" target="_blank"> la page d'Administration</a> et modifiez le slider voulu.<br>
  Survolez les listes ci-dessous pour visualiser les diff&eacute;rentes op&eacute;rations.<ul class="aide">
  <li onmouseover="estVisible(this);">Choisissez le slider &agrave; modifier dans la page d'administration.
  
    <ul><li><img src="Image/Manuel/modifier_choix_slider.jpg"></li></ul>
  
  </li>
  <li onmouseover="estVisible(this);">Pour naviguer dans les vues du slider : boutons <strong>Play</strong>, <strong>Pause</strong>, <strong>Aller &agrave; la vue voulue</strong>.
  
  <ul><li><img src="Image/Manuel/play_pause_vuenumero.jpg"></li></ul>
  
  </li>
  <li onmouseover="estVisible(this);">Afficher la <strong>liste illustr&eacute;e des vues du slider et de leurs sous-calques</strong>.
  
 
  <ul><li><img src="Image/Manuel/affiche_liste_vues.jpg"></li></ul>

 </li>
  <li onmouseover="estVisible(this);">Modifier <strong>les vues : images de fond </strong>et <strong>apparences pr&eacute;d&eacute;finies</strong> (classes CSS).
  
 
  <ul><li><img src="Image/Manuel/modif_vue_imgfond_apparences.jpg"></li></ul>

 </li>
  <li onmouseover="estVisible(this);">Modifier <strong>les vues : animations 2D et 3D, temps des vues, moment d'apparition des sous calques.</strong>

  <ul><li><img src="Image/Manuel/modif_vues_animations.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);">Modifier <strong>les</strong> <strong>sous-calques image</strong> : choix d'image dans le dossier web / upload d'image.
  
  <ul><li><img src="Image/Manuel/modif_souscalque_image_apparence_position.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);">Modifier <strong>les</strong> <strong>sous-calques texte, image et vid&eacute;o</strong> : &eacute;diteur de texte, marges et positions, apparences pr&eacute;d&eacute;finies.
  
  <ul><li><img src="Image/Manuel/modif_souscalque_texte_apparence_position.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);">Modifier <strong>les animations des sous-calques</strong>  : apparition/disparition, temps, &eacute;lasticit&eacute;, agrandissement, rotation.
    <ul><li><img src="Image/Manuel/modif_souscalque_animations.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);"><strong>Cr&eacute;er</strong>, <strong>dupliquer</strong> et <strong>supprimer</strong> les vues et sous-calques.
  
  <ul><li><img src="Image/Manuel/nouveau_souscalque.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);"><strong>Ordre des vues</strong> et <strong>activation / d&eacute;sactivation</strong> de chaque vue. 
  <ul><li><img src="Image/Manuel/vue_activation_ordre_vues.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);">Boutons <strong>tester le slider</strong> et <strong>tout enregistrer</strong>.
  <ul><li><img src="Image/Manuel/slider_tester_enregistrer.jpg"></li></ul>

</li>
  <li onmouseover="estVisible(this);"><strong>Sauvegardes et restaurations</strong> des versions pr&eacute;c&eacute;dentes.
  <ul><li><img src="Image/Manuel/slider_sauvegardes_bouton.jpg"></li></ul>

</li>
</ul></p>
<h3>Bouton [FIN] : validez vos modifications :</h3>
<p><ul class="aide">
  <li onmouseover="estVisible(this);">Lorsque vous avez termin&eacute; le modifications voulues, cliquez sur <strong>le bouton [FIN]</strong><br>
    Les modifications seront alors indiqu&eacute;es valid&eacute;es, et le slider cot&eacute; visiteurs sera recharg&eacute; et donc mis &agrave; jour.

  <ul>
    <li><img src="Image/Manuel/slider_fin_modifications.jpg"></li></ul>

  </li>
</ul></p>
<h3>Administration avanc&eacute;e, mode expert :</h3>
<p><ul class="aide">
  <li onmouseover="estVisible(this);"><strong>Modification des classes CSS</strong> pr&eacute;d&eacute;finies (requiert la ma&icirc;trise du language CSS)
  
  <ul>
    <li><img src="Image/Manuel/slider_class_css.jpg"></li></ul>
  
  </li>
  <li onmouseover="estVisible(this);">Modification des <strong>param&egrave;tres du slider</strong> (<a href="../Scripts_Fonctions/LayerSlider-4.6.1-standalone/documentation/documentation.html">documentation LayerSlider</a>)<br>
    
  <ul>
    <li><img src="Image/Manuel/slider_config_options.jpg"></li></ul>

  </li>
</ul></p>
          </div>
    	
        
          <div id="integration_sliders">
     <a name="integration_sliders"></a>         
<h2>Int&eacute;gration d'un slider dans une page web :</h2>
<h3>
  2 lignes de code &agrave; placer dans votre page_web.php
</h3>
<p>Editez  les codes HTML et PHP ci-dessous puis copiez-collez-les à l'endroit voulu de votre page web.<br>
  Le code ci-dessous doit &ecirc;tre plac&eacute; entre les balises &lt;body&gt; et &lt;/body&gt; de votre code html :<br>
  <label for="code_include_slider"></label>
  <textarea name="code_include_slider" id="code_include_slider" cols="45" rows="5" style="width:90%; height:120px; padding:2%;">&lt;?php 

$_GET['slider'] = '1';  // Nom du slider à charger ('1' par défaut)

include ('Scripts_Fonctions/layerSlider_admin/include_slider.php'); // Chargement du slider (et de son administration si besoin).

?&gt;

</textarea>
  <br>
<br>
  Le code ci-dessous doit &ecirc;tre plac&eacute; entre les balises &lt;head&gt; et &lt;/head&gt; de votre code html
  :
  <textarea name="code_include_slider" id="code_include_slider" cols="45" rows="5" style="width:90%; height:60px; padding:2%;">&lt;link rel="stylesheet" href="Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css" type="text/css"&gt;

</textarea>

</p>


<h2>Int&eacute;gration de l'administration d'un slider dans une page web :</h2>
<h3>
  M&ecirc;me chose que ci dessus, l'administration sera int&eacute;gr&eacute;e si les conditions sont r&eacute;unies.
</h3>
<p>L'administration du slider ne peut-&ecirc;tre affich&eacute;e : <br>
  - que si le visiteur a &eacute;t&eacute; identifi&eacute; sur la page d'administration (liste des sliders)
  avec son login et mot de passe.<br>
  - que si sa session php, correspondant &agrave; l'identification ci-dessus, est en cours (code &agrave; copier ci-dessous).
  <br>
  <label for="code_include_slider"></label>
  <textarea name="code_include_slider" id="code_include_slider" cols="45" rows="5"  style="width:90%; height:80px; padding:2%;">&lt;?php 

session_start(); // Démarrage de session PHP, à placer en haut du fichier PHP, au dessus de tout autre code.

?&gt;

</textarea>
</p>


</div>        
        
   	  </div>

<? 
echo file_get_contents('credits.php');
?>

               
        
  </div>


    </div>


</div>

	</body>
</html>

</body>
</html>