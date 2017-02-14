function createNote() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  assert.isTrue(noteList.notes[0].getText() === "Hello");
}

function viewMessages() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Test");
  assert.isTrue(noteList.viewMessages().includes("Hello", "Test"));
}

createNote();
viewMessages();
