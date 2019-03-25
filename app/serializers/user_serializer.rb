class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :followees

  has_many :decks
end
