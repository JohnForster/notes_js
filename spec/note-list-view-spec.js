(function(){
  function testHtmlListsSingleNote(){
    let noteList = new NoteListModel();
    noteList.add('This is a test note.');
    let view = new NoteListView(noteList);
    if(!view.html().includes('Note 1: This is a test note.')){
      throw new Error('HTML not what was expected (single).');
    }
  }

  function testHtmlListsMultipleNotes(){
    let noteList = new NoteListModel();
    let noteText1 = 'This is a test note.', noteText2 = 'This is another note';
    noteList.add(noteText1);
    noteList.add(noteText2);
    let view = new NoteListView(noteList);
    if(!view.html().includes(noteText1) || !view.html().includes(noteText2)){
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
    let expectedHtml = 'Note 1: 12345678901234567890...';
    if(!view.html().includes(expectedHtml)){
      throw new Error('HTML not what was expected (twenty chars).');
    }
  }

  function testChangeUrlByID(){
    let noteList = new NoteListModel();
    noteList.add('12345678901234567890abc');
    let view = new NoteListView(noteList);
    if(!view.html().includes('href=#notes/0')){
      throw new Error(`Expected ${window.location.href} to equal ${url + '#notes/0'}`)
    }
  }

  testChangeUrlByID();
  testHtmlDoesntListEmptyNote();
  testHtmlListsSingleNote();
  testHtmlListsMultipleNotes();
  onlyFirstTwentyCharsOfNoteTextIsReturned();
})();