Molyb.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  // className: "container col-sm-12",
  className: "content",

  initialize: function (options) {
    this.filteredCollection = this.collection.clone();
    // this.listenTo(this.collection, "sync", this.render);
    this.comparator = function (view) {
      return -Date.parse(view.model.get('updated_at'));
    };
    // this.listenTo(this.collection, "sync", this.syncCollections);
    this.listenTo(this.collection, "sync", this.reorderViews);

    var navbar = options.navbar;



    this.filteredCollection.each(this.addNote.bind(this));
    // this.listenTo(this.collection, "add", this.addNote);
    // this.listenTo(this.collection, "remove", this.removeNote);
    this.listenTo(this.filteredCollection, "add", this.addNote);
    this.listenTo(this.filteredCollection, "remove", this.removeNote);
    this.listenTo(this.collection, "filter sync", this.updateFilter);
  },

  // syncCollections: function () {
  //   this.filteredCollection.set(this.collection.models);
  // },

  updateFilter: function(args) {
    var searchStr = args[0];
    var filteredModels = this.collection.search(searchStr);
    this.filteredCollection.set(filteredModels);
  },

  render: function (obj) {
    this.$el.html(this.template());
    this.attachSortedSubviews('#notes-index');
    return this;
  },


  reorderViews: function () {
    this.attachSortedSubviews('#notes-index');
    $(".selected").removeClass("selected");
    $('a[href*='+window.id+']').addClass("selected");
  },

  attachSortedSubviews: function (selector) {
    var view = this;
    var subviews = this.subviews(selector);
    var sortedSubviews = subviews.sortBy(this.comparator);
    sortedSubviews.forEach(function (subview) {
      view.attachSubview(selector, subview);
    });
  },

  addNote: function (note) {
     view = new Molyb.Views.NotesIndexItem({
      model: note,
      collection: this.collection
    });
     // this.$('#notes-index').prepend(view.render().el);
     this.addSubview('#notes-index', view, true);
  },

  removeNote: function(note) {
    this.removeModelSubview('#notes-index', note);
  }

});
