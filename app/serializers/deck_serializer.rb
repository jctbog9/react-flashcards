class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :user, :private, :flashcards, :stars

  belongs_to :user

  has_many :flashcards
  has_many :stars
end
