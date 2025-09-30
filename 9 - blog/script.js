/**
 * Template string `${}`
 * innerHTML ou template
 * += operator
 */

// 1. Je recupere le conteneur de publications
const postsContainer = document.querySelector(".posts");

// 2. Voici ma base de données factise 
const posts =
    [
        {
            titre: "SEO, les bonnes pratiques",
            hashtag: "#SEO",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Bien, les bonnes pratiques",
            hashtag: "#JS",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        },
        {
            titre: "Content, les bonnes pratiques",
            hashtag: "#PHP",
            link: "#",
            extrait: "Mollit ut mollit esse exercitation nisi ut labore velit anim pariatur sit deserunt anim. Dolore consequat aliquip esse elit culpa aliqua. Consectetur mollit irure minim incididunt nulla non. Ad sunt mollit aliqua minim fugiat et minim commodo. Anim proident incididunt veniam duis cupidatat irure eu. Elit nulla nisi ea laborum mollit excepteur enim ut Lorem. Cupidatat minim consectetur mollit in ut consectetur est duis do sint cillum nisi."
        }
    ];
// 3. Je parcours la bdd
posts.forEach(function (post) {
    // 4. Je créer un nouveau post dans le conteneur de post pour chaque post de la BDD
    const titre_Elem = document.createElement("div");
    titre_Elem.classList.add("post-titre");
    titre_Elem.innerHTML =`<a href="lien">${post.titre}</a>`;
    postsContainer.appendChild(titre_Elem);

    const extrait_Elem = document.createElement("div");
    extrait_Elem.classList.add("post-extrait");
    extrait_Elem.innerHTML = post.extrait;
    postsContainer.appendChild(extrait_Elem);

    const tag_Elem = document.createElement("div");
    tag_Elem.classList.add("post-hashtag");
    tag_Elem.innerHTML = post.hashtag;
    postsContainer.appendChild(tag_Elem);
});


// 5. Je l'ajoute dans le conteneur de publication

// function newPost() {

// }


// for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i]);
//}

