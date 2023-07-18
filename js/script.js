"use strict";

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=3osSgW195PY2g6E4sKrj4jsMycfLlsWrxLAgHvD4"
)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(
      ".container"
    ).style.backgroundImage = `url(${data.hdurl})`;
  });

document.querySelector(".btn").addEventListener("click", showData);

function showData() {
  let val = document.querySelector("input").value;
  // console.log(val);
  // console.log("working");
  fetch(
    `https://api.nasa.gov/planetary/apod?date=${val}&api_key=3osSgW195PY2g6E4sKrj4jsMycfLlsWrxLAgHvD4`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector("img").src = data.hdurl;
      document.querySelector("h1").textContent = data.title;
      document.querySelector("h4").innerHTML = data.explanation;
    })
    .catch((err) => console.log(err));
}

// document.querySelector(".mars").addEventListener("click", showMarsImg);

// function showMarsImg() {
//   fetch(
//     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=3osSgW195PY2g6E4sKrj4jsMycfLlsWrxLAgHvD4"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       document.querySelector("img").src = data.photos[0].img_src;
//       document.querySelector("img").classList.remove("hidden");
//     })
//     .catch((err) => console.log(err));
// }
