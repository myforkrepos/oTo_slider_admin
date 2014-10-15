<?

// verif_MAJSlider.php?rep_slider
$mkt_lastMAJ = 0;
if (file_exists($_GET['rep_slider'].'/refresh_MAJ.txt'))
	$mkt_lastMAJ = file_get_contents($_GET['rep_slider'].'/refresh_MAJ.txt');
	
$ex_mkt_lastMAJ = 0;	
if ($_GET['ex_mktmaj'] != '')
	$ex_mkt_lastMAJ = $_GET['ex_mktmaj'] ;
	
if ($ex_mkt_lastMAJ != $mkt_lastMAJ)
{
	$script = '
function reload_verifMAJ () { window.parent.location.assign(window.parent.location.href); }';	
}
else
{
	$script = '
function reload_verifMAJ () { setTimeout (\'window.location.href = window.location.href.replace(/&ex_mktmaj=[^&]+/, "")+"&ex_mktmaj='.$mkt_lastMAJ.'"\', 60000); }';	
}

?><!DOCTYPE html>
<html lang="fr">
<head>
<script language="javascript" type="text/javascript">
<? echo $script; ?>
</script>
<title>Untitled Document</title>
</head>

<body onload="reload_verifMAJ()">
<? echo $mkt_lastMAJ; ?>
</body>
</html>