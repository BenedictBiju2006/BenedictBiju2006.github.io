const nameElement = document.getElementById("name");
const fonts = ["Anek Gujarati", "Borel", "Hind Madurai", "Manjari", "Montserrat"];
var count = 0;
window.addEventListener("load", function(){
    StartAnimations();
})
function StartAnimations(){
    var nameId = setInterval(NameAnimation,3000);
}
function NameAnimation(){
    console.log(fonts[count])
    nameElement.style.visibility = "hidden"
    nameElement.style.fontFamily = fonts[count];
    let nameStr = ""
    switch (count){
        case 0:
        nameStr = "બેનેડિક્ટ";
            break;
        case 1:
            nameStr ="Benedict";
            break;
        case 3:
            nameStr = "பெனடிக்ட்";
            break;
        case 4:
            nameStr = "ബെനഡി"
            break;
        default:
            nameStr = "benoît"
    }
    let opacityVal = 0.0
    nameElement.innerHTML = nameStr;
    nameElement.style.opacity = "0"
    nameElement.style.visibility = "visible";
    for(let i = 0; i<=10; i++){
        nameElement.style.opacity = `${opacityVal}`
        opacityVal += 0.1
    }
    count++;
    if(count == fonts.length){
        count = 0
    }
}
