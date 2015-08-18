Molyb.Views.NavBar = Backbone.View.extend({
  tagName: "header",

  className: "navbar",

  template: JST["static_pages/navbar"],

  events: {
    "click .nav-right-item": "showDropdown",
    "click .create-new-note": "createNote"
  },

  createNote: function () {
    this.collection.create({
      title: "Untitled",
      body: " ",
      notebook_id: "1"
    });
    // var title = "Untitled";
    // // var body = this.$('.note -content').val();
    // var body = " ";
    // var that = this;
    // model = new Molyb.Models.Note();
    // debugger;
    // model.set({title: title, body: body});
    // model.save({}, {
    //   success: function () {
    //     that.collection.add(that.model, { merge: true });
    //   }
    // });
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
