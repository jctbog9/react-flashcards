class Flashcard < ApplicationRecord
  validates :front, presence: true
  validates :back, presence: true
end
