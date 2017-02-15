"use strict";

(function (exports) {
  function Note (text) {
    this.setText(text);
  }

  Note.prototype.getText = function () {
    return this.noteMessage;
  };

  Note.prototype.setText = function (text) {
    this.noteMessage = text;
  };

  exports.Note = Note;
})(this);
