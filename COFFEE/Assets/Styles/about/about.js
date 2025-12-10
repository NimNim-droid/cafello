// Home Logo button
document.getElementById("logo").addEventListener("click", function() {

    const anchor = document.createElement("a");
    anchor.target = "_parent";
    anchor.href = "../home.html";
    document.body.appendChild(anchor);
    anchor.click();

    console.log("Home Pages");
});

// BUTTONS SCROLL
let scrollUp = document.getElementById("scrollUp");
let scrollDown = document.getElementById("scrollDown");

// Up
scrollUp.addEventListener("click", function() {
document.getElementById("area-1").scrollIntoView({behavior: "smooth"});
});
// DOWN
scrollDown.addEventListener("click", function() {
    document.getElementById("area-2").scrollIntoView({behavior: "smooth"});
});

