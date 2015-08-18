Molyb.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST["static_pages/navbar"],

  events: {
    "click .nav-right-item": "showDropdown",
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
