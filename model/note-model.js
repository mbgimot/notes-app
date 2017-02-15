"use strict";

(function (exports) {
  var uniqueID = 0;
  function Note (text) {
    this.setText(text);
    this.id = ++uniqueID;
  }

  Note.prototype.getText = function () {
    return this.noteMessage;
  };

  Note.prototype.setText = function (text) {
    this.noteMessage = text;
  };

  exports.Note = Note;
})(this);
