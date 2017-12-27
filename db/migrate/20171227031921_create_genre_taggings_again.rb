class CreateGenreTaggingsAgain < ActiveRecord::Migration[5.1]
  def change
    create_table :genre_taggings do |t|
      t.integer :genre_id, null: false
      t.integer :artist_id, null: false
    end

    add_index :genre_taggings, :artist_id
    add_index :genre_taggings, :genre_id
  end
end
