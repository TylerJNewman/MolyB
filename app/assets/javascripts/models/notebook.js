Molyb.Models.Notebook = Backbone.Model.extend({

  urlRoot: '/api/notebooks',

  initialize: function() {
    this.notebooks = this.notebooks || new BetterNote.Collections.Notebooks();
  },

});
