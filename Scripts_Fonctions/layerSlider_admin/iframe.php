<?
$htmlf = '';
if (file_exists('tmp_sublayer.html'))
{
	$htmlf = file_get_contents('tmp_sublayer.html');
	echo $htmlf;
}
else
{
?><!DOCTYPE html>
<html>
<head>
</head>

<body>
</body>
</html>
<?
}
?>