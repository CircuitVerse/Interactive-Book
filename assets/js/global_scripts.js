/*
 * Global Scripts for Interactive Book
 */

$(document).ready(function () {

    //dark mode functionality for home page
    var aTags = document.querySelectorAll("a.site-button");
     var searchText = "mode";
     var storageItem = "colorMode";
     var a;
     var isDarkMode = localStorage.getItem(storageItem);
     for (var i = 0; i < aTags.length; i++) {
	 if (aTags[i].textContent.search(searchText)>=0) {
	     a = aTags[i];
	     break;
	 }
     }
     if (isDarkMode == 0 || isDarkMode == null) {
	 isDarkMode = 0;
	 localStorage.setItem(storageItem, isDarkMode);
     } else if(isDarkMode == 1) {
	 jtd.setTheme('circuitversedark');
	 a.textContent = "Light mode";
     }
     
     a.onclick = function() {
	 if (isDarkMode == 0 || isDarkMode == null) {
	     jtd.setTheme('circuitversedark');
	     a.textContent = "Light mode";
	     isDarkMode = 1;
	     localStorage.setItem(storageItem, isDarkMode);
	 } else {
	     jtd.setTheme('circuitverse');
	     a.textContent = "Dark mode";
	     isDarkMode = 0;
	     localStorage.setItem(storageItem, isDarkMode);
	 }
	 return false;
     };


    // Collapse active nav lists if opened
    $(".nav-list-expander").click(function() {
        $(this).parent().siblings().removeClass("active");
    });

});
