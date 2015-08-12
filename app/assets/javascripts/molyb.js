window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Molyb.Routers.Router({
      $rootEl: $(".content"),
      notes: Molyb.Collections.notes
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
