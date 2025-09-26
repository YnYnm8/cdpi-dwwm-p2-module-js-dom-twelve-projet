/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
// const acc_elem = document.querySelector(".btn-accept");
// // 2. Je recupere la banniere de cookies
// const cookies_elem = document.querySelector(".cookies");
// // 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
// acc_elem.addEventListener ("click",()=>{
//     cookies_elem.style.opacity = 0;
// });
// acc_elem.addEventListener("click",function(e){
//     cookies_elem.style.display = "none";
// })
const banner = document.querySelector(".cookies");
const btnAccpt = document.querySelector(".btn-accept");
btnAccpt.addEventListener("click", function () {
    banner.classList.add("hide");
    setTimeout(function () {
        banner.remove();
    }, 2000);
})