Molyb.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },


  render: function () {
    // console.log(this.collection);
    // this.collection.each(function (note){
    //   console.log(note);
    // });
    this.$el.html(this.template());
    this.collection.forEach(this.renderNote);
    return this;
  },

  renderNote: function (note) {
     view = new Molyb.Views.NotesIndexItem({model: note, tagName: 'li'});
     this.$('#notes-index').append(view.render().el)
  }
});
