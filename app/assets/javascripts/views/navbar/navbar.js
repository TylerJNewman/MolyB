Molyb.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST["static_pages/navbar"],

  events: {
    "click .nav-right-item": "showDropdown",
    "click .create-new-note": "createNote",
    "click .destroy-note": "destroyNote"
  },

  createNote: function () {
    this.collection.create({
      title: "Untitled",
      body: " ",
      notebook_id: "1"
    });
  },

  destroyNote: function (e) {
    var model = this.collection.getOrFetch(window.id);
    model.destroy();
    var previous_model = this.collection.models[this.collection.models.length - 1];
    Backbone.history.navigate(previous_model.url(), {trigger: true});
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
