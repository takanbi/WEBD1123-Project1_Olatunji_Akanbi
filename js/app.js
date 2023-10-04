let addToHead = document.querySelector("head");
let cssLink = document.createElement("link");
addToHead.appendChild(cssLink);
cssLink.setAttribute('rel','stylesheet');
cssLink.setAttribute('href','css/style.css');
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
let bodY = document.querySelector("body");
bodY.appendChild(wrapper);
for (let i = 0; i < 4; i++) {
    let divs = document.createElement("div");
    wrapper.appendChild(divs);
    divs.classList.add("wrapperDivs");
}
let color1 = "linear-gradient(135deg, #0B132B 0%, #3A506B 100%)";
let color2 = "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
let color3 = "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
let color4 = "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)";

let colorsArray = [color1, color2, color3, color4];
// console.log(colorsArray);

let wrapperDivs = document.getElementsByClassName("wrapperDivs");  
// console.log(wrapperDivs);
let divOne = wrapperDivs.item(0);
let divTwo = wrapperDivs.item(1);
let divThree = wrapperDivs.item(2);
let divFour = wrapperDivs.item(3);
// console.log(divOne);

let allDivs = [divOne, divTwo, divThree, divFour];
// console.log(allDivs);
for (let i = 0; i < 4; i++) {
    let myDiv = allDivs[i];
    myDiv.style.backgroundImage = colorsArray[i];
    let update = document.createElement("section");
    myDiv.appendChild(update);
    update.setAttribute('id', 'ID'+[i]);
}
