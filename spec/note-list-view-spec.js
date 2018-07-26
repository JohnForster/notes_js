(function(exports){
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
    noteList.add('This is a test note 2');
    let view = new NoteListView(noteList);
    let expectedHtml = '<li><div>Note 1: This is a test note.</div></li><li><div>Note 2: This is a test note 2</div></li>'
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

  testHtmlDoesntListEmptyNote();
  testHtmlListsSingleNote();
  testHtmlListsMultipleNotes();
})(this);