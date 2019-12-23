/*jshint esversion: 6 */

$().ready(function() {
    AddShareableLinks();
});
function CopyToClipboard(data) {
    var textarea = document.createElement('textarea');
    textarea.value = data;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
function CopyHeaderLink(id) {
    var url = window.location.href;
    if (url.search('#') != -1) {
        url = url.substring(0, url.search('#'));
    }
    url += '#' + id;
    CopyToClipboard(url);
}
function AddShareableLinks() {
    $(":header").mouseenter(function() {
        $(this).append(`<button class="shareable-link" id="shareable-link" onclick="CopyHeaderLink('${this.id}')">&#128279;</button>`);
    });

    $(":header").mouseleave(function() {
        $('#shareable-link').remove();
    });

    $(".navigation-list-link").mouseenter(function() {
        $(this).append(`<button class="shareable-link" id="shareable-link">&#128279;</button>`);

        $(".shareable-link").click(function(event) {
            console.log("hi");
            event.stopPropagation();
            event.preventDefault();
            var url = this.parentElement.getAttribute("href");
            CopyToClipboard(url);
        });
    });
    
    $(".navigation-list-link").mouseleave(function() {
        $('#shareable-link').remove();
    });
}

