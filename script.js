document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = year;
});