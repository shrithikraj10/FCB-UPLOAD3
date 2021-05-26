function myFunction() {
  var int = []
 int.push(document.getElementById("che").value);
  if (int[0].length > 10) {
    document.querySelector(".talk").innerText = int[0];
  }else{
    alert("Please enter a valid Quote.")
  }
  document.getElementById("che").value = "";
  console.log(int);
}

document.querySelector(".sub").addEventListener("click", myFunction);
