<?

if ($_POST['frame_html'] != '')
{
	
	$new_html = stripslashes($_POST['frame_html']);
	$new_html = preg_replace('/(class="ls-bg" [^>]+style="[^"]+)"/i', '$1 margin:0;"', $new_html);
	
	$fp = fopen('tmp_sublayer.html', 'w+')	;
	fputs($fp, $new_html);
	fclose($fp);
	
	$rapp = 'fichier ecrit';
}
else
{
	$fp = fopen('tmp_sublayer.html', 'w+')	;
	fputs($fp, '');
	fclose($fp);
	$rapp = 'fichier vidé';
}
echo $rapp;

?>