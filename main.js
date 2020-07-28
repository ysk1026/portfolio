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

/* 내가 한것 
const allBtn = document.querySelector('button[data-filter="#all"]');

const frontEnd = document.querySelector('a[data-type="#frontEnd"]');
const frontEndBtn = document.querySelector('button[data-filter="#frontEnd"]');

const react = document.querySelector('a[data-type="#react"]');
const reactBtn = document.querySelector('button[data-filter="#react"]');

const python = document.querySelector('a[data-type="#python"]');
const pythonBtn = document.querySelector('button[data-filter="#python"]');

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

*/
// 엘리선생님이 한 것

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  //이런식으로 const안에 || 추가해서 앞에 게 false라면 뒤에거 추가 가능한듯?
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  //console.log(filter);
  if (filter == null) {
    return;
  } else {
    projects.forEach((project) => {
      //console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        console.log(project);
        project.classList.remove("invisible");
      } else {
        console.log(project);
        project.classList.add("invisible");
      }
    });
  }
});

//아직 다 이해가 안된다...
// 콜스택 돌려본 결과? forEach니까 프로젝트를 3번 도는데 (안에 3개의 array value들이 있어서)
// frontEnd누르면 첫번째 if문에서 true에 해당하니까 1번 조건문 돌려주고
// 2,3번 돌려서 filter가 dataset.type이랑 맞지 않으니까 false로 가서 2번 돌려주는듯
/* 정리하면? 나의 해석 = frontEnd누르면 filter = frontEnd인데
첫번째 if문에서 project.dataset.type은 

/* 1,2,3 다 같은 function
// 1
projects.forEach((project) => {
  console.log(project);
});

//2
for (let fd of projects) {
  console.log(fd);
}
//3
let project;
for (let i = 0; i < projects.length; i++) {
  project = projects[i];
  console.log(project);
}
*/
