const colors = ["green", "red", "blue", "yellow", "black"];
const button = document.querySelector("#btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomNum = getRandomNumber();

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

    document.body.style.backgroundColor = colors[randomNum];
    color.innerHTML = colors[randomNum];
});

