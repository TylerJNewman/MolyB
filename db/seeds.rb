User.create({
  email: "molyb@molyb.com",
  password: "molyb123"
})

user = User.all.first;


user.notebook.notes.create({
  title: "The Mystery of Haruku Murakami",
  body: "Kafka on the Shore is the work of an acknowledged master. So why does this book seem so full of pointless – and pedantic – fancy?"
  notebook_id: first_notebook.id
})

