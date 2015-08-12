Molyb.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.notes = new Molyb.Collections.Notes();
    this.notebook = new Molyb.Collections.NoteBooks();
  },

  routes: {
    "": "notesIndex",
    "notes/:id": "showNote",
    'notebooks/:id': 'showNotebook',
  },

  notesIndex: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes});
    this._swapView(indexView);
  },

  showNote: function (id) {
    var model = this.notes.getOrFetch(id);
    var showNoteView = new Molyb.Views.NoteShow({model: model});
    this._swapView(showNoteView);
  },

  showNotebook: function (id) {
    var model = this.notes.getOrFetch(id);
    var showNotebookView = new Molyb.Views.NotebookShow({model: model});
    this._swapView(showNotebookView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
