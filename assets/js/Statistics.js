const statisticOptions = document.querySelectorAll(".skills>div");
statisticOptions.forEach(e => e.addEventListener("click", () => addActiveClass(e, statisticOptions)));