/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit", function (event) {
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();
    
    const formData = new FormData(event.target);
    console.log(formData.get("prenom"));
    console.log(formData.get("nom"));




    const prenom_str = prenom.value.trim();
    const nom_str = nom.value.trim();
    const email_str = email.value.trim();
    const message_str = message.value.trim();

    if (prenom_str.length <= 2 || prenom_str.length >= 20) {
        //prenom.nextElementSibling.classList.remove("invisible");
        notValide(prenom);
    } else {
        valide(prenom);
    }

    if (nom_str.length <= 2 || nom_str.length >= 20) {
        //prenom.nextElementSibling.classList.remove("invisible");
        notValide(nom);
    } else {
        valide(nom);
    }

    if (isValidEmail(email_str) === false) {
        notValide(email);
    } else {
        valide(email);
    }

    if (message_str.length <= 10 || message_str.length >= 100) {
        notValide(message);
    } else {
        valide(message);
    }
})
/**
 * HELPERS FUNCTIONS
*/
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
*/
function isValidEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email)) {
        return true;
    } else {
        return false
    }
}


function notValide(elm) {
    elm.nextElementSibling.classList.remove("invisible");
}
function valide(elm) {
    elm.nextElementSibling.classList.add("invisible");
}
/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message, from) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"message":"${message}","from":"${from}"}`
    };

    fetch('http://localhost:3000/sendmail', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}