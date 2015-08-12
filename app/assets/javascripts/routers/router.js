Molyb.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$noteShowEl = $('.note-show');
    this.$notesListEl = $('.notes-list');
    this.notes = new Molyb.Collections.Notes();
    this.notebook = new Molyb.Collections.NoteBooks();
  },

  routes: {
    "": "welcomePage",
    "notes": "notesIndex",
    "notes/:id": "showNote",
    'notebooks/:id': 'showNotebook',
  },

  welcomePage: function () {
    var welcomePage = new Molyb.Views.WelcomePage({});
    this._swapView(welcomePage);
  },

  notesIndex: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes});
    this._swapList(indexView);
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

  // _swapView: function (view) {
  //   this._currentView && this._currentView.remove();
  //   this._currentView = view;
  //   this.$rootEl.html(view.render().$el);
  // },

  _swapList: function (view) {
    this._listView && this._listView.remove();
    this._listView = view;
    this.$notesListEl.html(view.render().$el);
  },

  _swapShow: function (view) {
    this._showView && this._showView.remove();
    this._showView = view;
    this.$noteShowEl.html(view.render().$el);
  }
});
