// ADS ONE
let adscont = document.getElementById("adsContent");
let randNum = Math.floor(Math.random() * 4) + 1;
let adsImage = document.getElementById("adsImage");


switch (randNum) {
    case 1:
        adsImage.src = "./Assets/images/Ads-1.png";
        break;
    case 2:
        adsImage.src = "./Assets/images/Ads-2.png";
        break;
    case 3:
         adsImage.src = "./Assets/images/Ads-3.png";
         break;
    case 4:
         adsImage.src = "./Assets/images/Ads-4.png";
         break;
}

adscont.hidden = true;

setTimeout(() => {
adscont.hidden = false;
    
document.getElementById("buttonAds").addEventListener("click", function() {
    console.log("Ads Closed!");
 
    let adsContent = document.getElementById("adsContent");
    adsContent.hidden = true;
 
 //    Mathing random 1 to 2
     randNum = Math.floor(Math.random() * 4) + 1;
 
     console.log("The random number is " + randNum);
     
 
     
     switch (randNum) {
         case 1:
             adsImage.src = "./Assets/images/Ads-1.png";
             break;
         case 2:
             adsImage.src = "./Assets/images/Ads-2.png";
             break;
         case 3:
              adsImage.src = "./Assets/images/Ads-3.png";
              break;
         case 4:
              adsImage.src = "./Assets/images/Ads-4.png";
              break;
     }
 
    console.log("Ads have been hidden!");
    
    setTimeout(() => {
     adsContent.hidden = false;
     console.log("Ads unhidden!"); 
 }, 20000); 
 
 });

}, 5000); 
// ads sec. load