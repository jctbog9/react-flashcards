class Star < ApplicationRecord
  validates :user_id, presence: true
  validates :deck_id, presence: true

  belongs_to :user
  belongs_to :deck
end
