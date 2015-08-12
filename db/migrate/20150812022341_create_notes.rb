class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title, default: "Untitled"
      t.text :body
      t.integer :owner_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps null: false
    end

    add_index :notes, :owner_id
    add_index :notes, :notebook_id
    add_index :notes, :title
  end
end
