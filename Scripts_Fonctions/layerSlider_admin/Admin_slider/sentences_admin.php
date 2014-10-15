<? 

$file_sentences = '../G_sentences/sentences_list.txt';
$file_temps = '../G_sentences/sentences_temps.txt';

if ($_POST['Submit'] != '')
{
	$clePosts = array_keys($_POST);
	$nb_posts = count($_POST);
	
	$file_sentences_new = '';
	for ($pi=0; $pi<$nb_posts; $pi++)
	{
		$cetteclep = $clePosts[$pi];
		if (preg_match('/^phrase_[0-9]+$/', $cetteclep))
		{
			$cle_ischecked = preg_replace ('/^phrase_/', 'check_', $cetteclep);

			$is_check = '# ';
			if ($_POST[$cle_ischecked] != '')
				$is_check = '';
			
			$cettephrase = $is_check.$_POST[$cetteclep].'
';
			
			$file_sentences_new .= $cettephrase;
		}
		
	}
	
	$fp = fopen($file_sentences, 'w+');
	fputs($fp, $file_sentences_new);
	fclose($fp);
	
	
	if (preg_match('/^[0-9]+((\.|,)[0-9]+)?$/', trim($_POST['temps0']))
	 && preg_match('/^[0-9]+((\.|,)[0-9]+)?$/', trim($_POST['temps1'])) 
	 && preg_match('/^[0-9]+((\.|,)[0-9]+)?$/', trim($_POST['temps2'])) 
	 && preg_match('/^[0-9]+((\.|,)[0-9]+)?$/', trim($_POST['temps3'])))
	{
		
		$_POST['temps3'] = preg_replace('/,/', '.', trim($_POST['temps3']));
		
		$lestemps = ($_POST['temps0'] * 1000).','.( $_POST['temps1'] * 1000).','.($_POST['temps2'] * 1000).','.($_POST['temps3'] * 1000);
		
		$fp = fopen($file_temps, 'w+');
		fputs($fp, $lestemps);
		fclose($fp);
		
	}
}

// wait(1);

if (file_exists($file_temps)) 
{
	$liste_temps = file_get_contents($file_temps);
	
	$liste_temps_T = explode(',', $liste_temps);
	 


}

if (file_exists($file_sentences)) 
{
	$liste_phrases = trim(file_get_contents($file_sentences));
	
	$liste_phrases_T = preg_split('/\n/s', $liste_phrases);
	$nb_lpt = count($liste_phrases_T);
	
	$form_phrases = '';
	for ($op=0; $op < $nb_lpt; $op++)
	{
		$cette_phrase = trim($liste_phrases_T[$op]);
		
		$checked = 'checked';
		if (preg_match('/^#/', $cette_phrase))
		{
			$checked = '';
			$cette_phrase = preg_replace('/^# +/', '', $cette_phrase);
		}
		$form_phrases .= '
<li><input type="checkbox" name="check_'.$op.'" id="check_'.$op.'" value="# " '.$checked.' />
<input type="text" style="width:540px; font-size:12px; font-family:Frutiger, Verdana, sans-serif;" name="phrase_'.$op.'" id="phrase_'.$op.'" value="'.$cette_phrase.'"  />
<input type="button" value="+" id="ajoute_'.$op.'" onclick="ajoute_champ (this);"/>
<input type="button" value="-" id="supprime_'.$op.'" onclick="supprime_champ (this);"/>
</li>
';
		
	}
	
}
?>
<!DOCTYPE html>
<html>
<head>
<title>sauvegardes précédentes du slider</title>
<link href="admin_box.css" type="text/css" rel="stylesheet" />

<style type="text/css">
html, body {
	font-family:Verdana, Geneva, sans-serif;
	font-size:12px;
	line-height:18px;
	color:#666;
}
h1, h2, h3, h4, h5, h6 {
	color:#000;
}

</style>

<script type="text/javascript" language="javascript">

function supprime_champ (obj)
{
	obj.parentNode.parentNode.removeChild(obj.parentNode);
}
function ajoute_champ (obj)
{
	var li_aad_apres = obj.id.replace(/^.+_([0-9]+)$/, '$1');
	var li_limodele = document.getElementById('modele_li').getElementsByTagName('li')[0].innerHTML;
	var nb_sentences = document.getElementById('ul_form_sentences').getElementsByTagName('li').length;
	
	li_limodele = li_limodele.replace(/NBREPLACE/g, nb_sentences);
	li_aad_apres = new Number(li_aad_apres) + 1;
	
	var new_li = document.createElement('li');
	if (document.getElementById('ul_form_sentences').getElementsByTagName('li')[li_aad_apres] != null)
	{
		leli_before = document.getElementById('ul_form_sentences').getElementsByTagName('li')[li_aad_apres];
		document.getElementById('ul_form_sentences').insertBefore(new_li, leli_before);
	}
	else
	{
		document.getElementById('ul_form_sentences').appendChild(new_li);
	}
	
	new_li.innerHTML = li_limodele;
	
}
</script>
</head>
<body>
<form action="sentences_admin.php" method="post">
  <h3>Temps de défilement des phrases, en secondes :</h3>
  <p>
    - Durée d'arrivée: <input type="text" size="5" value="<? echo $liste_temps_T[0]/1000; ?>" name="temps0" id="temps0"/>
    - de pause: <input type="text" size="5" value="<? echo $liste_temps_T[1]/1000; ?>" name="temps1" id="temps1"/>
  <br>
    - Durée de sortie: <input type="text" size="5" value="<? echo $liste_temps_T[2]/1000; ?>" name="temps2" id="temps2"/>
    - temps avant le suivant: <input type="text" size="5" value="<? echo $liste_temps_T[3]/1000; ?>" name="temps3" id="temps3"/>
    <br />
    <br />
    <input type="submit" name="Submit" value="Enregistrer les phrases et les temps" style="font-weight:bold;"/>
    
    
  </p>
 <h3>Phrases à faire défiler :</h3>
  <p>
   <ul id="ul_form_sentences" style="margin:0; padding:0; list-style:none;"> 
<?
echo $form_phrases;
?>
</ul>
<ul id="modele_li" style="display:none;"><li><input type="checkbox" name="check_NBREPLACE" id="check_NBREPLACE" value="# " checked />
<input type="text" style="width:540px; font-size:12px; font-family:Frutiger, Verdana, sans-serif;" name="phrase_NBREPLACE" id="phrase_NBREPLACE" value=""  />
<input type="button" value="+" id="ajoute_NBREPLACE" onclick="ajoute_champ (this);"/>
<input type="button" value="-" id="supprime_NBREPLACE" onclick="supprime_champ (this);"/>
</li>
</ul>
<br><br>
    <input type="submit" name="Submit" value="Enregistrer les phrases et les temps" style="font-weight:bold;"/>
  </p>
</form>
</body>
</html>