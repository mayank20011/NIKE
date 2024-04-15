// linkslides that will slide down on hover
const html = document.html;
const body = document.body;
const slidedown = document.querySelectorAll(".slidedown");
const slidecontainers = document.querySelectorAll(".listcontainercovering");
slidedown.forEach((slide, index) => {
    slide.addEventListener("mouseover", () => {
        slidecontainers[index].classList.add("slidedown");
        slide.style.textDecoration = "underline";
        slide.style.textUnderlineOffset = "10px";
    });
    slide.addEventListener("mouseout", () => {
        slidecontainers[index].classList.remove("slidedown");
        slide.style.textDecoration = "none";
    });
    slide.addEventListener("click", () => {
        slidecontainers[index].classList.add("slidedown");
        slide.style.textDecoration = "underline";
        slide.style.textUnderlineOffset = "10px";
    });
});
const slidecontainerinner = document.querySelectorAll(".listcontainer");
slidecontainerinner.forEach((slide, index) => {
    slide.addEventListener("mouseout", () => {
        slidecontainers[index].classList.remove("slidedown");
        slidedown[index].style.textDecoration = "none";
    });
    slide.addEventListener("mouseover", () => {
        slidecontainers[index].classList.add("slidedown");
        slidedown[index].style.textDecoration = "underline";
        slidedown[index].style.textUnderlineOffset = "10px";
    });
});




// navbar
const navwrap = document.querySelector(".navwrap");
const backbuttonsfornavslider = document.querySelectorAll(".navcolumnheadings .top p");
const navbarlinksbuttons = document.querySelectorAll(".navbar .links button.clickslide");
const navwrapslides = document.querySelectorAll(".navwrapslide");
const navbarbutton = document.querySelector("i.fa-bars");
const navbar = document.querySelector(".navbar");
const navbarcross = document.querySelector(".navbar i.fa-x")
const blurfilter = document.querySelector(".blurfilter");
const toponeachother = document.querySelectorAll(".toponeachother");
const finallinks = document.querySelectorAll(".finallinks");
const bottomh4 = document.querySelectorAll(".toponeachother .bottom h4");
const finallinkstopp = document.querySelectorAll(".finallinks .top p");
finallinkstopp.forEach((p) => {
    p.addEventListener("click",() => {
        navwrapslides.forEach((slide, index) => {
            slide.style.transform = `translatex(${(index - 1) * 100}%)`;
        });
    });
})
function removeotherlinks() {
    finallinks.forEach((link) => {
        link.style.display = "none";
    });
}
bottomh4.forEach((h4, index) => {
    h4.addEventListener("click", () => {
        removeotherlinks();
        finallinks[index].style.display = "block";
        navwrapslides.forEach((slide, index) => {
            slide.style.transform = `translatex(${(index - 2) * 100}%)`;
        });
    })
});
navwrapslides.forEach((slide, index) => {
    slide.style.transform = `translatex(${index * 100}%)`;
});
navbarbutton.addEventListener("click", () => {
    navwrap.classList.add("slidenav");
    blurfilter.classList.remove("none");
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
});
function removedisplayfromall() {
    toponeachother.forEach((slide) => {
        slide.style.display = "none";
    });
}
navbarlinksbuttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        removedisplayfromall();
        toponeachother[index].style.display = "block";
        navwrapslides.forEach((slide, index) => {
            slide.style.transform = `translatex(${(index - 1) * 100}%)`;
        });
    });
});
backbuttonsfornavslider.forEach((back) => {
    back.addEventListener("click", () => {
        navwrapslides.forEach((slide, index) => {
            slide.style.transform = `translatex(${index * 100}%)`;
        });
    });
});
blurfilter.addEventListener("click", () => {
    blurfilter.classList.add("none");
    // navbar.classList.remove("slidenav");
    navwrap.classList.remove("slidenav");
    body.style.height = "fit-content";
    body.style.overflowY = "scroll";
    body.style.overflowX = "hidden";
    setTimeout(() => {
        navwrapslides.forEach((slide, index) => {
            slide.style.transform = `translatex(${index * 100}%)`;
        });
    }, 300);

});
navbarcross.addEventListener("click", () => {
    blurfilter.classList.add("none");
    // navbar.classList.remove("slidenav");
    navwrap.classList.remove("slidenav");
    body.style.height = "fit-content";
    body.style.overflowY = "scroll";
    body.style.overflowX = "hidden";
})
console.log("hello");