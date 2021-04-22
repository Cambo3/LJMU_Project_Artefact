var counter = 0;
var score = 0;
var username = "";
var choiceCount = 0;
var userClickAnswer = "";
var userAnswers = [];
var questionArray = [{
        question: "What types of human error are there?",
        choices: ["Skill-based and Decision-based", "Skill-based and Technique-based", "Psychological-based and Physical-based"],
        correctAnswer: "Skill-based and Decision-based"
    }, {
        question: "What best describes Skill-based errors?",
        choices: ["When a user makes a faulty decision", "Purposeful destruction of a task or activity", "Small mistakes when performing tasks and activities"],
        correctAnswer: "Small mistakes when performing tasks and activities"
    }, {
        question: "What best describes Decision-based errors?",
        choices: ["When a user makes a faulty decision", "Purposeful destruction of a task or activity", "Small mistakes when performing tasks and activities"],
        correctAnswer: "When a user makes a faulty decision"
    }, {
        question: "What best describes Misdelivery?",
        choices: ["Posting information to social media", "Accidentally sending an email to wrong recipient", "Selling private company data to third party companies"],
        correctAnswer: "Accidentally sending an email to wrong recipient"
    }, {
        question: "Which is an example of a physical security error?",
        choices: ["Not setting a secure password", "Leaving sensitive documents unattended on a desk", "Locking your computer when away from your desk"],
        correctAnswer: "Leaving sensitive documents unattended on a desk"
    }
];

// Calls the displayNext(); and hideForm(); functiona t start of quiz
function beginnerQuiz() {
    
    displayNext();
    hideForm();
    
}

function isCorrect() {
    
    var answer = document.getElementById('userAnswer').value;

    if (answer === questionArray[counter].correctAnswer) {
        score++;
        counter++;
        
    } else {
        counter++;
        
    }

    displayNext();
}



//   for(counter = 0; counter < questionArray.length; counter++){

//var answer = window.question(questionArray[counter].question);
//var answer = document.getElementById("userInput");

//      var answer = document.getElementById('userAnswer').value;

//     if(answer === questionArray[counter].correctAnswer){
//         score++;
//     }

//     else {

//    }

//      displayNext();
//   }

function displayNext() {
    
    if (counter < questionArray.length) {

        document.getElementById("question").innerHTML = questionArray[counter].question;

        document.getElementById("choice1").innerHTML = questionArray[counter].choices[choiceCount];
        document.getElementById("choice1").value = questionArray[counter].choices[choiceCount];
        choiceCount++;

        document.getElementById("choice2").innerHTML = questionArray[counter].choices[choiceCount];
        document.getElementById("choice2").value = questionArray[counter].choices[choiceCount];
        choiceCount++;

        document.getElementById("choice3").innerHTML = questionArray[counter].choices[choiceCount];
        document.getElementById("choice3").value = questionArray[counter].choices[choiceCount];
        choiceCount = 0;
    } else {

        document.getElementById("question").innerHTML = "Game over! Your score is: " + score + " out of 5";
        document.getElementById("totalScore").value = score;
                
        hideChoices();
        showForm();
        
    }
}

function hideChoices() {
    
    document.getElementById("choices").style.visibility = "hidden";
    
}

function hideForm() {
    
    document.getElementById("submit").style.visibility = "hidden";
    
}

function showForm() {
    
    document.getElementById("submit").style.visibility = "visible";
    
}
