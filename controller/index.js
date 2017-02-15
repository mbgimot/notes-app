(function Start (){
    var noteList = new NoteList();
    noteList.createNote("Favourite drink: coffee");
    noteList.createNote("Favourite drink: lucozade");
    noteList.createNote("Favourite drink: red bull");
    var link = document.getElementById('link');
    // var note = document.getElementById('note');
    this.noteController = new NoteController(noteList);
    this.noteController.displayHTML(link);
    this.noteController.makeURLChangeShowNote();
})();
