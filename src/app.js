/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("domain").innerHTML = domainGenerator();
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let end = [];

function arraySelector(array) {
  let randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
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
}
