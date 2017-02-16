"use strict";

(function(exports) {

  function NoteController(list){
    this.noteList = list;
    this.noteListView = new NoteListView(this.noteList);
  }

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
    for (var i = 0; i < this.noteList.notes.length; i++) {
      if (this.noteList.notes[i].id === parseInt(note)) {
        this.singleNote = new SingleNoteView(this.noteList.notes[i]);
        this.displaySingleNote();
      }
    }
  };

  NoteController.prototype.displaySingleNote = function () {
    var fullNote = document.getElementById("note");
    fullNote.innerHTML = this.singleNote.getNote();
  };

  NoteController.prototype.submitListener = function (text, link) {
    text.addEventListener("submit", function(submitEvent){
      submitEvent.preventDefault();
      this.addNote(submitEvent,link);
    }.bind(this), false);
  };

  NoteController.prototype.addNote = function (submitEvent, link) {
    this.noteList.createNote(submitEvent.srcElement["0"].value);
    this.displayNotes(link);
  };

  NoteController.prototype.displayNotes = function (link) {
    link.innerHTML = this.noteListView.htmlWrapper();
  };

  exports.NoteController = NoteController;
})(this);

(function(exports){

})(this);
