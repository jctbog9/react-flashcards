class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :flashcards, :private, :user
end
