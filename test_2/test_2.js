Array.from(document.querySelectorAll(".F tbody tr")).forEach(function(i, idx) {
  if ((idx + 1) % 3 === 0) {
    i.style.display = "none";
  }
});
