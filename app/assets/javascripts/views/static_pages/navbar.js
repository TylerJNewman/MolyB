BetterNote.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST['static_pages/navbar'],

  events: {
    "click .nav-right-item": "showDropdown",
  },


  showDropdown: function(event) {
    event.preventDefault();

    var $dropdown = $(event.currentTarget).find(".options-dropdown");
    $dropdown.removeClass("hidden");
  },

  hideDropdowns: function(event) {
    $(".options-dropdown").not("hidden").addClass("hidden");
  },

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
});
