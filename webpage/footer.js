
// MAKE FOOTER EXTEND TO BOTTOM OF BROWSER WINDOW

jQuery(document).ready(function() {
	var browserHeight = window.innerHeight;
	var footerOffset = jQuery('footer').offset();
	var footerHeight = jQuery('footer').outerHeight();
	
	var footerPadding = footerHeight - jQuery('footer').height();
		
	// CORRECT FOR PADDING IN THE FOOTER
	var newFooterHeight = browserHeight - footerOffset.top - footerPadding;
	
	// Adjust footer height
	if ( (footerOffset.top + footerHeight) < browserHeight )
		jQuery('footer').height(newFooterHeight);
});