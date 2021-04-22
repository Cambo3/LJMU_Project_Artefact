var counter = 0;
var score = 0;
var username = "";
var choiceCount = 0;
var userClickAnswer = "";
var userAnswers = [];
var questionArray = [{
        question: "Example 1 - Real or fake email?",
        image: "pics2/q1.png",
        choices: ["Real", "Fake"],
        correctAnswer: "Real"
    }, {
        question: "Example 2 - Real or fake email?",
        image: "pics2/q2.png",
        choices: ["Real", "Fake"],
        correctAnswer: "Fake"
    }, {
        question: "Example 3 - Real or fake email?",
        image: "pics2/q3.png",
        choices: ["Real", "Fake"],
        correctAnswer: "Fake"
    }, {
        question: "Example 4 - Real or fake email?",
        image: "pics2/q4.png",
        choices: ["Real", "Fake"],
        correctAnswer: "Real"
    }, {
        question: "Example 5 - Real or fake email?",
        image: "pics2/q5.png",
        choices: ["Real", "Fake"],
        correctAnswer: "Real"
    }
];

function beginQuiz() {
    

    displayNext();
    hideForm();
   
}

function isCorrect() {
    
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

function displayNext() {
    
    
    if (counter < questionArray.length) {

        document.getElementById("question").innerHTML = questionArray[counter].question;
        document.getElementById("image").src = questionArray[counter].image;
        
        document.getElementById("choice1").innerHTML = questionArray[counter].choices[choiceCount];
        document.getElementById("choice1").value = questionArray[counter].choices[choiceCount];
        choiceCount++;

        document.getElementById("choice2").innerHTML = questionArray[counter].choices[choiceCount];
        document.getElementById("choice2").value = questionArray[counter].choices[choiceCount];

        choiceCount = 0;
    } else {

        document.getElementById("question").innerHTML = "Game over! Your score is: " + score + " out of 5";
        document.getElementById("image").src = "";
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

function submitLeaderboard() {
    
    username =  document.getElementById("username").value;
    
    var userDetails = { 
                        username: username,
                        score: score 
                      }; 
    
    var userDetailsJSON = JSON.stringify(userDetails);
    
} 
