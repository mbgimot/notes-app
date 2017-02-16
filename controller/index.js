(function Start (){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteController.makeURLChangeShowNote();
    var link = document.getElementById('link');
    var text = document.getElementById('text');
    noteController.submitListener(text, link);
})();
