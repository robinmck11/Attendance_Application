document.addEventListener('DOMContentLoaded',function(){



  $("#order_name").hide();


  if ($("#order_name").is(":visible") && ($("#order_id").is(":visible"))){

    $("#order_name").hide();

  }

    document.getElementById("sort_name").addEventListener("click", function(){
      $("#order_name").show();
      $("#order_id").hide();
      console.log("pressed");
      // $("#group_info").load(location.href+" #group_info>*","");
    });

    document.getElementById("sort_id").addEventListener("click", function(){
      $("#order_name").hide();
      $("#order_id").show();
      // $("#group_info").load(location.href+" #group_info>*","");

    });


});



  // sql = "SELECT * FROM groups ORDER BY name"
