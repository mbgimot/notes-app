function htmlWrapperMany() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Test");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlWrapper() === "<ul><li><div>Hello</li></div><li><div>Test</li></div></ul>");
}

function htmlWrapperNone() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlWrapper() === undefined);
}

htmlWrapperMany();
htmlWrapperNone();
