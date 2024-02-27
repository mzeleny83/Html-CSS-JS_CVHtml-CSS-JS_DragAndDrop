const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");

boxes.forEach((oneBox) => {
  // Při přetahování obrázku nad boxíky se přidá boxu classa hovering, která boxík styluje
  oneBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    oneBox.classList.add("hovering");
  });

  // Pokud nad boxíkem již obrázek nepřetahujeme, tak se classa hovering odstraní
  oneBox.addEventListener("dragleave", () => {
    oneBox.classList.remove("hovering");
  });

  // Puštění obrázku nad boxem způsobí, že se div s obrázkem na pozadí přidá jako potomek do daného boxu
  // Také se odstraní classa hovering
  oneBox.addEventListener("drop", () => {
    oneBox.append(image);
    oneBox.classList.remove("hovering");
  });
});
