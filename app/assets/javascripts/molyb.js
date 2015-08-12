window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Molyb.Routers.Router({
      $rootEl: $("#content"),
      notes: Molyb.Collections.notes
    });
    var $content = $('.content');
    var $noteShowEl = $('.note-show');
    var $notesListEl = $('.notes-list');

    var navBarView = new Molyb.Views.NavBar();
    $content.prepend(navBarView.render().$el);
    debugger;
    Backbone.history.start();
  }


};

$(document).ready(function(){
  Molyb.initialize();
});
