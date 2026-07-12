document.addEventListener("DOMContentLoaded", function () {

const search = document.getElementById("search");

if (!search) {
    return;
}

const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(value) ? "" : "none";
    });
});

});
