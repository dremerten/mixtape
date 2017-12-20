class AddBackgroundToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :background, :string
  end
end
