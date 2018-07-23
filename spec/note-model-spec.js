(function(exports){
  function testNoteModelIsInstantiatedWithGivenNote(){
    let noteModel = new NoteModel('This is a test note.');
    console.log(noteModel.noteText)
    if (noteModel.noteText() !== 'This is a test note.'){
      throw new Error('Note not successfully instantiated with text.')
    }
  }

  testNoteModelIsInstantiatedWithGivenNote();
})(this);