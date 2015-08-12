class CreateApiNotes < ActiveRecord::Migration
  def change
    create_table :api_notes do |t|

      t.timestamps null: false
    end
  end
end
