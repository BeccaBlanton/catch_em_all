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
  $(".change-captured").on("click", function(event) {
    var id = $(this).data("id");
    var newCaptured = $(this).data("newcaptured");

    var newCaught = {
      sleepy: newCaptured
    };

    // Send the PUT request.
    $.ajax("/api/pokemons/" + id, {
      type: "PUT",
      data: newCaught
    }).then(
      function() {
        console.log("changed status to", newCaught);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
