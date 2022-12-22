"use strict";
import { blogs } from "./data.js";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
let postsNumbers = 12;

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
// popular posts

// functionality inner
let newarr = blogs.filter((item) => item.type === "featured");
let populararr = blogs.filter((item) => item.type === "popular");
console.log(populararr);
let bloglinks = document.querySelectorAll(".blog-page-link");
let featuredcontainer = document.querySelector(".hero-left-blogs");
let showfeaturPosts = () => {
  featuredcontainer.innerHTML = "";
  newarr.forEach((item, ind) => {
    if (ind < 4) {
      let post = `<div class="post" id='${item.id}'>
              <div class="post-banner">
             
                <img src=${item.poster} alt=${item.title}
                  width="50px" height="50px" class="blog-banner-img">
              </div>
              <div class="blog-content-wrapper" id='${item.id}'>
                <button class="blog-catgory text-tiny">${item.category}</button>
                <h3>
                  <a href="blog.html" class="h3 blog-page-link" id='${item.id}'>
                    ${item.title}
                  </a>
                </h3>
                <p class="blog-text">
                ${item.short}...
                </p>
                 <div class="wrapper-flex">
                  <div class="profile-wrapper">
                    <img src=${item.img} alt=${item.writer} width="50">
                  </div>      
                    <a href="blog.html" class="h4"> by ${item.writer}</a>
                    <p class="text-sm">
                      <time datetime="2022-01-17">${item.date}</time>            
                    </p>
                </div>
              </div>
            </div>
    
    `;
      featuredcontainer.insertAdjacentHTML("afterbegin", post);
    }
    bloglinks = document.querySelectorAll(".blog-page-link");

    for (let i = 0; i < bloglinks.length; i++) {
      bloglinks[i].addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target.id);
        localStorage.setItem("id", e.target.id);
        setTimeout(() => {
          window.location.assign("blog.html");
        }, 500);
      });
    }
  });
};
let bigpostcontainer = document.querySelector(".hero-right-blogs");
showfeaturPosts();
let showbigposts = () => {
  bigpostcontainer.innerHTML = " ";
  newarr.forEach((item, ind) => {
    if (ind > 4 && ind < 7) {
      let bigpost = ` <div class="big-post" id='${item.id}'>
            <div class="big-post-image">
                <img src=${item.poster} alt=${item.title}
                  width="50px" height="50px" class="bigpost-banner-img">
              </div>            
             <div class="big-blog-content-wrapper   blog-content-wrapper" id='${item.id}'> 
                <button class="blog-catgory text-tiny">${item.category}</button>
                <h3>
                  <a href="blog.html" class="h3 blog-page-link" id='${item.id}'>
                    ${item.title}
                  </a>
                </h3>               
                 <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src=${item.img} alt=${item.writer} width="50">
                  </div>                 
                    <a href="blog.html" class="h4"> by ${item.writer}</a>
                    <p class="text-sm">
                      <time datetime="2022-01-17">${item.date}</time>                                                            
                    </p>                
                </div>          
              </div> 
          </div>
`;
      bigpostcontainer.insertAdjacentHTML("afterbegin", bigpost);
    }
  });
  bloglinks = document.querySelectorAll(".blog-page-link");
  console.log(bloglinks.length);
  for (let i = 0; i < bloglinks.length; i++) {
    bloglinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id);
      localStorage.setItem("id", e.target.id);
      setTimeout(() => {
        window.location.assign("blog.html");
      }, 500);
    });
  }
};
showbigposts();
let popularcontainer = document.querySelector(".popular-container");

let showpopular = () => {
  popularcontainer.innerHTML = " ";
  populararr.forEach((item, ind) => {
    if (ind !== 2 && ind < 6) {
      let popularpost = `
      <div class=" popular-post-card ${ind === 3 ? "active" : null} " id='${
        item.id
      }' style="background-image: url(${item.poster})">  
             <div class="  popular-post_content  big-blog-content-wrapper   blog-content-wrapper"> 
                <button class="blog-catgory text-tiny">${item.category}</button>
                <h3>
                  <a href="blog.html" class="h3 blog-page-link" id='${item.id}'>
                     ${item.title}
                  </a>
                </h3>              
                 <div class="wrapper-flex">
                  <div class="profile-wrapper">
                    <img src=${item.img} alt=${item.writer} width="50">
                  </div>                 
                    <a href="#" class="h4"> by ${item.writer}</a>
                    <p class="text-sm">
                      <time datetime="2022-01-17">${
                        item.date
                      }</time>                                                              
                    </p>             
                </div>
              </div>
      </div>`;
      popularcontainer.insertAdjacentHTML("afterbegin", popularpost);
    }
  });
  bloglinks = document.querySelectorAll(".blog-page-link");
  console.log(bloglinks.length);
  for (let i = 0; i < bloglinks.length; i++) {
    bloglinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id);
      localStorage.setItem("id", e.target.id);
      setTimeout(() => {
        window.location.assign("blog.html");
      }, 500);
    });
  }
};
showpopular();

let cards = document.querySelectorAll(".popular-post-card");
let remove = function () {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    remove();

    card.classList.add("active");
  });
});
let allpostcontainer = document.querySelector(".new-posts-container");
let showallposts = (postsNumbers) => {
  (allpostcontainer.innerHTML = " "),
    blogs.forEach((item, ind) => {
      if (ind < postsNumbers) {
        let post = ` <div class="new-post" id='${item.id}'>
                <div class="big-post">

            <div class="big-post-image">
                <img src=${item.poster} alt=${item.title}
                  width="50px" height="50px" class="bigpost-banner-img">
              </div>
            
             <div class="big-blog-content-wrapper   blog-content-wrapper" id='${item.id}'> 

                <button class="blog-catgory text-tiny">${item.category}</button>

                <h3>
                  <a href="blog.html" class="h3 blog-page-link " id='${item.id}'>
                     ${item.title}
                  </a>
                </h3>

               
                 <div class="wrapper-flex">

                  <div class="profile-wrapper">
                    <img src=${item.img} alt=${item.writer} width="50">
                  </div>

                 
                    <a href="#" class="h4"> by ${item.writer}</a>

                    <p class="text-sm">
                      <time datetime="2022-01-17">${item.date}</time>
                     
                     
                     
                    </p>
                 

                </div>

               

              </div> 
          </div>

    </div> 




`;

        allpostcontainer.insertAdjacentHTML("beforeend", post);
      }
    });
  bloglinks = document.querySelectorAll(".blog-page-link");
  console.log(bloglinks);
  for (let i = 0; i < bloglinks.length; i++) {
    bloglinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id);
      localStorage.setItem("id", e.target.id);
      setTimeout(() => {
        window.location.assign("blog.html");
      }, 500);
    });
  }
};

showallposts(postsNumbers);
let finditems = document.querySelector(".finditem");

function search_animal() {
  let input1 = document.querySelector(".search-blogs-input").value;
  if (input1 === "") {
    showallposts(postsNumbers);

    document.querySelector(".finditem").style.opacity = 0;
  } else {
    input1 = input1.toLowerCase();

    let searchblogs = blogs.filter((item, ind) =>
      item.title.toLowerCase().includes(input1)
    );
    finditems.textContent = `"${searchblogs.length}" items found `;
    document.querySelector(".finditem").style.opacity = 1;
    allpostcontainer.innerHTML = " ";
    searchblogs.forEach((item, ind) => {
      let post = ` <div class="new-post" id='${item.id}'>
                <div class="big-post">
            <div class="big-post-image">
                <img src=${item.poster} alt=${item.title}
                  width="50px" height="50px" class="bigpost-banner-img">
              </div>            
             <div class="big-blog-content-wrapper   blog-content-wrapper" id='${item.id}'> 
                <button class="blog-catgory text-tiny">${item.category}</button>
                <h3>
                  <a href="blog.html" class="h3 blog-page-link" id='${item.id}'>
                     ${item.title}
                  </a>
                </h3>               
                 <div class="wrapper-flex">
                  <div class="profile-wrapper">
                    <img src=${item.img} alt=${item.writer} width="50">
                  </div>                
                    <a href="#" class="h4"> by ${item.writer}</a>
                    <p class="text-sm">
                      <time datetime="2022-01-17">${item.date}</time>                                                               
                    </p>                 
                </div>        
              </div> 
          </div>
    </div> 
`;
      allpostcontainer.insertAdjacentHTML("beforeend", post);
    });
  }
  bloglinks = document.querySelectorAll(".blog-page-link");
  console.log(bloglinks.length);
  for (let i = 0; i < bloglinks.length; i++) {
    bloglinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id);
      localStorage.setItem("id", e.target.id);
      setTimeout(() => {
        window.location.assign("blog.html");
      }, 500);
    });
  }
}
let buttonsearch = document.querySelector("#search-blog-btn");
buttonsearch.addEventListener("keyup", search_animal);

document
  .querySelector(".search-blogs-input")
  .addEventListener("keyup", search_animal);
let loadmorebtn = document.querySelector(".loadmore-btn");
loadmorebtn.addEventListener("click", () => {
  postsNumbers = blogs.length - 1;
  if (postsNumbers > 30) {
    loadmorebtn.style.display = "none";
  }
  showallposts(postsNumbers);
});
