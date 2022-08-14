
export function home(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Home";
    content.appendChild(title);
    
    console.log("Home working");
};