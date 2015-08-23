Molyb.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST["static_pages/navbar"],

  events: {
    "click .nav-right-item": "showDropdown",
    "click .create-new-note": "createNote",
    "input .instant-search": "queryTextInput",
    "keypress .instant-search": "preventEnterSubmit"
  },

  createNote: function () {
    var note = this.collection.create({
      title: "Untitled",
      body: '<span class="wysiwyg-color-silver"><br></span>',
      notebook_id: "1"
    }, {
      success: function(note) {

        Backbone.history.navigate("notes/" + note.id, {trigger: true});
      }
    });
  },

  preventEnterSubmit: function (event) {
    if(event.keyCode == 13){
          event.preventDefault();
       }
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


  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
});
