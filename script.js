var x = document.getElementById("stock");
var y = document.getElementById("market");

function stock() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
	y.style.display = "none";  
    x.style.display = "block";
  }
}
function market() {
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
	 x.style.display = "none";
    y.style.display = "block";
  }
}