(function(exports){

  function SingleNoteView(noteModel){
    this.note = noteModel;
  }

  SingleNoteView.prototype._getNoteText = function () {
    return this.note.getText();
  };

  SingleNoteView.prototype.getNote = function () {
    return "<div>" + this._getNoteText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
