class Api::V1::DecksController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    if current_user
      render json: current_user.decks
    else
      render json: Deck.all
    end
  end

  def show
    render json: Deck.find(params[:id])
  end

  def create
    Deck.create!(name: deck_params["name"], user_id: current_user.id)
  end

  private

  def deck_params
    params.require(:deck).permit(:name)
  end
end
