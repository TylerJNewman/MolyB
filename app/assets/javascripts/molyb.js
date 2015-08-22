window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var notes = new Molyb.Collections.Notes();
    notes.fetch({ success: function () {
      var previous_model_id = "";
      if (_.isEmpty(notes.models)) {
        // $('.delete-button').prop('disabled', true);
      }
      else {
        // $('.delete-button').prop('disabled', false);
        var previous_model = notes.first();
        previous_model_id = previous_model.id;
      }
      Backbone.history.navigate("", {trigger: true});
      Backbone.history.navigate("notes/" + previous_model_id, {trigger: true});

    }});

    var $navbar = $('#navbar');
    var navBarView = new Molyb.Views.NavBar({collection: notes});
    $navbar.prepend(navBarView.render().$el);

    var $midPanel = $('.mid-panel');
    var indexView = new Molyb.Views.NotesIndex({collection: notes, navbar: navBarView});
    $midPanel.html(indexView.render().$el);

    // debugger;
    // window.id = id;
    // var model = this.notes.getOrFetch(id);
    //
    var model = new Molyb.Models.Note({notebook_id: 1});
    var $rightPanel = $('.right-panel');
    var editNoteView = new Molyb.Views.NoteEdit({collection: notes});
    $rightPanel.html(editNoteView.render().$el);
    // $('.wysihtml5-toolbar').append('<a class="btn btn-sm btn-default delete-button" data-wysihtml5-command="deleteNote" title="Delete note" tabindex="-1" href="javascript:;" unselectable="on"><span class="glyphicon glyphicon-trash"></span></a>');



    var router = new Molyb.Routers.Router({
      notes: notes,
      editNoteView: editNoteView,
      navbar: navBarView
    });

    // Molyb.noteEdit = new Molyb.Views.NoteEdit({
    //   model: new Molyb.Models.Note()
    // });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Molyb.initialize();
});


