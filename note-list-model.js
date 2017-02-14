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
    var messages = [];
    for (var i=0; i< this.notes.length; i++) {
      messages.push(this.notes[i].getText())
    }
    return messages
  };

  NoteList.prototype.viewNoteModel = function () {
    return this.notes;
  };

  exports.NoteList = NoteList;
  exports.NoteList.createNote = NoteList.createNote;
  exports.NoteList.viewMessages = NoteList.viewMessages;
})(this);
