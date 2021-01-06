$(function(){
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newPokemon = {
      pokemon_name: $("#pokeInput").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/pokemons", {
      type: "POST",
      data: newPokemon
    }).then(
      function() {
        console.log("added new pokemon");
        location.reload();
      }
    );
  });
});
