class AddIndexToSavedTrack < ActiveRecord::Migration[5.1]
  def change
    add_index :saved_tracks, :user_id
    add_index :saved_tracks, [:track_id, :user_id], unique: true

  end
end
