/* ABOUT */
let aboutnumber;
var aboutlist;
readTextFile("/jsons/about.json", function (text) {
    aboutlist = JSON.parse(text);
    console.log(newslist);
});

function startabout() {
    aboutnumber = aboutlist.length;
    for (i = 0; i < aboutnumber; i++) {
        document.getElementById("about-container").innerHTML += "<div class = 'about-item translucid strong' id = 'about-item" + i + "'></div>";
        document.getElementById("about-item" + i).innerHTML += "<img class = 'about-image' id = 'about-image" + i + "' src = '" + aboutlist[i].image + "'>";
        document.getElementById("about-item" + i).innerHTML += "<h1 class = 'about-title' id = 'about-title" + i + "'>" + aboutlist[i].title + "</h1>";
        document.getElementById("about-item" + i).innerHTML += "<p class = 'about-description' id = 'about-description" + i + "'>" + aboutlist[i].description + "</p>";
    }
}
