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

router.put("/api/pokemons/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        console.log("condition", condition);
      
        pokemon.update({
          caught: true
        }, condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

module.exports = router;