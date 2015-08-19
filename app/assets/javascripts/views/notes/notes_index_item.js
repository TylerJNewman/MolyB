Molyb.Views.NotesIndexItem = Backbone.View.extend({
  template: JST["notes/index_item"],

  tagName: "note",

  initialize: function () {
    // this.listenTo(this.model, "sync", this.render);
  },

  // events: {
  //   "submit": "submit"
  // },

  // submit: function (e) {
  //   e.preventDefault();
  //   var attrs = this.$el.serializeJSON();
  //   var that = this;
  //   this.model.set(attrs);
  //   this.model.save({}, {
  //     success: function () {
  //       that.collection.add(that.model, { merge: true });
  //       debugger;
  //       Backbone.history.navigate("", { trigger: true });
  //     }
  //   });
  // },
  //
  events: {
    "click .edit-note": "showNote"
   // add blur save
  },

  showNote: function (e) {
    e.preventDefault();
    Backbone.history.navigate("notes/" + this.model.id, {trigger: true});
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    return this;
  }
});
