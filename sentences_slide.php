<!DOCTYPE html>
<html lang="fr">
<head>
<title>Untitled Document</title>
</head>

<body>

<style type="text/css" >

#container_slide_sentences 
{
	font-family:Frutiger, Verdana, sans-serif;
	font-size:20px;
	
	display: block;
    height: 5%;
    margin: -33px 0 0 2%;
    overflow: hidden;
    padding: 0 0 0 3%;
    position: absolute;
    width: 75%;
    z-index: 10000;	
}

#slide_sentences
{
	border: 0px solid #4499AA;
    display: block;
    height: 90%;
    position: absolute;
    width: 95%;	
}
#slide_sentences div
{
	width:100%;
    position:absolute;
    display:none;
	color:white;
}
</style>

    <div id="container_slide_sentences">
        <div id="slide_sentences">
        </div>
    </div>

<script language="javascript" type="application/javascript">

sentences_folder = 'G_sentences';
slidetime_come = 5000;
slidetime_pause = 4000;
slidetime_leave = 2000;
slidetime_beforenext = 2000;

mkt_lastMAJ_plus1mn = mktime ();

go_phrases_defilantes = false;


function sentencesDIV_add_content()
{
	if (document.getElementById(document.id_du_layerslider) == null)
		setTimeout(sentencesDIV_add_content,1000);
	else
	{

		var iframesentences = document.createElement('iframe');
		iframesentences.style = 'position:absolute; top:-100px; width:300px; height:50px;';
		iframesentences.name = 'slide_sentences';
		iframesentences.onload = function () {
				
			var sentences_temps = window['slide_sentences'].document.getElementById('temps').innerHTML;
			
			if (!sentences_temps.match(/^[0-9]+,[0-9]+,[0-9]+,[0-9]+$/) )
			{	
				var temps_t = sentences_temps.split(/,/g);
				
				slidetime_come = new Number (temps_t[0]);
				slidetime_pause = new Number (temps_t[1]);
				slidetime_leave = new Number (temps_t[2]);
				slidetime_beforenext = new Number (temps_t[3]);
			}

	
			var sentences_content = window['slide_sentences'].document.getElementById('sentences').innerHTML;
			
			var sentences_T = [];
			
			if (sentences_content.match(/\n/))
				sentences_T = sentences_content.split(/\n/g);
			else
				sentences_T.push(sentences_content);
			
			var lesdivs_st_contents = '';
			
			for (re=0; re<sentences_T.length; re++)
			{
				var divaadd = sentences_T[re].replace(/^\s+|\s+$/g, '');
				
				var divaaddoui = 'non';
				
				if (divaadd != '' && !divaadd.match(/^# /))
				{
					
					divaadd = divaadd.replace(/ /g, '&nbsp;');
					lesdivs_st_contents += '<div>'+divaadd+'</div>';
					divaaddoui = 'oui';
				}
		//		console.log(divaadd+' : '+divaaddoui);
				
			}
			
			document.getElementById('slide_sentences').innerHTML = '';
			$('#slide_sentences').append(lesdivs_st_contents);
			
			document.getElementsByTagName('body')[0].removeChild(iframesentences);
	
			mkt_lastMAJ_plus1mn = mktime ();
			mkt_lastMAJ_plus1mn += 60;
			// console.log(mkt_lastMAJ_plus1mn);
	
			go_phrases_defilantes = true;
			sentences_slide_animation ();
		
	
		};
		
		document.getElementsByTagName('body')[0].appendChild(iframesentences);
		iframesentences.src = sentences_folder+'/sentences.php';
		
	}
	
}

function sentences_slide_animation () {
	
	if (go_phrases_defilantes == true)
	{
		var sentences_Tdivs = document.getElementById('slide_sentences').getElementsByTagName('div');
		
		for (rre = 0; rre < sentences_Tdivs.length; rre ++)
		{
			slidetime_rre_timeout = (slidetime_come + slidetime_pause + slidetime_leave + slidetime_beforenext ) * rre;
			
			setTimeout("slide_thisdiv_in("+rre+")",slidetime_rre_timeout);
			
		//	console.log('slide_thisdiv_in('+rre+') : '+slidetime_rre_timeout);
			
			if (rre == (sentences_Tdivs.length - 1))
			{
				slidetime_rre_timeout = (slidetime_come + slidetime_pause + slidetime_leave + slidetime_beforenext ) * (rre + 1);
				
//				setTimeout(sentences_slide_animation,slidetime_rre_timeout);
				setTimeout(sentencesDIV_add_content,slidetime_rre_timeout);
										
			//	console.log('sentencesDIV_add_content() : '+slidetime_rre_timeout);
			}
			
		}
	}
}


function slide_thisdiv_in (numdiv)
{
	
	
	var h_slider_inanim = document.getElementById(document.id_du_layerslider).offsetHeight;
	var h_slider_base = new Number (document.layer_slider_height.replace(/[^0-9]/g, ''));
	
	var pcent_rapport_height = (h_slider_inanim * 100) / h_slider_base;
	
	if (typeof(document.sentences_mtop_base) == 'undefined')
	{
		var computedStyle = getComputedStyle(document.getElementById('container_slide_sentences'), null);
	 	var margintop_base = computedStyle.marginTop;		
		document.sentences_mtop_base = new Number (margintop_base.replace(/[^-0-9]/g, ''));
		
	}
	
	var marginTop_sentences_echelle = ((document.sentences_mtop_base * pcent_rapport_height)/100);
	document.getElementById('container_slide_sentences').style.marginTop = marginTop_sentences_echelle+'px';
	
	// console.log('?? '+document.layer_slider_height+' '+pcent_rapport_height+' marginTop base: '+document.sentences_mtop_base+' marginTop calcul: '+marginTop_sentences_echelle);
	
	$('#slide_sentences div')[numdiv].id = 'slidesentence_animated';
	
	$('#slidesentence_animated').css('font-size', pcent_rapport_height+'%');
	$('#slidesentence_animated').css('line-height', '1.1');
	$('#slidesentence_animated').css('display', 'block');
	$('#slidesentence_animated').css('left', '100%');
	$('#slidesentence_animated').animate({left:"0%"}, slidetime_come);
	
	setTimeout(slide_thisdiv_out, (slidetime_come+slidetime_pause));
}

function slide_thisdiv_out ()
{
	$('#slidesentence_animated').animate({left:"-100%"}, slidetime_leave);
	setTimeout(slide_thisdiv_end,slidetime_leave);
}

function slide_thisdiv_end ()
{
	$('#slidesentence_animated').css('display', '');
	document.getElementById('slidesentence_animated').id = '';
	
/*
	var mkt_now = mktime ();
	// console.log(mkt_now);
		
	if (mkt_now > mkt_lastMAJ_plus1mn)
	{
		go_phrases_defilantes = false;
		sentencesDIV_add_content();
		
	}
*/
}

function mktime () {
  var d = new Date(),
    r = arguments,
    i = 0,
    e = ['Hours', 'Minutes', 'Seconds', 'Month', 'Date', 'FullYear'];

  for (i = 0; i < e.length; i++) {
    if (typeof r[i] === 'undefined') {
      r[i] = d['get' + e[i]]();
      r[i] += (i === 3); // +1 to fix JS months.
    } else {
      r[i] = parseInt(r[i], 10);
      if (isNaN(r[i])) {
        return false;
      }
    }
  }

  // Map years 0-69 to 2000-2069 and years 70-100 to 1970-2000.
  r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2e3 : (r[5] <= 100 ? 1900 : 0)) : 0);

  // Set year, month (-1 to fix JS months), and date.
  // !This must come before the call to setHours!
  d.setFullYear(r[5], r[3] - 1, r[4]);

  // Set hours, minutes, and seconds.
  d.setHours(r[0], r[1], r[2]);

  // Divide milliseconds by 1000 to return seconds and drop decimal.
  // Add 1 second if negative or it'll be off from PHP by 1 second.
  return (d.getTime() / 1e3 >> 0) - (d.getTime() < 0);
}

setTimeout(sentencesDIV_add_content,5000);
</script>





</body>
</html>