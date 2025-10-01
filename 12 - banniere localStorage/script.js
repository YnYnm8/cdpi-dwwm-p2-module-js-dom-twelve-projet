/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

const banner = document.querySelector(".cookies");
const btnAccpt = document.querySelector(".btn-accept");
const checkCookie = localStorage.getItem("cookie");
if (checkCookie) {
    banner.remove();
} else {
    btnAccpt.addEventListener("click", function () {
        banner.style.opacity = 0;
        
        localStorage.setItem("cookie" ,"accept");
    })
}






btnAccpt.addEventListener("click", function () {
    banner.classList.add("hide");
    setTimeout(function () {
        banner.remove();
    }, 2000);
})
