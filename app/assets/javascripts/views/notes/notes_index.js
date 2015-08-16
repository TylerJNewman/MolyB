Molyb.Views.NotesIndex = Backbone.View.extend({
  template: JST["notes/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click a": "showNote"
   // add blur save
  },

  showNote: function (e) {
    e.preventDefault();
    $target = $(e.currentTarget);
    url = $target.attr("href");
    // debugger;
    Backbone.history.navigate(url, {trigger: true});
  },

  render: function () {
    console.log(this.collection);
    this.collection.each(function (note){
      console.log(note);
    });

    this.$el.html(this.template({notes: this.collection}));

    return this;
  }
});
