/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");



btn.addEventListener("click", function () {
    const newDivElem = document.createElement("div");
    newDivElem.classList.add("toast");
    newDivElem.innerHTML = "<p>Votre fichier est enregister !</p>";
    ctnToasts.appendChild(newDivElem);

    newDivElem.addEventListener("click", function () {
        newDivElem.remove();
    });

    setTimeout(function () {
        newDivElem.remove();
    }, 3000);
})

