"use strict";

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");

document.body.addEventListener("click", function (event) {
    if (event.target === openModalBtn) {
        modal.classList.remove("hidden");
    }
    if (
        event.target.classList.contains("close-btn") ||
        event.target === modal
    ) {
        modal.classList.add("hidden");
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.classList.add("hidden");
    }
});
