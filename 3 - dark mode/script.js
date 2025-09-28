/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const allElemArr = document.querySelectorAll(" * ");
const switchElem = document.querySelector(".switch");
const iconElem = document.querySelector(".icon");

switchElem.addEventListener("click", function () {
    allElemArr.forEach(function (allElem) {
        allElem.classList.toggle("darkmode");
    })
    iconElem.classList.toggle("fa-moon");
})