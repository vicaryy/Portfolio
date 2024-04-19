const navButtons = document.querySelectorAll(".navigation>span");
const navContents = document.querySelectorAll(".navigation-content");


navButtons.forEach(e => e.addEventListener("click", () => {
    removeActiveClasses(navButtons);
    removeActiveClasses(navContents);
    addActiveClass(e);
    for (let i = 0; i < navButtons.length; i++)
        if (navButtons[i].classList.contains("active"))
            addActiveClass(navContents[i]);
}));