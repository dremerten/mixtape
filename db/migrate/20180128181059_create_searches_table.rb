class CreateSearchesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :searches do |t|
      t.integer :user_id, null: false
      t.string :query, null: false

      t.timestamps
    end

    add_index :searches, :user_id
  end
end
