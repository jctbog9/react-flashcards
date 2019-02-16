class Api::V1::ProfilesController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: serialized_users
  end

  def show
    if current_user && current_user.id == params[:id].to_i
      render json: all_profile_decks(params[:id])
    else
      render json: public_decks(params[:id])
    end
  end

  private

  def serialized_users
    users = User.all
    serialized_users = []
    users.each do |user|
      serialized_users << {id: user[:id], email: user[:email]}
    end
    return serialized_users
  end

  def all_profile_decks(id)
    user = User.find(id)
    decks = user.decks
    decks_and_cards = []
    decks.each do |deck|
      decks_and_cards << {id: deck[:id], name: deck[:name], flashcards: deck.flashcards, private: deck[:private]}
    end
    return {user: user, decks: decks_and_cards}
  end

  def public_decks(id)
    profile = all_profile_decks(id)
    user = profile[:user]
    all_decks = profile[:decks]
    public_decks = []
    all_decks.each do |deck|
      if deck[:private] == false
        public_decks << deck
      end
    end
    return {user: user, decks: public_decks}
  end
end
