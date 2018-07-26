(function(exports){
  function NoteListModel(){
    this.noteList = [];
  }

  NoteListModel.prototype.add = function(noteText){
    this.noteList.push(new NoteModel(noteText));
  };

  NoteListModel.prototype.all = function(){
    return this.noteList;
  };

  exports.NoteListModel = NoteListModel;
})(this);
