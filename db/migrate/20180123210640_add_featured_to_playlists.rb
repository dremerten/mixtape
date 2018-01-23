class AddFeaturedToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :featured, :boolean
  end
end
