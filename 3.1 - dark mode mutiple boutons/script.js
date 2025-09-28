
const iconArr = document.querySelectorAll(".icon");
//1. Je recupere tout les switchs

const switchArr = document.querySelectorAll(".switch");
//2. Je recupere tout les elements html de ma page
const allElemArr = document.querySelectorAll(" * ");
//3. Je parcours tout les switchs

switchArr.forEach(function (switchElem) {
    switchElem.addEventListener("click", function () {

        allElemArr.forEach(function (allElem) {
            allElem.classList.toggle("darkmode");
        })
        iconArr.forEach(function (iconElem) {

            iconElem.classList.toggle("fa-moon");
        })
    })
})


