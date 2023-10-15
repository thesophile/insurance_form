function validate1(){
    const zipcode = document.getElementById('zipCode').value;
  
    if(zipcode.length !== 5 || isNaN(zipcode)){
        document.getElementById("error-message1").textContent = "Enter 5 digit Zip Code";
      }
      else{
        document.getElementById("error-message1").textContent = "";
        next();
      }
  }
  
  function validate4(){

    const month = document.getElementById('month_selected').textContent;
    const day = document.getElementById('day_selected').textContent;
    const year = document.getElementById('year_selected').textContent;

    if(month=="" || day=="" || year==""){
        document.getElementById("error-message2").textContent = "This field is required";
      }
      else{
        document.getElementById("error-message2").textContent = "";
        next();
      } 
  }
  
  function validate5(){

    const coverage = document.getElementById('coverage_selected').textContent;

    if(coverage==""){
        document.getElementById("error-message3").textContent = "This field is required";
      }
      else{
        document.getElementById("error-message3").textContent = "";
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

    if(fname=="" || lname==""){
        document.getElementById("error-message5").textContent = "This field is required";
      }
      else{
        document.getElementById("error-message5").textContent = "";
        next();
      } 
       
  }
  
  function validate9(){
    const number = document.getElementById('number').value;


    if(number==""){
        document.getElementById("error-message6").textContent = "This field is required";
      }
      else{
        document.getElementById("error-message6").textContent = "";
        next();
      }   
  }