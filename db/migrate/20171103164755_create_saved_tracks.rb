class CreateSavedTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_tracks do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.timestamps
    end
  end
end
