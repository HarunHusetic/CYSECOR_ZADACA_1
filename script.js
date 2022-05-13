let ukupnaCijena = document.querySelector("#ukupna-cijena");
const gledajBtn = document.querySelectorAll(".watch-btn");
const movie = document.querySelector(".movie");

let total = 0;

gledajBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.add("watched");
    e.target.innerText = "Gledaj opet";
    let cijenaFilma = parseInt(
      e.target.parentNode.querySelector(".cijena span").innerText.substring(1)
    );
    total += cijenaFilma;
    ukupnaCijena.innerHTML = `$${total}`;
  });
});
