function NoteControllerInstansiated (){
  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController());
}

NoteControllerInstansiated();
