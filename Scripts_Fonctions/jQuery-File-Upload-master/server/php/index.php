<?php
/*
 * jQuery File Upload Plugin PHP Example 5.14
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
session_start();
error_reporting(E_ALL | E_STRICT);

$ereurre = '';

// Dossier de l'utilisateur
if ($_POST['repc'] == '')
	$ereurre = 'pas de nom de dossier client...';

// Dossier de ce slider de l'utilisateur
if ($_POST['nom_du_slider'] != '')
{
	$_POST['nom_du_slider'] = preg_replace('/\s+/', '_', $_POST['nom_du_slider']);
	$_POST['nom_du_slider'] = strtr($_POST['nom_du_slider'], 'ְֱֲֳִֵַָֹÊֻֽֿ־ּׁ׃ׂװײױÚÙÛÜÝ', 'AAAAAACEEEEEIIIINOOOOOUUUUY');
	$_POST['nom_du_slider'] = strtr($_POST['nom_du_slider'], 'באגהדוחיטךכםלמןסףעפצץתשûü‎ÿ', 'aaaaaaceeeeiiiinooooouuuuyy');
	$_POST['nom_du_slider'] = preg_replace('/[^a-z0-9]+/i', '', $_POST['nom_du_slider']);
}

if ($_POST['nom_du_slider'] == '')
	$ereurre .= '\npas de nom de slider...';

$_SESSION['chemin_slider'] = '../../../../Galeries_clients/'.$_POST['repc'].'/layerslider_'.$_POST['nom_du_slider'].'/';
$_SESSION['chemin_slider_imgs'] = '../../../../Galeries_clients/'.$_POST['repc'].'/images_'.$_POST['nom_du_slider'].'/';

$doss_du_chem = preg_split('/\//', $_SESSION['chemin_slider']);

$ndoss = count($doss_du_chem);
$basedoss = '';

for ($c=0; $c<$ndoss; $c++)
{
	if ($basedoss != '')
		$basedoss .= '/';
		 
	$basedoss .= $doss_du_chem[$c]; 
	
	if (!file_exists($basedoss))
		mkdir ($basedoss, 0755);
	
}
if (!file_exists($_SESSION['chemin_slider_imgs']))
	mkdir ($_SESSION['chemin_slider_imgs'], 0755);

if ($ereurre == '')
{
	require('UploadHandler.php');
	$upload_handler = new UploadHandler();
}