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
    Backbone.history.start();
  }

};

$(document).ready(function(){
  Molyb.initialize();
});
