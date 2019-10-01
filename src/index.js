import _ from 'lodash';
import './sw.js';

async function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  const cowsRes = await fetch('./cows.txt');
  const cows = await cowsRes.text();
  element.innerHTML = _.join(['Hello', 'webpack'], cows);

  return element;
}

document.body.appendChild(component());