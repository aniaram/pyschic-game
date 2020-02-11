// setting up varibales 
// the letters 
// set up arrays to keep track of letters guessed so far
// choose a letter
// wins, losses, guesses remaining, 
var letters = [
"a","b","c","d","e","f","g"
]
var lettersguessedsofar = [

]
var wins = 0 
var losses = 0 
var guessesremain= 9 
 // function for reseting the game, guesses remaining, guess so far
 // letter to guess 
 function reset () {
    guessesremaining = 9 
    lettersguessedsofar = [ ]
     
 }
 function guessesremaining (){
document.getElementById ("Guesses_left").innerHTML = guessesremain
 }

 function GuessesSoFar () {
document.getElementById ("Your_Guesses_So_Far").innerHTML = lettersguessedsofar
     
 }
 function LetterToGuess () {

   var letterstoguess = letters [Math.floor(Math.random() * letters.length)]; 
   
 }
 guessesremaining ()
 document.onkeydown = function (event) {
     var userguess = event.key; 

    if (( letterstoguess === "a") || (letterstoguess === "c") || (letterstoguess === "d") || (letterstoguess === "e" )
 || ( letterstoguess === "f") || ( letterstoguess === "g")){
    if ((lettersguessedsofar === "a" && (letters === "b") || (lettersguessedsofar === "c") && (letters === "d")
|| (lettersguessedsofar === "f" && (letters === "g"){ 
    wins++;
}


 } else if (letterstoguess === letters) {
     guessesremain++;
 } else {
     losses++;
 }






 }









}