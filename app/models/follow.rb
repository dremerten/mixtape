class Follow < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:followable_id, :followable_type] }
  validates_presence_of :followable_id, :followable_type, :user
  validate :user_cannot_follow_self
  validate :cannot_follow_own_playlist

  belongs_to :followable, polymorphic: true
  belongs_to :user


  private

  def user_cannot_follow_self
    if _is_self
      errors.add(:user, :unique, message: "cannot follow own account")
    end
  end

  def cannot_follow_own_playlist
    if _is_author
      errors.add(:user, :unique, message: "cannot follow own playlist")
    end
  end

  def _is_author
    self.followable_type == 'Playlist' &&
    Playlist.find(self.followable_id).author_id == self.user_id
  end

  def _is_self
    self.followable_type == 'User' && self.user_id == self.followable_id
  end
end
