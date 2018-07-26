(function(){
  function singleNoteViewGivesHTMLForASingleNote(){
    let note1 = new NoteModel('Favourite drink: Beer');
    let singleNoteView = new SingleNoteView(note1);
    console.log(singleNoteView.html());
    if(singleNoteView.html() !== '<div>Favourite drink: Beer</div>'){
      throw new Error('Single note view not generating expected html.')
    }
  }
  singleNoteViewGivesHTMLForASingleNote();
})();