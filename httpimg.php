<?


$dir = 'Galeries';

// Ouvre un dossier bien connu, et liste tous les fichiers
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
			
			
			
            echo "galerie : ".$file."<br>\n";
			
			$dirin = $dir.'/'.$file;
			
			if (is_dir($dirin)) {
				if ($dhin = opendir($dirin)) {
					while (($filein = readdir($dhin)) !== false) {
						
						if (preg_match('/(css\.css)|(html\.php)$/', $filein))
						{
							echo "fichier : ".$filein." <br>\n";
							$cefichier = file_get_contents($dirin .'/'. $filein);
							$cefichier_new = $cefichier;
							
							$listsrchttp = array();
							$listsrccss = array();
							$listeimgsrc = array();

							preg_match_all ('/src="(https?:)?\/\/([^"]+)"/', $cefichier, $listsrchttp);
							preg_match_all ('/url\("|\'(https?:)?\/\/([^)]+)\)/', $cefichier, $listsrccss);
							
						//	print_r($listsrchttp[2]);
						//	print_r($listsrccss[2]);
							
							$listeimgsrc = array_merge($listsrchttp[2], $listsrccss[2]);
							
							$nimg = count($listeimgsrc);
							
							for ($pp = 0; $pp < $nimg; $pp++)
							{
								$cetimg = $listeimgsrc[$pp];
								if (preg_match('/\.(png|jpe?g|gif)$/i', $cetimg))
								{
									$limage = file_get_contents('http://'.$cetimg);
									$adresse_myserver_image = 'Image/LayerSlider_Galleries/'.preg_replace('/^.+\/([^\/]+)$/', '$1', $cetimg);
									
									$reg_cetimg = '((http:)?\/\/)?'.preg_replace('/\//', '\/', $cetimg);
									
									file_put_contents($adresse_myserver_image, $limage);

									/*
									$fpo = fopen($adresse_myserver_image, 'w+');
									fputs ($limage, $fpo);
									fclose ($fpo);
									*/
										
									echo 'fichier : '.$filein.' <img src="'.$adresse_myserver_image.'"/><br>\n';
									
									$cefichier_new = preg_replace ('/'.$reg_cetimg.'/', $adresse_myserver_image, $cefichier_new);
									
									
								}
								else
								{
									echo 'fichier : '.$filein.' >> non image SRC : '.$cetimg.'<br>\n';
									
									
								}
							}
							
							if ($cefichier_new != $cefichier)
							{
								
								
								$fpou = fopen($dirin .'/'. $filein, 'w+');
								fputs ($fpou, $cefichier_new);
								fclose ($fpou);
								
							}
							
							
						}
						
						
						
						
					}
					closedir($dhin);
				}
			}
						
			
			
			
			
			
        }
        closedir($dh);
    }
}

?>