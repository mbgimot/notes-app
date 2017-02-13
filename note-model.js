"use strict";

(function (exports) {
  function Note (text) {
    this.setText(text);
  }

  var noteMessage;

  Note.prototype.getText = function () {
    return noteMessage;
  };

  Note.prototype.setText = function (text) {
    noteMessage = text;

  };

  exports.Note = Note;
  exports.getText = Note.getText;

})(this);
