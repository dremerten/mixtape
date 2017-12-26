class AddBackgroundToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :background, :string
  end
end
