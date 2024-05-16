/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function arraySelector(array) {
  let randomelement = array[Math.floor(Math.random() * array.length)];
  return randomelement;
}
function domainGenerator() {
  let domain =
    arraySelector(pronoun) +
    " " +
    arraySelector(adj) +
    " " +
    arraySelector(noun) +
    " ";
  return domain;

document.getElementById(domain).textContent = domainGenerator();
};
