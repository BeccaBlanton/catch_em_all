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
module.exports = router;