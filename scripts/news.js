
/* NEWS */
var newslist;
let newsnumber;

async function startnews() {
    const response = await fetch('jsons/news.json');
    newslist = await response.json();    
   // outputs a javascript object from the parsed json
    newsnumber = newslist.length;
    var i;
    for (i = 0; i < newsnumber; i++) {
        document.getElementById("news-container").innerHTML += "<div class = 'news-item translucid strong'id = 'news-item" + i + "'></div>";
        document.getElementById("news-item" + i).innerHTML += "<h1 class = 'news-title' id = 'news-title" + i + "'>" + newslist[i].title + "</h1>";
        document.getElementById("news-item" + i).innerHTML += "<p class = 'news-description' id = 'news-description" + i + "'>" + newslist[i].description + "</p>";
    }
    for (i = 0; i < newsnumber; i++)
        document.getElementById("news-nav").innerHTML += "<div id = 'newsscrollto" + i + "' class = 'news-nav-button strong'></div>";
    for (i = 0; i < newsnumber; i++) {
        document.getElementById("newsscrollto" + i).slideindex = i;
        document.getElementById("newsscrollto" + i).onclick = newsscrollto;
    }
}
let newsscrollcount = 0;
function newsscrollright() {
    newsscrollcount++;
    if (newsscrollcount >= newsnumber)
        newsscrollcount = 0;
    for (i = 0; i < newsnumber; i++)
        document.getElementById("news-item" + i).setAttribute("style", "transform: translate(calc((-1 * (60vw + 20vh) / 2.4) * " + (newsscrollcount) + "), 0px);");
}
function newsscrollleft() {
    newsscrollcount--;
    if (newsscrollcount < 0)
        newsscrollcount = newsnumber - 1;
    for (i = 0; i < newsnumber; i++)
        document.getElementById("news-item" + i).setAttribute("style", "transform: translate(calc((-1 * (60vw + 20vh) / 2.4) * " + (newsscrollcount) + "), 0px);");

}
function newsscrollto() {
    newsscrollcount = this.slideindex;
    for (i = 0; i < newsnumber; i++)
        document.getElementById("news-item" + i).setAttribute("style", "transform: translate(calc((-1 * (60vw + 20vh) / 2.4) * " + (newsscrollcount) + "), 0px);");
}
