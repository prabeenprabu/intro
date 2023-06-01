let card = document.querySelector(".card");
//on card
card.addEventListener("mousemove", (m) => {
    let mx = m.pageX;
    let my = m.pageY;
    let sw = window.innerWidth / 2;
    let sh = window.innerHeight / 2;
    let x = (mx - sw) / 3.7;
    let y = (my - sh) / 9;
    console.log(x, y);
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
//left card
card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.transition = "var(--animation)";
});
//mouse enter
card.addEventListener("mouseenter", () => {
    // card.style.transition = "none";
    let logo = document.querySelector(".img");
    let p = document.querySelectorAll("p");
    let name = document.querySelector("h1");
});
