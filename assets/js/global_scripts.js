/*
 * Global Scripts for Interactive Book
 */

var storageItem = "colorMode";
var isDarkMode = localStorage.getItem(storageItem) === "1";

if (localStorage.getItem(storageItem) === null) {
	isDarkMode = false;
	localStorage.setItem(storageItem, "0");
}

// Apply saved theme only after jtd is ready to avoid race condition
document.addEventListener('DOMContentLoaded', function () {
	if (isDarkMode) {
		jtd.setTheme('circuitversedark');
	}
});

$(document).ready(function () {

	//dark mode functionality
	var a = $('a.site-button:contains("mode")');

	if (isDarkMode) {
		a.text("Light mode");
	}

	a.click(function () {
		if (!isDarkMode) {
			jtd.setTheme('circuitversedark');
			a.text("Light mode");
			isDarkMode = true;
		} else {
			jtd.setTheme('circuitverse');
			a.text("Dark mode");
			isDarkMode = false;
		}
		localStorage.setItem(storageItem, isDarkMode ? "1" : "0");

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
