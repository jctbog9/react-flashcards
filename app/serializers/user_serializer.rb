class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :followees, :decks
end
