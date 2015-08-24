class ChangeNotNullContraintNotebookIdInNotes < ActiveRecord::Migration
  def change
    change_column :notes, :notebook_id, :integer, :null => true
  end
end
