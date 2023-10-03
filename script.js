
const options = document.querySelectorAll('.options');
const buttons = document.querySelectorAll('.btn'); // Get all "continue" buttons
const questions = document.querySelectorAll('.question');

let currentQuestion = 0;

// Show the first question initially
questions[currentQuestion].style.visibility = 'visible';
questions[currentQuestion].style.opacity = '1';

// When any continue button is clicked, next question is shown.
buttons.forEach(function(button) {
  button.addEventListener('click',next )
});

// Checks the radio when the associated option is clicked
options.forEach((option) => {
  option.addEventListener('click', () => radioCheck(option));
});

//proceeds to next question when an option is selected 
options.forEach((option) => {
  option.addEventListener('click', () => next());
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
      const insurance = document.querySelector('#zipCode').value;
      const gender = document.querySelector('input[name="q2"]:checked').value;
      const tobacco = document.querySelector('input[name="q3"]:checked').value;
      const month = document.getElementById('month').value;
      const day = document.getElementById('day').value;
      const year = document.getElementById('year').value;
      const coverage = document.getElementById('q5').value;
      const account = document.querySelector('input[name="q6"]:checked').value;
      const treatment = document.querySelector('input[name="q7"]:checked').value;
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const number = document.getElementById('number').value;


      

      // Create a JSON object with the answers
      const formData = {
        "insurance": insurance,
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
    window.location.href = 'https://fastlifeins.com/thank-you' ;

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
    
}

const back_btns = document.querySelectorAll(".back");

back_btns.forEach(function(back_btn){
  back_btn.addEventListener('click',back);
});


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

