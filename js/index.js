"use strict";

const modal = document.querySelector(".modal");
const clickImage = document.querySelector("img");
console.log(clickImage);

const close = document.querySelector("close");

const openModal = () => {
    modal.style.display = "block";
};

modal.addEventListener("click", (event) => {
    switch (event.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none";
            break;
    }
    console.log("image was clicked");
});

clickImage.addEventListener("click", openModal);
// console.log("image was clicked", openModal);

// // HIDE MENU AFTER CLICKING

// const menu = document.querySelector("ul");

// const closeMenu = () => {
//     menu.style.display = "none";
//     // menu.style.transform = "translate(-100%, 0)";
// };

// menu.addEventListener("click", closeMenu);
