var timer2=50
var score=0
var score2= document.querySelector("#score2");

var timer = document.querySelector("#timer");
var index = -1

function endgame () {
    //local storage
    var initial=prompt("please enter initials")
    var user={
        initial:initial, score:score

    }
var json = JSON.stringify(user);
localStorage.setItem("scores", json);
console.log('user added');

    window.location.href="scores.html"

}


function timerfunction ( ){
    var interval= setInterval(function(){
       timer2-- 

       timer.textContent= "timer "+ timer2
       if (timer2 < 1) {

        endgame()
        
clearInterval (interval)
    }
    },1000 )
    
}

var startbutton = document.querySelector("#startbutton")
var button1 = document.querySelector("#button-1")
var button2 = document.querySelector("#button-2")
var button3 = document.querySelector("#button-3")
var button4 = document.querySelector("#button-4")

var question = document.querySelector("#question")


function startgame ( ) {
    timerfunction()

    

}

let questions = [
    {
        question: "What is an object in JS?",
        answerkey: [
            "1. A material thing that can be seen and touched.", "2. to express one's disapproval", "3. Is a data type that is used to store various keyed collections and more complex entities.", "4. Label that references a value like a string or number.", 
        ], 
        correctAnswer:"3. Is a data type that is used to store various keyed collections and more complex entities."
    }, 

    {
        question: "What is a Variable in js",
        answerkey: [
            "1. Dress someone in specific clothes.", "2. An ordered series or arrangement.", "3. Label that references a value like a string or number.", "4. Able to adapt or change.", 
        ], 
        correctAnswer:"3. Label that references a value like a string or number."
    }, 

    {
        question: "What is an Array in JS?",
        answerkey: [
            "1. To express one's disapproval.", "2. Label that references a value like a string or number.", "3. Able to adapt or change.", "4. A property that allows JavaScript sites and apps to save key value pairs in a web browser with no expiration date. ", 
        ], 
        correctAnswer:" 2. Label that references a value like a string or number."
    },

    {
        question: "What is a local storage?",
        answerkey: [
            "1. A property that allows JavaScript sites and apps to save key value pairs in a web browser with no expiration date.", "2. Label that references a value like a string or number.", "3.  Able to adapt or change.", "4. To express one's disapproval.", 
        ], 
        correctAnswer:"1. A property that allows JavaScript sites and apps to save key value pairs in a web browser with no expiration date."
    }
]

function nextquestion (event) {
    if(event&&event.target.textContent==questions[index].correctAnswer) { 
        score++

    }
    console.log(score)
    score2.textContent= score
   
    index++
    if (index>=questions.length) {
        endgame()

    }
    button1.textContent=questions[index].answerkey[0]
    button2.textContent=questions[index].answerkey[1]
    button3.textContent=questions[index].answerkey[2]
    button4.textContent=questions[index].answerkey[3]
    question.textContent= questions[index].question
    
   
}

startbutton.addEventListener("click", function() {
startgame()
startbutton.classList.add("hidden")
nextquestion()

button1.addEventListener("click", nextquestion )
button2.addEventListener("click", nextquestion)
button3.addEventListener("click", nextquestion)
button4.addEventListener("click", nextquestion)

}
)
//local storage
var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added');




