const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

cookie.onclick = () => {

    numberOfCookies++;

    counter.innerText = "Kočičky: " + numberOfCookies;
}