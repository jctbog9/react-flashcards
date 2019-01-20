class Api::V1::DecksController < ApplicationController
  def index
    render json: current_user.decks
  end

  def show
    render json: Deck.find(params[:id])
  end
end
