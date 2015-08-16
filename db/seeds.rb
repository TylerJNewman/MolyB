User.create({
  email: "molyb@molyb.com",
  password: "molyb123"
})

user = User.all.first;


# user.notebook.notes.create({
#   title: "The Mystery of Haruku Murakami",
#   body: "Kafka on the Shore is the work of an acknowledged master. So why does this book seem so full of pointless – and pedantic – fancy?",
#   notebook_id: first_notebook.id
# })


Note.destroy_all

Note.create(title: 'My first note', body: 'Yay!', owner_id: 1, notebook_id: 1)
Note.create(title: 'My second note', body: '', owner_id: 1, notebook_id: 1)
Note.create(title: 'My third note', body: 'Keep Going!', owner_id: 1, notebook_id: 1)

  Note.create(title: 'My first boat', body: 'Yay!', owner_id: 15, notebook_id: 15)
  Note.create(title: 'My second boat', body: '', owner_id: 15, notebook_id: 15)
  Note.create(title: 'My third boat', body: 'Keep Going!', owner_id: 15, notebook_id: 15)
