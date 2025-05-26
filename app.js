fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let produit = ""
        afficherProduits(data.produits)
        afficherServices(data.services)
        afficherTemoignages(data.temoignages)
    });


//role : afficher les cartes produits 
//parametre : le tableau des produits
//return : rien 

function afficherProduits(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(produit => {
        document.getElementById("cardProduit").innerHTML += ` 
                    <div class="card">
                        <div class="card-image"><img src="${produit.imageurl}" alt="" class="img"></div>

                        <div class="card-description">
                            <p>${produit.description}</p>
                        </div>
                        <h3 class="textCenter">${produit.nom}</h3>

                    </div>

                </div>
         `

    });

}


//role : afficher les cartes services 
//parametre : le tableau des services
//return : rien 

function afficherServices(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(service => {
        document.getElementById("cardService").innerHTML += `
         <div class="service card">

                    <div><a href=""><img src="" alt="" class="img"></a></div>
                    <div>
                        <div>
                            <p>${service.description}</p>
                        </div>
                        <a href="" class="btn">DECOUVRIR</a>
                    </div>

                </div>`
    })

}

//role : afficher les cartes temoignages
//parametre : le tableau des temoignages
//return : rien 


function afficherTemoignages(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(temoignage => {
        document.getElementById("cardTemoignage").innerHTML += `
                <div class="w30 card">
                    <div>
                       <div class="flex spaceBetween">
                       <p>${temoignage.prenom}</p>
                        <p>${temoignage.typeExperience}</p>
                        </div>
                        <p>${temoignage.commentaire}</p>
                        <p>${temoignage.note}</p>
                    </div>
                </div>`
    })

}