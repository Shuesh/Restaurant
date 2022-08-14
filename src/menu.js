
export function menu(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.appendChild(title);
    
    console.log("Menu working");
};