class Deck < ApplicationRecord
  validates :name, presence: true

  belongs_to :user

  has_many :flashcards
end
