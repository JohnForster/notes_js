(function(){
  function noteControllerGetsHTMLFromNoteListView(){
    let noteList = new NoteListModel();
    let noteController = new NoteController(noteList);

    // Uncomment when moving tests to separate file.
    let div = document.createElement('DIV');
    div.setAttribute('id','test');
    document.body.appendChild(div);

    noteController.changeApp();

    if (!document.getElementById('app').innerHTML.includes('Favourite drink: sel')){
      throw new Error('Note Controller not correctly changing HTML')
    }
  }

  noteControllerGetsHTMLFromNoteListView();
})();