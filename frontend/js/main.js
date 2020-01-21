window.onload = function () {
    var logInArea = document.getElementById("logInArea");
    var logInBtn = document.getElementById("logInBtn");
    var logInDivBackground = document.getElementById("logInDivBackground");

    logInBtn.onmousedown = function () {
        logInBtn.style.backgroundColor = "#000000";
        logInBtn.style.boxShadow = "none";
    }

    // logInBtn.onclick = function () {
    //     logInArea.style.display = "unset";
    // };
    logInDivBackground.onclick = function () {
        logInArea.style.display = "none";
    };
};