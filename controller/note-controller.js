"use strict";

(function(exports) {
  function NoteController(list){
    this.noteList = list;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.displayHTML = function (link) {
    link.innerHTML = this.noteListView.htmlWrapper();
  };

  NoteController.prototype.makeURLChangeShowNote = function () {
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
  };

  function getNoteFromUrl () {
    return window.location.hash.split("#notes/")[1];
  };

  NoteController.prototype.showNoteForCurrentPage = function () {
    this.noteController.showNote(getNoteFromUrl());
  };

  NoteController.prototype.showNote = function (note) {
    for (var i = 0; i < this.noteList.notes.length; i++) {
      if (this.noteList.notes[i].id === parseInt(note)) {
        this.singleNote = new SingleNoteView(this.noteList.notes[i]);
        this.displayNote();
      }
    }
  };

  NoteController.prototype.displayNote = function () {
    var fullNote = document.getElementById("note")
    fullNote.innerHTML = this.singleNote.getNote();
  };

  exports.NoteController = NoteController;
})(this);
