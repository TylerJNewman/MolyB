window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var model1 = new Molyb.Models.Note({title: 'My first note', body: 'Yay!', owner_id: 1, notebook_id: 1});
    var model2 = new Molyb.Models.Note({title: 'My second note', body: '', owner_id: 1, notebook_id: 1});
    var model3 = new Molyb.Models.Note({title: 'My third note', body: 'Keep Going!', owner_id: 1, notebook_id: 1});

    Molyb.Collections.notes = new Molyb.Collections.Notes([model1,model2,model3]);
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
