(function Start (){
  var noteList = new NoteList();
  noteList.createNote("Favourite drink: coffee");
  var element = document.getElementById('app');
  var noteController = new NoteController(noteList, element);
  noteController.displayHTML();
})();
