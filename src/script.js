import moment from "moment";
import axios from 'axios'

const apiResultElement = document.getElementById("api-result");

axios.get('https://catfact.ninja/fact')
    .then(function (response) {
        console.log(response.data);
        apiResultElement.innerHTML = response.data.fact;
    })
    .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
    })

document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("follow-button");

    btn.addEventListener("click", function () {
        btn.classList.toggle("button-active");
        btn.innerHTML = "✉️ Message";
    });

    const menuSwitch = document.getElementById("menu-switch");
    const menuSwitchClose = document.getElementById("menu-switch-close");
    const menuContainer = document.getElementById("menu-container");

    menuSwitch.addEventListener("click", function (e) {
        menuContainer.style.display = "flex";
    });
    menuSwitchClose.addEventListener("click", function (e) {
        menuContainer.style.display = "none";
    });


    const timeElement = document.getElementById("time");

    setInterval(() => {
        timeElement.innerHTML = moment().format("H:mm:ss");
    }, 1000)

    return;
});
