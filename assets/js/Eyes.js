const style = document.documentElement.style;

const leftEye = document.querySelector(".profile-pic .left-eye.dot");
const leftEy = document.querySelector(".profile-pic .left-eye.dot .left-eye");
const rightEye = document.querySelector(".profile-pic .right-eye.dot");
const rightEy = document.querySelector(".profile-pic .right-eye.dot .right-eye");


document.addEventListener('mousemove', function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    glowFollow(mouseX, mouseY);

    const test = document.querySelector(".profile-pic");
    const rect = test.getBoundingClientRect();
    const testXLeftEye = rect.left + 0 + rect.width / 2; 
    const testYLeftEye = rect.top + 5 + rect.height / 2;

    const angleDegLeftEye = angle(mouseX, mouseY, testXLeftEye, testYLeftEye);

    leftEye.style.transform = "rotate("+(180 + angleDegLeftEye)+"deg)"
    leftEy.style.transform = "rotate("+(180 - angleDegLeftEye)+"deg)"

    
    const testXRightEye = rect.left + 25 + rect.width / 2; 
    const testYRightEye = rect.top + 5 + rect.height / 2;

    const angleDegRightEye = angle(mouseX, mouseY, testXRightEye, testYRightEye);

    rightEye.style.transform = "rotate("+(180 + angleDegRightEye)+"deg)"
    rightEy.style.transform = "rotate("+(180 - angleDegRightEye)+"deg)"
});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

function glowFollow(mouseX, mouseY) {
    const glow = document.querySelector(".glow");

    glow.style.top = mouseY + "px";
    glow.style.left = mouseX + "px";
}