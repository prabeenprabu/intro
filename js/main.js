let card = document.querySelector(".card");
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
});
//mouse enter
card.addEventListener("mouseenter", () => {
    card.style.transition = "none";
    let logo = document.querySelector(".img");
    let p = document.querySelectorAll(".card p");
    let name = document.querySelector("h1");
    logo.style.transform = "translateZ(100px)";
    name.style.transform = "translateZ(190px)";
    let k = 175;
    p.forEach((e) => {
        e.style.transform = `translateZ(${k}px)`;
        k -= 20;
        console.log(e);
    });
    console.log(p);
});
