class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :flashcards
end