class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :user, :private, :flashcards

  has_many :flashcards
end
