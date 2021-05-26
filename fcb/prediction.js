function scorePred(){

var team1 = document.querySelector(".noom1").value;
var team2 =  document.querySelector(".noom2").value;

if (typeof(team1) == "str" || typeof(team2) == "str" ){
  alert("add the score mate.")
}

document.querySelector(".scorre").innerText = team1 + ":" + team2;

document.querySelector(".noom1").value = "";
document.querySelector(".noom2").value = "";

console.log(team1)

document.querySelector(".moooo").style.backgroundImage = 'prediction-images/noubravo.jpeg';
document.querySelector(".mother-div").style.display = "none";
document.querySelector(".main-title").style.display = "none";
document.querySelector(".moooo").style.display = "block";



}

document.querySelector(".bear").addEventListener("click", scorePred);
