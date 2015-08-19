window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var notes = new Molyb.Collections.Notes();
    notes.fetch({ success: function () {
      var url = "";
      if (_.isEmpty(notes.models)) {
        // new note...
      }
      else {
        var previous_model = notes.last();
        url = previous_model.url();
      }

      Backbone.history.navigate("notes/" + previous_model.id, {trigger: true});

    }});

    var $navbar = $('#navbar');
    var navBarView = new Molyb.Views.NavBar({collection: notes});
    $navbar.prepend(navBarView.render().$el);

    var $midPanel = $('.mid-panel');
    var indexView = new Molyb.Views.NotesIndex({collection: notes});
    $midPanel.html(indexView.render().$el);

    // debugger;
    // window.id = id;
    // var model = this.notes.getOrFetch(id);
    //
    var model = new Molyb.Models.Note({notebook_id: 1});
    var $rightPanel = $('.right-panel');
    var editNoteView = new Molyb.Views.NoteEdit({model: model, collection: notes});
    $rightPanel.html(editNoteView.render().$el);


    new Molyb.Routers.Router({
      notes: notes
    });

    Molyb.noteEdit = new Molyb.Views.NoteEdit({
      model: new Molyb.Models.Note()
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Molyb.initialize();
});
