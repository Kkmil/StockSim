var x = document.getElementById("stock");
var y = document.getElementById("market");
var z = document.getElementById("inventory");
const button = document.getElementById("mining");


var money = 0;
var actionperclick =1;
let firsti = false;
let second = false;
let third = false;
let four = false;
var Ornel = 0;
var Reser = 0;
var BmB = 0;
var SiP = 0;

var laneArr = [Ornel, Reser, BmB, SiP];
var b1 = document.getElementById('s1');
var b2 = document.getElementById('s2');
var b3 = document.getElementById('s3');
var b4 = document.getElementById('s4');


const textHolder = document.getElementById("stone");
const moneyHolder = document.getElementById("money");
b1.onclick = function () { 
	money = money + Ornel;
	Ornel = Ornel - Ornel;
	updateinv();
};
b2.onclick = function () { 
	money = money + Reser;
	Reser = Reser - Reser;
	updateinv();
};
b3.onclick = function () { 
	money = money + Bmb;
	Bmb = Bmb - Bmb;
	updateinv();
};
b4.onclick = function () { 
	money = money + SiP;
	SiP = SiP - SiP;
	updateinv();
};
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
button.addEventListener(
  'click',
  function() {
	var random = Math.floor(Math.random() * laneArr.length)
	if (random == 0) { Ornel += actionperclick;}
	if (random == 1) {Reser += actionperclick};
	if (random == 2) {BmB += actionperclick};
	if (random == 3) {SiP += actionperclick};
	console.log(Ornel,Reser,BmB,SiP)
  }
)

function updateinv() {
	textHolder.innerHTML = Ornel;
	moneyHolder.innerHTML = money + "$";
}
function upgrade() {
	var v= document.getElementById("first");
	var v1= document.getElementById("third");
	var v2= document.getElementById("four");
	var v3= document.getElementById("five");
	if (money >= 50 && firsti === false) {
		firsti = true;
		v.style.display = "none";
		money = money - 50
	}
	if (money >= 200 && second === false) {
		second = true;
		v1.style.display = "none";
		money = money - 200
	}
	if (money >= 500 && third === false) {
		third = true;
		v2.style.display = "none";
		money = money - 500
	}
	if (money >= 1000 && four === false) {
		four = true;
		v3.style.display = "none";
		money = money - 1000
	}
	updateinv();
}
		
		