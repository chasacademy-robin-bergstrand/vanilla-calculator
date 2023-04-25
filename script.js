const switch_selector = document.querySelector(".switch-selector");
const switch_container = document.querySelector(".switch-container");
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
//var current_theme = 1;

var current_theme = localStorage.getItem("theme");
setTheme();

console.log("current_theme is = " + current_theme);
var calculation = "";

console.log(buttons);


for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", getInput);
    console.log("ADDED")
}




function getInput(event){
    console.log(event.target.innerHTML);
    input = event.target.innerHTML;
    handleInput(input);

}


function clearDisplay(x = ""){
    display.innerHTML = x;
}



function handleInput(input){
    if(display.innerHTML == "0"){
        clearDisplay();
    }
    if(!isNaN(input) || input == "."){
        display.innerHTML = display.innerHTML + input;
    }
    else if(input == "+"){
        calculation = calculation + display.innerHTML;
        clearDisplay("+");
        console.log(calculation + " THIS IS +"); 
    }
    else if(input == "="){
        let result = calculation + display.innerHTML;
        console.log(result + " BEFORE CHANGE");
        result = result.replace("x","*");
        console.log(result + " AFTER CHANGE");
        if(result.charAt(0) == "0"){
            result = result.slice(1);
        }

        console.log("= " + eval(result));
        display.innerHTML = "= " + eval(result);
    }
    else if(input == "DEL"){
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
    else if(input == "RESET"){
        calculation = "0";
        clearDisplay("0");
    }
    else{
        calculation = calculation + display.innerHTML;
        clearDisplay(input);
        console.log(calculation + " THIS IS " + input);
    }
}

clearDisplay("0");


switch_container.addEventListener("click", changeTheme);

function changeTheme(){
    if(current_theme != 3){
        current_theme++;
    }
    else{
        current_theme = 1;
    }

    setTheme();

    console.log(current_theme);   
}


function setTheme(){
    var root = document.querySelector(":root");
    if(current_theme == 1){
        localStorage.setItem("theme", "1")
        switch_selector.style.left = "5px";
        //Setting background colors
        root.style.setProperty("--color-background-500", "hsl(222, 26%, 31%)");
        root.style.setProperty("--color-background-700", "hsl(223, 31%, 20%)");
        root.style.setProperty("--color-background-900", "hsl(224, 36%, 15%)");

        //Setting key colors
        root.style.setProperty("--color-key-500", "hsl(225, 21%, 49%)");
        root.style.setProperty("--color-key-900", "hsl(224, 28%, 35%)");

        root.style.setProperty("--color-key-400", "hsl(6, 63%, 50%)");
        root.style.setProperty("--color-key-800", "hsl(6, 70%, 34%)");

        root.style.setProperty("--color-key-300", "hsl(30, 25%, 89%)");
        root.style.setProperty("--color-key-700", "hsl(28, 16%, 65%)");

        //Setting text colors
        root.style.setProperty("--color-text-100", "white");
        root.style.setProperty("--color-text-900", "hsl(221, 14%, 31%)");

        root.style.setProperty("--color-text-accent-button", "white");
        root.style.setProperty("--color-text-submit-button", "white");
        root.style.setProperty("--color-text-top", "white");

        //Setting hover colors
        root.style.setProperty("--color-button-hover", "hsl(30, 25%, 100%)");
        root.style.setProperty("--color-accent-button-hover", "hsl(225, 21%, 65%)");
        root.style.setProperty("--color-submit-button-hover", "hsl(6, 63%, 60%)");

    }  
    if(current_theme == 2){
        localStorage.setItem("theme", "2")
        switch_selector.style.left = "27.5px";
        //Setting background colors
        root.style.setProperty("--color-background-500", "hsl(0, 0%, 90%)");
        root.style.setProperty("--color-background-700", "hsl(0, 5%, 81%)");
        root.style.setProperty("--color-background-900", "hsl(0, 0%, 93%)");

        //Setting key colors
        root.style.setProperty("--color-key-500", "hsl(185, 42%, 37%)");
        root.style.setProperty("--color-key-900", "hsl(185, 58%, 25%)");

        root.style.setProperty("--color-key-400", "hsl(25, 98%, 40%)");
        root.style.setProperty("--color-key-800", "hsl(25, 99%, 27%)");

        root.style.setProperty("--color-key-300", "hsl(45, 7%, 89%)");
        root.style.setProperty("--color-key-700", "hsl(35, 11%, 61%)");

        //Setting text colors
        root.style.setProperty("--color-text-100", "hsl(60, 10%, 19%)");
        root.style.setProperty("--color-text-900", "hsl(60, 10%, 19%)");

        root.style.setProperty("--color-text-accent-button", "white");
        root.style.setProperty("--color-text-submit-button", "white");
        root.style.setProperty("--color-text-top", "hsl(60, 10%, 19%)");

        //Setting hover colors
        root.style.setProperty("--color-button-hover", "hsl(45, 7%, 100%)");
        root.style.setProperty("--color-accent-button-hover", "hsl(185, 42%, 50%)");
        root.style.setProperty("--color-submit-button-hover", "hsl(25, 98%, 60%)");
    }  
    if(current_theme == 3){
        localStorage.setItem("theme", "3")
        switch_selector.style.left = "50px";
        //Setting background colors
        root.style.setProperty("--color-background-500", "hsl(268, 75%, 9%)");
        root.style.setProperty("--color-background-700", "hsl(268, 71%, 12%)");
        root.style.setProperty("--color-background-900", "hsl(268, 71%, 12%)");

        //Setting key colors
        root.style.setProperty("--color-key-500", "hsl(281, 89%, 26%)");
        root.style.setProperty("--color-key-900", "hsl(285, 91%, 52%)");

        root.style.setProperty("--color-key-400", "hsl(176, 100%, 44%)");
        root.style.setProperty("--color-key-800", "hsl(177, 92%, 70%)");

        root.style.setProperty("--color-key-300", "hsl(268, 47%, 21%)");
        root.style.setProperty("--color-key-700", "hsl(290, 70%, 36%)");

        //Setting text colors
        root.style.setProperty("--color-text-100", "hsl(52, 100%, 62%)");
        root.style.setProperty("--color-text-900", "hsl(52, 100%, 62%)");

        root.style.setProperty("--color-text-accent-button", "white");
        root.style.setProperty("--color-text-submit-button", "hsl(268, 71%, 12%)");
        root.style.setProperty("--color-text-top", "hsl(52, 100%, 62%)");

        //Setting hover colors
        root.style.setProperty("--color-button-hover", "hsl(268, 47%, 35%)");
        root.style.setProperty("--color-accent-button-hover", "hsl(281, 89%, 40%)");
        root.style.setProperty("--color-submit-button-hover", "hsl(176, 100%, 70%)");
    }   
}