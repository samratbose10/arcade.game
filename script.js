document.addEventListener("DOMContentLoaded", function () {
    const sentence = "app.";
    const reversedSentence = sentence.split('').reverse().join('');
    const inputField = document.getElementById("inputField");
    const result = document.getElementById("result");
    const timeDisplay = document.getElementById("time");
    const level1 = document.getElementById("level1");
    const level2 = document.getElementById("level2");
    const clue1 = document.getElementById("clue1");
    const clue2 = document.getElementById("clue2");
    const clue3 = document.getElementById("clue3");
    const submitAnswers = document.getElementById("submitAnswers");
    const questResult = document.getElementById("questResult");
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
            setTimeout(() => {
                level1.style.display = "none";
                level2.style.display = "block";
            }, 1000);
        } else {
            result.textContent = "Keep trying...";
            result.style.color = "red";
        }
    });

    startTimer();

    submitAnswers.addEventListener("click", function () {
        const answer1 = document.getElementById("answer1").value.trim().toLowerCase();
        const answer2 = document.getElementById("answer2").value.trim().toLowerCase();
        const answer3 = document.getElementById("answer3").value.trim().toLowerCase();

        const correctAnswers1 = ["the hack club arcade's main page", "hack club", "main page"];
        const correctAnswers2 = ["the bin section", "hack club", "bin"];
        const correctAnswers3 = ["the hack club slack community", "hack club", "slack"];

        if (correctAnswers1.includes(answer1)) {
            clue1.style.display = "none";
            clue2.style.display = "block";
        } else {
            questResult.textContent = "Answer 1 is incorrect!";
            questResult.style.color = "red";
            return;
        }

        if (correctAnswers2.includes(answer2)) {
            clue2.style.display = "none";
            clue3.style.display = "block";
        } else {
            questResult.textContent = "Answer 2 is incorrect!";
            questResult.style.color = "red";
            return;
        }

        if (correctAnswers3.includes(answer3)) {
            questResult.textContent = "Congratulations! You've completed the quest!";
            questResult.style.color = "green";
        } else {
            questResult.textContent = "Answer 3 is incorrect!";
            questResult.style.color = "red";
        }
    });
});
