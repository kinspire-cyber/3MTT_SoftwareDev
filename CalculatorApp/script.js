const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

// Update the display with the clicked button value
function updateDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } 
    else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    }
    catch {
        display.innerText = "Error";
    }
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        
        if (value === "C") {
            clearDisplay();
        }
        else if (value === "=") {
            calculate();
        }
        else {
            updateDisplay(value);
        }
    });
});