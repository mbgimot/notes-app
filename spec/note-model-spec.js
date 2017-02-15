function noteCanBeInstansiated() {
  var note = new Note();
  assert.isTrue(note instanceof Note);
}

function noteReturnsStoredText(text){
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
}

function noteID() {
  var note = new Note("Hello");
  var note2 = new Note("Hello2");
  assert.isTrue(note.id === 3);
  assert.isTrue(note2.id === 4);
}

noteCanBeInstansiated();
noteReturnsStoredText("Hello");
noteID();
