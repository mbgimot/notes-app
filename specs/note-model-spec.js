var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

function noteCanBeInstansiated() {
  note = new Note();
}

function noteAcceptsText(text) {
  note = new Note(text);
  assert.isTrue(note.text !== undefined);
}

function noteReturnsStoredText(text){
  note = new Note(text);
  assert.isTrue(note.getText() === text);
}



noteCanBeInstansiated();
noteAcceptsText("Hello");
noteReturnsStoredText("Hello");
