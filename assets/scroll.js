const buttonUp = document.querySelector(".top");

const TITLES = [...document.querySelector("#main-content").querySelectorAll('.col-lg-3')];
const PREVIEWS = [...document.querySelector("#scroll").querySelectorAll('.preview')];
const SERIES = [...document.querySelector("#scroll").querySelectorAll('.series')];

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

TITLES.forEach(title => title.addEventListener('click', function () {
    for (let j=0; j<PREVIEWS.length; j++) {
        if(title.classList.contains(PREVIEWS[j].id)) {
            showPreviewCentre(PREVIEWS[j].id);
        }
    }

    for (let i=0; i<SERIES.length; i++) {
        if (title.classList.contains(SERIES[i].id)) {
            showPreviewTop(SERIES[i].id);
        }
    }
}))

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