class Flashcard < ApplicationRecord
  validates :front, presence: true
  validates :back, presence: true
  validates :deck_id, presence: true
end
