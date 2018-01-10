class Follow < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:followable_id, :followable_type] }
  validate :user_cannot_follow_self

  belongs_to :followable, polymorphic: true
  belongs_to :user

  def user_cannot_follow_self
    if self.followable_type == 'User' && self.user_id == self.followable_id
      errors.add(:followable_id, :unique, message: "User cannot follow own account")
    end
  end
end
