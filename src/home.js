export function home(){
    const content = document.querySelector("#content");

    // Title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("heading");
    const title = document.createElement("h1");
    title.textContent = "Home";
    titleDiv.appendChild(title);
    content.appendChild(titleDiv);

    // List of the cards to be added
    const cards = [
        ["About",["Our restaurant has a charming atmosphere that provides the catalyst for reunions, anniversaries, first dates, and much more!"]],
        ["Hours", ["Monday: 8AM-8PM", "Tuesday: 8AM-8PM", "Wednesday: 8AM-8PM", "Thursday: 8AM-8PM", "Friday: 8AM-8PM", "Saturday: 8AM-8PM", "Sunday: 8AM-8PM"]],
        ["Location", ["123 Main Street, New York, NY"]]
    ]

    // Iterates over the cards. Makes a list if there's more than one item in the the second index of each card.
    for (let i = 0; i < cards.length; i++){
        let div = document.createElement("div");
        div.classList.add("card");
        let heading = document.createElement("h2");
        heading.textContent = `${cards[i][0]}`;
        div.appendChild(heading);
        let paragraph;

        if (cards[i][1].length == 1){
            paragraph = document.createElement("p");
            paragraph.textContent = `${cards[i][1]}`;
        } else {
            paragraph = document.createElement("ul");
            [...cards[i][1]].forEach(function (item) {
                let listItem = document.createElement("li");
                listItem.innerText = item;
                paragraph.appendChild(listItem);
            });
        }
        div.appendChild(paragraph);
        content.appendChild(div);
    }
};