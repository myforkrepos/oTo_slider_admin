/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */



CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'fr';
	

	// config.uiColor = '#AADC6E';

	config.width = 725;

	config.toolbar = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source'] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
		'/',
		{ name: 'styles', items: ['Format', 'Styles'] }, 
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'Iframe', 'HorizontalRule', 'SpecialChar'] }
		
		
	];
	
// You then need to supply the location of the CSS file that contains your style definitions by using the contentsCss configuration setting:
// Finally, if you want to skip loading the styles that are used in CKEditor by default, you may set stylesSet to an empty value:

	config.extraPlugins = 'stylesheetparser';
	config.contentsCss = galerie_rep+'/'+galerie_this_rep+'/slider_css.css'; // 'sample_CSS_file.css';
	config.stylesSet = [];	

//	config.stylesheetParser_validSelectors = /\^(p|span)\.\w+/;
	config.stylesheetParser_validSelectors = document.classes_feuilleclasses;

	
};
		/*	{ name: 'styles', items: [ 'Styles', 'Format' ] }, */
