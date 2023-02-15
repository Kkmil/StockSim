var x = document.getElementById("stock");
var y = document.getElementById("market");
var z = document.getElementById("inventory");
const button = document.getElementById("mining");

var House = parseInt(localStorage.getItem('House'),10) || 0;
var money =parseInt(localStorage.getItem('money'),10) || 0;
var actionperclick =1;
var Orren = parseInt(localStorage.getItem('Orren'),10) || 0;
var Reser = parseInt(localStorage.getItem('Reser'),10) || 0;
var YmY = parseInt(localStorage.getItem('YmY'),10) || 0;
var SiP = parseInt(localStorage.getItem('SiP'),10) || 0;
var Oprice = parseInt(localStorage.getItem('Oprice'),10) || 15;
var Yprice = parseInt(localStorage.getItem('Yprice'),10) || 10;
var laneArr = [Orren, Reser, YmY, SiP];
var b1 = document.getElementById('s1');
var b2 = document.getElementById('s2');
var b3 = document.getElementById('s3');
var b4 = document.getElementById('s4');

const OpriceHolder = document.getElementById("Oprice");
const YpriceHolder = document.getElementById("Yprice");
const orrenHolder = document.getElementById("Orren");
const ymyHolder = document.getElementById("YmY");
const moneyHolder = document.getElementById("money");

save();
function idle() {
	if (House>=1) {
		money = money + House;
		updateinv();
		setInterval(idle, 1000);
}
updateinv();

}
idle();

function price() {
	random = Math.floor(Math.random() * 4)
	var y = Math.random();
	if (Oprice >= 0)
		
		if (y < 0.5)
			Oprice -= random;
		else
			Oprice += random;
	updateinv();
	random = Math.floor(Math.random() * 4)
	var y = Math.random();
	if (Yprice >= 0)
		if (y < 0.5)
			Yprice -= random;
		else
			Yprice += random;
	updateinv();
	save();
}

b1.onclick = function () { 
	money = money + (Orren * Oprice);
	Orren = Orren - Orren;
	updateinv();
};
b2.onclick = function () { 
	money = money + Reser;
	Reser = Reser - Reser;
	updateinv();
};
b3.onclick = function () { 
	money = money + (YmY * Yprice);
	YmY = YmY - YmY;
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

button.addEventListener(
  'click',
  function() {
	var random = Math.floor(Math.random() * laneArr.length)
	if (random == 0) {Orren += actionperclick;}
	if (random == 1) {Reser += actionperclick};
	if (random == 2) {YmY += actionperclick};
	if (random == 3) {SiP += actionperclick};
	console.log(Orren,Reser,YmY,SiP)
	updateinv();
  }
)

function updateinv() {
	orrenHolder.innerHTML = Orren;
	ymyHolder.innerHTML = YmY;
	YpriceHolder.innerHTML = Yprice;
	OpriceHolder.innerHTML = Oprice;
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
function save() {
	localStorage.setItem('House',House)
	localStorage.setItem('money',money)
	localStorage.setItem('Orren',Orren)
	localStorage.setItem('Reser',Reser)
	localStorage.setItem('YmY',YmY)
	localStorage.setItem('SiP',SiP)
	localStorage.setItem('Oprice',Oprice)
	localStorage.setItem('Yprice',Yprice)
}
	
	
setInterval(price, 10000);

		