function add_image(new_img, findclass_ls, findclass_ls_num)
{
	if (typeof($(findclass_ls)[findclass_ls_num]) != 'undefined')
		$(findclass_ls)[findclass_ls_num].src = new_img;
}

function element_size (id_element)
{
	if (document.getElementById(id_element))
	{
		var sizes = new Array();
		sizes.push (document.getElementById(id_element).offsetWidth);
		sizes.push (document.getElementById(id_element).offsetHeight);
		
		return (sizes);
	}
}

function add_class (nomclasse, silayer)
{
	if (silayer == null)
		$('#fullopacity').addClass(nomclasse) ;
		
	else
	{
		var svg_id = $('.ls-layer')[0].id ;
		$('.ls-layer')[0].id = 'ls-layer';
		
		var classes_actuelles = document.getElementById('ls-layer').className ; // ls-layer rouge ls-animating
		
		var ex_classes_T = classes_actuelles.split(/\s+/g);
		var new_classes_T = nomclasse.split(/\s+/g);
		var classes_ok = '';
		
		for (rr=0; rr<ex_classes_T.length; rr++)
		{
			if (typeof (new_classes_T[rr]) != 'undefined' && new_classes_T[rr] != '')
			{
				if (classes_ok != '')
					classes_ok += ' ';	
				classes_ok += new_classes_T[rr];
			}
			else if (typeof (ex_classes_T[rr]) != 'undefined' && ex_classes_T[rr] != '')
			{
				if (classes_ok != '')
					classes_ok += ' ';	
				classes_ok += ex_classes_T[rr];
			}
		}

	//	alert ('ls-layer SOUS CALQUE : '+classes_ok+'\n(ex classes :) '+classes_actuelles);
		
		document.getElementById('ls-layer').className = '';
		$('#ls-layer').addClass(classes_ok) ;
		document.getElementById('ls-layer').id = svg_id;
		
	}
}

