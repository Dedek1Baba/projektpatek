const cookie = document.getElementById("cookie").addEventListener("click", Count);
const counter = document.getElementById("counter");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const upgrade4 = document.getElementById("upgrade4");
const upgrade5 = document.getElementById("upgrade5");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const picture = document.getElementById("picture");
const picture2 = document.getElementById("picture2");
const picture3 = document.getElementById("picture3");
 
// Počet sušenek
let NumberOfCookies = 0;
 
// Cena vylepšení
let UpgradeCost = 25;
let UpgradeCost2 = 100;
 
// Vylepšené počítání
let UpgradedCount = 1;
 
// Cena autoclickeru
let AutoclickCost = 400;
let AutoclickCost2 = 800;
let AutoclickCost3 = 1600;
 
// Automatické navyšování
let AutoclickIncrease = 0;
 
upgrade1.innerText = "Buy grandma: " + UpgradeCost;
upgrade1.addEventListener("click", Upgrader1);
 
upgrade2.innerText = "Buy grandpa: " + UpgradeCost2;
upgrade2.addEventListener("click", Upgrader2);
 
upgrade3.innerText = "Buy first farm: " + AutoclickCost;
upgrade3.addEventListener("click", AutoclickUpgrade1);
 
upgrade4.innerText = "Buy second farm: " + AutoclickCost2;
upgrade4.addEventListener("click", AutoclickUpgrade2);
 
upgrade5.innerText = "Buy third farm: " + AutoclickCost3;
upgrade5.addEventListener("click", AutoclickUpgrade3);
 
function Count() {
    NumberOfCookies += UpgradedCount;
    counter.innerText = "Cookies: " + NumberOfCookies;
}
 
function Upgrader1() {
    if (NumberOfCookies >= UpgradeCost) {
        NumberOfCookies -= UpgradeCost;
        UpgradeCost *= 2;
        UpgradedCount += 5;
        counter.innerText = "Cookies: " + NumberOfCookies;
        upgrade1.innerText = "Upgrade grandma: " + UpgradeCost;
    }
}
 
function Upgrader2() {
    if (NumberOfCookies >= UpgradeCost) {
        NumberOfCookies -= UpgradeCost;
        UpgradeCost2 *= 2;
        UpgradedCount += 10;
        counter.innerText = "Cookies: " + NumberOfCookies;
        upgrade2.innerText = "Upgrade grandma: " + UpgradeCost2;
    }
 
}
 
function AutoclickUpgrade1() {
    if (NumberOfCookies >= AutoclickCost) {
        NumberOfCookies -= AutoclickCost;
        AutoclickCost *= 2;
        counter.innerText = "Cookies: " + NumberOfCookies;
        upgrade3.innerText = "Upgrade first farm: " + AutoclickCost;
        picture.src="./res/img/firstbackground.png";
        picture.style.backgroundSize = "cover";
        picture.style.backgroundRepeat = "no-repeat";
        picture.style.margin = "0";
        picture.style.width = "100%";
        picture.style.height = "320px";
        first.style.borderRight = "none";
        first.style.borderTop = "none";
        first.style.borderBottom = "none";
 
        if(AutoclickIncrease === 0) {
            setInterval(() => {
                NumberOfCookies += AutoclickIncrease;
                counter.innerText = "Cookies: " + NumberOfCookies;
            }, 1000)
        }
        AutoclickIncrease += 1;
    }
}
 
function AutoclickUpgrade2() {
    if (NumberOfCookies >= AutoclickCost2) {
        NumberOfCookies -= AutoclickCost2;
        AutoclickCost2 *= 2;
        counter.innerText = "Cookies: " + NumberOfCookies;
        upgrade4.innerText = "Upgrade second farm: " + AutoclickCost2;
        picture2.src="./res/img/secondbackground.jpg";
        picture2.style.backgroundSize = "cover";  
        picture2.style.backgroundRepeat = "no-repeat";
        picture2.style.margin = "0";
        picture2.style.width = "100%";
        picture2.style.height = "320px";
        second.style.borderRight = "none";
        second.style.borderTop = "none";
 
        if(AutoclickIncrease === 0) {
            setInterval(() => {
                NumberOfCookies += AutoclickIncrease;
                counter.innerText = "Cookies: " + NumberOfCookies;
            }, 1000)
        }
        AutoclickIncrease += 5;
    }
}
 
function AutoclickUpgrade3() {
    if (NumberOfCookies >= AutoclickCost3) {
        NumberOfCookies -= AutoclickCost3;
        AutoclickCost3 *= 2;
        counter.innerText = "Cookies: " + NumberOfCookies;
        upgrade5.innerText = "Upgrade third farm: " + AutoclickCost3;
        picture3.src="./res/img/thirdbackground.jpg";
        picture3.style.backgroundSize = "cover";
        picture3.style.backgroundRepeat = "no-repeat";
        picture3.style.width = "100%";
        picture3.style.height = "313px";
        third.style.borderRight = "none";
        third.style.borderBottom = "none";
        third.style.borderTop = "none";
 
        if(AutoclickIncrease === 0) {
            setInterval(() => {
                NumberOfCookies += AutoclickIncrease;
                counter.innerText = "Cookies: " + NumberOfCookies;
            }, 1000)
        }
        AutoclickIncrease += 10;
    }
}