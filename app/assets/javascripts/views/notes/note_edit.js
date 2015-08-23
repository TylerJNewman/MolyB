Molyb.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/edit"],

  initialize: function (options) {
    this.deletedNotes = options.deletedNotes;
  },


  events: {
    "blur div.text-area": "save",
    "change .note-title": "save",
    "click .delete-button": "deleteNote",
    "click .undo-button": "undoDelete",
    "click ul.dropdown-menu.color-picker > li > a": "changeColor"
  },

  changeColor: function (e) {
    var color = e.currentTarget.className;
    $('.text-area.note-editor').children().children().unwrap();
    $('.text-area.note-editor').wrapInner( "<span class='wysiwyg-color-" + color +"'></div>");
  },

  undoDelete: function () {
    if (_.isEmpty(this.deletedNotes.models)) { return; }
    var lastDelete = this.deletedNotes.pop();
    attrs = lastDelete.attributes;
    var title = attrs.title;
    var body = attrs.body;
    var notebook_id = attrs.notebook_id;
    var created_at = attrs.created_at;
    var note = this.collection.create({
      title: title,
      body: body,
      notebook_id: notebook_id,
      created_at: created_at,
    }, {
      success: function(note) {

        Backbone.history.navigate("notes/" + note.id, {trigger: true});
      }
    });
  },


  deleteNote: function (e) {
    this.model = this.collection.getOrFetch(window.id);
    this.deletedModel = this.model.clone();
    this.deletedNotes.add(this.deletedModel);
    this.model.destroy({

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
         "link": false, //Button to insert a link. Default true
         "image": false, //Button to insert an image. Default true,
         "color": false, //Button to change color of font
         "blockquote": false, //Blockquote
         "size": "sm", //default: none, other options are xs, sm, lg
       }


    });
  },




  render: function () {
    this.$el.html(this.template({note: this.model}));
    this.editor();

    this.$('.wysihtml5-toolbar').append('<li><div class="dropdown"> <button class="btn btn-sm btn-primary dropdown-toggle color-picker" type="button" data-toggle="dropdown"><span class="glyphicon glyphicon-triangle-bottom"></button> <ul class="dropdown-menu color-picker"> <li><a href="#" class="silver"><span style="color:#C8C8C8">Silver</span></a></li> <li><a href="#" class="blue"><span style="color:rgb(85,181,219)">Blue</span></a></li> <li><a href="#" class="green"><span style="color:rgb(159,202,86)">Green</span></a></li> <li><a href="#" class="yellow"><span style="color:rgb(230,205,105)">Yellow</span></a></li> <li><a href="#" class="red"><span style="color:rgb(205,63,69)">Red</span></a></li> <li><a href="#" class="purple"><span style="color:rgb(160,116,196)">Purple</span></a></li> </ul> </div></li>');
    this.$('.wysihtml5-toolbar').append('<li><a class="btn btn-sm btn-default delete-button" data-wysihtml5-command="deleteNote" title="Delete note" tabindex="-1" href="javascript:;" unselectable="on"><span class="glyphicon glyphicon-trash"></span></a></li>');
    this.$('.wysihtml5-toolbar').append('<li><a class="btn btn-sm btn-default undo-button" data-wysihtml5-command="undoDeleteNote" title=" Undo delete" tabindex="-1" href="javascript:;" unselectable="on"><span class="glyphicon glyphicon-repeat" id="undo-glyphicon"></span></a></li>');

    $('.text-area.note-editor').children().children().unwrap();
    $('.text-area.note-editor').wrapInner( "<span class='wysiwyg-color-'></div>");
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
