"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");
const items = document.querySelectorAll(".navbar__menu__item");

navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const toggleBtn = document.querySelector(".navbar__toggle-btn");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
//window.matchMedia("(max-width: 768px)").matches
//logic = active가 있으면 지우고 없으면 추가하고

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
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Make About me part slowly appear into view

const about = document.querySelector("#about");
const skill = document.querySelector("#skills");
const work = document.querySelector("#work");
const testimonials = document.querySelector("#testimonials");

//하 이거 height가 웹 크기에따라 게속 달라지네..수정해야함 ㅠ
document.addEventListener("scroll", () => {
  fadeIn(about, 180);
  console.log(window.scrollY);
});

document.addEventListener("scroll", () => {
  fadeIn(skill, 600);
});

document.addEventListener("scroll", () => {
  fadeIn(work, 1300);
});

document.addEventListener("scroll", () => {
  fadeIn(testimonials, 1900);
});

function fadeIn(id, height) {
  if (window.scrollY > height) {
    id.classList.add("scroll");
  } else if (window.scrollY < height) {
    id.classList.remove("scroll");
  }
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
  }
  // Remove selection from the previous item and select the new one
  const active = document.querySelector(".categories__btn.selected");
  active.classList.remove("selected");
  //타겟의 노드네임이 button이면 ? e.target으로 쓰고 아니라면 parentNode써라
  //자바스크립트안에서만 사용되는 문법
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  //클래스는 동적으로 동작하기때문에 원래같으면 filtering다음에 anim out이 진행됨
  //그래서 먼저 anim out추가하고 필터링을 setTimeout에 넣어서 실행
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      //console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        //console.log(project);
        project.classList.remove("invisible");
      } else {
        //console.log(project);
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
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
