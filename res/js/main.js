const jordan4 = document.getElementById("jordan4").addEventListener("click", Count);
const counter = document.getElementById("counter");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const upgrade4 = document.getElementById("upgrade4");
const first = document.getElementById("first");
const second = document.getElementById("second");
 
// Počet jordanu
let NumberOfJordan = 0;
 
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
 
upgrade2.innerText = "Buy New Laces: " + UpgradeCost2;
upgrade2.addEventListener("click", Upgrader2);
 
upgrade3.innerText = "Buy first farm: " + AutoclickCost;
upgrade3.addEventListener("click", AutoclickUpgrade1);
 
upgrade4.innerText = "Buy second farm: " + AutoclickCost2;
upgrade4.addEventListener("click", AutoclickUpgrade2);
 
 
function Count() {
    NumberOfJordan += UpgradedCount;
    counter.innerText = "Jordan: " + NumberOfJordan;
}
 
function Upgrader1() {
    if (NumberOfJordan >= UpgradeCost) {
        NumberOfJordan -= UpgradeCost;
        UpgradeCost *= 2;
        UpgradedCount += 5;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade1.innerText = "Upgrade Cleaner: " + UpgradeCost;
    }
}
 
function Upgrader2() {
    if (NumberOfJordan >= UpgradeCost) {
        NumberOfJordan -= UpgradeCost;
        UpgradeCost2 *= 2;
        UpgradedCount += 10;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade2.innerText = "New Laces: " + UpgradeCost2;
    }
 
}
 
function AutoclickUpgrade1() {
    if (NumberOfJordan >= AutoclickCost) {
        NumberOfJordan -= AutoclickCost;
        AutoclickCost *= 2;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade3.innerText = "Upgrade Box Farm: " + AutoclickCost;
 
        if(AutoclickIncrease === 0) {
            setInterval(() => {
                NumberOfJordan += AutoclickIncrease;
                counter.innerText = "Jordan: " + NumberOfJordan;
            }, 1000)
        }
        AutoclickIncrease += 1;
    }
}
 
function AutoclickUpgrade2() {
    if (NumberOfJordan >= AutoclickCost2) {
        NumberOfJordan -= AutoclickCost2;
        AutoclickCost2 *= 2;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade4.innerText = "Upgrade Jordan Farm: " + AutoclickCost2;
 
        if(AutoclickIncrease === 0) {
            setInterval(() => {
                NumberOfJordan += AutoclickIncrease;
                counter.innerText = "Jordan: " + NumberOfJordan;
            }, 1000)
        }
        AutoclickIncrease += 5;
    }
}