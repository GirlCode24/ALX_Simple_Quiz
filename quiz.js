function checkAnswer() {
  let correctAnswer = "4";
  

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  

  let userAnswer = selectedOption ? selectedOption.value : null;

  console.log("User Answer:", userAnswer);
  console.log("Correct Answer:", correctAnswer);

  const feedback = document.getElementById("feedback")
  if (userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done.";
  }
  else{
    feedback.textContent ="That's incorrect. Try again!";
  }
}
