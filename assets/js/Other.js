setTimeout(() => {
    document.querySelector(".navigation-content-wrapper").style.animation = "1s fade-in forwards";
}, 3600);


const modeToggler = document.querySelector(".mode-toggler").addEventListener("click", switchColorMode);

function switchColorMode() {
    this.classList.toggle("active");

    if (this.classList.contains("active"))
        switchToDayMode();
    else
        switchToNightMode();
}

function switchToNightMode() {
    const style = document.documentElement.style;
    style.setProperty("--bgc", style.getPropertyValue("--bgc-n"));
    style.setProperty("--bgc-second", style.getPropertyValue("--bgc-second-n"));
    style.setProperty("--bgc-third", style.getPropertyValue("--bgc-third-n"));
    style.setProperty("--bgc-fourth", style.getPropertyValue("--bgc-fourth-n"));
    style.setProperty("--font-color", style.getPropertyValue("--font-color-n"));
    style.setProperty("--font-color-second", style.getPropertyValue("--font-color-second-n"));
    style.setProperty("--font-color-third", style.getPropertyValue("--font-color-third-n"));
    style.setProperty("--font-color-fourth", style.getPropertyValue("--font-color-fourth-n"));
    style.setProperty("--line-color", style.getPropertyValue("--line-color-n"));
    style.setProperty("--line-color-second", style.getPropertyValue("--line-color-second-n"));
}

function switchToDayMode() {
    const docTo = document.documentElement;
    const docFrom = window.getComputedStyle(docTo);
    docTo.style.setProperty("--bgc", docFrom.getPropertyValue("--bgc-d"));
    docTo.style.setProperty("--bgc-second", docFrom.getPropertyValue("--bgc-second-d"));
    docTo.style.setProperty("--bgc-third", docFrom.getPropertyValue("--bgc-third-d"));
    docTo.style.setProperty("--bgc-fourth", docFrom.getPropertyValue("--bgc-fourth-d"));
    docTo.style.setProperty("--font-color", docFrom.getPropertyValue("--font-color-d"));
    docTo.style.setProperty("--font-color-second", docFrom.getPropertyValue("--font-color-second-d"));
    docTo.style.setProperty("--font-color-third", docFrom.getPropertyValue("--font-color-third-d"));
    docTo.style.setProperty("--font-color-fourth", docFrom.getPropertyValue("--font-color-fourth-d"));
    docTo.style.setProperty("--line-color", docFrom.getPropertyValue("--line-color-d"));
    docTo.style.setProperty("--line-color-second", docFrom.getPropertyValue("--line-color-second-d"));
}


const projectsVideoElement = document.querySelector(".projects-video");

document.querySelector(".play-video-btn").addEventListener("click", () => {
    addActiveClass(projectsVideoElement);
})

projectsVideoElement.querySelector("iframe").addEventListener("ended", () => {
});

document.querySelector(".projects-video-x-btn").addEventListener("click", () => {    // removeActiveClass(projectsVideoElement);
    removeActiveClass(projectsVideoElement);
    setTimeout(() => {
        const iframe = projectsVideoElement.querySelector("iframe");
        iframe.remove();
        var e = document.createElement("iframe");
        e.src = "https://www.youtube.com/embed/8wQwolantI4?si=5CZd7Y1NMlf7lPNZ";
        e.setAttribute("title", "Mini Projects")
        e.setAttribute("frameborder", "0");
        e.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        projectsVideoElement.appendChild(e)
    }, 1000)
})