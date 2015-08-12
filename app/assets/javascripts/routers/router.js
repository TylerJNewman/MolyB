Molyb.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.notes = new Molyb.Collections.Notes();
    this.notebook = new Molyb.Collections.NoteBooks();
  },

  routes: {
    "": "index",
    "notes/:id": "showNote",
    'notebooks/:id': 'showNotebook',
  },

  index: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes});
    this._swapView(indexView);
  },

  showNote: function (id) {
    var model = this.notes.getOrFetch(id);
    var showView = new Molyb.Views.NoteShow({model: model});
    this._swapView(showView);
  },

  showNotebook: function (id) {
    var model = this.notes.getOrFetch(id);
    var showView = new Molyb.Views.NotebookShow({model: model});
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
