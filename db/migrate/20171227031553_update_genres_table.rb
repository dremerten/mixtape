class UpdateGenresTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :genres, :taggable_type
    remove_column :genres, :taggable_id
  end
end
