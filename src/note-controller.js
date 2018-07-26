(function(exports){
  var appDiv = document.getElementById('app');
  appDiv.innerHTML = 'howdy';

  function NoteController(noteList){
    _noteList = noteList;
    _noteList.add('Favourite drink: seltzer');
    _noteListView = new NoteListView(_noteList);
  }

  NoteController.prototype.changeApp = function(){
    let noteListHTML = _noteListView.html();
    appDiv = document.getElementById('app');
    appDiv.innerHTML = noteListHTML;
  };

  exports.NoteController = NoteController;
})(this);