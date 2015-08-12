Molyb.Views.WelcomePage = Backbone.View.extend({
  template: JST['static_pages/welcome'],

  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
