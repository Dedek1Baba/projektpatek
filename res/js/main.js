const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerCookieIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrice = 50;

cookie.onclick = () => {
  numberOfCookies += cookieIncreaseNumber;
  counter.innerText = "Kočičky: " + numberOfCookies;
};

clickUpgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odecist cenu nakupu
    //numberOfCookies = numberOfCookies - 50;
    numberOfCookies -= clickUpgradePrice;
    clickUpgradePrice *= 2;
    clickUpgrade.innerText = 'Buy click upgrade: (clickUpgradePrice)'
    counter.innerText = "Kočičky: " + numberOfCookies;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};

autoclickerUpgrade.onclick = () => {
  if (numberOfCookies >= 100) {
    //odectem cenu
    numberOfCookies -= 100;
    //zobrazime pocet susenek
    counter.innerText = "Kočičky: " + numberOfCookies;
    autoclickerCookieIncreaseNumber++;
    //zastavime bezici interval
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    autoclickerInterval = setInterval(() => {
      numberOfCookies += autoclickerCookieIncreaseNumber;
      counter.innerText = "Kočičky: " + numberOfCookies;
    }, 1000);
  }
};
