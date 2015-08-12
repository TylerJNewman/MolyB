class CreateApiNotebooks < ActiveRecord::Migration
  def change
    create_table :api_notebooks do |t|

      t.timestamps null: false
    end
  end
end
