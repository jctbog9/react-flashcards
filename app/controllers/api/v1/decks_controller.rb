class Api::V1::DecksController < ApplicationController
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
end
