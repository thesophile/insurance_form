function validate1(){
    const zipcode = document.getElementById('zipCode').value;
    const zipcode_input = document.getElementById('zipCode');
  
    if(zipcode.length !== 5 || isNaN(zipcode)){
        document.getElementById("error-message1").textContent = "Enter 5 digit Zip Code";
        zipcode_input.style.borderBottomColor="red";
      }
      else{
        document.getElementById("error-message1").textContent = "";
        zipcode_input.style.borderBottomColor="";
        next();
      }
  }
  
  function validate4(){
    const month_input = document.getElementById('month_container');
    const day_input = document.getElementById('day_container');
    const year_input = document.getElementById('year_container');

    const month = document.getElementById('month_selected').textContent;
    const day = document.getElementById('day_selected').textContent;
    const year = document.getElementById('year_selected').textContent;

    if(month==""){
        document.getElementById("error-message2_month").textContent = "This field is required";
        month_input.style.borderBottomColor="red";
      }
    else{
      document.getElementById("error-message2_month").textContent = "";
      month_input.style.borderBottomColor="";
    }

    if(day==""){
       document.getElementById("error-message2_day").textContent = "This field is required";
       day_input.style.borderBottomColor="red";
    }
    else{
      document.getElementById("error-message2_day").textContent = "";
      day_input.style.borderBottomColor="";
    }

    if(year==""){
      document.getElementById("error-message2_year").textContent = "This field is required";
      year_input.style.borderBottomColor="red";
    }      
    else{
      document.getElementById("error-message2_year").textContent = "";
      year_input.style.borderBottomColor="";
      
    } 

    if(month!=="" && day!=="" && year!==""){
      next();
    }

  }
  
  function validate5(){

    const coverage = document.getElementById('coverage_selected').textContent;
    const coverage_input = document.getElementById('coverage_container');

    if(coverage==""){
        document.getElementById("error-message3").textContent = "This field is required";
        coverage_input.style.borderBottomColor="red";
      }
      else{
        document.getElementById("error-message3").textContent = "";
        coverage_input.style.borderBottomColor="";
        next();
      }  
  }
  
  function validate7(){

    var radioButtons = document.querySelectorAll('input[type="radio"][name="treatment"]');
    var anyRadioSelected = false;
    
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            anyRadioSelected = true;
            break;
        }
    }
    
    if (anyRadioSelected) {
        document.getElementById("error-message4").textContent = "";
        next();
    } else {
        document.getElementById("error-message4").textContent = "Please select at least 1 option";
    }
    
  }
  
  function validate8(){

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    const fname_input = document.getElementById('fname');
    const lname_input = document.getElementById('lname');

    if(fname==""){
        document.getElementById("error-message_fname").textContent = "This field is required";
        fname_input.style.borderBottomColor ="red"; 
      }
      else{
        document.getElementById("error-message_fname").textContent = "";
        fname_input.style.borderBottomColor =""; 
      } 

    if(lname==""){
      document.getElementById("error-message_lname").textContent = "This field is required";
      lname_input.style.borderBottomColor ="red"; 
    }
    else{
      document.getElementById("error-message_lname").textContent = "";
      lname_input.style.borderBottomColor =""; 
    }  

    if ( fname!=="" && lname!==""){
      next();
    }
       
  }
  
  function validate9(){
    var number = phoneNumberInput.value.replace(/\D/g, '');
    const number_input = document.getElementById('number');
    
    if(number.length !==11 || isNaN(number)){
        document.getElementById("error-message6").textContent = "Please enter a valid US number";
        number_input.style.borderBottomColor="red";
      }
      else{
        document.getElementById("error-message6").textContent = "";
        number_input.style.borderBottomColor="";
        next();
      }   
  }