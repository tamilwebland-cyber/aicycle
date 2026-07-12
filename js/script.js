alert("Script Loaded");

document.addEventListener("DOMContentLoaded", function () {

  const search = document.getElementById("search");
  const cards = document.querySelectorAll(".card");

  alert("Cards found: " + cards.length);

  search.addEventListener("input", function () {

    alert("Typing: " + this.value);

  });

});
