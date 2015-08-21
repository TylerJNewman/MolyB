Molyb.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  // className: "container col-sm-12",

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

  renderList: function () {
    // this.filteredCollection = this.collection.search(navbar.searchText);
    // this.filteredCollection.each(this.addNote.bind(this));
  },

  reorderViews: function () {

    this.attachSortedSubviews('#notes-index');
    // var views = this.subviews("#notes-index");
    // this.subviews()["#notes-index"] = views.sortBy(function (view) {
    //   return this.collection.comparator(view.model);
    // }.bind(this));
    // this.$("#notes-index").empty();
    // this.attachSubviews();
    // var models = this.collection.remove(this.collection.models);
    // this.collection.add(models);
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
