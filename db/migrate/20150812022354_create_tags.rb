class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.text :name, null: false
      t.integer :owner_id, null: false

      t.timestamps null: false
    end

    add_index :tags, :owner_id
  end
end
