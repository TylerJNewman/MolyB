class CreateApiNoteTags < ActiveRecord::Migration
  def change
    create_table :api_note_tags do |t|

      t.timestamps null: false
    end
  end
end
