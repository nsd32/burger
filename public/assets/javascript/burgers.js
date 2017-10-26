$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).attr('data-id');
    var newDevour = $(this).attr('data-newdevour');
    console.log('newDevour ' + newDevour);

    var newDevourState = {
      devoured: newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
  
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: 0
    };

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
    var id = $(this).attr("data-id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        
        location.reload();
      }
    );
  });

});