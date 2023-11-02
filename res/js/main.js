const jordan4 = document.getElementById("jordan4").addEventListener("click", Count);
const counter = document.getElementById("counter");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const clicker1 = document.getElementById("clicker1");
const clicker2 = document.getElementById("clicker2");

let NumberOfJordan = 0;
let UpgradePrice = 25;
let UpgradePrice2 = 200;
let UpgradedCount = 1;
let AutoclickerPrice = 400;
let AutoclickerPrice2 = 1000;
let AutoClickerIncrease = 0;
 
upgrade1.innerText = "Buy Cleaner: " + UpgradePrice;
upgrade1.addEventListener("click", Upgrade1);
 
upgrade2.innerText = "Buy Laces: " + UpgradePrice2;
upgrade2.addEventListener("click", Upgrade2);
 
clicker1.innerText = "Buy Box Farm: " + AutoclickerPrice;
clicker1.addEventListener("click", AutoClickerUpgrade1);
 
clicker2.innerText = "Buy SNKR Farm: " + AutoclickerPrice2;
clicker2.addEventListener("click", AutoClickerUpgrade2);
 
function Count() {
    NumberOfJordan += UpgradedCount;
    counter.innerText = "Jordan: " + NumberOfJordan;
}
 
function Upgrade1() {
    if (NumberOfJordan >= UpgradePrice) {
        NumberOfJordan -= UpgradePrice;
        UpgradePrice *= 2;
        UpgradedCount += 5;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade1.innerText = "Upgrade Cleaner: " + UpgradePrice;
    }
}
 
function Upgrade2() {
    if (NumberOfJordan >= UpgradePrice2) {
        NumberOfJordan -= UpgradePrice2;
        UpgradePrice2 *= 2;
        UpgradedCount += 10;
        counter.innerText = "Jordan: " + NumberOfJordan;
        upgrade2.innerText = "Upgrade Laces: " + UpgradePrice2;
    }
}
 
function AutoClickerUpgrade1() {
    if (NumberOfJordan >= AutoclickerPrice) {
        NumberOfJordan -= AutoclickerPrice;
        AutoclickerPrice *= 2;
        counter.innerText = "Jordan: " + NumberOfJordan;
        clicker1.innerText = "Upgrade Box Farm: " + AutoclickerPrice;
 
        if(AutoClickerIncrease === 0) {
            setInterval(() => {
                NumberOfJordan += AutoClickerIncrease;
                counter.innerText = "Jordan: " + NumberOfJordan;
            }, 1000)
        }
        AutoClickerIncrease += 1;
    }
}
 
function AutoClickerUpgrade2() {
    if (NumberOfJordan >= AutoclickerPrice2) {
        NumberOfJordan -= AutoclickerPrice2;
        AutoclickerPrice2 *= 2;
        counter.innerText = "Jordan: " + NumberOfJordan;
        clicker2.innerText = "Upgrade SNKR Farm: " + AutoclickerPrice2;
 
        if(AutoClickerIncrease === 0) {
            setInterval(() => {
                NumberOfJordan += AutoClickerIncrease;
                counter.innerText = "Jordan: " + NumberOfJordan;
            }, 1000)
        }
        AutoClickerIncrease += 5;
    }
}
