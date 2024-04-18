const navButtons = document.querySelectorAll(".navigation>span");
const navContents = document.querySelectorAll(".navigation-content");


navButtons.forEach(e => e.addEventListener("click", () => {
    console.log("click");
    navButtons.forEach(e => e.classList.remove("active"));
    navContents.forEach(e => e.classList.remove("active"));
    e.classList.add("active");
}));