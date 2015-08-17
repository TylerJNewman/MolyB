Molyb.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$leftEl = $('.left-panel');
    this.$midEl = $('.mid-panel');
    this.$rightEl = $('.right-panel');
    this.notes = options.notes;
    this.notebook = new Molyb.Collections.NoteBooks();
  },

  routes: {
    "": "notesIndex",
    "api/notes/:id": "editNote",
    'api/notebooks/:id': 'showNotebook',
  },

  notesIndex: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes});
    this._swapMid(indexView);
  },

  editNote: function (id) {
    console.log("editing with id: " + id);
    var model = this.notes.getOrFetch(id);
    var editNoteView = new Molyb.Views.NoteEdit({model: model, collection: this.notes});
    this._swapRight(editNoteView);
  },


  // showNote: function (id) {
  //   console.log("requested note with id: " + id);
  //   var model = this.notes.getOrFetch(id);
  //   var showNoteView = new Molyb.Views.NoteShow({model: model, collection: this.notes});
  //   this._swapRight(showNoteView);
  // },

  // showNotebook: function (id) {
  //   var model = this.notes.getOrFetch(id);
  //   var showNotebookView = new Molyb.Views.NotebookShow({model: model});
  //   this._swapView(showNotebookView);
  // },


  _swapLeft: function (view) {
    this._leftListView && this._leftListView.remove();
    this._leftListView = view;
    this.$leftEl.html(view.render().$el);
  },

  _swapMid: function (view) {
    this._midListView && this._midListView.remove();
    this._midListView = view;
    this.$midEl.html(view.render().$el);
  },

  _swapRight: function (view) {
    this._rightListView && this._rightListView.remove();
    this._rightListView = view;
    this.$rightEl.html(view.render().$el);
  },

});
