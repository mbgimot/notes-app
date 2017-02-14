"use strict";

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.createNote = function (string) {
    var note = new Note(string);
    this.notes.push(note);
    return note;
  };

  NoteList.prototype.viewMessages = function () {
    this.messages = [];
    for (var i=0; i< this.numberOfNotes(); i++) {
      this.messages.push(this.notes[i].getText())
    }
    return this.messages;
  };

  NoteList.prototype.viewNoteModel = function () {
    return this.notes;
  };

  NoteList.prototype.numberOfNotes = function () {
    return this.notes.length;
  };

  exports.NoteList = NoteList;
  exports.NoteList.createNote = NoteList.createNote;
  exports.NoteList.viewMessages = NoteList.viewMessages;
  exports.NoteList.numberOfNotes = NoteList.numberOfNotes;
})(this);
