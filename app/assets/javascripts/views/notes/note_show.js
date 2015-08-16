Molyb.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],

  tagName: "form",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "submit": "submit"
  },

  submit: function (e) {
    e.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        debugger;
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    return this;
  }
});
