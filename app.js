let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    let notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesDiv.appendChild(div);
    });
}

function addNote() {
    let input = document.getElementById("noteInput");
    if (input.value === "") return;

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    displayNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();

