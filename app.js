document.addEventListener("DOMContentLoaded", function() {
    const appList = document.getElementById("appList");
    const appDetails = document.getElementById("appDetails");

    const apps = [
        { id: 1, name: "To Do List", content: getToDoListContent() },
        { id: 2, name: "Note", content: getNoteAppContent() },
    ];

    function displayApps() {
        apps.forEach(app => {
            const li = document.createElement("li");
            li.textContent = app.name;
            li.addEventListener("click", function() {
                displayAppDetails(app);
            });
            appList.appendChild(li);
        });
    }

    function displayAppDetails(app) {
        appDetails.innerHTML = app.content;
        if (app.id === 1) {
            loadToDoListScript();
        } else if (app.id === 2) {
            loadNoteAppScript();
        }
    }

    displayApps();

    function getToDoListContent() {
        return `
            <div class="todo-app">
                <h2>To-Do List <img src="image/list_151917.png" alt="To-Do List"></h2>
                <div class="row">
                    <input type="text" id="input-box" placeholder="Add New Task">
                    <button onclick="addTask()">Add</button>
                </div>
                <ul id="list-container" class="List"></ul>
            </div>
        `;
    }

    function getNoteAppContent() {
        return `
            <div class="note-app">
                <h2>Notes </h2>
                <button class="btn">Create Note</button>
                <div class="notes-container"></div>
            </div>
        `;
    }

    function loadToDoListScript() {
        const script = document.createElement('script');
        script.src = 'todo.js';
        document.body.appendChild(script);
    }

    function loadNoteAppScript() {
        const script = document.createElement('script');
        script.src = 'note.js';
        document.body.appendChild(script);
    }
});