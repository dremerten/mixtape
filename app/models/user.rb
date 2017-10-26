class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, :session_token, :birthday, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password, confirmation: { case_sensitive: true, message: "\nPasswords do not match"}

  # has_attached_file :user
  # validates_attachment_content_type :user, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token


  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)

    user && user.is_password?(pw) ? user : nil
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
