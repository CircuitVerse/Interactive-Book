/*jshint esversion: 6 */

$(document).ready(() => {
  $("h2,h3,h4,h5,.navigation-list-link").each((index, header) => {
    // Skip headers with no id
    if (header.id.length === 0 &&
        !(header.href && header.href.length !== 0)
    ) return;
    const id = header.id.length === 0 ? header.href : header.id;

    $(header).append(`
        <span class="section-link-icon ${header.id.length === 0 ? "navigation-link-icon" : ""}" title="Copy link to this section"
            data-section-link-id="${id}">&#xe900;</span>
    `.trim());

    // Hide icons
    $(header).find(".section-link-icon").hide();
    $(header).hover(() => {
      // Show on hover
      $(header).find(".section-link-icon").show();
      $(header).find(".section-link-icon").html("&#xe900;");
    }, () => {
      // Hide icons
      $(header).find(".section-link-icon").hide();
    });
  });

  $(".section-link-icon").click(event => {
    event.preventDefault();
    const target = event.target;
    const id = $(target).attr("data-section-link-id");
    if ($(target).hasClass("navigation-link-icon")) {
      copyToClipboard(id);
    } else {
      copyToClipboard(buildUrl(id));
    }
    $(target).html("&#xe901;");
  });
});

const buildUrl = id => {
  const urlParts = location.href.split("#");
  if (urlParts.length > 1) urlParts.pop();
  return urlParts.concat("#" + id).join("");
};

// Source:
// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
