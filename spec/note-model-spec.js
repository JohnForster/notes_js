(function(){
  function testNoteModelIsInstantiatedWithGivenNote(){
    let noteModel = new NoteModel('This is a test note.', 0);
    if (noteModel.text() !== 'This is a test note.'){
      throw new Error('Note not successfully instantiated with text.')
    }
  }

  testNoteModelIsInstantiatedWithGivenNote();
})();
