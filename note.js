const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNote() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNote();

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "image/bin_484662.png";
    img.className = "delete-note";
    noteContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); 
});

noteContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-note")) {
        e.target.parentElement.remove();
        updateStorage(); 
    } else if (e.target.tagName === "P") {
        e.target.onkeyup = function() {
            updateStorage();
        };
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage();
    }
});
