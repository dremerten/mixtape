class DropPlaylistSongsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :playlist_songs
  end
end
