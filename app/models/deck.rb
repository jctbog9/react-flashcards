class Deck < ApplicationRecord
  validates :name, presence: true
  validates :user_id, presence: true

  belongs_to :user

  has_many :flashcards

  has_many :stars
end
