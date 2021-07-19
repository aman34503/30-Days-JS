//Element Grabs

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

const center = document.querySelector(".center");

//Select Grabbed Element

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

//Add Event Listener

const colorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

//Declare Changes

colorChanger(red, getBGColor(red));
colorChanger(cyan, getBGColor(cyan));
colorChanger(violet, getBGColor(violet));
colorChanger(orange, getBGColor(orange));
colorChanger(pink, getBGColor(pink));
colorChanger(blue, getBGColor(blue));