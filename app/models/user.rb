class User < ActiveRecord::Base
  validates :name, :email, :password_digest, presence: true
  validates :name, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true
  before_validation :ensure_session_token
  attr_reader :password

  has_many(
    :notes,
    foreign_key: :owner_id,
    inverse_of: :owner,
    dependent: :destroy
  )

  has_many(
    :notebooks,
    foreign_key: :owner_id,
    inverse_of: :owner,
    dependent: :destroy
  )

  has_many(
    :tags,
    foreign_key: :owner_id,
    inverse_of: :owner,
    dependent: :destroy
  )


  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user
    return user if user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password) if password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(32)
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
