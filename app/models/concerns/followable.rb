module Followable
  extend ActiveSupport::Concern

  included do
    has_many :follows, as: :followable, dependent: :destroy
    has_many :followers, through: :follows, source: :followable, source_type: 'User'
  end
end
