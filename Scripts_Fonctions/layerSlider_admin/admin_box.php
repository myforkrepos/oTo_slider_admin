<div id="layerslider_admin">
___STYLESCSS_ADMIN_SLIDER___

<a name="MemeEndroit" style="position:absolute; top:0px;"></a>
    <div id="layerslider_admin_saveckeditor">
    
                        
       <input type="button" value="déplacer" id="move_layerslider_admin_saveckeditor" onmousedown="make_draggable('layerslider_admin_saveckeditor');" />

        <b class="voyant">Cliquez dans le pavé entouré pour le modifier</b>, puis <b class="voyant"><a href="javascript:ferme_ckditor('save');">validez</a></b> ou <b class="voyant"><a href="javascript:ferme_ckditor('nosave');">annulez</a></b>
        <input type="hidden" id="cke_textarea_id" name="cke_textarea_id" value="">
      <input type="hidden" id="cke_numlslider_edit" name="cke_numlslider_edit" value="">
      <input type="hidden" id="cke_numsublslider_edit" name="cke_numsublslider_edit" value="">
      <input type="hidden" id="cke_ex_styles" name="cke_ex_styles" value="">
      <input type="hidden" id="ckeditor_style_edition" name="ckeditor_style_edition" value="">
      
      <div style="position:absolute; margin-top:-1000px;" id="test_font_sizes1"><p id="test_font_sizes1_p">Test</p></div>
      <div style="position:absolute; margin-top:-1000px;" id="test_font_sizes2"><p id="test_font_sizes2_p">Test</p></div>
      
      <div id="apparence_sublayerslider_form"></div>
    
    
    <div style="position:absolute; margin-top:-1000px;" class="false_tabindex"><a href="javascript:void(0);">&nbsp;</a><a href="javascript:void(0);">&nbsp;</a><a href="javascript:void(0);">&nbsp;</a><a href="javascript:void(0);">&nbsp;</a></div>
    
    </div>

    
    
<div id="layers_list">
    
        <ul id="htmlform_layer"></ul>
    
</div>
    
    
    
    
    
   <div id="sous_calque_vierge_div" style="display:_none;">
    
        <div class="ls-s-1" style="top:30px; left:50px; width:400px; height:200px; padding:30px; background-color:#D0C4DC; slidedirection : right; slideoutdirection : bottom; durationin : 1500; durationout : 1500; easingin : easeOutBack; easingout : easeInOutQuint; delayin : 700; delayout : 0; showuntil : 0;">
            <h2>Nouveau sous-calque</h2><p>Editez votre nouveau sous-calque.</p>
        </div>

    </div>   


   <div id="sous_calque_vierge_image" style="display:_none;">
        <img class="ls-s-1" src="Image/icone-iphoto.jpg" style="top:20px; left:20px; width:300px; slidedirection : bottom; durationin : 1500; easingin : easeOutElastic; delayin : 0; slideoutdirection : right; durationout : 1500;  easingout : easeInOutQuint; delayout : 0; showuntil : 0;"/>
    
   </div>   

   <div id="calque_vierge" style="display:_none;">
        <div class="ls-layer" style="slidedelay: 8200; timeshift:0; transition3d:all;">
        
            <img  class="ls-bg" src="Image/Slider/fond_flou_slider.jpg" >
        </div>
   </div>
    
    
        
    
    <div id="preload_slider_imgs" style="width:auto; height:2px; position:absolute; margin-top:-1000px; overflow:hidden;"></div>
    <div class="c-api" style="margin-top:70px; display:_none; width:200px; height:200px; overflow-y:auto;"></div>

    <div id="slider_sauvegardes_div" style="margin-top:70px; display:_none;  width:800px; height:auto; overflow-y:auto;">
  <h3>Sauvegardes précédentes du Slider :</h3>
    <p>Les sauvegardes se font automatiquement à l'enregistrement de vos modifications.<br />
    	<iframe id="iframe_slider_sauvegardes" name="iframe_slider_sauvegardes" src="Scripts_Fonctions/layerSlider_admin/iframe.php" frameborder="0" height="450" width="750"></iframe>
    </div>
  <div id="slider_css_div" style="display:_none;">
 <h3>Définition des classes de style CSS du Slider :</h3>
    <p><a href="http://www.w3schools.com/css/default.asp" target="_blank">Documentation CSS de référence</a>, aide et explications (en anglais). <a href="javascript:save_settings ('css'); ">appliquer</a>
     <a href="javascript:annule_settings ('css'); ">annuler</a>
     <a href="javascript:save_layerslider();">tout enregistrer</a>
</p>
		<textarea name="slider_css_form" id="slider_css_form"></textarea>
		<textarea name="ex_slider_css_form" id="ex_slider_css_form" style="display:none;"></textarea>
    </div>
    
  <div id="slider_style_div" style="display:_none;">
 <h3>Attribut style du Slider (css pour dimensions, marges...) :</h3>
    <p><a href="http://www.w3schools.com/css/default.asp" target="_blank">Documentation CSS de référence</a>, aide et explications (en anglais). <a href="javascript:save_settings ('style'); ">appliquer</a>
     <a href="javascript:annule_settings ('style'); ">annuler</a>
     <a href="javascript:save_layerslider();">tout enregistrer</a>
</p>
		<textarea name="slider_style_form" id="slider_style_form"></textarea>
		<textarea name="ex_slider_style_form" id="ex_slider_style_form" style="display:none;"></textarea>
    </div>
    
    <div id="slider_config_div" style="display:_none;">
    <h3>Configuration complète du Slider :</h3>
    <p><a href="Scripts_Fonctions/LayerSlider-4.6.1-standalone/documentation/documentation.html#global_settings" target="_blank">Documentation, aide et explications</a> (en anglais). <a href="javascript:save_settings ('config'); ">appliquer</a>
     <a href="javascript:annule_settings ('config'); ">annuler</a>
     
     <a href="javascript:save_layerslider();">tout enregistrer</a>
</p>
		<textarea name="slider_config_form" id="slider_config_form"></textarea>
		<textarea name="ex_slider_config_form" id="ex_slider_config_form"  style="display:none;"></textarea>

    </div>
    
    <div id="forms_html" style="display:_none;">
        <ul id="htmlform_layer_tmp" style="display:_none;">
            <li class="htmlform_layer_LI" id="LS_adminLI____ls_num___" >

			<span class="LI_anchor" id="LS_adminLI_anchor____ls_num___">
            <a name="LS_adminLI____ls_num___"></a>&nbsp;ancre LI ___ls_num___
            </span>       
                    <div class="protect_sorting" onmousedown="kel_ID_sorting(this.parentNode.id);">
                        <span>Cliquez-glissez cette vue pour la déplacer. Ou <a href="javascript:make_sortable_htmform ('cancel');">annulez le déplacement</a>.
                        </span>
                    </div>
              
              ___Layers_and_sub___
              </li>
        </ul>
        
        
        
        <div id="sublayerslider_formtools_modele">

            <div class="sublsform_style____n_ls_______n_lssub___" id="sublsform_style____n_ls_______n_lssub___">
                <p class="champ_class">
                    <input type="hidden" value="___node_sublslayer___value" name="node_lslayer____n_ls_______n_lssub___" id="node_lslayer____n_ls_______n_lssub___"/>
                    classe css : 
                    <input type="hidden" value="___class_sublslayer___value" name="class_lslayer____n_ls_______n_lssub___" id="class_lslayer____n_ls_______n_lssub___"/>
                    <input type="hidden" value="___class_sublslayer___value" name="ex_class_lslayer____n_ls_______n_lssub___" id="ex_class_lslayer____n_ls_______n_lssub___"/>

                    <select id="select_class_lslayer____n_ls_______n_lssub___" onchange="change_class(this);">
                    </select> &nbsp; 
             <!--       
                    <input type="button" onclick="change_style(document.getElementById('select_class_lslayer____n_ls_______n_lssub___'));" id="appliquer_select_class_lslayer____n_ls_______n_lssub___" value="appliquer"/>
                    <a href="javascript:ouvre_ou_ferme_styles('champ_style____n_ls_______n_lssub___');" >style, position et marges</a>
				-->
                    <input type="button" onclick="ouvre_ou_ferme_styles('champ_style____n_ls_______n_lssub___');" value="style, position et marges"/>
    
                    <span class="champ_style" id="champ_style____n_ls_______n_lssub___" style="display:_none;">
                        <span class="allwidth">
                         <b>Réglages de position, style CSS</b> 
                        <input type="button" onclick="change_style(document.getElementById('style_lslayer____n_ls_______n_lssub___'));" id="appliquer_style_lslayer____n_ls_______n_lssub___" value="appliquer"/>
                        <input type="button" onclick="ouvre_ou_ferme_styles('champ_style____n_ls_______n_lssub___');" value=" X "/>
                         
                         <br />
                    	
                        (pour information, largeur du slider: ___Dim_width_slider___ X hauteur: ___Dim_height_slider___)
 
                        </span>
                        <textarea  name="style_lslayer____n_ls_______n_lssub___" id="style_lslayer____n_ls_______n_lssub___" onchange="change_style(this);">___style_sublslayer___value</textarea>                               

                        
                        <textarea  name="ex_style_lslayer____n_ls_______n_lssub___" id="ex_style_lslayer____n_ls_______n_lssub___" style="display:_none;">___style_sublslayer___value</textarea>
                        <span class="explain">
                        	Exemples et explications :<br />
                            <b>position:absolute;</b> // <b>obligatoire !</b> valeurs fixed, relative et static interdites.<br />
                            <b>top:20px;</b> // bord haut à 20 pixels (ou %)<br />
                            <b>left:20px;</b> // bord gauche à 20 pixels (ou %)<br />
                            <b>width:450px;</b> // largeur de 450 pixels (ou %, ou auto)<br />
                            <b>height:210px;</b> // hauteur de 210 pixels (ou %, ou auto)<br />
                            <b>padding:20px 40px 10px 50px;</b> // marges_intérieures haute droite basse gauche (en px, % ou auto)<br />
                            <br />
                            La propriété css <b>margin</b> est inutilisable dans le slider.<br />
							Pour les autres propriétés css, préférez les définir dans les classes css.
                        </span>
                        
                    </span>
                
                </p>
                
                
                <p class="champ_src" style="display:table-footer-group">
                   <span class="bloc_image">
                        <span><b>source de l'image :</b><br />
                            <span id="src_lslayer____n_ls_______n_lssub____filename">___src_sublslayer___value</span>
                            <span>
                                Cliquez sur l'image -><br />
                                pour en choisir une autre
                            </span>
                         </span>
                    
                       <input type="text" value="___src_sublslayer___value" name="src_lslayer____n_ls_______n_lssub___" id="src_lslayer____n_ls_______n_lssub___" onclick="openFileBrowser(this.id);" style="background-image:url(___src_sublslayer___value);"/>
                       <input type="hidden" value="___src_sublslayer___value" name="ex_src_lslayer____n_ls_______n_lssub___" id="ex_src_lslayer____n_ls_______n_lssub___"/>
                   </span>
                
                </p>

            </div>
                            
            <div class="sublsform_slider____n_ls_______n_lssub___">
                
                <p class="champ_style">
                
                    <span class="allwidth">
                <input type="hidden" value="___positiondepart_lslayer___value" name="positiondepart_lslayer____n_ls_______n_lssub___" id="positiondepart_lslayer____n_ls_______n_lssub___"/>
                
                Les sous-calques arrivent de plus en plus vite selon leur position dans la liste.<br />
               <input type="checkbox" value="-1" onclick="if (this.checked == true) $('#positiondepart_lslayer____n_ls_______n_lssub___').value = this.value; else $('#positiondepart_lslayer____n_ls_______n_lssub___').value = '';" ___positiondepart_checked___ />
                Cochez cette case pour annuler cet effet. (recommandé si vos sous-calques glissent dans différentes directions).<br /><br />

    		     		<b>Réglages de l'animation du sous calque :</b>

                        
                        
                    </span>
                    <textarea  name="slider_lslayer____n_ls_______n_lssub___" id="slider_lslayer____n_ls_______n_lssub___" class="animslider" style="height:auto;">___slider_sublslayer___value</textarea>
                    <textarea  name="ex_slider_lslayer____n_ls_______n_lssub___" id="ex_slider_lslayer____n_ls_______n_lssub___" style="display:_none;">___slider_sublslayer___value</textarea>
                        
                     <span class="explain" style="margin-top:-30px;">
                        Exemples et explications :<br />
                       <b>slidedirection:right;</b> // sens d'entrée : top,right,bottom,left ou fade<br>
                        <b>slideoutdirection:bottom;</b> // sens de sortie : top,right,bottom,left ou fade<br>
                        <b>durationin:800;</b> durée animation entrée (en millisecondes)<br>
                       <b> durationout:1500;</b> // durée animation sortie (en millisecondes)<br>
                       <b> easingin:easeInOutQuint</b> // <a href="javascript:winmini_open('___SLIDER_ADMINREP___/examples/easing_preview.php', 'animations');">animation d'entrée, voir liste</a><br>

 
                       <b> easingout:easeOutBack;</b> // <a href="javascript:winmini_open('___SLIDER_ADMINREP___/examples/easing_preview.php', 'animations');">animation de sortie, voir liste</a><br>
                      <b>  delayin:1000;</b> // délai de 1 seconde avant animation entrée<br>
                       <b> delayout:4000;</b> // délai de 4 sec. avant animation sortie<br>
                       <b> showuntil:3000;</b> // voir après 3000 millisecondes<br>
                       <b> rotatein:360deg;</b> // rotation en entrée de 360 degrés<br>
                       <b> rotateout:-180deg;</b> // rotation en sortie de -180 degrés<br>
                       <b> scalein:2;</b> // Agrandissement de 2X en entrée<br>
                       <b> scaleout:3;</b> // Agrandissement de 3X en sortie<br>
                     </span>
                </p>
          </div>
                            
          <div class="sublsform_innerHTML____n_ls_______n_lssub___">
                         		
<div class="innerHTML" style="display:_none;" id="innerHTML_lslayer____n_ls_______n_lssub___">
___innerHTML_sublslayer___value
</div>
                               
<div class="innerHTML" style="display:_none;" id="ex_innerHTML_lslayer____n_ls_______n_lssub___">
___innerHTML_sublslayer___value
</div>
                               
                                <p>Chargement de la vue et de l'éditeur de contenu...</p>
                                
                                
          </div>




        </div>        
        
        
        
        <div id="sublayerslider_formmenu_modele">
  <div id="sublsform_menu____n_ls_______n_lssub___" class="sublsform_menu">

                        <div class="sublsform_menu" id="sublsform_menu____n_ls_______n_lssub___">
                            <h3>Vue <span class="numvue____n_ls___">___nvue_ls___</span>, calque ___n_lssub_h__ : </h3> 
                            
                            <a id="amenutools_innerHTML____n_ls_______n_lssub___" href="javascript:affiche_sous_menu ('layers_tools____n_ls___', 'sublsform_innerHTML____n_ls_______n_lssub___', 'amenutools_innerHTML____n_ls_______n_lssub___');"  style="display:table-header-group">texte (html), apparence et position</a>
                            
                            <a id="amenutools_style____n_ls_______n_lssub___" href="javascript:affiche_sous_menu ('layers_tools____n_ls___', 'sublsform_style____n_ls_______n_lssub___', 'amenutools_style____n_ls_______n_lssub___');" style="display:table-column-group">image, apparence et position</a>
                            
                            <a id="amenutools_slider____n_ls_______n_lssub___" href="javascript:affiche_sous_menu ('layers_tools____n_ls___', 'sublsform_slider____n_ls_______n_lssub___', 'amenutools_slider____n_ls_______n_lssub___');">animations</a>
                            <br>
                            

                            <a href="javascript:lslider_supprime('___n_ls_______n_lssub___');">supprimer</a>




                            <span class="new_layers_box_span">
                            
                            	<a class="new_layers_box_a" id="new_sublayer_open_menu____n_ls_______n_lssub___" href="javascript:affiche_menu_a ('___n_ls_______n_lssub___');" >nouveau sous-calque</a>
                                
                            	<a style="position: absolute; z-index:1; display:_none; border:none;  margin:-120px 0px 0px -60px; width:600px; height:300px; background:none;" id="new_sublayer_close_menu____n_ls_______n_lssub___" href="#MemeEndroit" onmouseover="cache_menu_a ('___n_ls_______n_lssub___', this);" >&nbsp;</a>
                                
                          	  <span class="new_layers_box" id="new_sublayer_menu____n_ls_______n_lssub___" style="display:_none;" onmouseover="affiche_close_menu_a('___n_ls_______n_lssub___');">
                              
                              
                         	   <a href="javascript:new_sublayer_from ('duplique', '___n_ls_______n_lssub___');" >dupliquer ce sous-calque</a> 
                         	   <a href="javascript:new_sublayer_from ('image', '___n_ls_______n_lssub___');"  >nouveau sous-calque image</a> <br />
                         	   <a href="javascript:new_sublayer_from ('div', '___n_ls_______n_lssub___');" >nouveau sous-calque texte, image et vidéo</a> 
                              
                              </span>
                              
                            </span>


							- 
                            <a href="javascript:slider_apply_modifications (___n_ls___);">tester  le slider</a>
                            <a href="javascript:save_layerslider();">tout enregistrer</a>
                            
                            
                            
                            
                        </div>
				</div>
        </div>
        
        
        
  <div id="layerslider_form_modele">
            <div class="form_LI_vue_div">
                
      <div id="layers_tools____n_ls____sm" class="layers_tools_sousmenu">
            
                        <div class="lsform_tools">
                            <div class="lsform_class">
                                <p class="champ_class">
                                <input type="hidden" value="___node_lslayer___value" name="node_lslayer____n_ls___" id="node_lslayer____n_ls___"/>
                                
                                <b>classe CSS</b> (apparence) : 
                                <input type="hidden" value="___class_lslayer___value" name="class_lslayer____n_ls___" id="class_lslayer____n_ls___"/>
                                
                    <select id="select_class_lslayer____n_ls___" onchange="change_class(this);">
                    </select> &nbsp; <input type="button" onclick="change_class(document.getElementById('select_class_lslayer____n_ls___'));" id="appliquer_select_class_lslayer____n_ls___" value="appliquer"/>

                                
                                </p>
                                
                                <p class="champ_images">
                                
                                   <span class="bloc_image">
                                        <span><b>image de fond :</b><br />
                                            <span id="srcfond_lslayer____n_ls____filename">___src_fond_lslayer___value</span>
                                            <span>
                                            Cliquez sur l'image -><br />
                                            pour en choisir une autre.
                                            </span>
                                         </span>
                                         <input type="text" value="___src_fond_lslayer___value" name="srcfond_lslayer____n_ls___" id="srcfond_lslayer____n_ls___" onclick="openFileBrowser(this.id);" style="background-image:url(___src_fond_lslayer___value);"/>
                                	</span>
                                    
                                   <span class="bloc_image">
                                        <span><b>image aperçu (facultative) :</b><br/>
                                            <span id="srcapercu_lslayer____n_ls____filename">___src_apercu_lslayer___value</span>
                                            <span>
                                            Cliquez sur l'image -><br />
                                            pour en choisir une autre.
                                            </span>
                                         </span>
                                    
                                         <input type="text" value="___src_apercu_lslayer___value" name="srcapercu_lslayer____n_ls___" id="srcapercu_lslayer____n_ls___" onclick="openFileBrowser(this.id);" style="background-image:url(___src_apercu_lslayer___value);"/>
                                
                                   </span>
                                </p>
                          </div>
                            
                            <div class="lsform_style">
                                <p class="champ_style">
                            	<textarea  name="style_lslayer____n_ls___" id="style_lslayer____n_ls___"  onchange="change_style(this);">___style_lslayer___value</textarea><br />
                                <input type="button" onclick="change_style(document.getElementById('style_lslayer____n_ls___'));" id="appliquer_style_lslayer____n_ls___" value="appliquer"/>
                                </p>
                            </div>
                            
                            <div class="lsform_slider">

                                
                                <p class="champ_style">
                         		<textarea  name="slider_lslayer____n_ls___" id="slider_lslayer____n_ls___" onchange="change_style(this);">___slider_lslayer___value</textarea>
                                
                             <span class="explain">
                              	Exemples et explications :<br />

                              <b> slidedelay: 6000;</b> // durée totale de cette vue, en millisecondes.<br>
                                <b>transition2d: all;</b> <a href="javascript:winmini_open('___SLIDER_ADMINREP___/examples/transitiongallery.html', 'animations');">transitions 2D voulues (voir liste, ou all)</a><br>
                                 <b>transition3d: 1,4,5,11;</b> // <a href="javascript:winmini_open('___SLIDER_ADMINREP___/examples/transitiongallery.html', 'animations');">transitions 3D voulues (voir liste, ou all)</a><br>
                               <b>timeshift: -1000;</b> // Moment de démarrage animation des sous-calques, , en millisecondes, valeur négatives acceptées.<br>
                               
                            <br />
                             </span>
                                
                                
                                
                                </p>
                            </div>
                            
                            
                            
                            
                            
___SUBLAYERS_TOOLS___                        
                            
    </div>
                        
                        
                        
            	</div>
                
                
                
                <div class="layerslider_vue">___IFrame___</div>
                <div id="layers_container_tools____n_ls___" class="layerstools_view" style="height:42px;">
                
	                <div id="div_aideLS____n_ls___" class="div_aideLS" ></div>
                
                
                    <div id="layers_tools____n_ls___" class="layers_tools_menu" style="height:7856342px;">
                    
                        
                        <div class="sublsform_menu" id="sublsform_menu____n_ls___" style="display:block;">
						<h3>Vue <span class="numvue____n_ls___">___nvue_ls___</span> : </h3> 

                        
                        <input type="checkbox" value="no" name="data-hide_lslayer____n_ls___" id="data-hide_lslayer____n_ls___" ___data-hide_lslayer___checked onchange="slider_apply_modifications (___n_ls___ , 'no_see');"/><label for="data-hide_lslayer____n_ls___">visible</label>

                        <a href="javascript:void(0);" onmousedown="make_sortable_htmform();">déplacer</a>                        
                        
                        <a id="amenutools_class____n_ls___" href="javascript:affiche_sous_menu ('layers_tools____n_ls___', 'lsform_class', 'amenutools_class____n_ls___');">images de fond et apparences</a>

                        <a id="amenutools_slider____n_ls___" href="javascript:affiche_sous_menu ('layers_tools____n_ls___', 'lsform_slider', 'amenutools_slider____n_ls___');">animations</a>
                        <br>
                        
                           <a href="javascript:lslider_supprime('___n_ls___');">supprimer</a>
                          <span class="new_layers_box_span">
                          
                          
                            	<a class="new_layers_box_a" id="new_sublayer_open_menu____n_ls___" href="javascript:affiche_menu_a ('___n_ls___');" >nouvelle vue</a>
                                
                            	<a style="position: absolute; z-index:1; display:_none; border:none;  margin:-120px 0px 0px -60px; width:600px; height:300px; background:none;" id="new_sublayer_close_menu____n_ls___" href="#MemeEndroit" onmouseover="cache_menu_a ('___n_ls___', this);" >&nbsp;</a>

                              <span class="new_layers_box" id="new_sublayer_menu____n_ls___" style="display:_none;" onmouseover="affiche_close_menu_a('___n_ls___');">
                               <a href="javascript:new_layer_from ('duplique', '___n_ls___');" >dupliquer cette vue</a> 
                               <a href="javascript:new_layer_from ('nouveau', '___n_ls___');" >nouvelle vue vierge</a><br />
                               
                                   <a href="javascript:new_sublayer_from ('image', '___n_ls______-1___0');"  >nouveau sous-calque image</a> <br />
                                   <a href="javascript:new_sublayer_from ('div', '___n_ls______-1___0');" >nouveau sous-calque texte, image et vidéo</a> 
     
                              </span>
                              
                              
                              
                            </span>
    
                        <!--    <a href="javascript:lslider_desactive('___n_ls___');">désactiver cette vue</a> -->
                             - 
                            
                            <a href="javascript:slider_apply_modifications (___n_ls___);">tester le slider</a>
                            <a href="javascript:save_layerslider();">tout enregistrer</a>
                       
                       
                        </div>
___SUBLAYERS_MENUS___
                        

                    </div>


                </div>
                
                <div class="sublayers_view_container">
                <div class="sublayers_view_incontainer">
                    <div id="sublayers_container_ls___n_ls___" class="sublayers_view" style="height:8765432px; clear: both;">
                        <div id="sublayers_ls___n_ls___" class="sublayers_list" style="height:1357964px; width:1234567px; clear: both;"></div>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
    </div>
    
	<div id="save_new_slide" style="display:_none;"></div>
	<input type="hidden" id="dossier_new_slide" value=""/>
	<input type="hidden" id="save_finMAJ" value=""/>
    
    
    
    
    <div id="layerslider_original" style="display:_none; width:200px; height:200px;"></div>
    <div id="layerslider_original2" style="display:_none; width:200px; height:200px;"></div>
    <div id="layerslider_original_tmp" style="display:_none; width:200px; height:200px;"></div>
    <div id="layerslider_layer_sublayers" style="display:_none; width:200px; height:200px;"></div>
    

    <div id="Admin_menubase">
        <div id="loading_infos"><img id="loading_image_admin" src="spacer.gif"><span id="loading_infos_txt"></span></div>
    
      <!--  <a href="javascript:go_slider();">go_slider</a> -->
        <a href="javascript:slider_start ();" id="layerslider_start" tabindex="-1" title="Démarrer le slider."><img src="___SERVERREP_URL___/img/btn_play.png"/><img src="___SERVERREP_URL___/img/btn_play_hover.png" class="out"/>play</a>
        <a href="javascript:slider_stop ();" id="layerslider_stop" tabindex="-1" title="Mettre le slider en pause."><img src="___SERVERREP_URL___/img/btn_pause.png"/><img src="___SERVERREP_URL___/img/btn_pause_hover.png" class="out"/>pause</a>
        <a class="vuegoto" href="javascript:gotolayer(document.getElementById('numpage_wanted'));" tabindex="-1" title="Aller à la vue dont le numéro est indiqué. Ou indiquez le numéro de vue, puis appuyez sur [TABULATION].">voir vue:</a><span class="vuegoto"><input type="texte" style="width:20px;" id="numpage_wanted" onchange="gotolayer(this);" value="" tabindex="-1" ></span> (<span id="numpage_actuel"></span>/<span id="nbpage_total"></span>)
        
        <br>
       <span id="menu_admin_slider" style="display:__none;"> <a href="javascript:affiche_formvues();" title="Ouvrir / fermer la liste des vues (pour modifications)">liste des vues</a> - 
    
        <a href="javascript:affiche_settingsmenu();" tabindex="-1"  title="Afficher/restaurer les sauvegardes. Autres réglages, MODE EXPERT : paramètres, dimensions et apparences (style et classes CSS) du slider.">autres réglages</a>
         <span id="Admin_menubase_settings" style="display:_none;">   
            <a href="javascript:affiche_config();" tabindex="-1">options du slider</a><br />
            <a href="javascript:affiche_styleslider();" tabindex="-1">dimensions et style du slider</a><br />
            <a href="javascript:affiche_styleCSS();" tabindex="-1">définition des classes CSS</a><br />
            <a href="javascript:affiche_sauvegardes();" tabindex="-1" >sauvegardes du slider</a><br />
    
           <!-- <a href="javascript:affiche_imagespreload();" tabindex="-1">images</a> - 
            <a href="javascript:affiche_capi();" tabindex="-1">suivi api</a>
            -->
        </span>
        
        <a href="#" target="_blank" onclick="javascript:slide_in_newwindow(this);" tabindex="-1" title="Afficher le slider dans une nouvelle fenêtre (sans fermer cette fenêtre d'administration)">[&nbsp;]</a>
        <a href="javascript:if (confirm ('Voulez-vous vraiment indiquer la mise à jour et fermer l\'administration ?')) { slide_in_newwindow(this, 'fin'); }" tabindex="-1"  title="Indiquer que le slider a été mis à jour, fermer l'administration et voir le slider (coté visiteur).">FIN</a>
        
      </span>
    </div>


<div id="waiting_mask" style="background-color:rgba(110, 105, 115, 0.3); width:100%; height:100%; top:0; left:0; border-radius:5px; position:fixed; display:none; z-index:3;">&nbsp;</div>    
    
</div>
