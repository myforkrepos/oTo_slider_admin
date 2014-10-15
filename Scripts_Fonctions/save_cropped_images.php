<?php


ini_set('display_errors',1);
error_reporting(-1);
// session_start();

$jpeg_quality = 90;

$src = preg_replace('/^https?:\/\/[^\/]+/', '..', $_GET['img']);

$imagick = new Imagick();
$imagick->readImage($src);

$dim_w_img = $imagick->getImageWidth();
$dim_h_img = $imagick->getImageHeight();

// $dim_w_img = $_GET['ffw'];
// $dim_h_img = $_GET['ffh'];

$width_moinsplus = 0;
$height_moinsplus = 0;

//if ($_GET['r'] != 0)
//{
	$imagick->rotateImage(new ImagickPixel(), $_GET['r']);
	// $imagick->resizeImage($_GET['img_r_w'], $_GET['img_r_h'], imagick::FILTER_LANCZOS ,1);
	// echo $imagick->getImageWidth().' x '.$imagick->getImageHeight().'<br>'.$_GET['img_r_w'].' X '.$_GET['img_r_h'];
	
	// $dim_rw_img = $imagick->getImageWidth();
	// $dim_rh_img = $imagick->getImageHeight();
	
	$dim_rw_img = $_GET['img_r_w'];
	$dim_rh_img = $_GET['img_r_h'];
	
	$rapport_w = $rapport_h = 1;
	$rapport_w = $_GET['img_r_w'] / $dim_rw_img;
	$rapport_h = $_GET['img_r_h'] / $dim_rh_img;
	
//	$width_moinsplus = round(($dim_rw_img - $dim_w_img) / 2 * $rapport_w);
//	$height_moinsplus = round(($dim_rh_img - $dim_h_img) / 2 * $rapport_h);
	$width_moinsplus = round(($dim_rw_img - $dim_w_img) / 2 );
	$height_moinsplus = round(($dim_rh_img - $dim_h_img) / 2 );
//}

// echo 'dim_w_img: '.$dim_w_img.'<br>dim_h_img: '.$dim_h_img.'<br>rapport_w: '.$rapport_w.'<br>rapport_h: '.$rapport_h.'<br>dim_rw_img: '.$dim_rw_img.'<br>dim_rh_img: '.$dim_rh_img.'<br>getImageWidth: '.$imagick->getImageWidth().'<br>getImageHeight: '.$imagick->getImageHeight().'<br>width_moinsplus: '.$width_moinsplus.'<br>height_moinsplus: '.$height_moinsplus;

// $imagick->cropImage($_GET['cw'], $_GET['ch'], ($_GET['cx'] + $width_moinsplus) * $rapport_w ,($_GET['cy'] + $height_moinsplus) * $rapport_h);
 $imagick->cropImage($_GET['cw'], $_GET['ch'], $_GET['cx'] + $width_moinsplus , $_GET['cy'] + $height_moinsplus);
 $imagick->resizeImage($_GET['ffw'], $_GET['ffh'], imagick::FILTER_LANCZOS ,1);

if (isset ($_GET['mode']) && $_GET['mode'] == 'img')
{
	header('content-type: image/jpeg');
	print $imagick->getImage(); 
}
else
{
	$html = '<!DOCTYPE HTML><html><head>';
	$html .= '<link href="../Graphisme/SimpleGrey.css" rel="stylesheet" type="text/css">';
	$html .= '</head><body><span>';
	
	if (rename($src, preg_replace('/\.([^.]+)$/', '_original.$1', $src)))
	{
		if ($imagick->writeImage())
			$html .= 'image originale renommée, image recadrée et enregistrée';
		else
			$html .= '!! image originale renommée, image recadrée mais NON enregistrée !';
	}
	else
		$html .= '!! image recadrée, mais NON enregistrée, image originale NON renommée  !';
		
	$html .= '</span></body></html>';
	echo $html;	
}

?>