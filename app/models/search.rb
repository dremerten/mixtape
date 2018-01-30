class Search < ApplicationRecord
  validates_length_of :query, minimum: 1
  belongs_to :user
end
