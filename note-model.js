(function (exports) {
  function Note (text) {
    this.setText(text);
  }

  Note.prototype.getText = function () {
    return noteMessage;
  };

  Note.prototype.setText = function (text) {
    var noteMessage = text;

  };


  exports.Note = Note;
  exports.getText = Note.getText;


})(this);
