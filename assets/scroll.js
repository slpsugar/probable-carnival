
// web

document.querySelector(".luchinin").addEventListener("click", function () {
    var preview = document.getElementById("luchinin");
    preview.scrollIntoView({behavior:"smooth"});
});

// illustration

document.querySelector(".wallace").addEventListener("click", function () {
    var preview = document.getElementById("wallace");
    preview.scrollIntoView({behavior:"smooth"});
});

// document.querySelector(".bin").addEventListener("click", 
// function () {
//     var preview = document.getElementById("bin");
//     preview.scrollIntoView({
//         block:"center",
//         behavior:"smooth"});
// });


var bin = document.querySelector (".bin");
bin.addEventListener("click", function(){
    var preview = document.getElementById("bin");
    preview.scrollIntoView({
    block:"center",
    behavior:"smooth"})
});

bin.addEventListener("click", function(){
    var preview = document.getElementById("bin");
    if (preview.style.opacity = "1")
    {preview.style.display = "none";}
    else {preview.style.display ="0.2";}
});



// document.querySelector(".bin").addEventListener("click", function () {
//     var preview = document.getElementById("bin");
//     if (preview.style.display === "none") {
//         preview.style.display = "block";
//       } else {
//         preview.style.display = "none";
//       }
// });

document.querySelector(".maze").addEventListener("click", function () {
    var preview = document.getElementById("maze");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});

document.querySelector(".hopscotch").addEventListener("click", function () {
    var preview = document.getElementById("hopscotch");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});

document.querySelector(".cart").addEventListener("click", function () {
    var preview = document.getElementById("cart");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});

document.querySelector(".choice").addEventListener("click", function () {
    var preview = document.getElementById("choice");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});

document.querySelector(".moomin").addEventListener("click", function () {
    var preview = document.getElementById("moomin");
    preview.scrollIntoView({
        behavior:"smooth"});
});

document.querySelector(".stairs").addEventListener("click", function () {
    var preview = document.getElementById("stairs");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});

document.querySelector(".dive").addEventListener("click", function () {
    var preview = document.getElementById("dive");
    preview.scrollIntoView({
        block:"center",
        behavior:"smooth"});
});


// photography

document.querySelector(".marks").addEventListener("click", function () {
    var preview = document.getElementById("marks");
    preview.scrollIntoView({
        behavior:"smooth"});
});

document.querySelector(".faces").addEventListener("click", function () {
    var preview = document.getElementById("faces");
    preview.scrollIntoView({
        behavior:"smooth"});
});

document.querySelector(".street").addEventListener("click", function () {
    var preview = document.getElementById("street");
    preview.scrollIntoView({
        behavior:"smooth"});
});