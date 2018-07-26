(function(exports){
  function NoteModel(note, id){
    this._text = note;
    this._id = id;
  }

  NoteModel.prototype.id = function(){
    return this._id;
  };

  NoteModel.prototype.text = function(){
      return this._text;
  };

  exports.NoteModel = NoteModel;
})(this);
