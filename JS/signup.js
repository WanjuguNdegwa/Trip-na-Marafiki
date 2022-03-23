$(document).ready(function(){

    $("#forms").submit(function(event){
        event.preventDefault();
        // console.log("submit");

        var email = $("#email").val();
        var password = $("#password").val();
        var confirmpassword = $("#confirm-password").val

        var regex2 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]{2,10})(\.[a-zA-Z]{2,7})?$/
        if (email === ""){
            $("#emailval")
        }
    });
  })
    
      