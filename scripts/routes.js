/* ROUTES */
let details = false;
let routesnumber;
var routeslist;

async function startroutes() {
    const response = await fetch('jsons/routes.json');
    routeslist = await response.json();

    routesnumber = routeslist.length;
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-container").innerHTML += "<div class = 'routes-item' id = 'routes-item" + i + "'></div>";
        document.getElementById("routes-item" + i).innerHTML += "<div class = 'routes-thumbnail' id = 'routes-thumbnail" + i + "'></div>";
        document.getElementById("routes-thumbnail" + i).innerHTML += "<h1 class = 'routes-title translucid weak' id = 'routes-title" + i + "'>" + routeslist[i].title + "</h1>";
        document.getElementById("routes-thumbnail" + i).innerHTML += "<p class = 'routes-description translucid weak' id = 'routes-description" + i + "'>" + routeslist[i].description + "</p>";
        document.getElementById("routes-item" + i).innerHTML += "<div class = 'routes-details weak' id = 'routes-details" + i + "'>" + routeslist[i].details + "</div>";
        document.getElementById("routes-details" + i).innerHTML += "<div class = 'routes-details-toggle-container weak' id = 'routes-details" + i + "-toggle-container'></div>";
        document.getElementById("routes-details" + i + "-toggle-container").innerHTML += "<div class = 'routes-details-toggle' id = 'routes-details" + i + "-toggle'>show details</div>";

        document.getElementById("routes-thumbnail" + i).style.backgroundImage = 'url("' + routeslist[i].image + '")';

    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-nav").innerHTML += "<div id = 'routes-scrollto" + i + "' class = routes-nav-button></div>";
        document.getElementById("routes-scrollto" + i).style.backgroundImage = 'url("' + routeslist[i].image + '")';
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-scrollto" + i).slideindex = i;
        document.getElementById("routes-scrollto" + i).onclick = routesscrollto;
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-details" + i + "-toggle-container").onclick = toggledetails;
    }
}
let routesscrollcount = 0;
function routesscrollright() {
    routesscrollcount++;
    if (routesscrollcount >= newsnumber)
        routesscrollcount = 0;
    for (i = 0; i < routesnumber; i++)
        document.getElementById("routes-item" + i).style.transform = 'translateX(calc((-1 * (60vw + 20vh) / 1.2) * ' + (routesscrollcount) + ')';
}
function routesscrollleft() {
    routesscrollcount--;
    if (routesscrollcount < 0)
        routesscrollcount = routesnumber - 1;
    for (i = 0; i < routesnumber; i++)
        document.getElementById("routes-item" + i).style.transform = 'translateX(calc((-1 * (60vw + 20vh) / 1.2) * ' + (routesscrollcount) + ')';
}
function routesscrollto() {
    routesscrollcount = this.slideindex;
    for (i = 0; i < routesnumber; i++)
        document.getElementById("routes-item" + i).style.transform = 'translateX(calc((-1 * (60vw + 20vh) / 1.2) * ' + (routesscrollcount) + ')';
}
function showdetails() {
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-item" + i).style.animation = 'none';
        document.getElementById("routes-details" + i).style.animation = 'none';
        document.getElementById("routes-item" + i).offsetHeight;
        document.getElementById("routes-details" + i).offsetHeight;
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-item" + i).style.animation = 'routes-pullheight 0.2s linear 0s forwards ';
        document.getElementById("routes-details" + i).style.animation = 'routes-pulldown 0.2s linear 0s forwards ';
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-details" + i + "-toggle").innerHTML = 'hide details';
    }
    details = true;
}
function hidedetails() {
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-item" + i).style.animation = 'none';
        document.getElementById("routes-details" + i).style.animation = 'none';
        document.getElementById("routes-item" + i).offsetHeight;
        document.getElementById("routes-details" + i).offsetHeight;
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-item" + i).style.animation = 'routes-pullheight 0.2s linear 0s reverse forwards';
        document.getElementById("routes-details" + i).style.animation = 'routes-pulldown 0.2s linear 0s reverse forwards';
    }
    for (i = 0; i < routesnumber; i++) {
        document.getElementById("routes-details" + i + "-toggle").innerHTML = 'show details';
    }
    details = false;
}
function toggledetails() {
    if (details) {
        hidedetails();
    } else {
        showdetails();
    }
}
