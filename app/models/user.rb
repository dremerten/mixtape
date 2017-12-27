class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, :session_token, :birthday, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password, confirmation: { case_sensitive: true, message: "\nPasswords do not match"}
  after_initialize :ensure_session_token

  has_attached_file :avatar, default_url: 'avatar.png'
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/


  has_many :playlists, foreign_key: :author_id, class_name: 'Playlist'
  has_many :saved_tracks
  has_many :tracks, through: :saved_tracks, source: :track

  def save_track(track_id)
    update(track_ids: track_ids + [track_id])
  end

  def remove_track(track_id)
    update(track_ids: track_ids - [track_id.to_i])
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)

    user && user.is_password?(pw) ? user : nil
  end

  def self.track_ids_for_current_user
    SavedTrack.joins(:user, :track)
              .where('users.id': current_user.id)
              .order(created_at: :desc)
              .pluck(:track_id)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  private
  attr_reader :password

end
