import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';



const SelectedTab = (() => {
    const tabs = document.querySelectorAll(".tabs");
    const content = document.querySelector("#content");

    function updateTab() {
        [...tabs].forEach(tab => {
            tab.classList.remove("selected");
        });
        this.classList.add("selected");

        while(content.lastChild) {
            content.removeChild(content.lastChild);
        }

        if (this.innerText == "Home"){
            home();
        } else if (this.innerText == "Menu"){
            menu();
        } else if (this.innerText == "Contact"){
            contact();
        }
    };

    return {updateTab};
})();



function addListeners() {
    const tabs = document.querySelectorAll(".tabs");

    [...tabs].forEach(tab => {
        tab.addEventListener("click", SelectedTab.updateTab);
    });
    console.log('working');
}

addListeners();