window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.App = window.Molyb();
  }
};

$(document).ready(function(){
  Molyb.initialize();
});
