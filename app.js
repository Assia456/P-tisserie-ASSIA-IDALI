
fetch('data.json')
    .then(response => response.json())
    .then(data => {

        //ici j'ai acces a mon tableau de données
        afficher(data)

    });

/** HERO */

//role : afficher les cartes produ
//parametre : le tableau des produits
//return : rien 

function afficher(donee) {

    //une boucle pour récupére les objets du tableau 1 par 1

    let titre = donee.nomCommercial
    let phrase = donee.phraseAccroche
    let bouton = donee.texteAppelAction

    document.getElementById("donnee").innerHTML += `
        

            <h1 class="white ">${titre}</h1>
            <p class="white top20">${phrase}</p>
            <a href="" class="btn ">${bouton}</a>

        
 `



}

/** TABLEAUX */

fetch('data.json')
    .then(response => response.json())
    .then(data => {

        afficherProduits(data.produits)
        afficherServices(data.services)
        afficherTemoignages(data.temoignages)
        afficherAvantage(data.avantagesClients)
    });


/** PRODUITS */

//role : afficher les cartes produits 
//parametre : le tableau des produits
//return : rien 

function afficherProduits(tableauProduits) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauProduits.forEach(produit => {
        document.getElementById("cardProduit").innerHTML += ` 
                    <div class="card top30" data-aos="fade-up">
                        <div class="card-image">
                            <img src="${produit.imageurl}" alt="" class="img">
                            <div class="card-description">
                                <p>${produit.description}</p>
                            </div>
                        
                        </div>

                       
                        <h3 class="textCenter p30">${produit.nom}</h3>

                    </div>

                </div>
         `

    });

}

/** SERVICES */

//role : afficher les cartes services 
//parametre : le tableau des services
//return : rien 

function afficherServices(tableauServices) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauServices.forEach(service => {
        document.getElementById("cardService").innerHTML += `
        <div class="service card">
            <div class="card-image">
                <img src="${service.image}" alt="" class="img">
                    <div class="card-description">
                        <p>${service.description}</p>
                    </div>
                    <a href="" class="btnService">DECOUVRIR</a>

            </div>
                    
                        
            
        </div>
                `

    })

}

/** TEMOINAGES */

//role : afficher les cartes temoignages
//parametre : le tableau des temoignages
//return : rien 


function afficherTemoignages(tableauTemoin) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauTemoin.forEach(temoignage => {
        let etoile = "★".repeat(temoignage.note) + "☆".repeat(5 - temoignage.note)
        document.getElementById("cardTemoignage").innerHTML += `
                <div class="w30 card2 avis" data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000">
                    <div>
                       <div class="flex spaceBetween alignCenter">
                       <p>${temoignage.prenom}</p>
                        <p>${temoignage.typeExperience}</p>
                        </div>
                        <div class="top20">
                        <p>${temoignage.commentaire}</p>
                        <p class="textCenter top20">${etoile}</p>
                        </div>
                    </div>
                </div>`
    })

}

/** AVANTAGES */

//role : afficher les avantages clients
//parametre : le tableau des avantages clients
//return : rien 


function afficherAvantage(tableauAvantage) {

    //une boucle pour récupére les objets du tableau 1 par 1
    tableauAvantage.forEach(avantage => {
        document.getElementById("avantage").innerHTML += `

                <div class="w30 textCenter">
                    <div>
                        <img src="${avantage.image}" alt="" class="w20">
                        <p>${avantage.nom}</p>
                    </div>
                </div>`
    })

}