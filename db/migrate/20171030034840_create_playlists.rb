class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :name, default: "New Playlist"
      t.integer :author_id

      t.timestamps
    end

    add_index :playlists, :author_id
  end
end
