/* EMAIL 
var frmvalidator = new Validator("contactform");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation("email", "email", "Please enter a valid email address");
/* SOCIAL */

let contactnumber;
var contactlist;
readTextFile("jsons/contact.json", function (text) {
    contactlist = JSON.parse(text);
    console.log(newslist);
});
function startcontact() {
    contactnumber = contactlist.length;
    for (i = 0; i < contactnumber; i++) {
        document.getElementById("contact-container").innerHTML += "<a class = 'contact-item' id = 'contact-item" + i + "'></a>";
        document.getElementById("contact-item" + i).style.backgroundImage = 'url("' + contactlist[i].image + '")';
        document.getElementById("contact-item" + i).href = contactlist[i].mylink;
    }
}