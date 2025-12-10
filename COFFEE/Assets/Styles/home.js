// Home Logo button
document.getElementById("logo").addEventListener("click", function() {

    const anchor = document.createElement("a");
    anchor.target = "_parent";
    anchor.href = "../home.html";
    document.body.appendChild(anchor);
    anchor.click();

    console.log("Home Pages");
});
// BUY COFFEE
document.getElementById("buy-1").addEventListener("click", function(){

    const anchor = document.createElement("a");
    anchor.target = "_parent";
    anchor.href = "../Pages/Shop.html";
    document.body.appendChild(anchor);
    anchor.click();

    console.log("Home Pages");

});

// NEXT & BACK BUTTONS
document.getElementById("back-btn").addEventListener("click", function() {
document.getElementById("coffee-stand-scroll").scrollBy({
    left:-200, behavior: 'smooth'});
});
document.getElementById("next-btn").addEventListener("click", function() {
    document.getElementById("coffee-stand-scroll").scrollBy({
        left:200, behavior: 'smooth'});
    });


// BUTTONS SCROLL
let scrollUp = document.getElementById("scrollUp");
let scrollDown = document.getElementById("scrollDown");

// Up
scrollUp.addEventListener("click", function() {
document.getElementById("container-1").scrollIntoView({behavior: "smooth"});
});
// DOWN
scrollDown.addEventListener("click", function() {
    document.getElementById("container-3").scrollIntoView({behavior: "smooth"});
});

// HOME
document.getElementById("home").addEventListener("click", function(){
    document.getElementById("container-1").scrollIntoView({behavior: "smooth"});
});

// ABOUT US
document.getElementById("aboutUs").addEventListener("click", function(){
    document.getElementById("container-3").scrollIntoView({behavior: "smooth"});
});

/// COFFEE
document.getElementById("coffee").addEventListener("click", function(){
    document.getElementById("container-2").scrollIntoView({behavior: "smooth"});
});