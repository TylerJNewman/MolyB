# Molyb
<<<<<<< HEAD

[Heroku link][heroku]

[heroku]: http://molyb.herokuapp.com

## Minimum Viable Product
Molyb is a clone of Evernote built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Write notes, checklists, and research
- [x] Organize docs and photos
- [ ] Search for docs by tag, title or content
- [ ] Discuss and share work with others

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Blog Creation (~1 day)
Implement user authentication using devise gem.  Render basic notes system
when a user logs in.  Navbar.  Search Bar.  New Note button.
Account settings/Logout menu.
Add some basic CSS.  Push to Heroku.

[Details][phase-one]

### Phase 2: Viewing Blogs and Posts (~2 days)
Implement API, routes, and composite views!  Build sidebar pane.  Shortcut feature.
Notebooks. Tags.  Build Notes.  Add css highlighting on hover.

[Details][phase-two]

### Phase 3: Create edit view pane.  Create feature where it saves the note once you exit.
Add tag button.  Trash button.  Created. Modified... Share button.
Edit features.  Allow upload of images...  Allow lists to be made...

[Details][phase-three]

### Phase 4: Finish up features.  Add pretty CSS transitions.  Create a chat feature and/or
feature to share with others....  TODO lists widget...

[Details][phase-four]
