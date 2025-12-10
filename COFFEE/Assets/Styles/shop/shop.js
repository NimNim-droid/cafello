// Home Logo button
document.getElementById("logo").addEventListener("click", function() {

    const anchor = document.createElement("a");
    anchor.target = "_parent";
    anchor.href = "../home.html";
    document.body.appendChild(anchor);
    anchor.click();

    console.log("Home Pages");
});

document.getElementById("coffee").addEventListener("click", function() {
    document.getElementById("menu-1").scrollIntoView({behavior: "smooth"});
});


// BUTTONS SCROLL
let scrollUp = document.getElementById("shopUp");
let scrollDown = document.getElementById("scrollDown");

// Up
scrollUp.addEventListener("click", function() {
document.getElementById("menu-1").scrollIntoView({behavior: "smooth"});
});
// DOWN
scrollDown.addEventListener("click", function() {
    document.getElementById("menu-2").scrollIntoView({behavior: "smooth"});
});


// NEXT & BACK BUTTONS
document.getElementById("back-btn").addEventListener("click", function() {
    document.getElementById("coffee-menu-scroll").scrollBy({
        left:-262, behavior: 'smooth'});
    });
    document.getElementById("next-btn").addEventListener("click", function() {
        document.getElementById("coffee-menu-scroll").scrollBy({
            left:262, behavior: 'smooth'});
        }); 
// SECTION TWO
        document.getElementById("back-btn-2").addEventListener("click", function() {
            document.getElementById("menu-scroll-2").scrollBy({
                left:-262, behavior: 'smooth'});
            });
            document.getElementById("next-btn-2").addEventListener("click", function() {
                document.getElementById("menu-scroll-2").scrollBy({
                    left:262, behavior: 'smooth'});
                }); 