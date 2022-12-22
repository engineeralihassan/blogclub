import { blogs } from "./data.js";
let blogid = localStorage.getItem("id");
// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {
      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");
    }
  });
}
// single post functionality
let singlepostcontainer = document.querySelector(".singleblog");
let singlepost = blogs.find((item) => item.id === +blogid);

let showsinglepost = () => {
  singlepostcontainer.innerHTML = "";
  let post = `
          <h1 catgory>Category:${singlepost.category}</h1>
      <img class="postimage" src=${singlepost.poster} alt="${singlepost.title}">
     <span class="postnumber">Post # :${singlepost.id}</span>
     
     <h1 class="title">${singlepost.title}</h1>
     <p class="short">${singlepost.short}</p>
     <p class="long">${singlepost.long}</p>
      <div class="writer">
        <img src=${singlepost.img} alt=${singlepost.writer} width="50">
        <p>by ${singlepost.writer}</p>
        <p>${singlepost.date}</p>
      </div>
      
      
      
      `;
  singlepostcontainer.insertAdjacentHTML("afterbegin", post);
};
showsinglepost();
