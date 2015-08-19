Molyb.Collections.Notes = Backbone.Collection.extend({
  url: "/api/notes",

  model: Molyb.Models.Note,

  getOrFetch: function (id) {
      var note = this.get(id);
      var that = this;
      if(!note) {
        note = new Molyb.Models.Note({ id: id });
        note.fetch({
          success: function () {
            that.add(note);
          },
        });
      } else {
        note.fetch();
      }
      return note;
    },

    getNote: function (id) {
      var note = this.get(id);
      if(!note) {
        note = new Molyb.Models.Note({ id: id });
      }

      return note;
    }

});

