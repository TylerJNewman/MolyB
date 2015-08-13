window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.Molyb.AllNotes = [
      {title: 'My first note', body: 'Yay!', owner_id: 1, notebook_id: 1},
      {title: 'My second note', body: '', owner_id: 1, notebook_id: 1},
      {title: 'My third note', body: 'Keep Going!', owner_id: 1, notebook_id: 1}
    ];
    new Molyb.Routers.Router({
      $rootEl: $(".content"),
      notes: Molyb.Collections.notes
    });
    var $navbar = $('#navbar');

    var navBarView = new Molyb.Views.NavBar();
    $navbar.prepend(navBarView.render().$el);
    Backbone.history.start({pushState: true});
  }


};

$(document).ready(function(){
  Molyb.initialize();
});
