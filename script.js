
const options = document.querySelectorAll('.options');
const buttons = document.querySelectorAll('.btn'); // Get all "continue" buttons
const questions = document.querySelectorAll('.question');
const back_btns = document.querySelectorAll(".back");

let currentQuestion = 0;

// Show the first question initially
questions[currentQuestion].style.visibility = 'visible';
questions[currentQuestion].style.opacity = '1';

// When any continue button is clicked, next question is shown.
// buttons.forEach(function(button) {
//   button.addEventListener('click',validate )
// });

// Checks the radio when the associated option is clicked
options.forEach((option) => {
  option.addEventListener('click', () => radioCheck(option));
});

//proceeds to next question when an option is selected 
options.forEach((option) => {
  option.addEventListener('click', () => next());
});

// back button
back_btns.forEach(function(back_btn){
  back_btn.addEventListener('click',back);
});

function radioCheck(option){
    // Select the associated radio option
    const radioId = option.getAttribute('data-radio-id');
    
    const radioInput = document.getElementById(radioId);
    radioInput.checked = true; // Check the radio button
}

//proceeds to next question. Happens either when continue is clicked or an option is selected.
function next(){
    // Hide the current question
    questions[currentQuestion].style.visibility = 'hidden';
    questions[currentQuestion].style.opacity = '0';

    // Move to the next question
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      
      // Show the next question
      questions[currentQuestion].style.visibility = 'visible';
      setTimeout(function(){questions[currentQuestion].style.opacity = '1';},500);
      
      progress();
    } else {
      // Form is complete

      // Get selected answers
      const zipcode = document.querySelector('#zipCode').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const tobacco = document.querySelector('input[name="tobacco"]:checked').value;
      const month = document.getElementById('month_selected').textContent;
      const day = document.getElementById('day_selected').textContent;
      const year = document.getElementById('year_selected').textContent;
      const coverage = document.getElementById('coverage_selected').textContent;
      const account = document.querySelector('input[name="account"]:checked').value;
      const treatment = document.querySelector('input[name="treatment"]:checked').value;
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const number = document.getElementById('number').value;


      

      // Create a JSON object with the answers
      const formData = {
        "zipcode": zipcode,
        "gender": gender,
        "tobacco": tobacco,
        "month": month,
        "day": day,
        "year": year,
        "coverage": coverage,
        "account": account,
        "treatment": treatment,
        "fname": fname,
        "lname": lname,
        "number": number,
    };

    console.log(formData);

    // Send the data to the webhook
    fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZmMDYzMzA0MzQ1MjZjNTUzNjUxMzUi_pc', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });

    //redirect to thank you page
    //window.location.href = 'https://fastlifeins.com/thank-you' ;

    }
}


function back(){
  // Hide the current question
  questions[currentQuestion].style.visibility = 'hidden';
  questions[currentQuestion].style.opacity = '0';

  // Move to the previous question
  currentQuestion--;
  
  questions[currentQuestion].style.visibility = 'visible';
  setTimeout(function(){questions[currentQuestion].style.opacity = '1';},500);

  inverse_progress();
    
}




let width=0;

function progress(){

  // find interval
  const questionDivs = document.querySelectorAll("div.question");
  const numberOfQuestions = questionDivs.length;
  var interval = 100/numberOfQuestions;

  width+=interval;
  
  let progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function(progressBar){
      progressBar.style.width = width + "%";
  });

}

function inverse_progress(){

  // find interval
  const questionDivs = document.querySelectorAll("div.question");
  const numberOfQuestions = questionDivs.length;
  var interval = 100/numberOfQuestions;

  width-=interval;
  
  let progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function(progressBar){
      progressBar.style.width = width + "%";
  });

}



