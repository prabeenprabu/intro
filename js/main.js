let card = document.querySelector(".card");
let logo = document.querySelector(".img");
let p = document.querySelectorAll(".card p");
let names = document.querySelector("h1");
let a = document.querySelector(".links");
//on card
card.addEventListener("mousemove", (m) => {
    let mx = m.pageX;
    let my = m.pageY;
    let sw = window.innerWidth / 2;
    let sh = window.innerHeight / 2;
    let x = (mx - sw) / 3.7;
    let y = (my - sh) / 9;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
//left card
card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.transition = "var(--animation)";
    names.style.transform = "translateZ(190px) rotateZ(0deg)";
    logo.style.transform = "rotateZ(0deg)";
});
//mouse enter
card.addEventListener("mouseenter", () => {
    card.style.transition = "none";
    logo.style.transform = "translateZ(100px) rotateZ(360deg)";
    logo.style.transition = "var(--animation)";
    names.style.transform = "translateZ(190px) rotateZ(-11deg)";
    names.style.transition = "var(--animation)";
    a.style.transform = "translateZ(190px)";
    let k = 175;
    p.forEach((e) => {
        e.style.transform = `translateZ(${k}px)`;
        k -= 20;
        console.log(e);
    });
});
