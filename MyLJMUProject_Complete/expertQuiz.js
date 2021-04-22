var counter = 0;
var score = 0;
var username = "";
var choiceCount = 0;
var userClickAnswer = "";
var userAnswers = [];
var questionArray = [{
        question: "What is Ransomeware?",
        choices: ["Holding data or devices for ransome", "Selling private information to third parties", "Sending a scamming email to a recipient"],
        correctAnswer: "Holding data or devices for ransome"
    }, {
        question: "What are the two main types of ransomware?",
        choices: ["Crypto-ransomware and Locker-ransomware", "Locker-ransomware and Scare-ransomware", "Scare-ransomware and Crypto-ransomware"],
        correctAnswer: "Crypto-ransomware and Locker-ransomware"
    }, {
        question: "Which of these is a famous ransomware?",
        choices: ["Zeus", "Operation Phish Phry", "WannaCry"],
        correctAnswer: "WannaCry"
    }, {
        question: "What currency is usually demanded by cybercriminals using ransowmare?",
        choices: ["Pound Sterling", "Russuian Rubles", "Bitcoin"],
        correctAnswer: "Bitcoin"
    }, {
        question: "Where are ransomware demands usually displayed?",
        choices: ["In an email", "On the computer desktop", "A handwritten note"],
        correctAnswer: "On the computer desktop"
    }
];

function loadExpert() {

    hideForm();
    hideChoices();
    
}

function expertQuiz() {
    console.log("1");
    hideBeginTimer();
    showChoices();
    displayNext();
    
    timer = setTimeout(function(){ endQuiz(); }, 30000);
    
    console.log("3");
}

function isCorrect() {
    console.log("4");
    var answer = document.getElementById('userAnswer').value;

    if (answer === questionArray[counter].correctAnswer) {
        score++;
        counter++;
        console.log("correct");
    } else {
        counter++;
        console.log("incorrect");
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
    console.log("2");
    //var question = document.getElementById("question");
    //question.remove();
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
        
        clearTimeout(timer);
        endQuiz();
        
    }
}

function endQuiz() {
    
    document.getElementById("question").innerHTML = "Game over! Your score is: " + score + " out of 5";
    document.getElementById("totalScore").value = score;
                
    hideChoices();
    showForm();
    
}

function hideChoices() {
    
    document.getElementById("choices").style.visibility = "hidden";
    
}

function showChoices() {
    
    document.getElementById("choices").style.visibility = "visible";
    
}

function hideForm() {
    
    document.getElementById("submit").style.visibility = "hidden";
    
}

function showForm() {
    
    document.getElementById("submit").style.visibility = "visible";
    
}

function hideBeginTimer() {
    
    document.getElementById("beginTimer").style.visibility = "hidden";
    
}

function submitLeaderboard() {
    
    username =  document.getElementById("username").value;
    
    var userDetails = { 
                        username: username,
                        score: score 
                      }; 
    
    var userDetailsJSON = JSON.stringify(userDetails);
    
} 

