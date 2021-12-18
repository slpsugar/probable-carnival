// web
var luchinin = document.querySelector (".luchinin");
luchinin.addEventListener("click", function(){
    var preview = document.getElementById("luchinin");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

// illustration
var wallace = document.querySelector (".wallace");
wallace.addEventListener("click", function(){
    var preview = document.getElementById("wallace");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

var denial = document.querySelector (".denial");
denial.addEventListener("click", function(){
    var preview = document.getElementById("denial");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

var bin = document.querySelector (".bin");
bin.addEventListener("click", function(){
    var preview = document.getElementById("bin");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

var maze = document.querySelector (".maze");
maze.addEventListener("click", function(){
    var preview = document.getElementById("maze");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".hopscotch").addEventListener("click", function () {
    var preview = document.getElementById("hopscotch");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".cart").addEventListener("click", function () {
    var preview = document.getElementById("cart");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".choice").addEventListener("click", function () {
    var preview = document.getElementById("choice");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".moomin").addEventListener("click", function () {
    var preview = document.getElementById("moomin");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".stairs").addEventListener("click", function () {
    var preview = document.getElementById("stairs");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".dive").addEventListener("click", function () {
    var preview = document.getElementById("dive");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".tlsp").addEventListener("click", function () {
    var preview = document.getElementById("tlsp");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".office").addEventListener("click", function () {
    var preview = document.getElementById("office");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});



// photography
var marks = document.querySelector (".marks");
marks.addEventListener("click", function(){
    var preview = document.getElementById("marks");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});


document.querySelector(".faces").addEventListener("click", function () {
    var preview = document.getElementById("faces");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});

document.querySelector(".street").addEventListener("click", function () {
    var preview = document.getElementById("street");
    preview.scrollIntoView({
        behavior:"smooth"});
    preview.classList.add("show-lg-3");
});



// IntersectionObserver
const faders = document.querySelectorAll(".hidden-lg-3");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px"
};

const appearOnscroll = new IntersectionObserver
(function (
    entries,
    appearOnscroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {return;} else {entry.target.classList.add('appear');
            appearOnscroll.unobserve (entry.target);
        }
        });
    },
appearOptions);

faders.forEach(fader => {appearOnscroll.observe(fader);});

// MEDIA QUERIES
document.querySelector(".top").addEventListener("click", function () {
    const main = document.getElementById("main-content");
    main.scrollIntoView({
        behavior:"smooth"});
});