/* to add an attribute to the first element after the xxx comment  */
$('body').contents().each(function() {
	// nodeType of comment is 8 and its value is nodeValue
	if(this.nodeType == 8 && this.nodeValue == 'xxx') {
		$(this).nextAll().eq(0).attr({'id':'yyy'});
		// false return can break the each loop
		return false;
	}
});
