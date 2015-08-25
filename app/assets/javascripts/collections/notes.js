Molyb.Collections.Notes = Backbone.Collection.extend({
  url: "/api/notes",

  model: Molyb.Models.Note,

  comparator: function (model) {
    return -Date.parse(model.escape("updated_at"));
  },

  search : function(letters){
      if(letters === undefined || letters == "") return this.models.slice();

      var titleModels = this.filter(function(data) {
        var pattern = new RegExp(letters,"gi");
        return pattern.test(data.get("title"));
      });

      var bodyModels = this.filter(function(data) {
        var pattern = new RegExp(letters,"gi");
        var str = data.get("body").replace(/<[^>]*>/g,'');
        return pattern.test(str);

      });


      return titleModels.concat(bodyModels);
    },

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

