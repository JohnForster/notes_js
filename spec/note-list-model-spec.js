(function(exports){
  function testNoteModelHoldsAListOfNotes(){
    let noteListModel = new NoteListModel();
    noteListModel.add('This is a test note.');
    noteListModel.add('This is a test note 2');
    let noteTextArray = noteListModel.all().map(x => x.noteText());
    if (!noteTextArray.includes('This is a test note.') || !noteTextArray.includes('This is a test note 2')){
      throw new Error('Note does not appear in the list')
    }
  }
  testNoteModelHoldsAListOfNotes();
})(this);
