var readlineSync = require('readline-sync');
var questions = [{statement: "Which data structure is LIFO type ? ",ans: "Stack",score: 2},{statement: "Which basic technique is used in kruskals & Prims algorithm ? ",ans: "Greedy",score: 1},{statement: "What is the time complexity of heapify function ? Assume: 'n' elements in heap ? ",ans: "O(logn)",score: 1},{statement: "what is the best algorithm to sort an array of '0' or '1' ? ",ans: "Count Sort",ans1: "Bucket Sort",score: 2}];
console.log("Welcome to Data Structures & Algorithms Quiz");
var userName = readlineSync.question("Hey buddy, May I know your good name ? ");
console.log("Nice Meeting you " + userName + " !!");
console.log("Let's begin with the quiz in few seconds ......");
var score = 0;
function play(question,answer,scoreVal){
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase()){
     console.log("Right Ans :) you won " + scoreVal + " points");
     score += scoreVal;
  }
  else{
    console.log("Wrong Ans :( you lost " + scoreVal + " points");
    score -= scoreVal;
  }
} 

for(var j = 0;j < questions.length;j++){
   play(questions[j].statement,questions[j].ans,questions[j].score);
   
}

console.log("Your Final Score is " + score + " Better Luck next time !!");