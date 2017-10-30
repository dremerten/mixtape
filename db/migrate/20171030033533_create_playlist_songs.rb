class CreatePlaylistSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_songs do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
  end
end
