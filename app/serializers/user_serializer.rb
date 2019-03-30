class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :followees, :decks

  has_many :decks
end
