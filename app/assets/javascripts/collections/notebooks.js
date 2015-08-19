Molyb.Collections.NoteBooks = Backbone.Collection.extend({
  url: "/api/notebook",

  model: Molyb.Models.Notebook,

  getOrFetch: function (id) {
      var notebook = this.get(id);
      var that = this;
      if(!notebook) {
        notebook = new Molyb.Models.Note({ id: id });
        notebook.fetch({
          success: function () {
            that.add(notebook);
          },
        });
      } else {
        notebook.fetch();
      }
      return notebook;
    }

});

