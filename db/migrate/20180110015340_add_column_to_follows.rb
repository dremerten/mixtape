class AddColumnToFollows < ActiveRecord::Migration[5.1]
  def change
    add_column :follows, :user_id, :integer, null: false, index: true
  end
end
