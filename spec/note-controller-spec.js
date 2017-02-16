"use strict";

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
  noteController.displayNotes(elementDouble);
  assert.isTrue(elementDouble.innerHTML.includes("Favourite drink: cof"));
}

function NoteLink () {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList);
  var linkDouble = document.getElementById('link')
  noteController.displayNotes(linkDouble);
  linkDouble.querySelector('a').click();
  assert.isTrue(window.location.hash === "#notes/13");
}

function ViewFullNote() {
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var noteController = new NoteController(noteList);
  var linkDouble = document.getElementById('link');
  var noteDouble = document.getElementById('note');
  noteController.displayNotes(linkDouble);
  linkDouble.querySelector('a').click();
  noteController.makeURLChangeShowNote();
  noteController.displayNote(noteDouble);
  assert.isTrue(noteDouble.innerHTML.includes("Favourite drink: coffee"));
}

function AppLoads(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var linkDouble = document.createElement('div');
  assert.isTrue(linkDouble.innerHTML === "");
}

function CanAddNotes(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var linkDouble = document.createElement('div');
  var formDouble = document.createElement('form');
  formDouble.setAttribute("id", "text");
  formDouble.method='POST';
  formDouble.action="#notes/new";
  var textDouble = document.createElement('textarea');
  textDouble.name="message";
  textDouble.setAttribute("form", "text");
  textDouble.innerHTML="test";
  formDouble.appendChild(textDouble);
  var submitDouble = document.createElement('input');
  submitDouble.type="submit";
  submitDouble.value="add";
  formDouble.appendChild(submitDouble);
  document.body.appendChild(formDouble);
  document.body.appendChild(linkDouble);
  var text = document.getElementById('text');
  noteController.submitListener(text, linkDouble)
  // formDouble.submit();

}

AppLoads();
ShowsNotesOnAPage();
NoteControllerInstansiated();
NoteLink();
// CanAddNotes();

// ViewFullNote();
