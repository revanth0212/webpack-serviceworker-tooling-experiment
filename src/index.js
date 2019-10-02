import _ from "lodash";

async function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  const cowsRes = await fetch("./cows.txt");
  const cows = await cowsRes.text();
  element.innerHTML = _.join(["Hello", "webpack"], cows);

  document.body.appendChild(element);
}

component();

window.addEventListener("load", () =>
  navigator.serviceWorker
    .register("sw.js")
    .then(registration => {
      console.log("Service worker registered: ", registration);
    })
    .catch(error => {
      console.log("Service worker registration failed: ", error);
    })
);
