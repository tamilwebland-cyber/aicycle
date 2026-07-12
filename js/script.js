document.addEventListener("DOMContentLoaded", () => {

  const search = document.getElementById("search");
  const cards = document.querySelectorAll(".card");

  if (!search) return;

  search.addEventListener("input", () => {

    const value = search.value.toLowerCase().trim();

    cards.forEach(card => {

      const text = card.textContent.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

});
