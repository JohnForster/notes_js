(function(exports){
  function SingleNoteView(note){
    this._note = note;
  }

  SingleNoteView.prototype.html = function() {
    let noteText = this._note.text();
    return `<div>${noteText}</div>`
  };
  exports.SingleNoteView = SingleNoteView;
})(this);