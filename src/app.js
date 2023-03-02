import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let pronoun = ["his", "we"];
  let adj = ["fun", "brilliant"];
  let noun = ["game", "creators"];
  let website = [".com", ".org", ".net"];
  let domainList = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < website.length; l++) {
          domainList.push(pronoun[i] + adj[j] + noun[k] + website[l]);
        }
      }
    }
  }
  domainList.sort();
  let element = document.querySelector(".domain-list");
  for (let i = 0; i < domainList.length; i++) {
    element.innerHTML += "<li>" + domainList[i] + "</li>";
  }
};
