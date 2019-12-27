$(document).ready(function() {
  $("h2,h3,h4,h5,.navigation-list-link").each(function(index, header) {
    // Skip headers with no id
    if (header.id.length === 0 &&
        !(header.href && header.href.length !== 0)
    ) return;
    var id = header.id.length === 0 ? header.href : header.id;

    $(header).append(
        "<span class='section-link-icon " + (header.id.length === 0 ? "navigation-link-icon" : "") +
        "' title='Copy link to this section' data-section-link-id='" + id + "'>&#xe900;</span>");

    // Hide icons
    $(header).find(".section-link-icon").hide();
    $(header).hover(function() {
      // Show on hover
      $(header).find(".section-link-icon").show();
      $(header).find(".section-link-icon").html("&#xe900;");
    }, function() {
      // Hide icons
      $(header).find(".section-link-icon").hide();
    });
  });

  $(".section-link-icon").click(function(event) {
    event.preventDefault();
    var target = event.target;
    var id = $(target).attr("data-section-link-id");
    if ($(target).hasClass("navigation-link-icon")) {
      copyToClipboard(id);
    } else {
      copyToClipboard(buildUrl(id));
    }
    $(target).html("&#xe901;");
  });
});

function buildUrl(id) {
  var urlParts = location.href.split("#");
  if (urlParts.length > 1) urlParts.pop();
  return urlParts.concat("#" + id).join("");
}

// Source:
// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function copyToClipboard(str){
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
