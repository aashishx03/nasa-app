"use strict";

document.querySelector(".btn").addEventListener("click", showData);

function showData() {
  //   let val = document.querySelector("input").value;\
  console.log("working");
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=3osSgW195PY2g6E4sKrj4jsMycfLlsWrxLAgHvD4"
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
