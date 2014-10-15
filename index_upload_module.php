<style type="text/css">

#legendes > span {
	margin:0 0 14px 0;	
}

.makeslider h3 span {
	color:#FFF;
}
.makeslider h3 i {
	transform:scale(1.5, 1);
}

	
</style>

<script type="text/javascript" language="javascript">

var csssaadd = new Array();
csssaadd.push('Scripts_Fonctions/jQuery-File-Upload-master/css/jquery.fileupload-ui.css');
csssaadd.push('Scripts_Fonctions/jQuery-File-Upload-master/css/jquery.fileupload.css');
csssaadd.push('http://blueimp.github.io/Gallery/css/blueimp-gallery.min.css');
csssaadd.push('//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css');

for (tt=0; tt<csssaadd.length; tt++)
{
	var cecss = csssaadd[tt];
	
	var lelinkbefore = document.getElementsByTagName('link')[0];
	var lelinkbefore_parent = lelinkbefore.parentNode;
	
	var newlinkcss = document.createElement('link');
	newlinkcss.rel = 'stylesheet';
	newlinkcss.href = cecss;
	
	lelinkbefore_parent.insertBefore(newlinkcss, lelinkbefore);	
}

</script>

<!-- CSS adjustments for browsers with JavaScript disabled -->
<noscript><link rel="stylesheet" href="Scripts_Fonctions/jQuery-File-Upload-master/css/jquery.fileupload-noscript.css"></noscript>
<noscript><link rel="stylesheet" href="Scripts_Fonctions/jQuery-File-Upload-master/css/jquery.fileupload-ui-noscript.css"></noscript>

<div class="container">
<h2>Fa&icirc;tes glisser vos images, sons et vid&eacute;os</h2>
    <h3 class="lead">sur cette page pour les t&eacute;l&eacute;charger sur le site et cr&eacute;er votre slider.</h3>
    <!-- The file upload form used as target for the file upload widget -->
    
    
    <? /*
	
	Creation des dossiers :
	- dossier "Galeries" utilisateur
	- dossier "Galerie" galerie
	- dossier "Imagerie" utilisateur
	- dossier "Imagerie" galerie
	
	Dossier /Galeries_clients/
	Dossier /Galeries_clients/___ADRESSE_EMAIL___/___Nom_Galerie___
	Dossier /Galeries_clients/___ADRESSE_EMAIL___/___Images_Galerie___
	Dossier /Galeries_clients_tmp/___IP_ADRESSE_DATEHEURE___/___Nom_Galerie___
	Dossier /Galeries_clients_tmp/___IP_ADRESSE_DATEHEURE___/___Images_Galerie___
	
	*/ 
	
	if ($_SESSION['email'] != '')
		$_SESSION['rep_client'] = $_SESSION['email'];
	else if ($_SESSION['rep_client'] == '')
		$_SESSION['rep_client'] = date('Y-m-d_h-i').'_'.session_id();
	
	?>
  <!--  <img src="Image/icone-iphoto.jpg" width="1024" height="1024" id="testimage"/>
  -->
<form id="makeslider" name="makeslider" style="display:none;" action="Scripts_Fonctions/save_new_slider.php" method="POST" enctype="multipart/form-data">
        <textarea id="options_slider" name="options_slider" style="display:none;"></textarea>
        <textarea id="html_slider" name="html_slider" style="display:none;"></textarea>
        <textarea id="css_slider" name="css_slider" style="display:none;">
div.noir_transparent > div {
	background-color:rgba(30,30,30,0.75);
	border:2px solid rgba(0,0,0,0.75);
	color:#FFF;
}
div.coins_arrondis_10px {
	padding:0 2%;
	border-radius:10px;
	overflow:hidden;	
}
</textarea>
        <input type="hidden" name="rep_client" id="rep_client" value=""/>
        <input type="hidden" name="nom_slider" id="nom_slider" value=""/>
        
</form>
<form id="fileupload" name="fileupload" action="Scripts_Fonctions/jQuery-File-Upload-master/server/php/" method="POST" enctype="multipart/form-data">
      <!-- Redirect browsers with JavaScript disabled to the origin page -->
 <noscript><input type="hidden" name="redirect" value="http://blueimp.github.io/jQuery-File-Upload/"></noscript> 
       <div id="slider_settings"> Donnez un nom &agrave; votre slider : 
        <input type="text" name="nom_du_slider" id="nom_du_slider" value="slider_1"/>
        <input type="hidden" name="repc" id="repc" value="<? echo $_SESSION['rep_client']; ?>"/>
         - dimensions: 
        <select name="dims_slider" id="dims_slider" onchange="apply_img_dims (this);">
        </select> 
        <span id="dims_persos" style="display:none;">
        largeur: <input type="text" style="width:90px;" id="dims_slider_w" name="dims_slider_w" value="" />
        hauteur: <input type="text" style="width:90px;" id="dims_slider_h" name="dims_slider_h" value="" />
        <input type="button" value="X" onclick="$('#dims_persos').css('display', 'none'); $('#dims_slider').css('display', 'inline-block');" title="voir les dimensions prédéfinies" />
        </span>
        - habillage (skin): <select name="opt_skin_slider" id="opt_skin_slider" class="option_slider"  onclick="maj_options_slider ();">
        <? echo $skin_options; ?>
        </select> 
        
        <input type="hidden" id="opt_skinsPath" name="opt_skinsPath" value="rep_layerSlider+'/layerslider/skins/'" class="option_slider"/>

<br /><a href="#" id="other_options_settings_a" onclick="maj_options_slider (); $('#other_options_settings').css('display', 'block'); $('#other_options_settings_a').css('display', 'none');">Autres réglages de navigation et options du slider</a>

  <div id="other_options_settings" style="display:none;">
    <table style="display:inline-table; margin-right:20px;">
      <tr>
  
      <td colspan="2">      <h4>Options de navigation : </h4></td>

  </tr>
  
  <tr>
  
  <td>
    afficher les boutons : 
    
    
  </td>
  <td>
        <input type="checkbox" name="opt_navButtons" id="opt_navButtons" value="true" checked class="option_slider"  onclick="maj_options_slider ();"/> 
  </td>
  
  </tr>
  
  
  
  <tr>
  
  <td>
    boutons suivant et précédent: 
  </td>
  <td>
		<input type="checkbox" name="opt_navPrevNext" id="opt_navPrevNext" value="true" checked class="option_slider" onclick="maj_options_slider ();"/> 
  </td>
  
  </tr>
  
  
  
  <tr>
  
  <td>
    
    
    seulement au survol: 
    
  </td>
  <td>
		<input type="checkbox" name="opt_hoverPrevNext" id="opt_hoverPrevNext" value="true" checked="checked" class="option_slider"  onclick="maj_options_slider ();"/>
  </td>
  
  </tr>
  
  
  
  <tr>
  
  <td>
    boutons start/stop: 
    
  </td>
  <td>
        <input type="checkbox" name="opt_navStartStop" id="opt_navStartStop" value="true" checked class="option_slider"  onclick="maj_options_slider ();"/> 
  </td>
  
  </tr>
  
  
  
  <tr>
  
  <td>
    boutons miniatures:
  </td>
   <td>
    <select name="opt_thumbnailNavigation" id="opt_thumbnailNavigation" class="option_slider"  onchange="maj_options_slider ();">
      <option value="'hover'">au survol</option>
        <option value="'always'">toujours affichés</option>
        <option value="'disabled'">désactivés</option>
    </select> 
  </td>
 
  </tr>
  
  
  
  <tr>
  
  <td>
    navigation au clavier <br />
    (flèches droite et gauche): </td>
  <td>
<input type="checkbox" name="opt_keybNav" id="opt_keybNav" value="true" checked class="option_slider"  onclick="maj_options_slider ();"/> 
  </td>
  
  </tr>
  
  
 
  <tr>
  
  <td>
    navigation écran tactile <br />
    (glissé de doigts): </td>
  <td>
         <input type="checkbox" name="opt_touchNav" id="opt_touchNav" value="true" checked class="option_slider"  onclick="maj_options_slider ();"/>
  </td>
  
  </tr>
  
  
  
  
</table>
    <table style="display:inline-table;">
      <tr>
        <td colspan="2"><h4>Autres options : </h4></td>
      </tr>
      <tr>
        <td> mode responsive (s'adapte à tous les écrans): </td>
        <td><input type="checkbox" name="opt_responsive" id="opt_responsive" value="true" checked="checked" class="option_slider"  onclick="maj_options_slider ();"/></td>
      </tr>
      <tr>
        <td> démarrage auto: </td>
        <td><input type="checkbox" name="opt_autoStart" id="opt_autoStart" value="true" checked="checked" class="option_slider"  onclick="maj_options_slider ();"/></td>
      </tr>
      <tr>
        <td> auto play vidéos: </td>
        <td><input type="checkbox" name="opt_autoPlayVideos" id="opt_autoPlayVideos" value="true" checked="checked" class="option_slider" onclick="maj_options_slider ();"/></td>
      </tr>
      <tr>
        <td> pause au survol: </td>
        <td><input type="checkbox" name="opt_pauseOnHover" id="opt_pauseOnHover" value="true" checked="checked" class="option_slider" onclick="maj_options_slider ();"/></td>

      </tr>
    </table>
<br />
<br />
Toutes les options du slider pourront aussi être modifiées ensuite, celles-ci dessus comprises.<br />
<a href="#" onclick="maj_options_slider (); $('#other_options_settings').css('display', 'none'); $('#other_options_settings_a').css('display', 'inline');">Fermer les réglages de navigation et options du slider</a>

        
</div>        
        
</div>
<br>
        
        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
        <div class="row fileupload-buttonbar">
            <div class="col-lg-7">
                <!-- The fileinput-button span is used to style the file input field as button -->
                <span class="btn btn-success fileinput-button">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span>Ajouter des fichiers...</span>
                    <input type="file" name="files[]" multiple>
                </span>
                <button type="submit" class="btn btn-primary start">
                    <i class="glyphicon glyphicon-upload"></i>
                    <span>Démarrer l'upload</span>
                </button>
                <button type="reset" class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Annuler</span>
                </button>
                <button type="button" class="btn btn-danger delete">
                    <i class="glyphicon glyphicon-trash"></i>
                    <span>Supprimer</span>
                </button>
                <input type="checkbox" class="toggle">
                <!-- The global file processing state -->
                <span class="fileupload-process"></span>
            </div>
            
            <!-- The global progress state -->
            <div class="col-lg-5 fileupload-progress fade">
                <!-- The global progress bar -->
                <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-success" style="width:0%;"></div>
                </div>
                <!-- The extended global progress state -->
                <div class="progress-extended">&nbsp;</div>
            </div>
        </div>
        
            <div></div>
            
            
            
            
            
        
<!-- The table listing the files available for upload/download -->
        <table role="presentation" class="table table-striped"><tbody class="files" id="files_updls"></tbody></table>
    </form>
    <br>
    <div class="panel panel-default">
      <div class="panel-heading">
          <h3 class="panel-title">Création de votre slider :</h3>
            <p><br />
              Choisissez votre format de slider, uploadez vos images, et redimensionnez-les au besoin.<br />
Ces images  seront les images principales (de fond) de chaque vue de votre slider.<br />
Puis cliquez sur <strong>[créer mon slider]</strong>, vous pourrez ensuite   animer autant  de textes, images et vidéos que voulus sur chacune de vos vues, et finaliser votre slider.</p>



            <p>
<? 
/*
<span style="border:1px solid #118845; display:block; width:auto; height:auto;"><img src="Image/Slider/numero_vert.gif" style=""/></span>
*/			
			
			
			if ($_SESSION['email'] != '' && preg_replace('/@.+$/', '', $_SESSION['email']) == $_SESSION['pseudo'])
{
	$display_login = 'display:block;';
	$display_identified = 'display:none;';
}
else
{
	$display_login = 'display:none;';
	$display_identified = 'display:block;';
}
?>

  <div id="s_login" style="<? echo $display_login; ?>">
  <? echo $_SESSION['pseudo']; ?>, administration et visite de vos <? echo $_SESSION['email']; ?> sliders.
</div>
<div id="s_identified" style="<? echo $display_identified; ?>">

<div id="identifier_no">Mode démonstration. Pour enregistrer votre slider et pouvoir le modifier ensuite, vous devez <a href="#" onclick="$('#identifier').css('display', 'block'); $('#identifier_no').css('display', 'none');">être identifié</a>.</div>

<div id="identifier" style="display:none;">
Si vous avez déjà un compte, veuillez vous identifier : <br />
<span>adresse email : <input type="text" value="" id="" name="" />
mot de passe : <input type="password" value="" id="" name="" />
J'ai perdu mon mot de passe - Créer mon compte - Accéder à mon compte
</span>
<a href="#" onclick="$('#identifier').css('display', 'none'); $('#identifier_no').css('display', 'block');">mode démonstration</a>
</div>
</div>
&nbsp; </p>
      </div>
        <div class="panel-body" style="display:none;">
            <ul>
                <li>The maximum file size for uploads in this demo is <strong>5 MB</strong> (default file size is unlimited).</li>
                <li>Only image files (<strong>JPG, GIF, PNG</strong>) are allowed in this demo (by default there is no file type restriction).</li>
                <li>Uploaded files will be deleted automatically after <strong>5 minutes</strong> (demo setting).</li>
                <li>You can <strong>drag &amp; drop</strong> files from your desktop on this webpage (see <a href="https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support">Browser support</a>).</li>
                <li>Please refer to the <a href="https://github.com/blueimp/jQuery-File-Upload">project website</a> and <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">documentation</a> for more information.</li>
                <li>Built with Twitter's <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> CSS framework and Icons from <a href="http://glyphicons.com/">Glyphicons</a>.</li>
            </ul>
        </div>
    </div>
</div>
<!-- The blueimp Gallery widget -->
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>
<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-upload fade">
        <td>
            <span class="preview"></span>
        </td>
        <td>
            <p class="name">{%=file.name%}</p>
            <strong class="error text-danger"></strong>
        </td>
        <td>
            <p class="size">Processing...</p>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
        </td>
        <td>
            {% if (!i && !o.options.autoUpload) { %}
                <button class="btn btn-primary start" disabled>
                    <i class="glyphicon glyphicon-upload"></i>
                    <span>Démarrer l&acute;upload</span>
                </button>
            {% } %}
            {% if (!i) { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Annuler</span>
                </button>
            {% } %}
			
			
			
			
			
        </td>
    </tr>
{% } %}
</script>
<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { 
		if (typeof (document.nfiles) == 'undefined')
			document.nfiles = 0;
		else
			document.nfiles ++;

%}
    <tr class="template-download fade">
        <td style="width:320px;">
				
			<span style="display:none; position:absolute; z-index:200; margin:0; padding:0; width:10px; height:10px; border:1px solid #FF0000" id="cadre_preview_{%=file.name%}">&nbsp;</span>
		
            <span class="preview" id="preview_{%=file.name%}" style="text-align: center; display:inline-block; margin:0; padding:0; overflow:hidden;">
                {% if (file.thumbnailUrl) { %}

				<span style="vertical-align: middle; line-height:normal; margin:0; padding:0;">	
					<img src="{%=file.url%}" id="{%=file.name%}" class="img_preview" style="width:300px; height:auto;" onload="num_vues(); cree_croprotate ($(this));">
			
				</span>
			
                {% } %}
            </span>
        </td>
        <td style="width:50%;">
            <p class="name">
			<strong>Vue <span class="num_vue">0</span></strong>, image de fond : 
                {% if (file.url) { %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                {% } else { %}
                    <span>{%=file.name%}</span>
                {% } %}
            </p>
            {% if (file.error) { %}
                <div><span class="label label-danger">Error</span> {%=file.error%}</div>
            {% } %}
			
		<div style="display:none;">
		
			<input type="text" value="{%=file.url%}" id="bgimage_{%=document.nfiles%}" name="bgimage_{%=document.nfiles%}" /><br />
			
			img dims :<br />
			w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_width" name="{%=file.name%}_width"/>
			h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_height" name="{%=file.name%}_height"/>
			mini_w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_mini_width" name="{%=file.name%}_mini_width"/>
			mini_h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_mini_height" name="{%=file.name%}_mini_height"/>
			/:<input type="text" value="" style="width:60px;" id="{%=file.name%}_rapport" name="{%=file.name%}_rapport"/>
			
			<br />
			crop settings :<br />
			<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_ratio" name="{%=file.name%}_crop_ratio"/>
			min_w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_min_width" name="{%=file.name%}_crop_min_width"/>
			max_w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_max_width" name="{%=file.name%}_crop_max_width"/>
			min_h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_min_height" name="{%=file.name%}_crop_min_height"/>
			max_h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_max_height" name="{%=file.name%}_crop_max_height"/><br />
			final crop : <br />
			w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_width" name="{%=file.name%}_crop_width"/>
			 h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_height" name="{%=file.name%}_crop_height"/>
			 x:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_x" name="{%=file.name%}_crop_x"/>
			 y:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_y" name="{%=file.name%}_crop_y"/><br />
			
			 margin_top:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_margin_top" name="{%=file.name%}_crop_margin_top"/>
			 margin_left:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_margin_left" name="{%=file.name%}_crop_margin_left"/><br />
			
			w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_final_width" name="{%=file.name%}_crop_final_width"/>
			h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_final_height" name="{%=file.name%}_crop_final_height"/>
			x:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_final_x" name="{%=file.name%}_crop_final_x"/>
			y:<input type="text" value="" style="width:60px;" id="{%=file.name%}_crop_final_y" name="{%=file.name%}_crop_final_y"/><br />
			Rotation dims :<br />
			w:<input type="text" value="" style="width:60px;" id="{%=file.name%}_width_rotation" name="{%=file.name%}_width_rotation"/>
			h:<input type="text" value="" style="width:60px;" id="{%=file.name%}_height_rotation" name="{%=file.name%}_height_rotation"/>			
			
		</div>
		<br />
		<div id="legendes">
		<input type="hidden" value="{%=document.nfiles%}" id="refnum_{%=file.name%}" name="refnum_{%=file.name%}"/>
		<span id="legende_{%=document.nfiles%}" onmouseover="document.getElementById(this.id+'_1_explain').style.display = 'block';" onmouseout="document.getElementById(this.id+'_1_explain').style.display = 'none';" >
		<span style="display:inline-block; width:29%; margin: 0 1% 0 0;">premier texte, légende : </span><input type="text" style="width:70%; margin:0; display:inline-block;" value="" id="legende_{%=document.nfiles%}_text" name="legende_{%=document.nfiles%}_text" onchange="add_legende_view(this);"/>
		</span>
		
		<span id="recadrage_{%=document.nfiles%}" class="recadrage" onmouseover="document.getElementById(this.id+'_1_explain').style.display = 'block';" onmouseout="document.getElementById(this.id+'_1_explain').style.display = 'none';" ><br />
		<strong>recadrage</strong> : rotation de l&acute;image : <input type="text" value="" style="width:30px; text-align:center" id="{%=file.name%}_rotate" name="{%=file.name%}_rotate" onchange="rotate_img_crop (this)"/>&deg; (degrés)
		
		 - cadre <input type="checkbox" name="sicadre_preview_{%=file.name%}" id="sicadre_preview_{%=file.name%}" value="true" onclick="set_cadre_preview(this, 'preview_{%=file.name%}')">
		- <input type="button" onclick="crop_image('{%=file.name%}', 'test');" value="tester le crop"/>
		
</span>

	<span id="makeslider_{%=document.nfiles%}_1_explain" style="display:none;">
Une fois toutes vos images recadrées, cliquez simplement sur le bouton [Créer mon slider !]

	</span>

<span id="crop_iframe_{%=file.name%}"></span>
	</div>

		
<? /*





		<span id="legende_{%=document.nfiles%}_1">
		{%=document.nfiles%} : 
			<select id="legende_1_nodeName" name="legende_1_nodeName" style="width:15%;">
			<option value="div">div: bloc html classique</option>
			<option value=""> </option>

			<option value="h1">h1: titre de page html</option>
			<option value="h2">sous-titre h2 de page html</option>
			<option value="h3">sous-titre h3 de page html</option>
			<option value="h4">sous-titre h4 de page html</option>
			<option value="p">paragraphe html</option>
			<option value=""> </option>
			<option value="article">article: ! balise html5</option>
			<option value="figure">figure: ! balise html5</option>

			</select>
			
			<input type="text" style="width:40%;" value="" id="legende_1_text" name="legende_1_text"/>
			
			<select id="legende_1_className" name="legende_1_className" style="width:15%;">
			<option value=""></option>
			</select>
		
			<span style="display:_none;">
				<input type="text" value="" id="legende_1_x" name="legende_1_x" style="width:5%;"/>
				<input type="text" value="" id="legende_1_y" name="legende_1_y" style="width:5%;"/>
				<input type="text" value="" id="legende_1_w" name="legende_1_w" style="width:5%;"/>
				<input type="text" value="" id="legende_1_h" name="legende_1_h" style="width:5%;"/>
			</span>
			
			<input type="button" id="legende_1_moins" name="legende_1_moins" onclick="legende_suppr(this);" value="-" style="width:3%;"/>
			<input type="button" id="legende_1_plus" name="legende_1_plus" onclick="legende_add(this);" value="+" style="width:3%;"/>
			
		</span>
*/
?>		
		
		
		</div>
		
		
									
        </td>
        <td style="width:5%;">
            <span class="size">{%=o.formatFileSize(file.size)%}</span>
        </td>
        <td>
            {% if (file.deleteUrl) { %}
                <button class="btn btn-danger delete" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
                    <i class="glyphicon glyphicon-trash"></i>
                    <span>Supprimer</span>
                </button>
                <input type="checkbox" name="delete" value="1" class="toggle">
            {% } else { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Annuler</span>
                </button>
            {% } %}
			
			
		<span id="legende_{%=document.nfiles%}_1_explain" style="display:none;">
		Facultatif.
		Après avoir créé votre slider, vous pourrez ajouter, modifier, supprimer, faire apparaître et animer autant de textes, images et vidéos que souhaités sur cette vue de votre galerie (slider).
		</span>
			
		<span id="recadrage_{%=document.nfiles%}_1_explain" style="display:none;">
		Mettez votre image au format du slider.<br />
		Pensez à réserver la place ou vous voudrez faire apparaître les textes, images et vidéos souhaités sur cette vue.
		</span>
                <button class="makeslider" id="makeslider_{%=document.nfiles%}" type="button" class="btn btn-primary start"  onmouseover="document.getElementById(this.id+'_1_explain').style.display = 'block';" onmouseout="document.getElementById(this.id+'_1_explain').style.display = 'none';" onclick="create_new_slider();">
                   <h3> <i class="glyphicon glyphicon-upload"></i>
                    <span>Créer mon slider !</span></h3>
                </button>
	        </td>
    </tr>
{% } %}
</script>
 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- <script src="Scripts_Fonctions/jquery-ui-1.10.4.custom/js/jquery-1.10.2.js"></script>
 -->


<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/vendor/jquery.ui.widget.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="http://blueimp.github.io/JavaScript-Templates/js/tmpl.min.js"></script>
<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
<script src="http://blueimp.github.io/JavaScript-Load-Image/js/load-image.min.js"></script>
<!-- The Canvas to Blob plugin is included for image resizing functionality -->
<script src="http://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js"></script>
<!-- Bootstrap JS is not required, but included for the responsive demo navigation -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<!-- blueimp Gallery script -->
<script src="http://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.iframe-transport.js"></script>
<!-- The basic File Upload plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload.js"></script>
<!-- The File Upload processing plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-process.js"></script>
<!-- The File Upload image preview & resize plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-image.js"></script>
<!-- The File Upload audio preview plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-audio.js"></script>
<!-- The File Upload video preview plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-video.js"></script>
<!-- The File Upload validation plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-validate.js"></script>
<!-- The File Upload user interface plugin -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/jquery.fileupload-ui.js"></script>
<!-- The main application script -->
<script src="Scripts_Fonctions/jQuery-File-Upload-master/js/main.js"></script>

<!-- JCROP -->
<script src="Scripts_Fonctions/tapmodo-Jcrop-1902fbc/js/jquery.Jcrop_rotate.js"></script>
<link rel="stylesheet" href="Scripts_Fonctions/tapmodo-Jcrop-1902fbc/css/jquery.Jcrop.css" type="text/css" />
<link rel="stylesheet" href="Scripts_Fonctions/jquery-ui-1.10.4.custom/css/legendes/jquery-ui-1.10.4.custom.min.css" type="text/css" />

<!-- JQUERY UI SLIDER ROTATION CROP  -->
<script src="Scripts_Fonctions/jquery-ui-1.10.4.custom/js/jquery-ui-1.10.4.custom.min.js"></script>

<!-- ROTATE AND CROP -->
<script src="Scripts_Fonctions/rotate_and_crop_0.1/rotate_and_crop.js"></script>




<!-- The XDomainRequest Transport is included for cross-domain file deletion for IE 8 and IE 9 -->
<!--[if (gte IE 8)&(lt IE 10)]>
<script src="js/cors/jquery.xdr-transport.js"></script>
<![endif]-->
<script type="text/javascript" language="javascript">

// $('#fileupload').bind('fileuploadadd', function (e, data) {/* alert('files in fileupload'); */ if (document.getElementById('slider_newslider_div').style.display == 'none') affiche_newslider (); });

$('#fileupload').bind('fileuploaddragover', function (e, data) { /* alert('files in page'); */ if (document.getElementById('slider_newslider_div').style.display == 'none') affiche_newslider (); });

$('#fileupload').bind('fileuploadsubmit', function (e, data) {  if (document.getElementById('nom_du_slider').value.replace(/^\s+|\s+$/, '') == '') document.getElementById('nom_du_slider').value = 'slider_1'; });

$('#fileupload').bind('fileuploaddone', function (e, data) 
{
    $.each(data.files, function (index, file) {
   //     console.log('Selected file: ' + file.name);
      
    });
}) ;
 
 
$('#files_updls').on('click', 'img.img_preview', function() {
	
//	alert ($(this).attr("id")+' --- '+$(this).attr("id")/* .replace(/^preview_/, '') */);
//	alert ($(this).attr("id")+' --- '+$('img.img_preview').attr('id')+' --- '+$('img.img_preview').parent( ".preview" ).attr("id"));
//	new_crop_img($(this), $(this).attr("id").replace(/^preview_/, ''));
	
	cree_croprotate ($(this));
		
});

function num_vues()
{
	var numsvues = document.getElementsByClassName('num_vue');
	
	for (a=0; a < numsvues.length; a++)
	{
		numsvues[a].innerHTML = (a+1);	
	}
	
}

function create_new_slider() 
{
	var lesimgsdefond = document.getElementsByClassName('img_preview');
	
	for (b=0; b<lesimgsdefond.length;b++)
	{
		var id_cette_image = lesimgsdefond[b].id;
		crop_image(id_cette_image, 'crop_iframe_'+id_cette_image);		
	}
	
	create_new_slider_htmlfiles ();
}

function create_new_slider_htmlfiles ()
{
	
	if (typeof(document.all_images_are_cropped) != 'undefined' && document.all_images_are_cropped == true)	
	{
		
		var width_slider = document.getElementById('dims_slider_w').value;
		var height_slider = document.getElementById('dims_slider_h').value;

		var lesimgsdefond = document.getElementsByClassName('img_preview');
		var les_ids_images = new Array();
		
		var leslider_html = '<div id="layerslider" style="width: '+width_slider+'; height: '+height_slider+'; margin: 0px auto; margin-bottom: 10px;">\n\n';
		
		for (b=0; b<lesimgsdefond.length;b++)
		{
			var id_cette_image = lesimgsdefond[b].id;
			les_ids_images.push (id_cette_image);


			leslider_html += '	<div class="ls-layer noir_transparent" style="slidedelay: 7200; transition2d: all; transition3d: all;">\n';
			leslider_html += '		<img src="'+document.getElementById(id_cette_image).src.replace(/^https?:\/\/[^\/]+\//, '')+'" class="ls-bg">\n';


			var refnum_sitexte = document.getElementById('refnum_'+id_cette_image).value;
			var texte_cette_vue = document.getElementById('legende_'+refnum_sitexte+'_text').value.replace(/^\s+|\s+$/g, '');	

			
			if (texte_cette_vue != '')
			{
				var le_style_sublayer = 'top:85%; left:10%; width:80%; height:12%;';
				le_style_sublayer = pourcent_to_real_width_sublayers (width_slider, height_slider, le_style_sublayer) ;
				
				leslider_html += '		<div class="ls-s1 coins_arrondis_10px" style="position: absolute; '+le_style_sublayer+' slidedirection : top; slideoutdirection : fade; durationin : 1000; durationout : 1000; easingin : easeOutExpo; easingout : easeInQuart; delayin : 1500; delayout : 0; showuntil : 2000; rotatein : -120; scaleout : .5;">\n		'+texte_cette_vue+'\n		</div>\n';			
			}

			leslider_html += '	</div>\n\n';
		}
		leslider_html += '</div>';
		
		
		maj_options_slider ();
		
		var les_css_slider = document.getElementById('css_slider').innerHTML;
		
		les_css_slider = pourcent_to_real_width_sublayers (width_slider, height_slider, les_css_slider) ;
	//	alert ('les_css_slider traité : '+les_css_slider);
		document.getElementById('css_slider').innerHTML = les_css_slider;
		
		document.getElementById('html_slider').innerHTML = leslider_html;
		document.getElementById('nom_slider').value = document.getElementById('nom_du_slider').value;
		document.getElementById('rep_client').value = document.getElementById('repc').value;
		
		document.forms['makeslider'].submit();
				
		
	}
	else
		setTimeout(create_new_slider_htmlfiles, 1000);
	
}

function pourcent_to_real_width_sublayers (width_slider, height_slider, les_css_slider) {		
	if (!width_slider.match(/%/))
	{
		var width_slider_num = new Number (width_slider.replace(/px/, ''));
		les_css_slider = les_css_slider.replace (/\s(left|width)\s*:\s*([.0-9]+)%\s*;/g, function ($1,$2,$3) {return ('	'+$2+' : '+(new Number($3) * width_slider_num / 100)+'px;')});
	}

	if (!height_slider.match(/%/))
	{
		var height_slider_num = new Number (height_slider.replace(/px/, ''));
		les_css_slider = les_css_slider.replace (/\s(top|height)\s*:\s*([.0-9]+)%\s*;/g, function ($1,$2, $3) {return ('	'+$2+' : '+(new Number($3) * height_slider_num / 100)+'px;')});
	}
	return (les_css_slider);
}


function add_legende_view (obj)
{
	var classdiv_to_add_html = 'jcrop-tracker';
	var html_base = '<div style="position:absolute; top:85%; left:10%; width:80%; height:10%; background-color:rgba(0,0,0, 0.7); font-size:70%; padding:0 2%; overflow:hidden;">___texte_facultatif___</div>';	
	
	var img_champ_id = obj.id.replace(/^legende_([0-9]+)_text$/, 'bgimage_$1');
	var id_img = document.getElementById(img_champ_id).value.replace(/^.+\/([^\/]+)$/, '$1');
	
	var image_span_parent = document.getElementById(id_img).parentNode.parentNode.parentNode;
	
	
	var div_to_add_htm = image_span_parent.getElementsByClassName(classdiv_to_add_html)[0];
	
	
	
	
	
	var lavalue = obj.value.replace(/"/, '&quot;').replace(/^\s+|\s+$/g, '');
	
	if (lavalue == '')
	{
		div_to_add_htm.innerHTML = '';
	}
	else
	{
		var html_value = html_base.replace(/___texte_facultatif___/, lavalue);
		div_to_add_htm.innerHTML += html_value;
	}
	
}
 
 
function apply_img_dims (obj)
{
	if (obj != null)
    {
        var values_opt = obj.value; 
        if (values_opt.match(/autre/)) 
        { 
            obj.style.display = 'none';
            $('#dims_persos').css('display', 'inline-block'); 
        } else { 
            var values=values_opt.split(/ X /); 
            $('#dims_slider_w').val(values[0]); 
            $('#dims_slider_h').val(values[1]);
			
			
        }
	}

	if (typeof(document['crop_images']) != 'undefined')
	{
		for (img_id in document['crop_images'])
		{
//			console.log(img_id+' : '+document['crop_images'][img_id]+' : '+typeof (document['crop_images'][img_id]));
			new_rotate_and_crop ($('#'+img_id), img_id);
		}
	}
	
}    


 
 
</script>