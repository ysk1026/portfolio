"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button

const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

/*(event) => {
  const link = event.target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}); */

/* function event(abc) {
  const link = abc.target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
} */

// Make Home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Make Arrow up

const arrow = document.querySelector(".arrowup");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

/* 내가 짠 코드 
  document.addEventListener("scroll", () => {
  const posi = window.scrollY - 15;
  if (window.scrollY > 300) {
    arrow.style.display = "block";
    arrow.style.opacity = 1;
    arrow.style.bottom = `-${posi}px`;
  }
}); */

arrow.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

/* arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
}); */

// Project handler
const allBtn = document.querySelector('button[data-link="#all"]');

const frontEnd = document.querySelector('a[data-link="#frontEnd"]');
const frontEndBtn = document.querySelector('button[data-link="#frontEnd"]');

const react = document.querySelector('a[data-link="#react"]');
const reactBtn = document.querySelector('button[data-link="#react"]');

const python = document.querySelector('a[data-link="#python"]');
const pythonBtn = document.querySelector('button[data-link="#python"]');

allBtn.addEventListener("click", () => {
  makeAllBlock(frontEnd, react, python);
});

frontEndBtn.addEventListener("click", () => {
  makeItNone(react, python, frontEnd);
});

reactBtn.addEventListener("click", () => {
  makeItNone(frontEnd, python, react);
});

pythonBtn.addEventListener("click", () => {
  makeItNone(frontEnd, react, python);
});

function makeItNone(first, second, last) {
  first.style.display = "none";
  second.style.display = "none";
  last.style.display = "block";
}

function makeAllBlock(first, second, last) {
  first.style.display = "block";
  second.style.display = "block";
  last.style.display = "block";
}

// 일단은 이 개념으로 sorting은했는데 자연스럽게 나타나게 하려면
// add class list로 바꾸고 transition 조정?! 하는게 좋을듯..근데 디스플 바꾸는거라
// 어렵다..
