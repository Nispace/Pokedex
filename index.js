
/**
 * Serveur Backend Pokedex
 */

// Définir l'emplacement des fichiers bases de données
const POKEDEX_SRC = "BACKEND/DATA/pokedex.json";
// Définir un port
const PORT = 5001;

// Importer les modules nécessaires
const fs = require('fs');
const express = require('express');
const app = express();






// Lancement du serveur
app.listen(
    PORT,
    '0.0.0.0',
    () => {
        console.log('Server Pokedex is listening on ' + PORT);
    }
)



// Renvoyer tous les pokémon
const findAllPokemon = (req, res) => {

    // Vérifier l'apikey
    //if (req.res.apikey !== "jkrgde@qg14q-") {
    //    response.status(401).send('Erreur, apikey incorrecte!');
    //    return;
    //}

    // Lecture du fichier
    const datas = fs.readFileSync(POKEDEX_SRC)

    // Récupération des données
    const pokedex = JSON.parse(datas)

    // Envoi des données
    res.send(pokedex)
}

const findByNamePokemon = (req , res) =>{
    
    const datas = fs.readFileSync(POKEDEX_SRC)
    const pokedex = JSON.parse(datas)
    const name = req.params.name
    const pokemon = pokedex.find(pokemon => pokemon.name.french.toLowerCase() == name.toLowerCase())
      //Envoi des données
    if (pokemon) {res.send(pokemon)} 
    else {res.status(404).send('Erreur, pokemon pas trouvé!')}

}
const findByTypePokemon = (req , res) =>{
    
    const datas = fs.readFileSync(POKEDEX_SRC)
    const pokedex = JSON.parse(datas)
    const type = req.params.type
    const pokemon = pokedex.find(pokemon => pokemon.type == type)
      //Envoi des données
    if (pokemon) {res.send(pokemon)} 
    else {res.status(404).send('Erreur, pokemon pas trouvé!')}

}


// Route pour renvoyer le contenu du fichier JSON
// Chemins des requêtes navigateur
app.get('/', findAllPokemon);
app.get('/pokemon/:name(\\w+)', findByNamePokemon); // para string
app.get('/typepokemon/:type(\\w+)', findByTypePokemon); // para string
