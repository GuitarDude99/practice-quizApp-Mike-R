const questions = [
    {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
    },
    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
   ];
   let index = 0;

   const quizQuestion = document.getElementById("question-text");
   const answerButton1 = document.getElementById("button-1");
   const answerButton2 = document.getElementById("button-2");
   const answerButton3 = document.getElementById("button-3");
   const answerButton4 = document.getElementById("button-4");
   const quizFeedback = document.getElementById("feedback");
   const nextQButton = document.getElementById("next-question");


   //Question: questions.question
   //answers: questions.answers
   //what does it do: display the one question, and the button choices
   function displayQuestion(question, answers){
    quizQuestion.textContent = question;

    answerButton1.textContent = answers[0];
    answerButton1.disabled = false; 

    answerButton2.textContent = answers[1];
    answerButton2.disabled = false; 

    answerButton3.textContent = answers[2];
    answerButton3.disabled = false; 

    answerButton4.textContent = answers[3];
    answerButton4.disabled = false; 

    quizFeedback.textContent = "";
    nextQButton.style.display = "none";

   }

   //What is it gonna do: check if the selected answer is correct 

   function handleAnswerSelection(event){
        const selectButton = event.target;


        const selectedAnswer = selectButton.textContent;
        const correctAnswer = questions[index].answers[questions[index].correct];
        const isCorrect = selectedAnswer === correctAnswer;


        quizFeedback.textContent = isCorrect ? "Correct!" : "Wrong answer.";


        answerButton1.disabled = true;
        answerButton2.disabled = true;
        answerButton3.disabled = true;
        answerButton4.disabled = true;

        nextQButton.style.display = "block";

        
 }

   // if a button is clicked, nextquestion button is availble and when clicked should navigate to
   //next quesrion with displayQuestion()


   function nextQuestion() {

     
          index++;
          if (index < questions.length) {
              displayQuestion(questions[index].question, questions[index].answers);
          }
      }
     
    
     

   answerButton1.addEventListener("click", handleAnswerSelection);
   answerButton2.addEventListener("click", handleAnswerSelection);
   answerButton3.addEventListener("click", handleAnswerSelection);
   answerButton4.addEventListener("click", handleAnswerSelection);

   nextQButton.addEventListener("click", nextQuestion);

   
   
   
   displayQuestion(questions[index].question, questions[index].answers);
   //displayQuestion(-- add arguments here);



   