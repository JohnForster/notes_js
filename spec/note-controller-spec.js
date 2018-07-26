(function(exports){
  function noteControllerGetsHTMLFromNoteListView(){
    let noteList = new NoteListModel();
    let noteController = new NoteController(noteList);
    noteController.changeApp();
    if (!document.getElementById('app').innerHTML.includes('Favourite drink: seltzer')){
      throw new Error('Note Controller not correctly changing HTML')
    }
  }

  noteControllerGetsHTMLFromNoteListView();
})(this);