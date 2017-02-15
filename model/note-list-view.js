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
      html += "<li><div>" + limitNote(this.noteList.messages[i]) + "</li></div>";
    }
      html += "</ul>";
    return html;
  };

  function limitNote(str) {
    if(str.length > 20){
      str = str.substring(0,20)
    }
      return str
  }

  exports.NoteListView = NoteListView;
})(this);
