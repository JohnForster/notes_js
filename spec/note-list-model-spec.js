(function(){
  function testNoteModelHoldsAListOfNotes(){
    let noteListModel = new NoteListModel();
    noteListModel.add('This is a test note.');
    noteListModel.add('This is a test note 2');
    let noteTextArray = noteListModel.all().map(x => x.text());
    if (!noteTextArray.includes('This is a test note.') || !noteTextArray.includes('This is a test note 2')){
      throw new Error('Note does not appear in the list')
    }
  }

  function testNotesHaveIndividualIds(){
    let noteListModel = new NoteListModel();
    noteListModel.add('This is a test note.');
    noteListModel.add('This is a test note 2');
    let noteArray = noteListModel.all();
    if (noteArray[0].id() !== 0 || noteArray[1].id() !== 1){
      throw new Error('Note IDs do not match.')
    }
  }

  testNoteModelHoldsAListOfNotes();
  testNotesHaveIndividualIds();
})();
