CKEDITOR.editorConfig = function( config ) {
// 		{ name: 'document', groups: [ 'mode'] }, // shows the source button

	config.toolbarGroups = [
		{ name: 'pbckcode' }  // shows the pbckcode button
	];
	config.extraPlugins = 'pbckcode';

	 config.pbckcode = {
	modes : [ ['CSS', 'css'], ['JS', 'javascript'] ],
	theme : 'clouds',
	highlighter : "PRETTIFY"
	};
};