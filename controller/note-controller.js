"use strict";

(function(exports) {

  var noteList;
  var noteListView;

  function NoteController(list){
    noteList = list;
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.displayHTML = function (link) {
    link.innerHTML = noteListView.htmlWrapper();
  };

  NoteController.prototype.makeURLChangeShowNote = function () {
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this),false);
  };

  function getNoteFromUrl () {
    return window.location.hash.split("#notes/")[1];
  }

  NoteController.prototype.showNoteForCurrentPage = function () {
    this.showNote(getNoteFromUrl());
  };

  NoteController.prototype.showNote = function (note) {
    for (var i = 0; i < noteList.notes.length; i++) {
      if (noteList.notes[i].id === parseInt(note)) {
        this.singleNote = new SingleNoteView(noteList.notes[i]);
        this.displayNote();
      }
    }
  };

  NoteController.prototype.displayNote = function () {
    var fullNote = document.getElementById("note");
    fullNote.innerHTML = this.singleNote.getNote();
  };

  NoteController.prototype.submitListener = function (text, link) {
    text.addEventListener("submit", function(submitEvent){
      submitEvent.preventDefault();
      addNote(submitEvent,link);
    });
  };

  function addNote(submitEvent,link) {
    noteList.createNote(submitEvent.srcElement["0"].value);
    link.innerHTML = noteListView.htmlWrapper();
  }

  exports.NoteController = NoteController;
})(this);
