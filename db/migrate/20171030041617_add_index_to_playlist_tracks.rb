class AddIndexToPlaylistTracks < ActiveRecord::Migration[5.1]
  def change
    add_index :playlist_tracks, [:track_id, :playlist_id], unique: true
  end
end
