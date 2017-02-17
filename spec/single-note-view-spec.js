function displaySingleNote() {
  var note = {
    getText: function() {
      return "Hello";
    }
  };
  var singlenoteview = new SingleNoteView(note);
  assert.isTrue(singlenoteview.getNote() === "<div>Hello</div>");
}

displaySingleNote();
