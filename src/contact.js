
export function contact(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Contact";
    content.appendChild(title);
    
    console.log("Contact working");
};