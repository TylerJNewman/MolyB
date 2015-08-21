Molyb.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST["static_pages/navbar"],

  events: {
    "click .nav-right-item": "showDropdown",
    "click .create-new-note": "createNote",
    "input .instant-search": "queryTextInput",
  },

  createNote: function () {
    var note = this.collection.create({
      title: "Untitled",
      body: " ",
      notebook_id: "1"
    }, {
      success: function(note) {

        Backbone.history.navigate("notes/" + note.id, {trigger: true});
      }
    });
  },

  queryTextInput: function(event) {

    event.preventDefault();
    this.searchText = $(event.currentTarget).closest("form").serializeJSON().search;
    this.collection.trigger("filter", [this.searchText]);
    // this.collection.trigger('sync');
    // this.collection.sync("read", this.collection.models);

  },

  showDropdown: function(e) {
    e.preventDefault();
    $target = $(e.currentTarget);
    var $dropdown = $target.find(".options-dropdown");
    $dropdown.removeClass("hidden");
  },

  hideDropdown: function(e) {
    $(".options-dropdown").not("hidden").addClass("hidden");
  },

  disableDestroyNoteButton: function (e) {
    $(e.currentTarget).attr('disabled', true);
  },

  enableDestroyNoteButton: function (e) {
    $(e.currentTarget).attr('disabled', false);
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
});
