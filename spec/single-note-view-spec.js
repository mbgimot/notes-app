function displaySingleNote() {
  var note = new Note("Hello");
  var singlenoteview = new SingleNoteView(note);
  assert.isTrue(singlenoteview.getNote() === "<div>Hello</div>");
}

displaySingleNote();
