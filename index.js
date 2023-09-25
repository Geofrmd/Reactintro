// selecteursdoc
// exemple pour changer la couleur de fond du h4

// document.querySelector("h4").style.background="yellow";

// utilisation d'une variable pour stocker la selection
// const baliseH4 = document.querySelector("h4")
// console.log(baliseH4);

// click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
// Autre méthode pour selectionner un id
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// exemple d'ajout de border-radius

// questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// -------------------------------------------------------------

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseleave", () => {
  console.log("la souris est sortie du container");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg";
});

// ------------------------------------------

// keyPress event

const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// ajouter un son en javascript
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  // obtenir la lettre tappée par l'utilisateur
  // console.log(e.key);
  key.textContent = e.key;
  if (e.key === "a") {
    keyPressContainer.style.background = "pink";
    ring();
  } else if (e.key === "h") {
    keyPressContainer.style.background = "brown";
  } else {
    keyPressContainer.style.background = "black";
  }
});

// -----------------------------------
// Animation des évènements au scroll

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-50px";
  }
});

// ----------------------------------
// form event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // on récupère l'id cgv (a personaliser par ce que l'on veux). JS connait par défaut pour les checkboxs donc pas besoin de déclarer au préalable (pareille pour les bouttons)
  if (cgv.checked) {
    alert("formulaire envoyé");
  } else {
    alert("Veuillez accepter les CGV");
  }
});
