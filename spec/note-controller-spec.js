function NoteControllerInstansiated (){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
}

NoteControllerInstansiated();

function ShowsNotesOnAPage (){
  var elementDouble = document.createElement('div');
  elementDouble.setAttribute('id', 'test')
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList, elementDouble);
  noteController.displayHTML();
  assert.isTrue(elementDouble.innerHTML === '<ul><li><div>Favourite drink: coffee</div></li></ul>');
}

ShowsNotesOnAPage();
