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

function noteReturnsStoredText(text){
  note = new Note(text);
  assert.isTrue(note.getText() === text);
}



noteCanBeInstansiated();
noteReturnsStoredText("Hello");
