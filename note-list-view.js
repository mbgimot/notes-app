"use strict";

(function(exports) {
  function NoteListView(notes) {
    this.noteList = notes
  }

  NoteListView.prototype.htmlWrapper = function () {
    this.noteList.viewMessages();
    if (this.noteList.numberOfNotes() === 0) {return;}
    var html = "<ul>";
    for (var i = 0; i<this.noteList.numberOfNotes(); i++) {
      html += "<li><div>" + this.noteList.messages[i] + "</li></div>";
    }
      html += "</ul>";
    return html;
  };

  exports.NoteListView = NoteListView;
  exports.NoteListView.htmlWrapper = NoteListView.htmlWrapper;

})(this);

var noteList = new NoteList()
noteList.createNote("test");
noteList.createNote("test1");
