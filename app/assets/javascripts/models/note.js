Molyb.Models.Notes = Backbone.Model.extend({

  urlRoot: '/api/notes',

  initialize: function() {
    this.notes = this.notes || new Molyb.Collections.Notes();
  },

});
