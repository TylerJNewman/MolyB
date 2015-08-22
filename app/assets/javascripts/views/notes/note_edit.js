Molyb.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/edit"],


  events: {
    "blur div.text-area": "save",
    "change .note-title": "save",
    "click .delete-button": "deleteNote"
  },

  deleteNote: function (e) {
    var model = this.collection.getOrFetch(window.id);
    model.destroy({

      success: function (model) {
        var previous_model_id = "";
        if (_.isEmpty(this.collection.models)) {
          // $('.delete-button').prop('disabled', true);
        }
        else {
          // $('.delete-button').prop('disabled', false);
          var previous_model = this.collection.first();
          previous_model_id = previous_model.id;
        }
        console.log("deleted: " + model.id)
        Backbone.history.navigate("", {trigger: true});
        Backbone.history.navigate("notes/" + previous_model_id, {trigger: true});
      }.bind(this)
    });

  },

  save: function () {
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

    this.$('.wysihtml5-toolbar').append('<a class="btn btn-sm btn-default delete-button" data-wysihtml5-command="deleteNote" title="Delete note" tabindex="-1" href="javascript:;" unselectable="on"><span class="glyphicon glyphicon-trash"></span></a>');
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
