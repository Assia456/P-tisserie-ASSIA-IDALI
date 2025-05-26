fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let produit = ""
        afficherProduits(data.produits)
        afficherSevices(data.services)
        afficherTemoignages(data.temoignages)
    });


//role : afficher les cartes produits 
//parametre : le tableau des produits
//return : rien 

function afficherProduits(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(produit => {
        document.getElementById("cardProduit").innerHTML += ` 
        <div class="card" id="cardProduit">
                    <div class="card-image">
                        <div><img src="${produit.imageurl}" alt="" class="img"></div>

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

function afficherProduits(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(service => {
        document.getElementById("cardService").innerHTML += ``
    })






}