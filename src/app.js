window.onload = function() {
  let who = ["Mi perro ", "Mi abuela ", "El cartero ", "Mi pajarito "];
  let action = ["comió ", "orinó ", "aplastó ", "rompió "];
  let what = ["mi tarea ", "mi celular ", "el auto "];
  let when = [
    "antes de ir a clases",
    "cuando estaba durmiendo",
    "mientras estaba haciendo ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  function generateRandomExcuse() {
    const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

    const quien = getRandomIndex(who);
    const que = getRandomIndex(what);
    const hizo = getRandomIndex(action);
    const cuando = getRandomIndex(when);

    const excuse = `${who[quien]} ${action[hizo]} ${what[que]} ${when[cuando]}`;

    document.querySelector("#excuse").innerHTML = excuse;
  }

  document
    .querySelector("#generate")
    .addEventListener("click", generateRandomExcuse);
};
