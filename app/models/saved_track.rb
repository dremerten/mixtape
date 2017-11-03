class SavedTrack < ApplicationRecord
  belongs_to :user
  belongs_to :track

end
