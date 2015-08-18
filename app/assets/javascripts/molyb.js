window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    notes = new Molyb.Collections.Notes();
    notes.fetch();

    var $navbar = $('#navbar');
    var navBarView = new Molyb.Views.NavBar({collection: notes});
    $navbar.prepend(navBarView.render().$el);

    var $midPanel = $('.mid-panel');
    var indexView = new Molyb.Views.NotesIndex({collection: notes});
    $midPanel.html(indexView.render().$el);

    new Molyb.Routers.Router({
      notes: notes
    });

    Molyb.noteEdit = new Molyb.Views.NoteEdit({
      model: new Molyb.Models.Note()
    });

    window.id = null;

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Molyb.initialize();
});
