"use strict";

(function(exports) {
  function NoteController(list, element){
    this.noteList = list;
    this.noteListView = new NoteListView(this.noteList);
    this.element = element;
  }

  NoteController.prototype.displayHTML = function () {
    this.element.innerHTML = this.noteListView.htmlWrapper();
  };

  exports.NoteController = NoteController;
})(this);
