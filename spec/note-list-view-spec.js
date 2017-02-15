function htmlWrapperMany() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  noteList.createNote("Test");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlWrapper() === "<ul><li><div><a href=#notes/8>Hello</a></li></div><li><div><a href=#notes/9>Test</a></li></div></ul>");
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
  assert.isTrue(noteListView.htmlWrapper() === "<ul><li><div><a href=#notes/10>This string should b</a></li></div></ul>");
}
htmlWrapperMany();
htmlWrapperNone();
limiter();
