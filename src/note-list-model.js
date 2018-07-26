(function(exports){
  function NoteListModel(){
    this._noteList = [];
  }

  NoteListModel.prototype.add = function(noteText){
    this._noteList.push(new NoteModel(noteText, this._noteList.length));
  };

  NoteListModel.prototype.all = function(){
    return this._noteList;
  };

  exports.NoteListModel = NoteListModel;
})(this);
