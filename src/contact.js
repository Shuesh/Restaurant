export function contact(){
    const content = document.querySelector("#content");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("heading");
    const title = document.createElement("h1");
    title.textContent = "Contact";
    titleDiv.appendChild(title);
    content.appendChild(titleDiv);


};