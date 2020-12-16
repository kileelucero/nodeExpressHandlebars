$(function () {
    $(".devoured-btn").on("click", function () {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour,
      };
  
      // Send PUT
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState,
      }).then(function () {
      
        // Reload 
        location.reload();
      });
    });
  
  
    //Create Burger
    $("#createOrder").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
      };
  
      // Send POST
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        
        // Reload
        location.reload();
      });
    });
  });