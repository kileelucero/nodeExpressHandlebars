$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var neweaten = $(this).data("neweaten");
  
      var neweatenState = {
        eaten: neweaten
      };
  
      // PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: neweatenState
      }).then(
        function() {
          console.log("changed eaten to", neweaten);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // POST req
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // DELETE req.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  