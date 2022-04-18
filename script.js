var score_player = 0
var score_ia = 0

function play(player){
  var ia = Math.floor(Math.random()*3)

  var ganhador = ""
  
  
  // Ia Ganha
  if ((ia == 0 && player == 2) || (ia == 1 && player == 0) ||(ia == 2 && player == 1)){
    ganhador = "IA"
    score_ia++
  }
 else if (ia == player){
   ganhador = "Ninguém"
 }
 else{
   ganhador = "Player"
   score_player++
   
 } 
  var p1 = document.getElementById("winner")
  p1.innerHTML = ganhador + " ganhou."

  var p2 = document.getElementById("score")
  p2.innerHTML = "Player " + score_player + " x " + score_ia + " IA"


  
}