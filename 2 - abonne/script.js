/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const icone_elem = document.querySelector("#emoji");

// // 2. Je recupere le bouton ABONNER
const btnAbn_elem = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let isAbo_bool = false;

// })
// 4. J'ecoute le clique sur l'icone smiley
icone_elem.addEventListener("click", function () {
    icone_elem.classList.toggle("happy");
    icone_elem.classList.toggle("fa-smile-wink");
    icone_elem.classList.toggle("fa-face-meh");
})

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
btnAbn_elem.addEventListener("click", function () {
    if (isAbo_bool === false) {
        btnAbn_elem.classList.toggle("abonne");
        btnAbn_elem.innerText = "Abonné";
         isAbo_bool=true;
    }else{
        btnAbn_elem.classList.toggle("abonne");
        btnAbn_elem.innerText = "Abonnez-vous";
        isAbo_bool=true;
    }
    })