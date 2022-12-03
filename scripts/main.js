setTimeout(() => { startnews() }, 100);
setTimeout(() => { startroutes() }, 100);
setTimeout(() => { startabout() }, 100);
setTimeout(() => { startcontact() }, 100);

/* GENERAL */

const links = document.getElementsByClassName("smoothscroll");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}
