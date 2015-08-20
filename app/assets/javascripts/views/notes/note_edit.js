Molyb.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/edit"],

  // initialize: function (options) {
  //   this.reorderViews = options.reorderViews;
  // },

  events: {
    "blur div.text-area": "save",
    "change": "save"
  },

  save: function (e) {

    console.log('saving Note:' + window.id);
    var title = this.$('.note-title').val();
    var body = this.$("div.text-area").html();
    this.model = this.collection.getNote(window.id);
    var that = this;
    this.model.set({
      title: title,
      body: body
    });
    that.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
      }
    });
  },

  editor: function () {
    this.$('.note-editor').wysihtml5({
      toolbar: {
         "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
         "emphasis": true, //Italics, bold, etc. Default true
         "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
         "html": false, //Button which allows you to edit the generated HTML. Default false
         "link": true, //Button to insert a link. Default true
         "image": true, //Button to insert an image. Default true,
         "color": false, //Button to change color of font
         "blockquote": false, //Blockquote
         "size": "sm", //default: none, other options are xs, sm, lg
       }
    });
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    this.editor();

    return this;
  },
});

  // updateAttrs: function () {

  //   debugger;
  //   this.$(".note-title").val(this.model.escape("title"));
  //   this.$("iframe").contents().find("body").html(this.model.get("body"));
  //   // this.$(".note-content").val(this.model.escape("body"));
  //   // this.$("input[name=title]").text(this.model.escape("title"));
  // }
