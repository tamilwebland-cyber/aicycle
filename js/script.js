document.addEventListener("DOMContentLoaded", function () {


  const search = document.getElementById("search");

  if (!search) {
    alert("Search input NOT found");
    return;
  }

  alert("Search input found");

  const cards = document.querySelectorAll(".card");

  alert("Cards: " + cards.length);

  search.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    cards.forEach(function(card) {

      const text = card.textContent.toLowerCase();

      card.style.display = text.includes(value) ? "" : "none";

    });

  });

});
