(function(exports){
  function NoteListView(noteList){
    this._noteList = noteList || [];
  }

  let firstTwentyChars = function(note){
    let lineEnding = '';
    if (note.length > 20) { lineEnding = '...' }
    return note.substring(0,20) + lineEnding;
  };

  NoteListView.prototype.html = function(){
    let output = '';
    this._noteList.all().forEach(function(note, index){
      let firstTwentyCharsOfNote = firstTwentyChars(note.text());
      output += `<li><a id='link-${note.id()}' href=#notes/${note.id()}>`
          + `<div>Note ${index + 1}: ${firstTwentyCharsOfNote}</div></a></li>`
    });
    return output
  };

  exports.NoteListView = NoteListView;
})(this);