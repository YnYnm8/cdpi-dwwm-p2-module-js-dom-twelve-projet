/**
 * firstChild
 * lastChild
 * childNodes
 * nextSibiling MAIS preferez nextElementSibiling pour eviter de selectionner les passages à la ligne
 * previousSibiling MAIS preferez previousElementSibiling  pour eviter de selectionner les passages à la ligne
 * 
 */

// 1. Je recupere toutes les questions
const questions = document.querySelectorAll(".question");


// 2. Je parcours toutes les questions
questions.forEach(function (question) {
     // 3. Lors du click sur la question
     question.addEventListener("click", function () {
          // 4. Je recupere la reponse correspondante et le chevron correspondante
          const premier = document.firstElementChild;
          premier.classList.toggle("show-reponse");
          const arrow = question.querySelector(".btn-arrow")
          arrow.classList.toggle("fa-chevron-down");
          arrow.classList.toggle("fa-chevron-up");

     });
});
// const Q1 = document.querySelector(".question");
// const a1 = document.querySelector(".reponse");
// Q1.addEventListener("click", function () {
//      // a1.style.display = "flex";
//      a1.classList.toggle("show-reponse");
//      const arrow = q1.querySelector(".btn-arrow");
//      arrow.classList.toggle("fa-chevron-down");
//      arrow.classList.toggle("fa-chevron-up");
//      
// })