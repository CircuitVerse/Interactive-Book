// Fix: make sidebar bullet markers clickable (Issue #667)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-list-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      var link = item.querySelector(".nav-list-link");
      if (link && e.target !== link && !link.contains(e.target)) {
        link.click();
      }
    });
    item.style.cursor = "pointer";
  });
});