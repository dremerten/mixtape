class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :genre_id, null: false
      t.integer :album_id
      t.integer :year
      t.integer :ord
      t.float :popularity, default: 0
    end

    add_index :tracks, :artist_id
    add_index :tracks, :album_id
  end
end
