
<style media="screen" type="text/css" id="slider_css">
<?	
if ($_GET['slider'] == '')
	$_GET['slider'] = 1;
	
if ($_GET['gf'] == '')
	$_GET['gf'] = 'Galeries';
	



 echo file_get_contents($_GET['gf'].'/layerslider_'.$_GET['slider'].'/slider_css.css'); 
?>
</style>



<div id="layerslider-container">
<? 
    echo file_get_contents($_GET['gf'].'/layerslider_'.$_GET['slider'].'/slider_html.php'); 
?>
</div>

<script src="Scripts_Fonctions/LayerSlider-4.6.1-standalone/layerslider/jQuery/jquery.js" type="text/javascript"></script>


<script language="javascript" type="text/javascript">
	galerie_rep = '<? echo $_GET['gf']; ?>';
	preview_mode = <? if (isset($_GET['preview'])) echo 'true'; else echo 'false'; ?>;
    wanted_slider = '<? echo $_GET['slider']; ?>'; 
    <? if ($_GET['key'] != '') { ?> 
	key = '<? echo $_GET['key']; ?>'; 
	<? } ?>
</script>

                
<script src="Scripts_Fonctions/layerSlider_admin/layerSlider_init.js" type="text/javascript"></script>
<script src="Scripts_Fonctions/respondjs/js/respond.min.js" type="text/javascript"></script>                

<?
    if (file_exists('sentences_slide.php') && !isset($_GET['key']))
    {
        $sentences_slider = preg_replace('/^.+<body[^>]*>|<\/body.*$/si', '', file_get_contents('sentences_slide.php'));
        echo $sentences_slider;
        
    }
?>                            
