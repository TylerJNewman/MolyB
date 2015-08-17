Molyb.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/edit"],

  className: "container",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.model, "sync", this.updateAttrs);
  },

  events: {
    "change": "save",
    "blur div.text-area": "save"
  },

  save: function (e) {
    e.preventDefault();
    var title = this.$('.note-title').val();
    // var body = this.$('.note-content').val();
    var body = this.$("div.text-area").html();
    var that = this;
    this.model.set({title: title, body: body});
    this.model.save({}, {
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
         "blockquote": true, //Blockquote
         "size": "sm" //default: none, other options are xs, sm, lg
       }
    });
    this.$("iframe").attr("name", "note-edit");
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    this.editor();
    return this;
  },

  updateAttrs: function () {
    // debugger;
    //
    this.$(".note-title").val(this.model.escape("title"));
    this.$("iframe").contents().find("body").html(this.model.get("body"));
    // this.$(".note-content").val(this.model.escape("body"));
    // this.$("input[name=title]").text(this.model.escape("title"));
  }
});
