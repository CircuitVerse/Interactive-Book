/*
 * Global Scripts for Interactive Book
 */

$(document).ready(function () {

    // Collapse active nav lists if opened
    $(".nav-list-expander").click(function() {
        $(this).parent().siblings().removeClass("active");
    });

});