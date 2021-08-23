"use strict";

const modal1 = document.querySelector("#modal-1");
const modal2 = document.querySelector("#modal-2");
const modal3 = document.querySelector("#modal-3");

const clickProj1 = document.querySelector("#proj-1");
const clickProj2 = document.querySelector("#proj-2");
const clickProj3 = document.querySelector("#proj-3");

console.log(clickProj1);

const close = document.querySelector("close");

const openModal = () => {
    modal1.style.display = "block";
    // modal2.style.display = "block";
    // modal3.style.display = "block";
};

modal1.addEventListener("click", (event) => {
    switch (event.target.className) {
        case "close":
        case "modal":
            modal1.style.display = "none";
            break;
    }
    console.log("image was clicked");
});

clickProj1.addEventListener("click", openModal);
clickProj2.addEventListener("click", openModal);
clickProj3.addEventListener("click", openModal);

// console.log("image was clicked", openModal);

// // HIDE MENU AFTER CLICKING

// const menu = document.querySelector("ul");

// const closeMenu = () => {
//     menu.style.display = "none";
//     // menu.style.transform = "translate(-100%, 0)";
// };

// menu.addEventListener("click", closeMenu);
