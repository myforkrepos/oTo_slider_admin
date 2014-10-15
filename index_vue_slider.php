<?
session_start();
header ('Cache-Control:no-cache');
	
	
?><!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="pragma" content="no-cache"/>
		<title>Périphérique Nord Informations</title>
        
<link rel="stylesheet" href="Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/css/layerslider.css" type="text/css">

	</head>
	<body>
<? // echo session_id(); print_r($_SESSION);
?>

<? 

// Nom du slider à charger ('1' par défaut) :
// $_GET['slider'] = '1';  

// Chargement du slider (et de son administration si besoin) :
include ('Scripts_Fonctions/layerSlider_admin/include_slider.php'); 

?>
              
    </body>
</html>