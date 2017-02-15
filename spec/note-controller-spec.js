function NoteControllerInstansiated (){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
}


function ShowsNotesOnAPage (){
  var elementDouble = document.createElement('div');
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList);
  noteController.displayHTML(elementDouble);
  assert.isTrue(elementDouble.innerHTML.includes("Favourite drink: cof"));
}

function NoteLink () {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList);
  var linkDouble = document.getElementById('link')
  noteController.displayHTML(linkDouble);
  linkDouble.querySelector('a').click();
  assert.isTrue(window.location.hash === "#notes/13");
}

function ViewFullNote() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList);
  var linkDouble = document.getElementById('link');
  var noteDouble = document.getElementById('note');
  noteController.displayHTML(linkDouble);
  noteController.makeURLChangeShowNote();
  linkDouble.querySelector('a').click();
  console.log(noteDouble)
  assert.isTrue(noteDouble.innerHTML.includes("Favourite drink: coffee"));
}

ShowsNotesOnAPage();
NoteControllerInstansiated();
NoteLink();
ViewFullNote();
