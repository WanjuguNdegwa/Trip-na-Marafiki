$(document).ready(function(){

    $("#forms").submit(function(event){
        event.preventDefault();
        // console.log("submit");

        var email = $("#email").val();
        var password = $("#password").val();
        var confirmpassword = $("#confirm-password").val

        var regex2 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]{2,10})(\.[a-zA-Z]{2,7})?$/
        if (email === ""){
            $("#emailval").show();
            return false
        }else{
            if(!regex2.test(email)){
                $("#emailval2").show();
                return false;
            }
        }
        var regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\._%()!])[a-zA-z0-9@#\._%()!]+$/
        if(password === ""){
            //$
        }
    });
  })
    
      