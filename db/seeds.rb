Note.create!([
  {title: "My first boat", body: "Yay!", owner_id: 17, notebook_id: 17},
  {title: "My second boat", body: "", owner_id: 17, notebook_id: 17},
  {title: "My third boat", body: "Keep Going!", owner_id: 17, notebook_id: 17},
  {title: "Notey note", body: "Of the notiest variety -aaa", owner_id: 1, notebook_id: 1},
  {title: "Ninja Warrior Kit", body: "<br><ul><li><span style=\"line-height: 1.42857143;\">Black Wood Nunchakus, measuring 12 ¾\" overall</span><br></li><li><span style=\"line-height: 1.42857143;\">Silent Warrior Four-Piece Throwing Stars with nylon storage pouch</span><br></li><li><span style=\"line-height: 1.42857143;\">Special Agent Tactical Ninja Sword with heat-treated black baked-on finish stainless steel blade, teeth-like serrations, a piercing point and a nylon blade sheath﻿</span><br></li></ul>", owner_id: 1, notebook_id: 1},
  {title: "Octagon Sai", body: "<img src=\"http://images.ontheedgebrands.com/get/w/240/h/240/A31-BKD2311.image\" title=\"Image: http://images.ontheedgebrands.com/get/w/240/h/240/A31-BKD2311.image\">&nbsp;need a pair of these", owner_id: 1, notebook_id: 1},
  {title: "Sun Tzu", body: "If you know the enemy and know yourself you need not fear the results of a hundred battles.<br><small>﻿</small><br>", owner_id: 1, notebook_id: 1},
  {title: "Sun Tzu", body: "All men can see these tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.<br><small></small><br>", owner_id: 1, notebook_id: 1},
  {title: "Untitled", body: " ", owner_id: 3, notebook_id: 1},
  {title: "Untitled", body: " ", owner_id: 3, notebook_id: 1},
  {title: "Untitled", body: " ", owner_id: 3, notebook_id: 1}
])
User.create!([
  {name: "asdf", password_digest: "$2a$10$6FfUp1Zb/Mq1WUQvdLmCxeaD0nqdaMBl3QnBmmQTGjCmJwLo7KC8u", email: "hello@gmail.com", session_token: "e28W3UqKy3WITIr6bZWs4eoSSBgbwecZYXfXaryY0fg"},
  {name: "moly", password_digest: "$2a$10$nxlolYOiJLgehLCpx73fGOwd00FGITLmmSHE0pzDpfOENa5Dfe9fy", email: "molyb@molyb.com", session_token: "lzQGbx3gH2F-muwxfXEtxO0Vnhzhdah16bGHuvL-ShU"}
])
