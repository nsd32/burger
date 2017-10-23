$(function() {
  $(".devburger").on("click", function(event) {
    // var id = $(this).data("id");
    // var newDevour = $(this).data("newdevour");

    // var newDevourState = {
    //   devoured: newDevour
    // };

    // Send the PUT request.
    
    var devState = $(this).attr('data-devoured');
    var devId = $(this).attr('data-id')
    console.log(devState);
    console.log(devId);
    var newDevState = {};

    if (devState = 0) {
      newDevState = {
        devoured: 1
      }
    } else {
      newDevState = {
        devoured: 0
      }
    }

    $.ajax("/api/burgers/" + devId, {
      type: "PUT",
      data: newDevState
    }).then(
      function() {
        console.log("changed devoured to", newDevState);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })



  

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});