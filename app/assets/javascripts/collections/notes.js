Molyb.Collections.Notes = Backbone.Collection.extend({
  url: "/api/notes",

  model: Molyb.Models.Note,

  getOrFetch: function (id) {
      var notes = this.get(id);
      var that = this;
      if(!notes) {
        notes = new Molyb.Models.Note({ id: id });
        notes.fetch({
          success: function () {
            that.add(notes);
          },
        });
      } else {
        notes.fetch();
      }
      return notes;
    }

});

Molyb.Collections.notes = new Molyb.Collections.Notes();
