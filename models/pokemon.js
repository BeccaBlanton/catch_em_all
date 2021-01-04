var ORM = require("../config/orm.js")

//Call ORM functions 
const pokemon = {
        all: function(cb) {
          ORM.selectAll("pokemon", function(res) {
            cb(res);
          });
        }
      };
module.exports = pokemon;