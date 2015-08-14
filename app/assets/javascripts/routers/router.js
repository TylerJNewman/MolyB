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
    "api/notes/:id": "showNote",
    'api/notebooks/:id': 'showNotebook',
  },

  notesIndex: function () {
    this.notes.fetch();
    var indexView = new Molyb.Views.NotesIndex({collection: this.notes});
    this._swapMid(indexView);
  },


  showNote: function (id) {
    console.log("You requested the note with the id of " + id);
    var model = this.notes.getOrFetch(id);
    var showNoteView = new Molyb.Views.NoteShow({model: model});
    this._swapMid(showNoteView);
  },

  // showNotebook: function (id) {
  //   var model = this.notes.getOrFetch(id);
  //   var showNotebookView = new Molyb.Views.NotebookShow({model: model});
  //   this._swapView(showNotebookView);
  // },


  _swapLeft: function (view) {
    this._listView && this._listView.remove();
    this._listView = view;
    this.$leftEl.html(view.render().$el);
  },

  _swapMid: function (view) {
    this._listView && this._listView.remove();
    this._listView = view;
    this.$leftEl.html(view.render().$el);
  },

  _swapRight: function (view) {
    this._listView && this._listView.remove();
    this._listView = view;
    this.$leftEl.html(view.render().$el);
  },

});
