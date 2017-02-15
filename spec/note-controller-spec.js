function NoteControllerInstansiated (){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
}


function ShowsNotesOnAPage (){
  var elementDouble = document.createElement('div');
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList, elementDouble);
  noteController.displayHTML();
  assert.isTrue(elementDouble.innerHTML === '<ul><li><div>Favourite drink: cof</div></li></ul>');
}

ShowsNotesOnAPage();
NoteControllerInstansiated();
