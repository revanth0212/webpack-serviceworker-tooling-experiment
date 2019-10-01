import _ from "lodash";
import register from "./sw.js";
window.addEventListener("load", register);

async function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  const cowsRes = await fetch("./cows.txt");
  const cows = await cowsRes.text();
  element.innerHTML = _.join(["Hello", "webpack"], cows);

  document.body.appendChild(element);
}

component();
