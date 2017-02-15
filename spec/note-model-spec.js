function noteCanBeInstansiated() {
  note = new Note();
  assert.isTrue(note instanceof Note);
}

function noteReturnsStoredText(text){
  note = new Note(text);
  assert.isTrue(note.getText() === text);
}



noteCanBeInstansiated();
noteReturnsStoredText("Hello");
