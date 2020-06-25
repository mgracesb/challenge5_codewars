"use strict";
const input = document.getElementById("input");
const button = document.getElementById("button");
const display = document.getElementById("display");

function toCamelCase() {
  const value = input.value;
  const lower = value.charAt(0).toLowerCase() + value.slice(1);
  const val = lower.replace(/\s/g, "-");
  const x = val.match(/[-_]/) ? val.split(/[-_]/g) : val;
  const newEl = document.createElement("div");
  let result;
  if (x === " " || x === "" || x === null) {
    result = "";
  } else if (Array.isArray(x)) {
    let y = x.slice(0, 1);
    let z = x.slice(1, x.length);
    result =
      x.length >= 2
        ? y + z.map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join("")
        : y + z.charAt(0).toUpperCase() + z.slice(1);
  } else if (x[0].charAt(0) == x[0].charAt(0).toUpperCase()) {
    result = x.map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join("");
  } else {
    result = val;
  }
  display.appendChild(newEl);
  newEl.appendChild(document.createTextNode(`${result}`));
}

button.addEventListener("click", toCamelCase);
