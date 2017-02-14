"use strict";
(function(exports) {
  function NoteController(){
    var noteList = new NoteList();
    noteList.createNote("Favourite drink: seltzer")
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.displayHTML = function () {
    return this.noteListView.htmlWrapper();
  };

  exports.NoteController = NoteController;
  exports.NoteController.displayHTML = NoteController.displayHTML;
})(this);


window.onload = (function(){
  var noteController = new NoteController();
  document.getElementById("app").innerHTML = noteController.displayHTML();

});
