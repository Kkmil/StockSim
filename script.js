var x = document.getElementById("stock");
var y = document.getElementById("market");
var z = document.getElementById("inventory");
const button = document.getElementById("mining");
var v= document.getElementById("first");

var money = 0;
var stoneperclick = 2;
let firsti = false;
let second = false;
var stone = 0;
const textHolder = document.getElementById("stone");
const moneyHolder = document.getElementById("money");


function main() {
  if (z.style.display === "block") {
    x.style.display = "none";
	y.style.display = "none";
  } else {
	x.style.display = "none";  
    z.style.display = "block";
	y.style.display = "none";
  }
}
function stock() {
	
  if (x.style.display === "block") {
    z.style.display = "none";
	y.style.display = "none";
  } else {
	y.style.display = "none";  
    x.style.display = "block";
	z.style.display = "none";
  }
  updateinv();
}
function market() {
  if (y.style.display === "block") {
    x.style.display = "none";
	z.style.display = "none";
  } else {
	x.style.display = "none";
    y.style.display = "block";
	z.style.display = "none";
  }
  
}
function sell() {
	if (stone > 0) {
		money = money + stone;
		stone = stone - stone;
	} else {
	}
	updateinv();
}
button.addEventListener("click",function() {
	stone = stone + stoneperclick + (2 * firsti) + (4*second);
	updateinv();
});
function updateinv() {
	textHolder.innerHTML = stone;
	moneyHolder.innerHTML = money + "$";
}
function upgrade() {
	if (money >= 50) {
		firsti = true;
		v.style.display = "none";
		money = money - 50
	}
	updateinv();
}
		
		