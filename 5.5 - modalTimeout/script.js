const modal = document.querySelector(".modal");
const modalQuit = document.querySelector(".modal-quit");

setTimeout(onTimeDisplayModal,3000);


function onTimeDisplayModal(){
     modal.style.display = "flex";
}
modalQuit.addEventListener("click", function () {
    modal.style.display = "none";
});