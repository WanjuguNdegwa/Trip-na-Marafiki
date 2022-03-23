$(document).ready(function(){

    $("#forms").submit(function(){
        return formVal();
    });
  })
    const formData = document.querySelector("#forms");
  
    formData.addEventListener("submit",formVal);
  
    function formVal(){    
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmpassword = $("#confirmpassword").val();
  
      var regex2 = /^([_\-\.%0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,7})?$/
      if(email === ""){
          $("#emailval").show();
          return false
      }else{       
         if (!regex2.test(email)){
          $("#emailval2").show();
          return false;
         }
      }
      var regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\._%()!])[a-zA-Z0-9@#\._%()!]+$/
      if(password === ""){
          $("#passval").show();
          return false
      }else if (!regex3.test(password)){
          $("#passval2").show();
          return false;
      }else if (password.length < 8 || password.length > 15){
          $("#passval3").show();
          return false;
      }
      if(confirmpassword === ""){
        $("#conpassval").show();
        return false
    }else if (confirmpassword !== password){
        $("#conpassval2").show();
        return false;
    }else{
        alert ("successful");
    }
    return true;
    
  }
    
  
  
  