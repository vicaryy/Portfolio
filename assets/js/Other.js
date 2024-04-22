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
    docTo.style.setProperty("--font-color", docFrom.getPropertyValue("--font-color-d"));
    docTo.style.setProperty("--font-color-second", docFrom.getPropertyValue("--font-color-second-d"));
    docTo.style.setProperty("--font-color-third", docFrom.getPropertyValue("--font-color-third-d"));
    docTo.style.setProperty("--font-color-fourth", docFrom.getPropertyValue("--font-color-fourth-d"));
    docTo.style.setProperty("--line-color", docFrom.getPropertyValue("--line-color-d"));
    docTo.style.setProperty("--line-color-second", docFrom.getPropertyValue("--line-color-second-d"));
}