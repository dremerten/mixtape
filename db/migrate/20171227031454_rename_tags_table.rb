class RenameTagsTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :tags, :genres
  end
end
