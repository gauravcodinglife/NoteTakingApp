// Load notes from browser storage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Display notes on page load
displayNotes();

function addNote() {
    const input = document.getElementById("noteInput");
    const note = input.value;

    if (note === "") {
        alert("Please enter a note");
        return;
    }

    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function displayNotes() {
    const list = document.getElementById("notesList");
    list.innerHTML = "";

    if (notes.length === 0) {
        list.innerHTML = "<p>No notes found</p>";
        return;
    }

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerText = note;
        list.appendChild(div);
    });
}

function deleteAll() {
    const confirmDelete = confirm("Are you sure you want to delete all notes?");
    if (confirmDelete) {
        notes = [];
        localStorage.removeItem("notes");
        displayNotes();
    }
}


