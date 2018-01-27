class AddColumnToAlbums < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :album_type, :string, default: "album"
  end
end
