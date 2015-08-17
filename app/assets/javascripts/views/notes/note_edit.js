Molyb.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/edit"],

  className: "container",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);

  },

  // events: {
  //   "submit": "submit"
  // },

  // submit: function (e) {
  //   e.preventDefault();
  //   var attrs = this.$el.serializeJSON();
  //   var that = this;
  //   this.model.set(attrs);
  //   this.model.save({}, {
  //     success: function () {
  //       that.collection.add(that.model, { merge: true });
  //       Backbone.history.navigate("", { trigger: true });
  //     }
  //   });
  // },


  editor: function () {
    $('.note-editor').wysihtml5({
      toolbar: {
         "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
         "emphasis": false, //Italics, bold, etc. Default true
         "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
         "html": false, //Button which allows you to edit the generated HTML. Default false
         "link": true, //Button to insert a link. Default true
         "image": true, //Button to insert an image. Default true,
         "color": true, //Button to change color of font
         "blockquote": true, //Blockquote
         "size": "sm" //default: none, other options are xs, sm, lg
       }
    });
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    this.editor();
    return this;
  },
});
