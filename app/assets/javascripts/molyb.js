window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var $navbar = $('#navbar');
    var navBarView = new Molyb.Views.NavBar();
    $navbar.prepend(navBarView.render().$el);

    notes = new Molyb.Collections.Notes();
    notes.fetch();

    // var $midPanel = $('.mid-panel');
    // var indexView = new Molyb.Views.NotesIndex({collection: notes});
    // $midPanel.html(indexView.render().$el);

    new Molyb.Routers.Router({
      notes: notes
    });

    Backbone.history.start();
  }

};

$(document).ready(function(){
  Molyb.initialize();
});
