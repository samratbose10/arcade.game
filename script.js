document.addEventListener("DOMContentLoaded", function () {
    const sentence = "Hack on something cool! Examples: making your own PCB, building your own site, creating an app.";
    const reversedSentence = sentence.split('').reverse().join('');
    const inputField = document.getElementById("inputField");
    const result = document.getElementById("result");
    const timeDisplay = document.getElementById("time");
    let timeLeft = 10;
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (inputField.value !== reversedSentence) {
                    result.textContent = "You lose!";
                    result.style.color = "red";
                }
                inputField.disabled = true;
            }
        }, 1000);
    }

    inputField.addEventListener("input", function () {
        if (inputField.value === reversedSentence) {
            clearInterval(timer);
            result.textContent = "You win!";
            result.style.color = "green";
        } else {
            result.textContent = "Keep trying...";
            result.style.color = "red";
        }
    });

    startTimer();
});
