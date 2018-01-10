class Follow < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:followable_id, :followable_type] }
  validate :user_cannot_follow_self
  validate :cannot_follow_own_playlist

  belongs_to :followable, polymorphic: true
  belongs_to :user


  private

  def user_cannot_follow_self
    if self.followable_type == 'User' && self.user_id == self.followable_id
      errors.add(:user, :unique, message: "cannot follow own account")
    end
  end

  def cannot_follow_own_playlist
    if self.followable_type == 'Playlist' && User.find(self.user_id).playlist_ids.include?(self.followable_id)
      errors.add(:user, :unique, message: "cannot follow own playlist")
    end
  end
end
