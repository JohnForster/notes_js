(function(exports){
  let appDiv = document.getElementById('app');
  appDiv.innerHTML = 'howdy';

  function NoteController(noteList){
    this._noteList = noteList;
    this._noteList.add('Favourite drink: seltzer');
    this._noteListView = new NoteListView(this._noteList);
  }

  NoteController.prototype.changeApp = function(){
    let noteListHTML = this._noteListView.html();
    appDiv = document.getElementById('app');
    appDiv.innerHTML = noteListHTML;
  };

  exports.NoteController = NoteController;
})(this);