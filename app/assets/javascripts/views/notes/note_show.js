Molyb.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],


  render: function () {
    console.log(this.model);
    this.$el.html(this.template({note: this.model}));
    return this;
  }
});
