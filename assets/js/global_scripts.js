/*
 * Global Scripts for Interactive Book
 */

var storageItem = "colorMode";
var isDarkMode = localStorage.getItem(storageItem);

if (isDarkMode == null) {
	isDarkMode = 0;
	localStorage.setItem(storageItem, isDarkMode);
}

// Apply saved theme only after jtd is ready to avoid race condition
document.addEventListener('DOMContentLoaded', function () {
	if (isDarkMode == 1) {
		jtd.setTheme('circuitversedark');
	}
});

$(document).ready(function () {

	//dark mode functionality
	var a = $('a.site-button:contains("mode")');

	if (isDarkMode == 1) {
		a.text("Light mode");
	}

	a.click(function () {
		if (isDarkMode == 0) {
			jtd.setTheme('circuitversedark');
			a.text("Light mode");
			isDarkMode = 1;
		} else {
			jtd.setTheme('circuitverse');
			a.text("Dark mode");
			isDarkMode = 0;
		}
		localStorage.setItem(storageItem, isDarkMode);

		// Reset Disqus thread to reload with matching color scheme
		if (typeof DISQUS !== 'undefined') {
			setTimeout(function () { DISQUS.reset({ reload: true }); }, 500);
		}
		return false;
	});

	// Collapse active nav lists if opened
	$(".nav-list-expander").click(function () {
		$(this).parent().siblings().removeClass("active");
	});

});
