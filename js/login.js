let loginSwitch = document.getElementById("login-switch");
let registerSwitch = document.getElementById("register-switch");
let loginArea = document.getElementById("loginArea");
let registerArea = document.getElementById("registerArea");

loginSwitch.addEventListener("click", function () {
    loginSwitch.classList.add("switchActive");
    loginArea.classList.remove("unvisible");
    registerSwitch.classList.remove("switchActive");
    registerArea.classList.add("unvisible");
});
registerSwitch.addEventListener("click", function () {
    loginSwitch.classList.remove("switchActive");
    loginArea.classList.add("unvisible");
    registerSwitch.classList.add("switchActive");
    registerArea.classList.remove("unvisible");
});