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

function limiter(){
  var noteList = new NoteList();
  noteList.createNote("This string should be limited somewhere somehow in someway");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlWrapper() === "<ul><li><div>This string should b</li></div></ul>")
}
htmlWrapperMany();
htmlWrapperNone();
limiter();
