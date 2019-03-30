class StarSerializer < ActiveModel::Serializer
  attributes :id, :user, :deck_id

  belongs_to :user
  belongs_to :deck
end
