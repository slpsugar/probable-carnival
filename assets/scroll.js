const buttonUp = document.querySelector(".top");

const pool = document.querySelector('.pool');
const mirror = document.querySelector(".mirror");
const cats = document.querySelector(".cats");
const moon = document.querySelector(".moon");
const poetry = document.querySelector('.poetry');
const wallace = document.querySelector(".wallace");
const denial = document.querySelector(".denial");
const bin = document.querySelector(".bin");
const maze = document.querySelector(".maze");
const hopscotch = document.querySelector(".hopscotch");
const cart = document.querySelector(".cart");
const choiceOfThree = document.querySelector(".choice");
const stairs = document.querySelector(".stairs");
const dive = document.querySelector(".dive");
const letter = document.querySelector(".letter");

const marks = document.querySelector (".marks");
const faces = document.querySelector(".faces");
const street = document.querySelector(".street");


//scroll
const showPreviewTop = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
        behavior:"smooth"});
    element.classList.add("show-lg-3");
};

const showPreviewCentre = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    element.classList.add("show-lg-3");
};

// illustration
pool.addEventListener("click", function () {
    showPreviewTop("pool");
});

mirror.addEventListener("click", function () {
    showPreviewCentre("mirror");
});

cats.addEventListener("click", function () {
    showPreviewCentre("cats");
});

moon.addEventListener("click", function () {
    showPreviewCentre("moon");
});

poetry.addEventListener("click", function () {
    showPreviewTop("poetry");
});

wallace.addEventListener("click", function () {
    showPreviewTop("wallace");
});

denial.addEventListener("click", function(){
    showPreviewCentre("denial");
});

bin.addEventListener("click", function(){
    showPreviewCentre("bin");
});

maze.addEventListener("click", function(){
    showPreviewCentre("maze");
});

hopscotch.addEventListener("click", function () {
    showPreviewCentre("hopscotch");
});

cart.addEventListener("click", function () {
    showPreviewCentre("cart");
});

choiceOfThree.addEventListener("click", function () {
    showPreviewCentre("choice");
});

stairs.addEventListener("click", function () {
    showPreviewCentre("stairs");
});

dive.addEventListener("click", function () {
    showPreviewCentre("dive");
});

letter.addEventListener("click", function () {
    showPreviewTop("letter");
});

// photography
marks.addEventListener("click", function(){
    showPreviewTop("marks");
});

faces.addEventListener("click", function () {
    showPreviewTop("faces");
});

street.addEventListener("click", function () {
    showPreviewTop("street");
});

// IntersectionObserver
const faders = document.querySelectorAll(".hidden-lg-3");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px"
};
const appearOnscroll = new IntersectionObserver
(function (entries, appearOnscroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
            entry.target.classList.add('appear');
            appearOnscroll.unobserve (entry.target);
            }
        });
    },
appearOptions);

faders.forEach(fader => {appearOnscroll.observe(fader);});

// MEDIA QUERIES
buttonUp.addEventListener("click", function () {
    const main = document.getElementById("main-content");
    main.scrollIntoView({
        behavior:"smooth"});
});