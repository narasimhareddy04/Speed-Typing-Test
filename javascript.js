let spinnerEl = document.getElementById('spinner');
// let speedTypingTestEl = document.getElementById("speedTypingTest");
let timeContainerEl = document.getElementById("timeContainer");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let counter = 0;
let uniqueId;

function randomQuote() {
    spinnerEl.classList.add("d-none");
    timeContainerEl.classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplayEl.textContent = jsonData.content;

        });
}
timeContainerEl.classList.add("d-none");
spinnerEl.classList.remove("d-none");
randomQuote();

function Timer() {
    counter = 0;
    uniqueId = setInterval(function() {
        timerEl.textContent = counter;
        counter += 1;

    }, 1000);
}
Timer();
submitBtnEl.addEventListener("click", function(event) {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + timerEl.textContent + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});
resetBtnEl.addEventListener("click", function() {

    // speedTypingTestEl.classList.add("d-none");
    timeContainerEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    clearInterval(uniqueId);
    randomQuote();
    Timer();
    quoteInputEl.value = "";
    // speedTypingTestEl.classList.remove("d-none");
    // spinnerEl.classList.add("d-none");
    // timeContainerEl.classList.remove("d-none");
    resultEl.textContent = "";

})