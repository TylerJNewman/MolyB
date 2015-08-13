Molyb.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],

  events: {
   // add blur save
  },

  render: function () {
    console.log(this.collection);

    this.$el.html(this.template({notes: this.collection}));

    return this;
  }
});
