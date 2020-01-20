window.onload = function () {
    var logInArea = document.getElementById("logInArea");
    var logInBtn = document.getElementById("logInBtn");
    var logInDivBackground = document.getElementById("logInDivBackground");

    logInBtn.onclick = function () {
        logInArea.style.display = "unset";
    };
    logInDivBackground.onclick = function () {
        logInArea.style.display = "none";
    };
};