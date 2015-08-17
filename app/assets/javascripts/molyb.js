window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  //   var model1 = new Molyb.Models.Note({id: 1, title: 'My first note', body: 'Yay!', owner_id: 1, notebook_id: 1});
  //   var model2 = new Molyb.Models.Note({id: 2, title: 'My second note', body: '...', owner_id: 1, notebook_id: 1});
  //   var model3 = new Molyb.Models.Note({id: 3, title: 'My third note', body: 'Keep Going!', owner_id: 1, notebook_id: 1});

    notes = new Molyb.Collections.Notes();
    notes.fetch();
    new Molyb.Routers.Router({
      $rootEl: $(".content"),
      notes: notes
    });



    var $navbar = $('#navbar');
    var navBarView = new Molyb.Views.NavBar();
    $navbar.prepend(navBarView.render().$el);

    Backbone.history.start();
  }


};

$(document).ready(function(){
  Molyb.initialize();
});
