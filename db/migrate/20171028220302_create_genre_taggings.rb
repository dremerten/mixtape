class CreateGenreTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_taggings do |t|
      t.integer :artist_id
      t.integer :genre_id
    end
    add_index :genre_taggings, :artist_id
    add_index :genre_taggings, :genre_id
  end
end
