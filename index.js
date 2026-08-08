// CACULATOR NIGGA PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "stupid nigga";
    }
}

const button = document.getElementById('sound');
const sound = document.getElementById('audio');

button.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});
