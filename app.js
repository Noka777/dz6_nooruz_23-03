const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterInput = document.getElementById("counter");

incrementBtn.addEventListener ("click", function() {
    let counterValue = parseInt(counterInput.value);
    if (counterValue < 10) {
        counterValue++;
    }
    counterInput.value = counterValue;
});

decrementBtn.addEventListener("click", function() {
    let counterValue = parseInt(counterInput.value);
    if (counterValue > -10) {
        counterValue--;
    }
    counterInput.value = counterValue;
});