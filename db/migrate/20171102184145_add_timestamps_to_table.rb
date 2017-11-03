class AddTimestampsToTable < ActiveRecord::Migration[5.1]
  def change
    add_column :albums, :created_at, :datetime, null: false
    add_column :albums, :updated_at, :datetime, null: false
    add_column :artists, :created_at, :datetime, null: false
    add_column :artists, :updated_at, :datetime, null: false
    add_column :genre_taggings, :created_at, :datetime, null: false
    add_column :genre_taggings, :updated_at, :datetime, null: false
    add_column :genres, :created_at, :datetime, null: false
    add_column :genres, :updated_at, :datetime, null: false
    add_column :tracks, :created_at, :datetime, null: false
    add_column :tracks, :updated_at, :datetime, null: false
  end
end
