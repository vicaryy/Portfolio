function addActiveClass(element, listOfElements) {
    if (element.classList.contains("active"))
        return;

    if (listOfElements && listOfElements instanceof NodeList) {
        listOfElements.forEach(e => {
            if (e.classList.contains("active"))
                e.classList.remove("active");
        });
    }
    element.classList.add("active");
};

function addClass(element, className, listOfElements) {
    if (element.classList.contains(className))
        return;

    if (listOfElements && listOfElements instanceof NodeList) {
        listOfElements.forEach(e => {
            if (e.classList.contains(className))
                e.classList.remove(className);
        });
    }
    element.classList.add(className);
};

function removeActiveClass(element) {
    if (!element.classList.contains("active"))
        return;
    element.classList.remove("active");
}

function removeActiveClasses(listOfElements) {
    listOfElements.forEach(e => removeActiveClass(e));
}

function removeClass(element, className) {
    if (!element.classList.contains(className))
        return;
    element.classList.remove(className);
}

function addActiveClassToParent() {
    this.parentNode.classList.add("active");
}
function removeActiveClassFromParent() {
    if (this.value.length != 0)
        return;
    this.parentNode.classList.remove("active");
}