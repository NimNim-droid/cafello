document.addEventListener("DOMContentLoaded", function(){

// show password
document.getElementById("togglepass").addEventListener("click", function(){
    let passlog = document.getElementById("pass-input");
    let togglepass = document.getElementById("togglepass");
    let show = document.getElementById("showlogo");
    if(passlog.type === "password"){
        passlog.type = "text";
        show.src = "../Assets/Images/open.png";
        console.log("(Alert!) show password!");
        
    }else{
        show.src = "../Assets/Images/close.png";
        passlog.type = "password";
        console.log("(Alert!) hide password!");
    }
});

});