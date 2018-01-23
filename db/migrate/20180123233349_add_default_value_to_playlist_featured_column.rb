class AddDefaultValueToPlaylistFeaturedColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :playlists, :featured, :boolean, default: false
  end
end
