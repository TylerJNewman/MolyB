window.Molyb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    window.App = window.ScratchPad();
  }
};

$(document).ready(function(){
  Molyb.initialize();
});
