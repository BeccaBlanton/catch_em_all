var express = require("express")
var pokemon = require("../models/pokemon")
var router = express.Router(); //create router here

router.get("/", function(req, res){
    pokemon.all(function(data){
        var pokemonObj = {
            pokemons: data
        };
        console.log(pokemonObj);
        res.render("index", pokemonObj)
    });
});

router.post("/api/pokemons", function(req, res) {
    pokemon.add([
        "pokemon_name"
      ], [
        req.body.pokemon_name
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    });
module.exports = router;