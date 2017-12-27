class AddAttachmentImageToGenres < ActiveRecord::Migration[5.1]
  def self.up
    change_table :genres do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :genres, :image
  end
end
