class RemoveGenreFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :genre_id
  end
end
