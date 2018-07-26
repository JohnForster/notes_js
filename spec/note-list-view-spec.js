(function(){
  function testHtmlListsSingleNote(){
    let noteList = new NoteListModel();
    noteList.add('This is a test note.');
    let view = new NoteListView(noteList);
    let expectedHtml = '<li><div>Note 1: This is a test note.</div></li>';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (single).');
    }
  }

  function testHtmlListsMultipleNotes(){
    let noteList = new NoteListModel();
    noteList.add('This is a test note.');
    noteList.add('This is another note');
    let view = new NoteListView(noteList);
    let expectedHtml = '<li><div>Note 1: This is a test note.</div></li><li><div>Note 2: This is another note</div></li>'
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (multiple).');
    }
  }

  function testHtmlDoesntListEmptyNote(){
    let noteList = new NoteListModel();
    let view = new NoteListView(noteList);
    let expectedHtml = '';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (no notes).');
    }
  }

  function onlyFirstTwentyCharsOfNoteTextIsReturned(){
    let noteList = new NoteListModel();
    noteList.add('12345678901234567890abc');
    let view = new NoteListView(noteList);
    console.log(view.html());
    let expectedHtml = '<li><div>Note 1: 12345678901234567890...</div></li>';
    if(view.html() !== expectedHtml){
      throw new Error('HTML not what was expected (twenty chars).');
    }
  }

  testHtmlDoesntListEmptyNote();
  testHtmlListsSingleNote();
  testHtmlListsMultipleNotes();
  onlyFirstTwentyCharsOfNoteTextIsReturned();
})();